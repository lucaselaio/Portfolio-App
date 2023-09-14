<template>
    <div class="flex align-items-center justify-content-center" style="padding-top: 15vh;">
        <Toast />
        <PageContent>
            <Card class="card cardBackground login">
                <template #title>
                    <div class="mb-1 text-center">
                        Login
                    </div>
                </template>
                <hr>
                <template #content>
                    <div class="description">
                        <div class="mb-5">
                            <span class="p-float-label">
                                <InputText class="w-100" id="email" v-model="email" />
                                <label for="email">Email</label>
                            </span>
                        </div>
                        <div class="flex justify-content-center">
                            <span class="p-float-label">
                                <Password class="w-100" v-model="password" :feedback="false" toggleMask />
                                <label for="password">Password</label>
                            </span>
                        </div>
                    </div>
                    <div class="text-center mt-4">
                        <Button @click.native="submitForm()" icon="pi pi-sign-in" iconPos="right" label="Login"
                            severity="success" :loading="loading" />
                    </div>
                </template>
            </Card>
        </PageContent>
    </div>
</template>
<script>
import PageContent from '../../components/common/PageContent.vue';
import { toastMessage } from '../../util';
import { mapMutations } from 'vuex';
export default {
    components: {
        PageContent
    },
    data() {
        return {
            loading: false,
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapMutations('user', ['setUser']),
        async submitForm() {
            this.loading = true;
            let formData = {
                'email': this.email,
                'password': this.password
            };
            await axios.post('/authenticate', formData).then(response => {
                this.loading = false;
                this.$toast.add({ severity: 'success', summary: 'Login', detail: 'Logged in successfully!', life: 3000 });
                this.setUser(response.data.success);
                this.$router.push(this.$route.query.redirect || '/about');
            }).catch(error => {
                this.loading = false;
                const errorMessage = error.response.data.error
                this.$toast.add({ severity: 'error', summary: 'Login', detail: errorMessage, life: 3000 });
            });
        }
    },
}
</script>
<style lang="scss">
.login {
    width: 20em;
}
</style>