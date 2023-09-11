<template>
    <Dialog v-model:visible="showDialog" :style="{ width: '450px' }" header="New Category" :modal="true" class="p-fluid"
        v-on:hide="hideDialog">
        <Toast />
        <div v-if="loading" class="flex justify-content-center">
            <ProgressSpinner />
        </div>
        <div v-else>
            <form role="form">
                <slot>

                </slot>
                <div class="field">
                    <label for="name">Name</label>
                    <InputText :class="{ 'p-invalid': submitted && !validateName() }" id="name" v-model="category.name"
                        required />
                    <small class="p-error" v-if="submitted && !validateName()">{{ errorMessage }}</small><br>
                    <small>Name accepts letters[a-z], and "_" : category_name</small>

                </div>
                <div class="field">
                    <label for="label">Label</label>
                    <InputText id="label" v-model="category.label" required />
                    <small>This is how it will be displayed</small>
                </div>
                <div class="flex-1 flex flex-column align-items-center">
                    <label for="cp-hex" class="block mb-2">Category background color </label>
                    <ColorPicker v-model="category.color" inputId="cp-hex" format="hex" required />
                    <span>{{ category.color }}</span>
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

export default {
    data() {
        return {
            errorMessage: '',
            category: {
                name: '',
                label: '',
                color: ''
            },
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
    methods: {
        hideDialog() {
            this.$emit('update:showDialog', false);
        },
        open() {
            this.$emit('update:showDialog', true);
        },
        validateName() {
            const regex = /^[a-z_]+$/;
            this.errorMessage = '';
            if (!this.category.name) {
                this.errorMessage = 'Name is required'
                this.loading = false;
                return false;
            }
            if (!regex.test(this.category.name)) {
                this.errorMessage = 'Name is invalid'
                this.loading = false;
                return false;
            } else {
                return true;
            }
        },
        async saveCategory() {
            this.submitted, this.loading = true;
            if (!this.validateName()) {
                this.$toast.add({ severity: 'error', summary: 'Something went wrong', detail: this.errorMessage, life: 3000 });
                return;
            }

            try {
                let formData = {
                    name: this.category.name,
                    label: this.category.label,
                    color: this.category.color
                }
                await axios.post('/spend-category/save', formData).then(response => {
                    this.loading = false;
                    this.$toast.add({ severity: 'success', summary: 'Category', detail: 'Category created successfully!', life: 3000 });
                }).catch(error => {
                    this.loading = false;
                    const errorMessage = error.message
                    this.$toast.add({ severity: 'error', summary: 'Category', detail: errorMessage, life: 3000 });
                }).finally(() => {
                    this.submitted = false
                    this.category = {
                        name: '',
                        label: '',
                        color: ''
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