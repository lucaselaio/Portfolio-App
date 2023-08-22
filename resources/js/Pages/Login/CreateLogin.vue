<template>
    <div class="d-flex justify-content-center align-items-center mt-5">
        <PageContent>
            <div class="card cardBackground login ">
                <div class="card-body">
                    <div class="cardHeader">
                        <div class="title mb-1 text-center fs-3">
                            Create Login
                        </div>
                    </div>
                    <hr>
                    <div class="description">
                        
                        <div class="mb-2">
                            <label for="name" class="form-label">Name</label>
                            <input v-model="name" type="text" class="form-control" id="name">
                        </div>
                        <div class="mb-2">
                            <label for="email" class="form-label">Email address</label>
                            <input v-model="email" type="email" class="form-control" id="email"
                                placeholder="name@example.com">
                        </div>
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" id="password" class="form-control"
                            aria-describedby="passwordHelpBlock">
                        <label for="passwordConfirmation" class="form-label">Confirm password</label>
                        <input v-model="passwordConfirmation" type="password" id="passwordConfirmation" class="form-control"
                            aria-describedby="passwordHelpBlock">
                    </div>
                    <div class="text-center mt-4">
                        <button type="button" @click="submitForm()" class="btn btn-light">Submit</button>
                    </div>
                </div>
            </div>
        </PageContent>
    </div>
</template>
<script>
import { toastMessage } from '../../util';
import PageContent from '../../components/common/PageContent.vue';

export default {
    components: {
        PageContent,
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            passwordMatch: false
        }
    },
    methods: {
        async submitForm() {
            if (this.password !== this.passwordConfirmation) {
                toastMessage("Password does not match", "warning")
                return false;
            }
            try {
                let formData = {
                    'name': this.name,
                    'email': this.email,
                    'password': this.password
                };
                toastMessage('User created successfully!', 'loading', null, axios.post('/login', formData));


            } catch (error) {
                console.error('Error submitting form: ', error);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    width: 25em;
    padding: 0.5em;
}
</style>