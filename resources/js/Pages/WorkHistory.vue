<template>
    <div>
        <PageContent>
                <Card v-for="(project) in projects" class="mt-3">
                    <template #title>
                        {{ project.project_name }}
                        <img 
                            @click="openOnNewTab(project.project_url)" 
                            class="rounded"
                            style="float: right; cursor: pointer;" width="80" height="80"
                            :src="`images/${transformImageName(project.project_name)}.jpg`" 
                        />
                    </template>
                    <template #subtitle>
                        {{ getFormattedDateRange(project.date_from, project.date_to) }}
                        <hr>
                        <div class="techList d-flex flex-wrap align-items-center">
                            <div>
                                <h6>Thecnologies used:</h6>
                            </div>
                            <LanguageIconPill class="m-2 d-flex align-items-center" v-for="(techDescription, techName) in project.technologies" :key="techName">
                                <img width="30" height="30" :src="iconsUrl[techName]" />
                                <p style="font-size: 10px; margin: 0; margin-left: 5px;">{{ techDescription }}</p>
                            </LanguageIconPill>
                        </div>
                    </template>
                    <template #content>
                        <p style="text-align: justify;text-justify: inter-word;">
                            {{ getAboutText(project.about) }}
                        </p>
                        <router-link :to="`/project-details/${project.project_id}`">
                            <Button label="Read more" text></Button>
                        </router-link>
                    </template>
                </Card>
        </PageContent>
    </div>
</template>
<script>
import PageContent from '../components/common/PageContent.vue';
import { mapActions, mapGetters } from 'vuex';
import { extractFieldFromJson, getDateFromToString } from '../util.js';
import devIcons from '../devIcons';
export default {
    name: 'WorkHistory',
    data() {
        return {
            iconsUrl: devIcons
        }
    },
    components: {
        PageContent
    },
    computed: {
        ...mapGetters('projects', ['projects']),
    },
    methods: {
        ...mapActions('projects', ['fetchProjects']),
        
        getFormattedDateRange(startDate, endDate) {
            return getDateFromToString(startDate, endDate);
        },
        getAboutText(about){
            return extractFieldFromJson(about, 'about')
        },
        transformImageName(imageName) {
            if(imageName){
                return imageName
                .toLowerCase()
                .replace(/ /g, '_')
                .replace(/logo.*/, '')
                + '_logo';
            }
        },
        openOnNewTab(url) {
            window.open(url, '_blank');
        }
    },
    created() {
        this.fetchProjects();
    },
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}
</style>