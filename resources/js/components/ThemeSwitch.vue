<template>
    <div class="mt-1 form-check form-switch theme-switch">
        <input @click.native="toggleTheme()" class="form-check-input toggleSpan mb-2" style="height: 1em !important; width: 2em !important;" type="checkbox" role="switch" id="themeSwitch"
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
    computed: {
        ...mapGetters('theme', ['iconClass']),
    },
    created() {
        this.selectedTheme = localStorage.getItem('selectedTheme');
        this.iconClass = localStorage.getItem('iconClass');
    },
    methods: {
        ...mapActions('theme', ['toggleTheme']),
    },
};
</script>

<style lang="scss" scoped>
.toggleSpan {
    padding: 10px 20px;
    margin-left: -1.8em !important;
    cursor: pointer;
}

.form-check-input:checked {
    border: none;
    background-color: #3a3e63 !important;
    border-color: #16172100 !important;
}

.form-check-input:focus {
    border: none;
    border-color: #dbdae0 !important;
    box-shadow: 0 0 0 0.25rem #ffffff00 !important;
}

</style>