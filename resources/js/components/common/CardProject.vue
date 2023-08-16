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
                    <img class="mb-2" width="40" height="40" :src="iconsUrl[techName]" />
                    <p style="font-size: 12px;">{{ techDescription }}</p>
                </LanguageIconPill>
            </div>
            <div class="d-flex justify-content-end">
                <a :href="`/project_detailed/${project.project_id}`">See work experience detailed <i class="fa-solid fa-circle-right"></i></a>
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
                return null;
            }
            const options = { year: 'numeric', month: 'short' };
            return new Date(date).toLocaleDateString('en-US', options);
        },

        calculateMonthDifference(startDate, endDate) {
            const start = new Date(startDate);
            const end = endDate ? new Date(endDate) : new Date();
            return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        },

        getDateRangeString(startDate, endDate) {
            const fromMonthYear = this.formatDate(startDate);
            const diffInMonths = this.calculateMonthDifference(startDate, endDate);

            if (!endDate) {
                const timeString = `( ${diffInMonths} months )`;
                return `From ${fromMonthYear} | Current - ${timeString}`;
            }

            const toMonthYear = this.formatDate(endDate);

            if (diffInMonths >= 12) {
                const numberOfYears = Math.floor(diffInMonths / 12);
                const remainingMonths = diffInMonths % 12;
                const yearsString = numberOfYears > 1 ? `${numberOfYears} years` : `${numberOfYears} year`;
                const monthsString = remainingMonths > 1 ? `${remainingMonths} months` : `${remainingMonths} month`;
                const timeString = `( ${yearsString} and ${monthsString} )`;
                return `From ${fromMonthYear} | ${toMonthYear} - ${timeString}`;
            }

            const timeString = `( ${diffInMonths} months )`;
            return `From ${fromMonthYear} | ${toMonthYear} - ${timeString}`;
        },
        extractFromJson(json, field) {
            return JSON.parse(json)[field];
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