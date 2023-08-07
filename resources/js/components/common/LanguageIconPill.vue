<template>
    <span class="iconPill" >
        <slot name="icon">

        </slot>
    </span>
</template>
<script>

export default {
    name: 'LanguageIconPill'
}
</script>
<style lang="scss">
.iconPill{
    background-color: $mediumGray;
    padding: 0em 0.5em;
    border-radius: 15px;
    border: 1px solid #272727;
}
</style>