<template>
  <div class="w-full">
    <TittleHeader title="Lucas Azevedo" subTitle="Software Engineer" :centered="true" />
    <PageContent portrait="/images/crazy.png">
      <template #body>
        <p style="text-align: justify;" v-html="$t('presentationText')"></p>
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
    return {}
  },
  components: {
    TittleHeader,
    PageContent
  }

}
</script>
<style></style>