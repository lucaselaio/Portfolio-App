<template>
    <div class="d-flex justify-content-center align-items-center mt-5">
        <PageContent>
            <div class="card cardBackground login ">
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
                        <button type="button" @click="submitForm()" class="btn btn-light">Login <i
                                class="fa-solid fa-arrow-right-to-bracket"></i></button>
                    </div>
                </div>
            </div>
        </PageContent>
    </div>
</template>
<script>
import PageContent from '../../components/common/PageContent.vue';
import { toastMessage } from '../../util';
import { mapActions, mapMutations } from 'vuex';
export default {
    components: {
        PageContent
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions('user', ['setLoggedUser']),
        ...mapMutations('user', ['setUserName', 'setUserEmail']),
        async submitForm() {
            let formData = {
                'email': this.email,
                'password': this.password
            };
            axios.post('/authenticate', formData).then(response => {
                toastMessage('Logged in successfully!', "success");
                
                setTimeout(() => {
                    this.setUserName(response.data.success.name);
                    this.setUserEmail(response.data.success.email);
                }, 3000).then(() => {
                    window.location.href = '/about';
                });
            }).catch(error => {
                const errorMessage = error.response.data.error
                toastMessage(errorMessage, "error");
            });
        }
    }
}
</script>
<style lang="scss">
</style>