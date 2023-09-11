<template>
    <PageContent>
        <Toast />
        <div class="d-flex flex-column">
            <Panel header="Totals" toggleable class="mb-3">
                <template #icons>
                    <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                    </button>
                </template>
                <div class="budgetCards gap-2">
                    <BudgetCards title="Bank" backgroundColor="--success-color" />
                    <BudgetCards title="Savings" backgroundColor="--help-color" />
                    <BudgetCards title="Recent Income" backgroundColor="--warning-color" />
                    <BudgetCards :amount="spendTotal" title="Spend Total" backgroundColor="--danger-color" />
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
                        <SelectButton id="cycles" v-model="cyclesSelected" :options="cycles" optionLabel="name" multiple
                            aria-labelledby="multiple" />
                    </template>
                </Toolbar>
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
                            <Button v-if="slotProps.data.is_paid" icon="pi pi-check-circle" :loading="loadingPaid"
                                severity="success" text rounded
                                @click="updateIsPaid(slotProps.data.id, !slotProps.data.is_paid)" size="large" />
                            <Button v-else icon="pi pi-times" :loading="loadingPaid" severity="danger" text rounded
                                @click="updateIsPaid(slotProps.data.id, !slotProps.data.is_paid)" size="large" />
                        </template>
                    </Column>
                    <Column field="actions" style="width: 10%;" header="Actions">
                        <template #body="slotProps">
                            <Button @click="editSpendDialog(slotProps.data)" icon="pi pi-pencil" severity="warning" text
                                rounded />
                            <Button icon="pi pi-times" severity="danger" text rounded
                                @click="deleteSpend(slotProps.data.id)" />
                        </template>
                    </Column>
                    <template #empty>
                        <span class="m-5 d-flex justify-content-center align-items-center">
                            No spend found
                        </span>
                    </template>
                </DataTable>
                <NewCategoryDialog :show-dialog="showCategoryDialog" @update:showDialog="showCategoryDialog = $event" />
                <SpendDialog :show-dialog="showSpendDialog" @update:showDialog="showSpendDialog = $event" :edit="edit"
                    :edit-spend="editSpend" @dialog-closed="updateValues" />
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

export default {
    components: {
        PageContent,
        BudgetCards,
        NewCategoryDialog,
        SpendDialog
    },
    data() {
        return {
            loading: true,
            loadingPaid: false,
            monthYear: new Date(),
            showCategoryDialog: false,
            showSpendDialog: false,
            spends: [],
            cyclesSelected: [{ name: 'Cycle 1', value: 1 }],
            cycles: [
                { name: 'Cycle 1', value: 1 },
                { name: 'Cycle 2', value: 2 }
            ],
            edit: false,
            editSpend: {}
        };
    },
    methods: {
        formatMoney(value) {
            return formatCurrency(value);
        },
        getSpendTotal() {
            let total = 0;
            this.spends.map(spend => {
                total += spend.price;
            })
            return total;
        },
        newCategory() {
            this.showCategoryDialog = true;
        },
        newSpend() {
            this.showSpendDialog = true;
        },
        editSpendDialog(spend) {
            this.editSpend = { ...spend };
            this.edit = true;
            this.newSpend();
        },
        deleteSpend(id) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to delete?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios.delete(`/spends/delete/${id}`).then(response => {
                        this.$toast.add({ severity: 'success', summary: 'Spend', detail: 'Spend deleted successfully!', life: 3000 });
                        this.fetchSpends();
                    }).catch(error => {
                        console.error(error)
                        this.$toast.add({ severity: 'error', summary: 'Spend', detail: errorMessage, life: 3000 });
                    })
                }
            });
        },
        updateValues() {
            this.editSpend = {};
            this.edit = false;
            this.fetchSpends();
        },
        async updateIsPaid(id, isPaid) {
            this.loadingPaid = true;
            await axios.post('/spends/set-id-paid', {
                id: id,
                is_paid: isPaid
            }).then(response => {
                this.spends.find(spend => spend.id === id).is_paid = isPaid;
            }).catch(error => {
                console.log({ error })
            }).finally(() => {
                this.loadingPaid = false;
            });
        },
        async fetchSpends() {
            const month = this.monthYear.getMonth() + 1;
            const year = this.monthYear.getFullYear();
            const cycles = this.cyclesSelected.map(cycle => cycle.value);
            const user = this.user.id;
            this.loading = true;
            try {
                if (cycles.length === 0 || !month || !year) {
                    this.$toast.add({ severity: 'warn', summary: 'No filter selected', detail: 'Please select a date and cycle(s) to display spends', life: 4000 });
                    this.spends = [];
                    this.loading = false;
                    return
                }
                const response = await axios.get(`/spends/get`, {
                    params: {
                        year: year,
                        month: month,
                        cycles: cycles,
                        user: user,
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
            handler: 'fetchSpends',
            deep: true
        },
        monthYear: 'fetchSpends'
    },
    mounted() {
        this.fetchSpends();
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
            return this.getSpendTotal();
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