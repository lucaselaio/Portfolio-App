<template>
    <PageContent>
        <div class="d-flex flex-column" >
            <Button @click.native="vueRouterManage('addProject')" class="mb-3" icon="pi pi-external-link" iconPos="right" label="Cadastrar projeto" severity="success"/>
            <Button @click.native="vueRouterManage('projectDetailsCreate')" class="mb-3" icon="pi pi-external-link" iconPos="right" label="Cadastrar detalhes de projeto" severity="success"/>
        </div>
    </PageContent>
</template>
<script>
import PageContent from '../components/common/PageContent.vue';

export default {
    components: { 
        PageContent
    },
    methods:{
        vueRouterManage(route){
            this.$router.push({ name: route });
        }
    }
}
</script>
<style lang="scss">
</style>