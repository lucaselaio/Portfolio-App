const state = {
    selectedTheme: 'Light'
};

const mutations = {
    setSelectedTheme(state, selectedTheme) {
        state.selectedTheme = selectedTheme;
        localStorage.setItem('selectedTheme', selectedTheme);
    }
};

const actions = {
    toggleTheme({ commit, dispatch }) {
        commit('setSelectedTheme', localStorage.getItem('selectedTheme') === 'Light' ? 'Dark' : 'Light');
        dispatch('setTheme');
    },
    setTheme() {
        const themeDiv = document.getElementById('app');
        const removeClass = localStorage.getItem('selectedTheme') === 'Light' ? 'darkTheme' : 'lightTheme';
        const addClass = localStorage.getItem('selectedTheme') === 'Light' ? 'lightTheme' : 'darkTheme';
        themeDiv.classList.remove(removeClass);
        themeDiv.classList.add(addClass);
    }
};

const getters = {
    selectedTheme(state) {
        return state.selectedTheme;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};