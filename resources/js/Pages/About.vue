<template>
  <div class="w-full">
    <TittleHeader title="Lucas Azevedo" subTitle="Software Engineer" :centered="true" />
    <PageContent portrait="/images/profile.png">
      <p style="text-align: justify;">dsklajdflkas;jdfajd;fkajs;dfkjas;dfkj adkadkjf;ladjkf;akjdf;akdjf;kajd;flkjas;dfkjadkjHello, I'm Lucas Azevedo, a software developer passionate about the art of programming. I take pleasure in turning ideas into concrete and functional solutions through the code I write.<br><br>Since the beginning of my journey as a developer, I have discovered a true passion for creating complex and innovative systems through the magic of code. Throughout my professional career, I have been dedicated to delivering high-quality products, always striving for excellence in each delivery.<br><br> My career goals are driven by a constant pursuit of growth. I aspire to take my technical skills to the next level, acquiring knowledge in emerging technologies and expanding my skill set. Additionally, I aim to achieve a leadership position where I can both code and guide and mentor development teams. I believe that sharing my knowledge and experience will significantly contribute to the collective growth of colleagues and the team as a whole. I am always in search of challenges that allow me to grow professionally and bring innovative solutions to the market.<br><br> Projects that stimulate my creativity and enable me to apply my passion for coding to solve complex problems are the ones that attract me the most.<br><br> For me, career success is a continuous journey, and I am excited to face new challenges, learn from each experience, and make a positive impact on projects that improve people's lives. If you are looking for a dedicated, perfectionist, cautious, and passionate professional in the art of development, I am enthusiastic about joining a talented team and taking on new challenges in pursuit of mutual success.<br><br><br><br> I sincerely appreciate your attention and look forward to the opportunities for growth and collaboration that the future holds!</p>
    </PageContent>
  </div>
</template>
<script>
import TittleHeader from '../components/common/TittleHeader.vue'
import PageContent from '../components/common/PageContent.vue'
export default {
  name: 'Resume',
  data() {
    return {}
  },
  components: {
    TittleHeader,
    PageContent,
  }

}
</script>
<style></style>