require('./bootstrap');

import { createApp } from "vue";

import App from './App.vue';
// import axios from 'axios';

const app = createApp({});

registerBaseComponents(app);

app.component("app-component", App);
// app.config.globalProperties.$axios = axios;
app.mount('#app');
