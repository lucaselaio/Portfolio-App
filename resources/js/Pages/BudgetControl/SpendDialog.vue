<template>
    <Dialog v-model:visible="showDialog" :style="{ width: '450px' }"
        :header="Object.keys(editSpend).length > 0 ? 'Update Spend' : 'Register Spend'" @after-hide="updateValues"
        :modal="true" class="p-fluid" v-on:hide="hideDialog">
        <Toast />
        <div v-if="loading" class="flex justify-content-center">
            <ProgressSpinner />
        </div>
        <div v-else>
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="spend.name" required="true" />
                <small class="p-error" v-if="submitted && !spend.name">Name is required.</small>
            </div>
            <div class="field">
                <label for="name">Price</label>
                <InputNumber v-model="spend.price" inputId="currency-us" mode="currency" currency="USD" locale="en-US"
                    required="true" />
                <small class="p-error" v-if="submitted && !spend.price">Price is required.</small>
            </div>
            <div class="field">
                <label for="category" class="mb-3">Category</label>
                <Dropdown id="category" v-model="spend.category" :options="categories" optionLabel="label"
                    placeholder="Select a Category" required="true">
                    <template #value="slotProps">
                        <div v-if="slotProps.value && slotProps.value.name">
                            <Tag :value="slotProps.value.label" :style="{ background: '#' + slotProps.value.color }"></Tag>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                </Dropdown>
                <small class="p-error" v-if="submitted && !spend.category">Category is required.</small>
            </div>
            <div class="field">
                <label>Cycle</label>
                <InputNumber v-model="spend.cycle" showButtons></InputNumber>
            </div>
            <div class="field">
                <label for="dueDate">Due Date</label>
                <Calendar v-model="spend.due_date" />
            </div>
        </div>
        <template #footer>
            <Button v-if="Object.keys(editSpend).length > 0" label="Update" icon="pi pi-check" text
                @click.native="saveSpend(true)" />
            <Button v-else label="Save" icon="pi pi-check" text @click.native="saveSpend(false)" />
        </template>
    </Dialog>
</template>
<script>
// import axios from 'axios';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            spend: {
                name: null,
                price: null,
                category: '',
                due_date: '',
                cycle: 1
            },
            loading: false,
            submitted: false,
            fetchedCategories: []
        }
    },
    props: {
        showDialog: {
            type: Boolean,
            default: () => false
        },
        editSpend: {
            type: Object,
            default: () => { }
        }
    },
    computed: {
        ...mapGetters('user', ['user']),
        categories() {
            return this.fetchedCategories
        }
    },
    watch: {
        editSpend() {
            this.spend = {
                name: this.editSpend.name,
                price: this.editSpend.price,
                category: this.editSpend.category,
                due_date: this.editSpend.due_date,
                cycle: this.editSpend.payment_cycle
            }
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:showDialog', false);
        },
        updateValues() {
            this.$emit('dialogClosed');
        },
        async fetchCategories() {
            return await axios.get('/spend-category/get-categories').then(
                response => {
                    this.fetchedCategories = response.data.success

                }
            ).catch(
                error => {
                    console.log({ error })
                    return []
                }
            );
        },
        saveSpend(edit) {
            this.submitted, this.loading = true;
            try {
                let formData = {
                    name: this.spend.name,
                    price: this.spend.price,
                    user_id: this.user?.id ?? null,
                    spend_category_id: this.spend.category.id,
                    due_date: new Date(this.spend.due_date).toISOString().slice(0, 19).replace('T', ' '),
                    payment_cycle: this.spend.cycle
                }
                let url = '/spends/save';
                let action = 'created';
                if (edit) {
                    url = '/spends/update';
                    action = 'updated';
                    formData = { id: this.editSpend.id, ...formData }
                }
                axios.post(url, formData).then(response => {
                    this.loading = false;
                    this.$toast.add({ severity: 'success', summary: 'Spend', detail: `Spend ${action} successfully!`, life: 3000 });
                }).catch(error => {
                    this.loading = false;
                    const errorMessage = error.message
                    this.$toast.add({ severity: 'error', summary: 'Spend', detail: errorMessage, life: 3000 });
                }).finally(() => {
                    this.spend = {
                        name: null,
                        price: null,
                        category: '',
                        due_date: '',
                        cycle: 1
                    }
                    this.submitted = false
                    this.hideDialog()
                })
            }
            catch (error) {
                console.error('Error submitting form: ', error);
            }
        },
    },
    mounted() {
        this.fetchCategories();
    }
}
</script>
<style lang="">
    
</style>