<template>
    <div class="portrait">
        <img height="90" :src="imagePath" class="rounded img-fluid mx-auto d-block">
    </div>
</template>
<script>
export default {
    name: 'Portrait',
    props: {
        imagePath: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.portrait {
    opacity: 0.95;
    max-width: 24em;
    border-radius: 10px;
}
</style>