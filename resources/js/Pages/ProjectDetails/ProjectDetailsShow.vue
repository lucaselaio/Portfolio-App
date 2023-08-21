<template>
    <PageContent>
        <a href="/work"><i class="navigationIcon fa-solid fa-circle-chevron-left"></i></a>
        <TittleHeader :title="title" :subTitle="rangeString" :centered="true">
            <span class="roleTitle">{{ projectDetailed.role_title }}</span>
        </TittleHeader>
        <div class="mt-5 experienceDescription" v-html="projectDetailed.experience_description">

        </div>
    </PageContent>
</template>
<script>
import PageContent from '../../components/common/PageContent.vue';
import TittleHeader from '../../components/common/TittleHeader.vue';
import { mapActions, mapGetters } from 'vuex';
import { getDateFromToString } from '../../util';

export default {
    name: 'ProjectDetailsShow',
    data() {
        return {
            title: '',
            rangeString: ''
        }
    },
    components: {
        PageContent,
        TittleHeader
    },
    props: {
        projectDetailed: {
            type: Object,
            required: true
        },
    },
    created() {
        this.fetchProject(this.projectDetailed.project_id);
    },
    watch: {
        project(val) {
            if (val) {
                this.title = val.project_name;
                this.rangeString = getDateFromToString(val.date_from, val.date_to);
            }
        }
    },
    computed: {
        ...mapGetters('projects', ['project']),
    },
    methods: {
        ...mapActions('projects', ['fetchProject']),
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