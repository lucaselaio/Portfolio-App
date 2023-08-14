<template>
    <div class="card cardBackground">
        <div class="card-body">
            <div class="cardHeader">
                <div class="title mb-1">
                    <img class="rounded" style="float: right;" width="70" height="70"
                        :src="`images/${transformImageName(project.project_name)}.jpg`" />
                    {{ project.project_name }}
                </div>
                <div class="dateRange"> {{ getDateRangeString(project.date_from, project.date_to) }}</div>

            </div>
            <hr>
            <div class="description">
                <div class="d-flex align-items-center">
                    {{ extractFromJson(project.about, 'about') }}
                </div>
            </div>
            <hr>
            <div class="techList d-flex flex-wrap">
                <div class="d-flex align-items-center">
                    <h6>Thecnologies used:</h6>
                </div>
                <LanguageIconPill v-for="(techDescription, techName) in project.technologies" :key="techName">
                    <img class="mb-2" width="40" height="40" :src="iconsUrl[techName]"/>
                    <p style="font-size: 12px;">{{ techDescription }}</p>
                </LanguageIconPill>
            </div>
        </div>
    </div>
</template>
<script>
import devIcons from '../../devIcons.js';
import LabelTag from './LabelTag.vue';
import LanguageIconPill from './LanguageIconPill.vue';

export default {
    name: 'CardProject',
    components: {
        LanguageIconPill,
        LabelTag
    },
    data() {
        return {
            iconsUrl: devIcons,
            title: 'Inseego',
            dateRange: 'From Nov - 2022',
            logo: 'inseego'
        }
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    mounted() {
        console.log(this.project)
    },
    methods: {
        transformImageName(imageName) {
            return imageName
                .toLowerCase()
                .replace(/ /g, '_')
                .replace(/logo.*/, '')
                + '_logo';
        },
        formatDate(date) {
            if (!date) {
                return 'Current';
            }
            const options = { year: 'numeric', month: 'short' };
            return new Date(date).toLocaleDateString('en-US', options);
        },
        getDateRangeString(startDate, endDate) {
            const fromMonthYear = this.formatDate(startDate);
            const toMonthYear = this.formatDate(endDate);
            return `From ${fromMonthYear} | ${toMonthYear || 'Current'}`;
        },
        extractFromJson(json, field){
            return JSON.parse(json)[field];
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

.dateRange {
    color: $darkGray;
}

.title {
    font-size: 40px;
    font-weight: 700;
}

.cardBackground {
    color: $darkGray;
    background-color: rgb(255, 255, 255, 0.07);
    box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.1);
    margin: 20px;
    border-radius: 20px !important;
}

.techList div {
    margin-right: 1em;
}
</style>