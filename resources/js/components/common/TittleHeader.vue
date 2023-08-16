<template>
    <div class="header" :class="{ 'text-center': centered }">
        <div class="title mb-1">{{ title }}</div>
        <h5 class="subTitle">{{ subTitle }}</h5>
    </div>
    <hr />
</template>
<script>
export default {
    name: 'TittleHeader',
    props: {
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: false,
            default: () => {
                return ''
            }
        },
        centered: {
            type: Boolean,
            required: false,
            default: () => {
                return false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    height: fit-content;
    padding: 6em 5em 2em 5em;
}

.title {
    font-family: $montserrat;
    font-size: 80px;
    font-weight: bold;
    color: #5f5f5f;
    text-shadow: -5px 5px 7px rgba(0, 0, 0, 0.2);
}

hr {
    margin: 0px;
}
</style>