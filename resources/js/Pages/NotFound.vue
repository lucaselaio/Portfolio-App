<template>
    <div class="backButton">
        <a @click.native="goBack()" href="#"><i class="navigationIcon fa-solid fa-circle-chevron-left"></i></a>
    </div>

    <div class="notFoundPage">
        <div class="content">
            <span>404</span>
            <hr>
            <p class="subTitle"> {{ errorMessage ?? 'Sorry, not found!' }} </p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        errorMessage: {
            type: String,
            required: false,
            default: () => {
                return ''
            }
        }
    },
    methods: {
        goBack() {
            window.history.back();
        }
    }

}
</script>
<style lang="scss" scoped>
.backButton{
    margin: 3em 17.8em;
}

.notFoundPage {
    font-family: $titilliumWeb;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68.6vh;
}

.content {
    text-align: center;
    font-size: 20px;
}

.content span {
    font-size: 90px;
}
</style>