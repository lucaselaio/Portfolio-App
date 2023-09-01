import './bootstrap';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vue3-toastify/dist/index.css';


//PrimeVue
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

// import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
// import "primevue/resources/themes/bootstrap4-dark-blue/theme.css";

// import "primevue/resources/themes/lara-light-indigo/theme.css";
// import "primevue/resources/themes/mdc-dark-indigo/theme.css";
// import "primevue/resources/themes/mdc-light-indigo/theme.css";


// import { createI18n } from 'vue-i18n';
// import aboutEn from '../lang/en/about.js';

import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// const i18n = new createI18n({
//     locale: 'en',
//     messages: {
//         en: aboutEn,
//         pt: {}
//     },
// });

import { createApp } from 'vue';

//PrimeVue components import
import Button from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmPopup from 'primevue/confirmpopup';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Editor from 'primevue/editor';
import MultiSelect from 'primevue/multiselect';
import Toast from 'primevue/toast';
import Menubar from 'primevue/menubar';


//components
import MainComponent from './components/MainComponent.vue';
import Navbar from './components/Navbar.vue';
import Footerbar from './components/Footerbar.vue';
import ThemeSwitch from './components/ThemeSwitch.vue';

//common components
import TittleHeader from './components/common/TittleHeader.vue';
import LabelTag from './components/common/LabelTag.vue';
import CardProject from './components/common/CardProject.vue'
import PageContent from './components/common/PageContent.vue';
import Portrait from './components/common/Portrait.vue';
import LanguageIconPill from './components/common/LanguageIconPill.vue';

//pages
import WorkHistory from './Pages/WorkHistory.vue';
import About from './Pages/About.vue';
import ProjectDetailsCreate from './Pages/ProjectDetails/ProjectDetailsCreate.vue';
import ProjectDetailsShow from './Pages/ProjectDetails/ProjectDetailsShow.vue';
import CreateLogin from './Pages/Login/CreateLogin.vue';
import Login from './Pages/Login/Login.vue';
import AdminPage from './Pages/AdminPage.vue';


//error code pages
import NotFound from './Pages/NotFound.vue';

const app = createApp();

// app.use(i18n);

//PrimeVue components
app.component('Button', Button);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('InputText', InputText);
app.component('Calendar', Calendar);
app.component('Editor', Editor);
app.component('MultiSelect', MultiSelect);
app.component('Toast', Toast);
app.component('Menubar', Menubar);

//components
app.component('main-component', MainComponent);
app.component('navbar', Navbar);
app.component('about', About);
app.component('tittle-header', TittleHeader);
app.component('page-content', PageContent);
app.component('portrait', Portrait);
app.component('footerbar', Footerbar);
app.component('label-tag', LabelTag);
app.component('work-history', WorkHistory);
app.component('card-project', CardProject);
app.component('language-icon-pill', LanguageIconPill);
app.component('theme-switch', ThemeSwitch);
app.component('project-details-create', ProjectDetailsCreate);
app.component('project-details-show', ProjectDetailsShow);
app.component('not-found', NotFound);
app.component('create-login', CreateLogin);
app.component('login', Login);
app.component('admin-page', AdminPage);

//modules
import theme from './store/theme.js';
import projects from './store/projects.js';
import user from './store/user';


const store = createStore({
    modules: {
        user,
        theme,
        projects
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
});

store.dispatch('theme/setTheme');

app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);

app.mount('#app');