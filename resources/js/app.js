import './bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

import { createApp } from 'vue';

import Navbar from './components/Navbar.vue';
import Resume from './components/Resume.vue';
import TittleHeader from './components/common/TittleHeader.vue'
import PageContent from './components/common/PageContent.vue'
import Portrait from './components/common/Portrait.vue'

const app = createApp();

app.component('navbar', Navbar);
app.component('resume', Resume);
app.component('tittle-header', TittleHeader);
app.component('page-content', PageContent);
app.component('portrait', Portrait);
app.mount('#app');