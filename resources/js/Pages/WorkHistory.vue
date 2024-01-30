<template>
    <div>
        <PageContent>
            <Timeline :value="projects" align="alternate" class="customized-timeline">
            <template #content="slotProps">
                <Card class="mt-3">
                    <template #title>
                        {{ slotProps.item.project_name }}
                        <img @click="openOnNewTab(slotProps.item.project_url)" class="rounded"
                        style="cursor: pointer;" width="80" height="80"
                        :src="`images/${transformImageName(slotProps.item.project_name)}.jpg`" />
                        
                    </template>
                    <template #subtitle>
                        {{ getFormattedDateRange(slotProps.item.date_from, slotProps.item.date_to) }}
                    </template>
                    <template #content>
                        <p style="text-align: justify;text-justify: inter-word;">
                            {{ getAboutText(slotProps.item.about) }}
                        </p>
                        <router-link :to="`/project-details/${slotProps.item.project_id}`">
                            <Button label="Read more" text></Button>
                        </router-link>
                    </template>
                </Card>
            </template>
        </Timeline>
        </PageContent>
    </div>
</template>
<script>
import PageContent from '../components/common/PageContent.vue';
import { mapActions, mapGetters } from 'vuex';
import { extractFieldFromJson, getDateFromToString } from '../util.js';
export default {
    name: 'WorkHistory',
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