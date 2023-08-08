<template>
    <div class="pill" >
        <slot>

        </slot>
    </div>
</template>
<script>

export default {
    name: 'LanguageIconPill'
}
</script>
<style lang="scss" scooped>
.pill{
    display: flex;
    background-color: $transparent;
    padding-top: 0.4em;
    border-radius: $regularRadius;
    width: 4em;
    height: 4.8em;
    flex-direction: column;
    align-items: center;
}
.pill:hover{
    background-color: $darkGray;
    border-bottom: 1px solid $onyx;
    border-left: 1px solid $onyx;
}
</style>