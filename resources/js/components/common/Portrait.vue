<template>
    <div class="portrait">
        <img :src="imagePath" class="rounded img-fluid mx-auto d-block">
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
    max-width: 20em;
    border-radius: 10px;
    border: solid 3px $mediumGray;
    
}
</style>