<template>
    <PageContent>
        <Toast />
        <div class="d-flex flex-column">
            <Panel header="Totals" toggleable class="mb-3">
                <template #icons>
                    <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                    </button>
                </template>
                <div class="d-flex flex-wrap gap-3">
                    <BudgetCards class="cardItem" :amount="balanceTotal" title="Balance" backgroundColor="--success-color" />
                    <BudgetCards class="cardItem" :amount="savingsTotal" title="Savings" backgroundColor="--help-color" />
                    <BudgetCards class="cardItem" :amount="incomeTotal" title="Recent Income" backgroundColor="--warning-color" />
                    <BudgetCards class="cardItem" :amount="spendTotal" title="Spend Total" backgroundColor="--danger-color" />
                </div>
            </Panel>
            <div>
                <Toolbar class="d-flex flex-wrap">
                    <template #start>
                        <Button label="Category" icon="pi pi-plus" severity="danger" class="mr-3"
                            @click="newCategory" />
                        <Button label="Spend" icon="pi pi-plus" severity="danger" class="mr-3" @click="openSpendDialog" />
                        <Button label="Income" icon="pi pi-plus" severity="warning" class=""
                            @click="openIncomeDialog" />
                    </template>
                    <template #end>
                        <Calendar class="mr-3" v-model="monthYear" view="month" dateFormat="mm/yy" inputId="monthYear" />
                        <SelectButton class="mr-3" id="cycles" v-model="cyclesSelected" :options="cycles" optionLabel="name" multiple
                            aria-labelledby="multiple" />
                        <Button icon="pi pi-refresh" severity="primary" @click="updateValues" text raised aria-label="Refresh" />
                    </template>
                </Toolbar>
                    <TabView>
                        <TabPanel>
                            <template #header>
                                <span class="mr-2">Spends</span>
                                <i class="fa-solid fa-square-minus"></i>
                            </template>
                            <DataTable :loading="loading" class="p-datatable-sm" showGridlines :value="spends"
                                :class="$style.budgetTable">
                                <template #loading>
                                    <div class="flex justify-content-center">
                                        <ProgressSpinner />
                                    </div>
                                </template>
                                <Column field="name" style="width: 25%" header="Name" sortable></Column>
                                <Column field="price" style="width: 15%" header="Price" sortable>
                                    <template #body="slotProps">
                                        {{ formatMoney(slotProps.data.price) }}
                                    </template>
                                </Column>
                                <Column field="category" style="width: 20%; text-align: center;" header="Category">
                                    <template #body="slotProps">
                                        <div v-if="slotProps.data.category">
                                            <Tag :value="slotProps.data.category.label"
                                                :style="{ background: '#' + slotProps.data.category.color }" />
                                        </div>
                                    </template>
                                </Column>
                                <Column field="due_date" style="width: 20%" header="Due Date" sortable>
                                    <template #body="slotProps">
                                        {{ new Date(slotProps.data.due_date).toISOString().split('T')[0] }}
                                    </template>
                                </Column>
                                <Column field="paid" style="width: 10%; text-align: center;" header="Paid" sortable>
                                    <template #body="slotProps">
                                        <Button v-if="slotProps.data.is_paid" icon="pi pi-check-circle"
                                            :loading="loadingButton" severity="success" text rounded
                                            @click="updateIsPaid(slotProps.data.id, !slotProps.data.is_paid)"
                                            size="large" />
                                        <Button v-else icon="pi pi-times" :loading="loadingButton" severity="danger" text
                                            rounded @click="updateIsPaid(slotProps.data.id, !slotProps.data.is_paid)"
                                            size="large" />
                                    </template>
                                </Column>
                                <Column field="actions" style="width: 10%;" header="Actions">
                                    <template #body="slotProps">
                                        <SplitButton :model="[
                                                {
                                                    label: 'Edit',
                                                    icon: 'pi pi-pencil',
                                                    command: () => {
                                                        this.editSpendDialog(slotProps.data)
                                                    },
                                                },
                                                {
                                                    label: 'Delete',
                                                    icon: 'pi pi-times',
                                                    command: () => {
                                                        this.deleteSpend(slotProps.data.id)
                                                    },
                                                }
                                                ,
                                                {
                                                    label: 'Replicate in next month',
                                                    icon: 'pi pi-reply',
                                                    command: () => {
                                                        this.replicateNextMonth(slotProps.data)
                                                    },
                                                }
                                            ]" label="Actions" severity="primary"/>
                                    </template>
                                </Column>
                                <template #empty>
                                    <span class="m-5 d-flex justify-content-center align-items-center">
                                        No Spend found
                                    </span>
                                </template>
                            </DataTable>
                        </TabPanel>
                        <TabPanel>
                            <template #header>
                                <span class="mr-2">Incomes</span>
                                <i class="fa-solid fa-square-plus"></i>
                            </template>
                            <DataTable :loading="loading" class="p-datatable-sm" showGridlines :value="incomes"
                                :class="$style.budgetTable">
                                <template #loading>
                                    <div class="flex justify-content-center">
                                        <ProgressSpinner />
                                    </div>
                                </template>
                                <Column field="type" style="width: 25%" header="Source" sortable></Column>
                                <Column field="value" style="width: 15%" header="Value" sortable>
                                    <template #body="slotProps">
                                        {{ formatMoney(slotProps.data.value) }}
                                    </template>
                                </Column>
                                <Column field="payment_date" style="width: 20%" header="Payment Date" sortable>
                                    <template #body="slotProps">
                                        {{ new Date(slotProps.data.payment_date).toISOString().split('T')[0] }}
                                    </template>
                                </Column>
                                <Column field="actions" style="width: 10%;" header="Actions">
                                    <template #body="slotProps">
                                        <Button @click="editIncomeDialog(slotProps.data)" icon="pi pi-pencil"
                                            severity="warning" text rounded />
                                        <Button icon="pi pi-times" severity="danger" text rounded
                                            @click="deleteIncome(slotProps.data.id)" />
                                    </template>
                                </Column>
                                
                                <template #empty>
                                    <span class="m-5 d-flex justify-content-center align-items-center">
                                        No Income found
                                    </span>
                                </template>
                            </DataTable>
                        </TabPanel>
                    </TabView>

                <NewCategoryDialog :show-dialog="showCategoryDialog" @update:showDialog="showCategoryDialog = $event" />
                <SpendDialog 
                    :show-dialog="showSpendDialog"
                    :edit-spend="editSpend"
                    @update:showDialog="showSpendDialog = $event"
                    @dialog-closed="updateValues"
                />

                <IncomeDialog 
                    :show-dialog="showIncomeDialog"
                    :edit-income="editIncome"
                    @update:showDialog="showIncomeDialog = $event"
                    @dialog-closed="updateValues"
                />
            </div>
        </div>
    </PageContent>
</template>
<script>
import { formatCurrency } from '../../util.js';
import BudgetCards from '../../components/common/BudgetCards.vue';
import PageContent from '../../components/common/PageContent.vue';
import NewCategoryDialog from './NewCategoryDialog.vue';
import SpendDialog from './SpendDialog.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';
import IncomeDialog from './Income/IncomeDialog.vue';

export default {
    components: {
        PageContent,
        BudgetCards,
        NewCategoryDialog,
        SpendDialog,
        IncomeDialog
    },
    data() {
        return {
            loading: true,
            loadingButton: false,
            monthYear: new Date(),
            showCategoryDialog: false,
            showSpendDialog: false,
            showIncomeDialog: false,
            spends: [],
            incomes: [],
            cyclesSelected: [{ name: 'Cycle 1', value: 1 }],
            cycles: [
                { name: 'Cycle 1', value: 1 },
                { name: 'Cycle 2', value: 2 }
            ],
            editSpend: {},
            editIncome: {}
        };
    },
    methods: {
        formatMoney(value) {
            return formatCurrency(value);
        },
        newCategory() {
            this.showCategoryDialog = true;
        },
        openSpendDialog() {
            this.showSpendDialog = true;
        },
        openIncomeDialog() {
            this.showIncomeDialog = true;
        },
        editSpendDialog(spend) {
            this.editSpend = { ...spend };
            this.openSpendDialog();
        },
        editIncomeDialog(income) {
            this.editIncome = { ...income };
            this.openIncomeDialog();
        },
        deleteSpend(id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios.delete(`/spends/delete/${id}`).then(response => {
                        this.$toast.add({ severity: 'success', summary: 'Spend', detail: 'Spend deleted successfully!', life: 3000 });
                        this.updateValues();
                    }).catch(error => {
                        console.error(error)
                        this.$toast.add({ severity: 'error', summary: 'Spend', detail: errorMessage, life: 3000 });
                    })
                }
            });
        },
        deleteIncome(id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios.delete(`/income/delete/${id}`).then(response => {
                        this.$toast.add({ severity: 'success', summary: 'Spend', detail: 'Income deleted successfully!', life: 3000 });
                        this.updateValues();
                    }).catch(error => {
                        console.error(error)
                        this.$toast.add({ severity: 'error', summary: 'Spend', detail: errorMessage, life: 3000 });
                    })
                }
            });
        },
        updateValues() {
            const filters = this.getFilters();
            if (filters.cycles.length === 0 || !filters.month || !filters.year) {
                this.$toast.add({ severity: 'warn', summary: 'No filter selected', detail: 'Please select a date and cycle(s) to display spends', life: 4000 });
                this.spends = [];
                this.loading = false;
                return
            }
            this.editSpend = {};
            this.fetchSpends();
            this.fetchIncome();
        },
        incrementMonthAndYear(dateString) {
            const originalDate = new Date(dateString);
            originalDate.setUTCMonth(originalDate.getUTCMonth() + 1);

            return originalDate.toISOString().slice(0, 19).replace('T', ' ');
        },
        replicateNextMonth(data) {
            try {
                let formData = {
                    name: data.name,
                    price: data.price,
                    user_id: data.user_id,
                    spend_category_id: data.spend_category_id,
                    due_date: this.incrementMonthAndYear(data.due_date),
                    payment_cycle: data.payment_cycle
                }
                let url = '/spends/save';
                axios.post(url, formData).then(response => {
                    this.loading = false;
                    this.$toast.add({ severity: 'success', summary: 'Spend', detail: `Spend replicated successfully!`, life: 3000 });
                }).catch(error => {
                    this.loading = false;
                    const errorMessage = error.message
                    this.$toast.add({ severity: 'error', summary: 'Spend', detail: errorMessage, life: 3000 });
                })
            }
            catch (error) {
                console.error('Error submitting form: ', error);
            }
        },
        async updateIsPaid(id, isPaid) {
            this.loadingButton = true;
            await axios.post('/spends/set-id-paid', {
                id: id,
                is_paid: isPaid
            }).then(response => {
                this.spends.find(spend => spend.id === id).is_paid = isPaid;
            }).catch(error => {
                console.error(error)
            }).finally(() => {
                this.loadingButton = false;
            });
        },
        getFilters() {
            return {
                month: this.monthYear.getMonth() + 1,
                year: this.monthYear.getFullYear(),
                cycles: this.cyclesSelected.map(cycle => cycle.value),
                user: this?.user?.id
            }

        },
        async fetchIncome() {
            this.loading = true;
            const filters = this.getFilters();
            try {
                const response = await axios.get(`/income/get`, {
                    params: {
                        year: filters.year,
                        month: filters.month,
                        cycles: filters.cycles,
                        user: filters.user,
                    },
                });

                this.loading = false;
                if (response.data) {
                    this.incomes = response.data;
                } else {
                    this.incomes = [];
                }
            } catch (error) {
                console.error('Error fetching spends:', error);
                this.incomes = [];
            }
        },
        async fetchSpends() {
            const filters = this.getFilters();
            this.loading = true;
            try {
                if (filters.cycles.length === 0 || !filters.month || !filters.year) {
                    this.$toast.add({ severity: 'warn', summary: 'No filter selected', detail: 'Please select a date and cycle(s) to display spends', life: 4000 });
                    this.spends = [];
                    this.loading = false;
                    return
                }
                const response = await axios.get(`/spends/get`, {
                    params: {
                        year: filters.year,
                        month: filters.month,
                        cycles: filters.cycles,
                        user: filters.user,
                    },
                });

                this.loading = false;

                if (response.data && response.data.success) {
                    this.spends = response.data.success;
                } else {
                    this.spends = [];
                }
            } catch (error) {
                console.error('Error fetching spends:', error);
                this.spends = [];
            }
        },
    },
    watch: {
        cyclesSelected: {
            handler: function (newCyclesSelected) {
                this.updateValues();
            },
            deep: true
        },
        monthYear: function (newMonthYear) {
            this.updateValues();
        }
    },
    mounted() {
        this.updateValues();
    },
    computed: {
        ...mapGetters('user', ['user']),
        monthYearLabel() {
            if (this.monthYear) {
                return this.monthYear.toLocaleDateString(window.navigator.language || "en-US", { year: 'numeric', month: 'long' });
            }
            return 'Select a period'
        },
        spendTotal() {
            let total = 0;
            this.spends.map(spend => {
                total += spend.price;
            })
            return total;
        },
        incomeTotal() {
            let total = 0;
            // console.log(this.incomes)
            this.incomes.map(income => {
                total += income.value;
            })
            return total;
        },
        savingsTotal() {
            let total = 0;
            this.spends.map(spend => {
                if (spend.category.name === "savings") {
                    total += spend.price;
                }
            })
            return total;
        },
        balanceTotal() {
            let spendTotal = 0;
            this.spends.map(spend => {
                if (spend.is_paid) {
                    spendTotal += spend.price;
                }
            })
            return this.incomeTotal - spendTotal
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

.cardItem{
    flex-grow: 1;
    flex-basis: 200;
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