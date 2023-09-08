<template>
    <PageContent>
        <div class="d-flex flex-column">
            <Panel header="Totals" toggleable class="mb-3">
                <template #icons>
                    <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                    </button>
                </template>
                <div class="budgetCards gap-3">
                    <BudgetCards title="Bank" backgroundColor="--success-color" />
                    <BudgetCards title="Savings" backgroundColor="--help-color" />
                    <BudgetCards title="Recent Income" backgroundColor="--warning-color" />
                </div>
            </Panel>
            <div>
                <Toolbar class="mb-3">
                    <template #start>
                        <Button label="New Category" icon="pi pi-plus" severity="success" class="mr-5 mb-3"
                            @click="newCategory" />
                        <Button label="New Spend" icon="pi pi-plus" severity="success" class="mb-3" @click="newSpend" />
                    </template>
                    <template #end>
                        <span class="p-float-label mr-3">
                            <Calendar v-model="monthYear" view="month" dateFormat="mm/yy" inputId="monthYear" />
                            <label for="monthYear">{{ monthYearLabel }}</label>
                        </span>
                            <SelectButton id="cycles" v-model="cyclesSelected" :options="cycles"
                                optionLabel="name" multiple aria-labelledby="multiple" />
                    </template>
                </Toolbar>
                <DataTable class="p-datatable-sm" showGridlines :value="spend" :class="$style.budgetTable">
                    <Column field="name" style="width: 40%" header="Name"></Column>
                    <Column field="price" style="width: 15%" header="Price" sortable>
                        <template #body="slotProps">
                            {{ formatMoney(slotProps.data.price) }}
                        </template>
                    </Column>
                    <Column field="category" style="width: 15%" header="Category"></Column>
                    <Column field="dueDate" style="width: 20%" header="Due Date" sortable></Column>
                    <Column field="paid" style="width: 20%; text-align: center;" header="Paid" sortable>
                        <template #body="slotProps">
                            <Button v-if="slotProps.data.paid" icon="pi pi-check-circle" severity="success" text rounded />
                            <Button v-else icon="pi pi-times" severity="danger" text rounded />
                        </template>
                    </Column>
                    <template #empty>
                        <span class="m-5 d-flex justify-content-center align-items-center">
                            No spend found
                        </span>
                    </template>
                </DataTable>

                <NewCategoryDialog :show-dialog="showCategoryDialog" @update:showDialog="showCategoryDialog = $event" />
                <NewSpendDialog :show-dialog="showSpendDialog" @update:showDialog="showSpendDialog = $event" />
            </div>
        </div>
    </PageContent>
</template>
<script>
import { formatCurrency } from '../../util.js';
import BudgetCards from '../../components/common/BudgetCards.vue';
import PageContent from '../../components/common/PageContent.vue';
import NewCategoryDialog from './NewCategoryDialog.vue';
import NewSpendDialog from './NewSpendDialog.vue';

export default {
    components: {
        PageContent,
        BudgetCards,
        NewCategoryDialog,
        NewSpendDialog
    },
    data() {
        return {
            monthYear: null,
            showCategoryDialog: false,
            showSpendDialog: false,
            spend: [],
            product: {
                name: '',
                description: '',
                inventoryStatus: '',
                category: '',
                price: '',
                quantity: ''
            },
            cyclesSelected: [1],
            cycles: [
                { name: 'Cycle 1', value: 1 },
                { name: 'Cycle 2', value: 2 }
            ]

        };
    },
    methods: {
        formatMoney(value) {
            return formatCurrency(value);
        },
        newCategory() {
            this.showCategoryDialog = true;
        },
        newSpend() {
            this.showSpendDialog = true;
        }
    },
    mounted() {
        this.spend = [
            // { name: "Financiamento Carro", price: 646.75, category: 'Beverages', dueDate: new Date().toLocaleDateString(), paid: true },
            // { name: "Seguro Carro", price: 232.30, category: 'Beverages', dueDate: new Date("09/25/2023").toLocaleDateString() },
            // { name: "Gastos da semana", price: 400.00, category: 'Beverages', dueDate: new Date("09/22/2023").toLocaleDateString() },
        ];
    },
    computed: {
        monthYearLabel() {
            if (this.monthYear) {
                return this.monthYear.toLocaleDateString(window.navigator.language || "en-US", { year: 'numeric', month: 'long' });
            }
            return 'Select a period'
        }
    }
}

</script>
<style scoped lang="scss">
.budgetCards {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}

@media screen and (max-width: 500px) {
    .budgetCards {
        flex-direction: column !important;
        align-items: center;
    }
}
</style>
<style lang="scss" module>
.budetTable {
    min-width: 50rem;
}
</style>