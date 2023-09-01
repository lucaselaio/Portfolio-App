<template>
    <div class="mt-1 form-check form-switch theme-switch">
        <input @click.native="switchTheme()" class="form-check-input toggleSpan mb-2" style="height: 1em !important; width: 2em !important;" type="checkbox" role="switch" id="themeSwitch"
            :checked="theme === 'Dark'">
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'ThemeSwitch',
    data() {
        return {
        }
    },
    computed:{
        ...mapGetters('theme', ['selectedTheme']),
        theme(){
            return this.selectedTheme
        }
    },
    created(){
        this.setPrimeVueTheme(this.theme);
    },
    methods: {
        ...mapActions('theme', ['toggleTheme']),
        switchTheme(){
            this.toggleTheme();
            this.setPrimeVueTheme(this.theme);
        },
        setLightPrimeVueTheme(){
            this.$primevue.changeTheme('my-theme-dark', 'my-theme-light', 'theme-link', () => {});
        },
        setDarkPrimeVueTheme(){
            this.$primevue.changeTheme('my-theme-light', 'my-theme-dark', 'theme-link', () => {});
        },
        setPrimeVueTheme(currentTheme){
            if(currentTheme === 'Dark'){
                this.setDarkPrimeVueTheme();
            }
            if(currentTheme === 'Light'){
                this.setLightPrimeVueTheme();
            }
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