import './bootstrap';

import { createApp } from 'vue';

import Navbar from './components/Navbar.vue';
import Resume from './components/Resume.vue';
import TittleHeader from './components/common/TittleHeader.vue'

const app = createApp();

app.component('navbar', Navbar);
app.component('resume', Resume);
app.component('tittle-header', TittleHeader);
app.mount('#app');