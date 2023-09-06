<template>
    <div class="pageContent">
        <div class="row" v-if="! portrait">
            <div class="col">
                <slot>

                </slot>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col colBody">
                <slot>

                </slot>
            </div>
            <div class="col portrait">
                <Portrait :imagePath="portrait" />
            </div>
        </div>

    </div>
</template>
<script>
import Portrait from './Portrait.vue';
export default {
    name: 'PageContent',
    components: {
        Portrait,
    },
    props: {
        portrait: {
            type: String,
            required: false
        }
    }
}
</script>
<style lang="scss" scoped>
.pageContent {
    margin: 3em 15% 0px;
}
@media screen and (max-width: 995px) {
    .pageContent {
        margin: 3em 1% 0px;
    }
    div.portrait{
        display: none;
    }
    div.colBody{
        max-width: 100% !important;
        padding: 0em 2em;
    }
}

.row {
    display: flex;
    font-family: $montserrat;
    font-weight: 400;
    font-size: medium;
}

.col {
    flex: 1;
}

.colBody{
    max-width: 50%;
}

.portrait {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>