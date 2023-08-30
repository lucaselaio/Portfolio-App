<template>
    <nav class="w-full navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'work' }">Work History</router-link>
                    </li>

                </ul>
            </div>
            <div class="d-flex" role="search">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/lucas-v-azevedo/" target="_blank" class="nav-link"><i
                                class="fa-brands fa-linkedin fa-lg"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" target="_blank" class="nav-link"><i class="fa-brands fa-square-github fa-lg"></i></a>
                    </li>
                    <div class="vl"></div>
                    <li class="nav-item d-flex align-items-center">
                        <ThemeSwitch></ThemeSwitch>
                    </li>

                    <li v-if="Object.keys(user).length > 0" style="cursor: pointer;" class="nav-item d-flex align-items-center logout">
                        <!-- <span @click="logout()">Logout</span> -->
                        <Button @click="logout($event)" icon="pi pi-sign-out" severity="success" text rounded />
                        <ConfirmPopup :class="$style.popup"></ConfirmPopup>
                    </li>

                    <li v-if="Object.keys(user).length > 0" class="nav-item d-flex align-items-center">
                        <Button @click="this.$router.push({ name: 'admin' })" icon="pi pi-cog" severity="secondary" rounded/>
                    </li>
                    
                    <li v-else style="cursor: pointer;" class="nav-item d-flex align-items-center logout">
                        <!-- <span @click="logout()">Logout</span> -->
                        <Button @click.native="this.$router.push({ name: 'login' })" icon="pi pi-sign-in" severity="success" text rounded />
                    </li>
                    

                </ul>

            </div>

        </div>
    </nav>
</template>

<script>
import ThemeSwitch from './ThemeSwitch.vue';
import ConfirmPopup from 'primevue/confirmpopup';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'Navbar',
    components: {
        ThemeSwitch,
        ConfirmPopup
    },
    data() {
        return {
            isLoading: true,
            auth: false
        }
    },
    computed:{
        ...mapGetters('user', ['user']),
    },
    methods: {
        ...mapMutations('user', ['setUser']),
        logout() {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to logout?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios.get('/logout')
                        .then(response => {
                            this.setUser({});
                            this.$router.push(this.$route.query.redirect || '/login');
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            });
        },
    },
}
</script>

<style lang="scss" scoped>
nav {
    font-size: 20px;
}

.logout {
    padding: 0px 20px;
}
</style>
<style module>
.popup {
    z-index: 1050 !important;
    --overlayArrowLeft: 265px !important;
}
</style>