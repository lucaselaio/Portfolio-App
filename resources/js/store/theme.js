const state = {
    selectedTheme: 'Light',
    iconClass: 'pi pi-sun'
};

const mutations = {
    setSelectedTheme(state, selectedTheme) {
        state.selectedTheme = selectedTheme;
        localStorage.setItem('selectedTheme', selectedTheme);
    },
    setIconClass(state, iconClass){
        state.iconClass = iconClass;
        localStorage.setItem('iconClass', iconClass);
    }
};

const actions = {
    toggleTheme({ commit, dispatch }) {
        commit('setSelectedTheme', localStorage.getItem('selectedTheme') === 'Light' ? 'Dark' : 'Light');
        commit('setIconClass', localStorage.getItem('selectedTheme') === 'Light' ? 'pi pi-sun' : 'pi pi-moon');
        dispatch('setTheme');
    },
    setTheme({commit}) {
        const themeDiv = document.getElementById('bodyApp');
        const removeClass = localStorage.getItem('selectedTheme') === 'Light' ? 'darkTheme' : 'lightTheme';
        const addClass = localStorage.getItem('selectedTheme') === 'Light' ? 'lightTheme' : 'darkTheme';
        commit('setIconClass', localStorage.getItem('selectedTheme') === 'Light' ? 'pi pi-sun' : 'pi pi-moon');
        themeDiv.classList.remove(removeClass);
        themeDiv.classList.add(addClass);
    }
};

const getters = {
    selectedTheme(state) {
        return state.selectedTheme;
    },
    iconClass(state) {
        return state.iconClass;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};