<template>
    <Dialog v-model:visible="showDialog" :style="{ width: '450px' }" header="Register Spend" :modal="true" class="p-fluid"
        v-on:hide="hideDialog">
        <div class="field">
            <label for="name">Name</label>
            <InputText id="name" v-model.trim="spend.name" required="true" />
            <small class="p-error" v-if="submitted && !spend.name">Name is required.</small>
        </div>
        <div class="field">
            <label for="name">Price</label>
            <InputNumber v-model="spend.price" inputId="currency-us" mode="currency" currency="USD" locale="en-US" required="true"/>
            <small class="p-error" v-if="submitted && !spend.price">Price is required.</small>
        </div>
        <div class="field">
            <label for="category" class="mb-3">Category</label>
            <Dropdown id="category" v-model="spend.category" :options="categories" optionLabel="label"
                placeholder="Select a Category" required="true">
                <template #value="slotProps">
                    <div v-if="slotProps.value && slotProps.value.value">
                        <Tag :value="slotProps.value.label" :severity="getCategoriesLabel(slotProps.value.label)" />
                    </div>
                    <div v-else-if="slotProps.value && !slotProps.value.value">
                        <Tag :value="slotProps.label" :severity="getCategoriesLabel(slotProps.value)" />
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
            </Dropdown>
            <small class="p-error" v-if="submitted && !spend.category">Category is required.</small>
        </div>
        <div class="field">
            <label for="name">Due Date</label>
            <Calendar v-model="spend.due_date" />
        </div>
        <template #footer>
            <Button label="Save" icon="pi pi-check" text @click="saveCategory" />
        </template>
    </Dialog>
</template>
<script>
export default {
    data() {
        return {
            spend: {
                name: null,
                price: null,
                category: '',
                due_date: ''
            },
            submitted: false,
            categories: [
				{label: 'Depesas básicas', value: 'depesas_basicas'},
				{label: 'Carro', value: 'carro'},
				{label: 'Guloseimas', value: 'guloseimas'}
            ]
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
        saveCategory() {
            return true;
        },
        getCategoriesLabel(categories) {
            switch (categories) {
                case 'Depesas básicas':
                    return 'success';

                case 'Carro':
                    return 'warning';

                case 'Guloseimas':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
}
</script>
<style lang="">
    
</style>