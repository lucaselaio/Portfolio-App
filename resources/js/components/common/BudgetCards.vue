<template >
    <Card :class="$style.bank" :style="`background-color: var(${backgroundColor})`">
        <template #subtitle>
            <p style="color: white; font-size: small;"> {{ title }} </p>
        </template>
        <template #content>
            <p :class="{redFont: amount <= 0}" style="font-size: large; text-align: center;"> {{ formatMoney(amount) }} </p>
        </template>
    </Card>
</template>
<script>
import { formatCurrency } from '../../util.js';
export default {
    props: {
        backgroundColor: {
            type: String,
            default: '--primary-color'
        },
        title: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {}
    },
    methods:{
        formatMoney(value) {
            return formatCurrency(value);
        }
    }
}
</script>
<style lang="scss" scoped>
.redFont{
    color: rgb(164, 43, 43);
}

</style>
<style lang="scss" module>
@media screen and (max-width: 995px) {
    .bank {
        width: 9em !important;
    }
}

.bank {
    font-weight: 700;
    text-shadow: -3px 3px 5px rgba(0, 0, 0, 0.2);
    color: white;
    width: 13em;
    height: 8.3em;
}
</style>