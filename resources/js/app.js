import './bootstrap';

import { createApp } from 'vue';

import Navbar from './components/Navbar.vue';
import Resume from './components/Resume.vue';

const app = createApp();

app.component('navbar', Navbar);
app.component('resume', Resume);
app.mount('#app');