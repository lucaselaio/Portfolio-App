<template>
    <div class="form-check form-switch theme-switch">
        <input @click.native="toggleTheme()" class="form-check-input" type="checkbox" role="switch" id="themeSwitch"
            :checked="selectedTheme === 'Dark'">
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'ThemeSwitch',
    data() {
        return {
            selectedTheme: ''
        }
    },
    created() {
        this.selectedTheme = localStorage.getItem('selectedTheme');
    },
    methods: {
        ...mapActions('theme', ['toggleTheme']),
    }
};
</script>

<style lang="scss" scoped>
input{
    height: 1em !important;
    width: 2em !important;
    margin: 0.7em 0.2em 0em -2em !important;
    cursor: pointer;
}
.form-check-input:checked {
    background-color: #3a3e63 !important;
    border-color: #161721 !important;
}
.form-check-input:focus {
    border-color: #dbdae0 !important;
    box-shadow: 0 0 0 0.25rem #aaaaaa4f !important;
}

</style>