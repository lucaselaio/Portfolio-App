<template>
    <page-content>
        <form>
            <Toast/>
            <div class="d-flex flex-column">
                <label>Project Name</label>
                <InputText v-model="project_name" />
            </div>
            <div class="d-flex flex-column">
                <label>Project URL</label>
                <InputText v-model="project_url" />
            </div>
            <div class="d-flex justify-content-around">
                <div class="d-flex flex-column ">
                    <label for="date_from" class="form-label">From</label>
                    <Calendar id="date_from" v-model="date_from" view="month" dateFormat="mm/yy" showIcon />
                </div>
                <div class="d-flex flex-column ">
                    <label for="date_to" class="form-label">To</label>
                    <Calendar id="date_to" v-model="date_to" view="month" dateFormat="mm/yy" showIcon />
                </div>
            </div>
            <div>
                <label for="about" class="form-label">About</label>
                <Editor id="about" v-model="about" editorStyle="height: 320px" />
            </div>
            <div class="mt-2 d-flex justify-content-center">
                <MultiSelect v-model="technologies" display="chip" :options="techs" optionLabel="name"
                    placeholder="Technologies" class="multiselect" />
            </div>
            <div class="mt-3 d-flex justify-content-center">
                <Button label="Submit" @click.native="submitForm" icon="pi pi-check" iconPos="right" :loading="loading" />
            </div>
        </form>
    </page-content>
</template>
<script>
import axios from 'axios';
import PageContent from '../../components/common/PageContent.vue';
export default {
    components: {
        PageContent
    },
    data() {
        return {
            loading: false,
            project_name: '',
            project_url: '',
            date_from: '',
            date_to: '',
            about: '',
            technologies: [],
            techs: [
                { name: 'Git', code: 'git' },
                { name: 'Javascript', code: 'javascript' },
                { name: 'Vue.js', code: 'vue' },
                { name: 'JQuery', code: 'jquery' },
                { name: 'PHP', code: 'php' },
                { name: 'Laravel', code: 'laravel' },
                { name: 'ZendFramework', code: 'zendframework' },
                { name: 'CakePHP', code: 'cakephp' },
                { name: 'Redis', code: 'redis' },
                { name: 'MySQL', code: 'mysql' },
                { name: 'HTML', code: 'html5' },
                { name: 'CSS', code: 'css' },
                { name: 'PHPUnit', code: 'phpunit' },
                { name: 'Jest', code: 'jest' },
                { name: 'Jira', code: 'jira' },
                { name: 'Docker', code: 'docker' },
                { name: 'BitBucket', code: 'bitbucket' },
                { name: 'GitLab', code: 'gitlab' }
            ]
        };
    },
    methods: {
        async submitForm() {
            this.loading = true;
            try {
                const formData = {
                    project_name: this.project_name,
                    date_from: this.date_from,
                    date_to: this.date_to,
                    about: this.about,
                    technologies: this.technologies
                }
                axios.post('/projects/store', formData).then(response => {
                    this.loading = false;
                    this.$toast.add({ severity: 'success', summary: 'Add Project', detail: 'Project created successfully!', life: 3000 });
                }).catch(error => {
                    this.loading = false;
                    const errorMessage = error.response.data.error
                    this.$toast.add({ severity: 'error', summary: 'Add Project', detail: errorMessage, life: 3000 });
                });
            }
            catch (error) {
                console.error('Error submitting form: ', error);
            }
        }
    },

}
</script>
<style lang="scss">
label {
    margin-top: 1.5em;
}

.multiselect {
    max-width: 100%;
}
</style>