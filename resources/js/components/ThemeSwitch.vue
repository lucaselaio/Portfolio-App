<template>
    <div class="mt-1 form-check form-switch theme-switch">
        <input @click.native="switchTheme()" class="form-check-input toggleSpan mb-2" style="height: 1em !important; width: 2em !important;" type="checkbox" role="switch" id="themeSwitch"
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
        switchTheme(){
            this.toggleTheme();
            // const currentTheme = localStorage.getItem('selectedTheme').toLowerCase();
            // const newTheme = currentTheme == 'light' ? 'dark' : 'light';
            // this.$primevue.changeTheme('md-'+currentTheme+'-indigo', 'md-'+newTheme+'-indigo', 'primevue/resources/themes/soho-'+newTheme+'/theme.css', () => {});
        }
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
    background-color: #2c2e36 !important;
    border-color: #16172100 !important;
}

.form-check-input:focus {
    border: none;
    border-color: #dbdae0 !important;
    box-shadow: 0 0 0 0.25rem #ffffff00 !important;
}

</style>