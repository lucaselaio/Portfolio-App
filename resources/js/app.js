import './bootstrap';

import { createApp } from 'vue';

import App from './components/App.vue';
import Navbar from './components/Navbar.vue';

const app = createApp();

app.component('app', App);
app.component('navbar', Navbar);
app.mount('#app');