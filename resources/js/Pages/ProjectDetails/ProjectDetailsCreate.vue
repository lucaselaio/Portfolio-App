<template>
    <div>
        <form>
            <label for="project_id" class="form-label">Project</label>
            <select required class="form-select" id="project_id" v-model="project_id">
                <option selected></option>
                <option v-for="project in projects" :key="project.project_id" :value="project.project_id">{{
                    project.project_name }}</option>
            </select>

            <label for="role_title" class="form-label">Role Title</label>
            <input required type="text" class="form-control" id="role_title" v-model="role_title">

            <label for="experience_description" class="form-label">Experience description</label>
            <textarea style="height: 210px;" class="form-control richText" id="experience_description"
                v-model="experience_description"></textarea>

            <label for="squad_structure" class="form-label">Squad structure</label>
            <textarea class="form-control" id="squad_structure" v-model="squad_structure"></textarea>

            <label for="modality" class="form-label">Modality</label>
            <input type="text" class="form-control" id="modality" v-model="modality">

            <label for="region" class="form-label">From where</label>
            <input type="text" class="form-control" id="region" v-model="region">

            <label for="back_end" class="form-label">Technologies: BACK-END</label>
            <p style="font-size: small; color: gray;">Split using "," (Foo, Bar, ...)</p>
            <input type="text" class="form-control" id="back_end" v-model="back_end">

            <label for="front_end" class="form-label">Technologies: FRON-END</label>
            <p style="font-size: small; color: gray;">Split using "," (Foo, Bar, ...)</p>
            <input type="text" class="form-control" id="front_end" v-model="front_end">

            <label for="tools" class="form-label">Technologies: DEV-TOOLS</label>
            <p style="font-size: small; color: gray;">Split using "," (Foo, Bar, ...)</p>
            <input type="text" class="form-control" id="tools" v-model="tools">

            <label for="project_highlights" class="form-label">Project Hightlights</label>
            <input type="text" class="form-control" id="project_highlights" v-model="project_highlights">

            <label for="other_team_collab" class="form-label">Other Teams Collaboration</label>
            <input type="text" class="form-control" id="other_team_collab" v-model="other_teams_collab">

            <div class="text-center mt-4">
                <button type="button" @click="submitForm()" class="btn btn-light">Submit</button>
            </div>

        </form>
    </div>
</template>
<script>
import { toastMessage } from '../../util.js';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'ProjectDetailsCreate',
    data() {
        return {
            project_id: '',
            role_title: '',
            region: '',
            back_end: '',
            front_end: '',
            tools: '',
            project_highlights: '',
            other_teams_collab: '',
            modality: '',
            experience_description: '',
            squad_structure: `{'size': '','structure': ''}`,
        }
    },
    computed: {
        ...mapGetters('projects', ['projects']),
    },
    methods: {
        ...mapActions('projects', ['fetchProjects']),
        async submitForm() {
            if (this.project_id == '' || this.project_id == null) {
                toastMessage("Fill out all the required fields", "warning")
                return false;
            }

            try {

                const back_end = this.back_end ?? '';
                const front_end = this.front_end ?? '';
                const tools = this.tools ?? '';

                let formData = {
                    'project_id': this.project_id,
                    'role_title': this.role_title,
                    'experience_description': this.experience_description,
                    'squad_structure': this.squad_structure,
                    'region': this.region,
                    'modality': this.modality,
                    'tech_and_tools': {
                        back_end,
                        front_end,
                        tools
                    },
                    'project_highlights': this.project_highlights,
                    'other_teams_collab': this.other_teams_collab,
                };
                toastMessage('Details saved successfully!', 'loading', null, axios.post('/project_detailed', formData));
                // await axios.post('/project_detailed', formData);

            } catch (error) {
                console.error('Error submitting form: ', error);
            }
        }
    },
    created() {
        this.fetchProjects();
    },
    mounted() {
    }
}
</script>
<style lang="scss">
label {
    margin-top: 1.5em;
}
</style>