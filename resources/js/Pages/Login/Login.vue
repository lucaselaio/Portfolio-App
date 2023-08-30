<template>
    <div class="d-flex justify-content-center align-items-center mt-5">
        <Toast />
        <PageContent>
            <div class="card cardBackground login">
                <div class="cardHeader mt-3">
                    <div class="title mb-1 text-center fs-3">
                        Login
                    </div>
                </div>
                <hr>
                <div class="card-body">
                    <div class="description">
                        <div class="mb-2">
                            <label for="email" class="form-label">Email address</label>
                            <input v-model="email" type="email" class="form-control" id="email"
                                placeholder="name@example.com">
                        </div>
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" id="password" class="form-control"
                            aria-describedby="passwordHelpBlock">
                    </div>
                    <div class="text-center mt-4">
                        <Button @click.native="submitForm()" icon="pi pi-sign-in" iconPos="right" label="Login" severity="success" :loading="loading"/>
                    </div>
                </div>
            </div>
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