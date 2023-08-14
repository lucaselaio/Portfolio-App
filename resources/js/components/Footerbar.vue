<template>
    <div class="footer">
        <hr>
        <div class="footerTop">
            <div class="row text-center">
                <div class="col">
                    <p style="font-weight: 100;">Get <span style="font-weight: 700;">in Touch. </span><i
                            class="fa-regular fa-comments fa-beat-fade"></i> {{ '\n' }}So we can talk more about...</p>
                </div>
            </div>
        </div>
        <div class="contactIcons">
            <LabelTag 
                :with-reveal="true"
                text="lucas.elaio@gmail.com"
            >
                <template #icon>
                    <i class="fa-solid fa-envelope fa-xl"></i>
                </template>
            </LabelTag>
            <LabelTag 
                :with-reveal="true"
                text="(774) 285-2358"
            >
                <template #icon>
                    <i class="fa-solid fa-mobile-screen fa-xl"></i>
                </template>
            </LabelTag>
            <LabelTag 
                :with-reveal="true"
                text="linkedin.com/in/lucas-v-azevedo"
            >
                <template #icon>
                    <i class="fa-brands fa-linkedin fa-xl"></i>
                </template>
            </LabelTag>
        </div>
    </div>
</template>
<script>

import LabelTag from './common/LabelTag.vue';

export default {
    name: 'Footerbar',
    components: {
        LabelTag
    }
}
</script>
<style lang="scss" scoped>
hr {
    color: $mediumGray;
}

p {
    white-space: pre;
}

.footerTop{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
}
.contactIcons {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding-top: 1em;
    height: 5em;
}

.footer {
    font-family: $outfit;
    color: $darkGray;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    padding: 10px;
}
</style>