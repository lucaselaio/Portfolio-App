<template>
    <div>
        <PageContent>
            {{ projectDetailed.experience_description }}
        </PageContent>  
    </div>
</template>
<script>
import PageContent from '../../components/common/PageContent.vue';

export default {
    name: 'ProjectDetailsShow',
    data(){
        return{
            experience_description: '',
        }
    },
    props: {
        projectDetailed: {
            type: Object,
            required: true
        },
    },
    mounted() {
        this.experience_description = this.projectDetailed.experience_description;
    },
    components: { 
        PageContent
    }
}
</script>
<style lang="scss">
    
</style>