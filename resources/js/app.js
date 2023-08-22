import './bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vue3-toastify/dist/index.css';

import { createI18n } from 'vue-i18n';
import aboutEn from '../lang/en/about.js';

import { createStore } from 'vuex';

const i18n = new createI18n({
    locale: 'en',
    messages: {
        en: aboutEn,
        pt: {}
    },
});

import { createApp } from 'vue';

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


//error code pages
import NotFound from './Pages/NotFound.vue';

const app = createApp();

app.use(i18n);

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
//modules
import theme from './store/theme.js';
import projects from './store/projects.js';
import user from './store/user';


const store = createStore({
    modules: {
        user,
        theme,
        projects
    }
});

store.dispatch('theme/setTheme');

app.use(store);

app.mount('#app');