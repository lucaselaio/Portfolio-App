<template>
    <div class="header" :class="{ 'text-center': centered }">
        <div class="title mb-1">{{ title }}</div>
        <h5 class="subTitle">{{ subTitle }}</h5>
    </div>
    <slot>
        
    </slot>
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
    padding: 2em 5em 2em 5em;
}

.title {
    font-family: $montserrat;
    font-size: 80px;
    font-weight: bold;
    text-shadow: -5px 5px 7px rgba(0, 0, 0, 0.2);
}

hr {
    margin: 0px;
}
</style>