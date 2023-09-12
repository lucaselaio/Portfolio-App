<template>
    <Dialog v-model:visible="showDialog" :style="{ width: '450px' }" header="New Income" :modal="true" class="p-fluid"
        v-on:hide="hideDialog">
        <Toast />
        <div v-if="loading" class="flex justify-content-center">
            <ProgressSpinner />
        </div>
        <div v-else>
            <form role="form">
                <div class="field">
                    <label for="name">Source</label>
                    <Dropdown v-model="type" :options="types" optionLabel="name" placeholder="Income Source"
                        class="w-full md:w-14rem" />
                </div>
                <div class="field">
                    <label>Cycle</label>
                    <InputNumber v-model="cycle" showButtons></InputNumber>
                </div>
                <div class="field">
                    <label for="name">Value</label>
                    <InputNumber v-model="value" inputId="currency-us" mode="currency" currency="USD" locale="en-US"
                        required="true" />
                    <small class="p-error" v-if="submitted && !value">Value is required.</small>
                </div>
                <div class="field">
                    <label for="dueDate">Payment Date</label>
                    <Calendar v-model="payment_date" />
                </div>
            </form>
        </div>
        <template #footer>
            <Button label="Save" icon="pi pi-check" text @click.native="saveCategory" />
        </template>
    </Dialog>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            type: '',
            cycle: 1,
            value: 0,
            payment_date: null, 
            types: [
                { name: 'Pay Check', code: 'paycheck' },
                { name: 'Extra Income', code: 'extraincome' },
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
        }
    },
    computed:{
        ...mapGetters('user', ['user']),
    },
    methods: {
        hideDialog() {
            this.$emit('update:showDialog', false);
        },
        open() {
            this.$emit('update:showDialog', true);
        },
        async saveCategory() {
            this.submitted, this.loading = true;
            try {
                let formData = {
                    user_id: this?.user?.id ?? null,
                    type: this.type.code,
                    cycle: this.cycle,
                    value: this.value,
                    payment_date: this.payment_date
                }
                await axios.post('/income/save', formData).then(response => {
                    this.loading = false;
                    this.$toast.add({ severity: 'success', summary: 'Income', detail: 'Income created successfully!', life: 3000 });
                }).catch(error => {
                    this.loading = false;
                    const errorMessage = error.message
                    this.$toast.add({ severity: 'error', summary: 'Income', detail: errorMessage, life: 3000 });
                }).finally(() => {
                    this.submitted = false
                    this.category = {
                        name: '',
                    }
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