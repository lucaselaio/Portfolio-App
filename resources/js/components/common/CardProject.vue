<template>
    <div class="card cardBackground">
        <div class="card-body">
            <div class="cardHeader">
                <div class="title mb-1">
                    <img @click="openOnNewTab(project.project_url)" class="rounded"
                        style="float: right; margin: 0.3em; cursor: pointer;" width="90" height="90"
                        :src="`images/${transformImageName(project.project_name)}.jpg`" />
                    {{ project.project_name }}
                </div>
                <div class="dateRange"> {{ rangeString }}</div>

            </div>
            <hr>
            <div class="description">
                <div class="d-flex align-items-center">
                    {{ about }}
                </div>
            </div>
            <hr>
            <div class="techList d-flex flex-wrap">
                <div class="d-flex align-items-center">
                    <h6>Thecnologies used:</h6>
                </div>
                <LanguageIconPill v-for="(techDescription, techName) in project.technologies" :key="techName">
                    <img class="mb-2" width="40" height="40" :src="iconsUrl[techName]" />
                    <p style="font-size: 12px;">{{ techDescription }}</p>
                </LanguageIconPill>
            </div>
            <div class="d-flex justify-content-end">
                <router-link :to="`/project_detailed/${project.project_id}`">See work experience detailed<i class="fa-solid fa-circle-chevron-right"></i></router-link>
                <!-- <a :href="`/project_detailed/${project.project_id}`">See work experience detailed <i class="fa-solid fa-circle-chevron-right"></i></a> -->
            </div>
        </div>
    </div>
</template>
<script>
import devIcons from '../../devIcons.js';
import LabelTag from './LabelTag.vue';
import LanguageIconPill from './LanguageIconPill.vue';
import { extractFieldFromJson, getDateFromToString } from '../../util.js'

export default {
    name: 'CardProject',
    components: {
        LanguageIconPill,
        LabelTag
    },
    data() {
        return {
            iconsUrl: devIcons,
            about: '',
            rangeString: ''
        }
    },
    mounted(){
        this.about = extractFieldFromJson(this.project.about, 'about')
        this.rangeString = getDateFromToString(this.project.date_from, this.project.date_to);
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    methods: {
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
    }
}
</script>
<style lang="scss" scoped>

.card {
    font-family: $titilliumWeb;
    margin-bottom: 2em;
}

.cardHeader {
    margin-right: 0em;
}

.title {
    font-size: 40px;
    font-weight: 700;
}

.cardBackground {
    margin: 20px;
    border-radius: 20px !important;
}

.techList div {
    margin-right: 1em;
}
</style>