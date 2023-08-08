<template>
    <div>
        <PageContent>
            <template #body>
                <CardProject/>
                <CardProject style="float:right;"/>
                <CardProject/>
                <CardProject style="float:right;"/>
            </template>
        </PageContent>
    </div>
</template>
<script>
import CardProject from '../components/common/CardProject.vue';
import PageContent from '../components/common/PageContent.vue';
export default {
    name: 'WorkHistory',
    components: { 
        CardProject, 
        PageContent 
    }
}
</script>
<style lang="scss">
    
</style>