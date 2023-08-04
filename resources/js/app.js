import './bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

import { createI18n } from 'vue-i18n';
import aboutEn from '../lang/en/about.js';

const i18n = new createI18n({
    locale: 'en',
    messages: {
        en: aboutEn,
        pt: {}
    },
});

import { createApp } from 'vue';

import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import TittleHeader from './components/common/TittleHeader.vue';
import PageContent from './components/common/PageContent.vue';
import Portrait from './components/common/Portrait.vue';
import Footerbar from './components/Footerbar.vue';
import LabelTag from './components/common/LabelTag.vue';


const app = createApp();

app.use(i18n);

app.component('navbar', Navbar);
app.component('about', About);
app.component('tittle-header', TittleHeader);
app.component('page-content', PageContent);
app.component('portrait', Portrait);
app.component('footerbar', Footerbar);
app.component('label-tag', LabelTag);
app.mount('#app');