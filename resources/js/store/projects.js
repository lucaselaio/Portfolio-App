const state = {
    projects: [],
};

const mutations = {
    setProjects(state, projects) {
        state.projects = projects;
    }
};

const actions = {
    fetchProjects({ commit }) {
        axios.get('/projects')
            .then(response => {
                commit('setProjects', response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
};

const getters = {
    projects(state) {
        return state.projects;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};