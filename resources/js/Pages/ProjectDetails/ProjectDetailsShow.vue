<template>
    <PageContent>
        
        <router-link :to="{ name: 'work' }"><i class="navigationIcon fa-solid fa-circle-chevron-left"></i></router-link>
        <TittleHeader
            :title="project?.project?.project_name ?? ''" 
            :centered="true"
        >
            <span class="roleTitle">{{ project?.projectDetails?.role_title ?? '' }}</span>
        </TittleHeader>
        <div class="mt-5 experienceDescription" v-html="project?.projectDetails?.experience_description ?? ''">

        </div>
    </PageContent>
</template>
<script>
import PageContent from '../../components/common/PageContent.vue';
import TittleHeader from '../../components/common/TittleHeader.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ProjectDetailsShow',
    data(){
        return {}
    },
    methods: {
        ...mapActions('projects', ['fetchProject']),
    },
    computed: {
        ...mapGetters('projects', ['project']),
    },
    components: {
        PageContent,
        TittleHeader
    },
    created() {
        this.fetchProject(this.$route.params.id);
    },

}
</script>
<style lang="scss">
.experienceDescription{
    font-family: $titilliumWeb;
    font-size: 17px;
    text-align: justify;
}
.roleTitle{
    font-family: $titilliumWeb;
    font-size: 25px;
    font-weight: 600 !important;
}
</style>