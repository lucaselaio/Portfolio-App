<template>
    <Dialog v-model:visible="showDialog" :style="{ width: '450px' }"
        :header="Object.keys(editIncome).length > 0 ? 'Update Income' : 'New Income'" :modal="true" class="p-fluid"
        v-on:hide="hideDialog" @after-hide="updateValues">
        <Toast />
        <div v-if="loading" class="flex justify-content-center">
            <ProgressSpinner />
        </div>
        <div v-else>
            <form role="form">
                <div class="field">
                    <label for="name">Source</label>
                    <Dropdown v-model="income.type" :options="types" optionLabel="name" placeholder="Income Source"
                        class="w-full md:w-14rem" />
                </div>
                <div class="field">
                    <label>Cycle</label>
                    <InputNumber v-model="income.cycle" showButtons></InputNumber>
                </div>
                <div class="field">
                    <label for="name">Value</label>
                    <InputNumber v-model="income.value" inputId="currency-us" mode="currency" currency="USD" locale="en-US"
                        required="true" />
                    <small class="p-error" v-if="submitted && !income.value">Value is required.</small>
                </div>
                <div class="field">
                    <label for="dueDate">Payment Date</label>
                    <Calendar v-model="income.payment_date" />
                </div>
            </form>
        </div>
        <template #footer>
            <Button v-if="Object.keys(editIncome).length > 0" label="Update" icon="pi pi-check" text
                @click.native="saveIncome(true)" />
            <Button v-else label="Save" icon="pi pi-check" text @click.native="saveIncome()" />
        </template>
    </Dialog>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            income: {
                type: '',
                cycle: 1,
                value: 0,
                payment_date: null
            },
            types: [
                { name: 'Pay Check' },
                { name: 'Extra Income' },
            ],
            errorMessage: '',
            submitted: false,
            loading: false
        }
    },
    props: {
        showDialog: {
            type: Boolean,
            default: () => false
        },
        editIncome: {
            type: Object,
            default: () => { }
        }
    },
    watch: {
        editIncome() {
            this.income = {
                type: { name: this.editIncome.type },
                cycle: this.editIncome.payment_cycle,
                value: this.editIncome.value,
                payment_date: this.editIncome.payment_date
            }
        }
    },
    computed: {
        ...mapGetters('user', ['user']),
    },
    methods: {
        updateValues() {
            this.$emit('dialogClosed');
        },
        hideDialog() {
            this.$emit('update:showDialog', false);
        },
        open() {
            this.$emit('update:showDialog', true);
        },
        async saveIncome(edit) {
            this.submitted, this.loading = true;
            try {
                let formData = {
                    user_id: this?.user?.id ?? null,
                    type: this.income.type.name,
                    cycle: this.income.cycle,
                    value: this.income.value,
                    payment_date: this.income.payment_date
                }
                let url = '/income/save';
                let action = 'created';
                if (edit) {
                    url = '/income/update';
                    action = 'updated';
                    formData = { id: this.editIncome.id, ...formData }
                }
                await axios.post(url, formData).then(response => {
                    this.loading = false;
                    this.$toast.add({ severity: 'success', summary: 'Income', detail: `Income ${action} successfully!`, life: 3000 });
                }).catch(error => {
                    this.loading = false;
                    const errorMessage = error.message
                    this.$toast.add({ severity: 'error', summary: 'Income', detail: errorMessage, life: 3000 });
                }).finally(() => {
                    this.submitted = false
                });
            }
            catch (error) {
                console.error('Error submitting form: ', error);
            }
        }
    }
}
</script>
<style lang="">
    
</style>