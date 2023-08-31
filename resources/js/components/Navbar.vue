<template>
    <Menubar :class="$style.myMenuBar" :model="menuItems">
        <template #end>
            <div class="d-flex align-items-center">
                <div class="menuItem">
                    <!-- <a href="https://www.linkedin.com/in/lucas-v-azevedo/" target="_blank" class="nav-link">
                        <i class="pi pi-linkedin" style="font-size: 1.5rem; color: #0b66c2;"></i>
                    </a> -->
                </div>
                <div class="menuItem">
                    <ThemeSwitch></ThemeSwitch>
                </div>
                <div v-if="Object.keys(user).length > 0" class="menuItem">
                    <Button @click="logout($event)" icon="pi pi-sign-out" severity="success" text rounded />
                    <ConfirmPopup :class="$style.popup"></ConfirmPopup>
                </div>
                <div v-else class="menuItem">
                    <Button @click.native="this.$router.push({ name: 'login' })" icon="pi pi-sign-in" severity="success"
                        text rounded />
                </div>
            </div>
        </template>
    </Menubar>
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
            items: [],
            isLoading: true,
        }
    },
    computed: {
        ...mapGetters('user', ['user']),
        menuItems() {
            const baseItems = [
                {
                    label: 'About Me',
                    icon: 'pi pi-user',
                    to: { name: 'about' },
                },
                {
                    label: 'Work History',
                    icon: 'pi pi-briefcase',
                    to: { name: 'work' }
                }
            ];
            if (Object.keys(this.user).length > 0) {
                return [
                    ...baseItems,
                    {
                        label: 'Admin Page',
                        icon: 'pi pi-cog',
                        to: { name: 'admin' },
                    }
                ];
            }

            return baseItems;
        }
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
        }
    },
}
</script>

<style lang="scss" scoped>

nav {
    font-size: 20px;
}

.menuItem {
    margin-right: 10px;
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