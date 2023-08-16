<template>
    <div>
        <PageContent>
            <CardProject v-for="(project, key) in projects" :key="key" :project="project" />
        </PageContent>
    </div>
</template>
<script>
import CardProject from '../components/common/CardProject.vue';
import PageContent from '../components/common/PageContent.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'WorkHistory',
    components: {
        CardProject,
        PageContent
    },
    computed: {
        ...mapGetters('projects', ['projects']),
    },
    methods: {
        ...mapActions('projects', ['fetchProjects']),
    },
    created() {
        this.fetchProjects();
    },
}
</script>
<style lang="scss"></style>