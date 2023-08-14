<template>
    <div class="pageContent">
        <div class="row" v-if="! portrait">
            <div class="col">
                <slot name="body">

                </slot>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col colBody">
                <slot name="body">

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
    color: $darkGray;
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