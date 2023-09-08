<template>
    <Dialog v-model:visible="showDialog" :style="{ width: '450px' }" header="New Category" :modal="true" class="p-fluid"
        v-on:hide="hideDialog">
        <div class="field">
            <label for="name">Name</label>
            <InputText id="name" v-model.trim="category.name" required="true" />
            <small class="p-error" v-if="submitted && !category.name">Name is required.</small>
        </div>
        <div class="flex-1 flex flex-column align-items-center">
            <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
            <ColorPicker v-model="category.color" inputId="cp-hex" format="hex" class="mb-3" />
            <span>{{ category.color }}</span>
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
            category: {
                name: null,
                color: null
            },
            submitted: false
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
        saveCategory() {
            return true;
        }
    }
}
</script>
<style lang="">
    
</style>