import Vue from 'vue';
import * as VueI18n from 'vue-i18n';
import * as about from '../lang/en/about';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    messages: {
        en: about,
        pt: about
    },
});

export default i18n;
