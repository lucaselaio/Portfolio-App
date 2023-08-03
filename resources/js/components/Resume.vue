<template>
  <div class="w-full">
    <TittleHeader
      title="Lucas Azevedo"
      subTitle="Software Engineer"
      :centered="true"
    />
    <PageContent portrait="/images/IMG_4025.jpg">
      <template #body>
        <p>{{ text }}</p>
      </template>
    </PageContent>
  </div>
</template>
<script>
import TittleHeader from './common/TittleHeader.vue'
import PageContent from './common/PageContent.vue'
export default {
    name: 'Resume',
    data() {
      return {
        text: 'Take my technical skills to the next level and gain knowledge in new technologies;Achieve a leadership position where I can continue programming and mentoring development teams;Seek challenges in projects that allow me to grow professionally and contribute with innovative solutions for the market;'
      }
    },
    components: {
      TittleHeader,
      PageContent
    }

}
</script>
<style>
    
</style>