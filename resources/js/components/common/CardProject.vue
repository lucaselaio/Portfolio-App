<template>
    <div class="card cardBackground">
        <div class="card-body">
            <div class="cardHeader mr-4">
                <div class="title mb-1">{{ title }}</div>
                <div class="dateRange"> {{ dateRange }}</div>
            </div>
            <hr>
            <div class="description">
                <div  class="d-flex align-items-center">
                    Inseego Corp. (Nasdaq: INSG) is an industry pioneer in smart device-to-cloud solutions that extend the 5G network edge, enabling broader 5G coverage, multi-gigabit data speeds, low latency and strong security to deliver highly reliable internet access. Our innovative mobile broadband and fixed wireless access (FWA) solutions incorporate the most advanced technologies (including 5G, 4G LTE, Wi-Fi 6 and others) into a wide range of products that provide robust connectivity indoors, outdoors and in the harshest industrial environments. Designed and developed in the USA, Inseego products and SaaS solutions build on the company’s patented technologies to provide the highest quality 4G and 5G connectivity for service providers, enterprises, and government entities worldwide.
                </div>
            </div>
            <hr>
            <div class="techList">
                <div  class="d-flex align-items-center">
                    <h6>Thecnologies used:</h6>
                </div>
                <LanguageIconPill>
                    <img class="mb-2" width="40" height="40" :src="iconsUrl.php" />
                    <p style="font-size: 12px;">PHP</p>
                </LanguageIconPill>
                <LanguageIconPill>
                    <img class="mb-2" width="40" height="40" :src="iconsUrl.javascript" />
                    <p style="font-size: 12px;">Javascript</p>
                </LanguageIconPill>
                <LanguageIconPill>
                    <img class="mb-2" width="40" height="40" :src="iconsUrl.vue" />
                    <p style="font-size: 12px;">Vue.js</p>
                </LanguageIconPill>
                <LanguageIconPill>
                    <img class="mb-2" width="40" height="40" :src="iconsUrl.jquery" />
                    <p style="font-size: 12px;">JQuery</p>
                </LanguageIconPill>
                <LanguageIconPill>
                    <img class="mb-2" width="40" height="40" :src="iconsUrl.git" />
                    <p style="font-size: 12px;">Git</p>
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
    data() {
        return {
            iconsUrl: devIcons,
            title: 'Inseego',
            dateRange: 'From Nov - 2022'    
        }
    },
    props: {
        technologyList: {
            type: Object,
            required: false,
            default: () => {
                return {};
            }
        }
    },
    components: {
        LanguageIconPill,
        LabelTag
    }
}
</script>
<style lang="scss" scoped>
.card{
    font-family: $outfit;
    width: 90%;
    margin-bottom: 2em;
}
.dateRange{
    color: $white;
}
.title{
    font-size: 40px;
    font-weight: 700;
}
.cardBackground {
    color: $white;
    background-color: #ffffff30;
}
.techList{
    display: flex;
}
.techList div{
    margin-right: 1em;
}
</style>