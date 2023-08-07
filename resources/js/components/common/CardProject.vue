<template>
    <div class="card cardBackground resizable">
        <div class="card-body">
            <LanguageIconPill icon-src="https://img.icons8.com/color/48/html-5--v1.png"/>
        </div>
    </div>
</template>
<script>
import LanguageIconPill from './LanguageIconPill.vue';

export default {
    name: 'CardProject',
    components: { 
        LanguageIconPill 
    }
}
</script>
<style lang="scss">
.cardBackground {
    color: $white;
    background-color: #ffffff30;
}
</style>