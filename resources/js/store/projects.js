const state = {
    projects: [],
    project: {}
};

const mutations = {
    setProjects(state, projects) {
        state.projects = projects;
    },
    setProject(state, project) {
        state.project = project;
    }
};

const actions = {
    fetchProjects({ commit }) {
        axios.get('/projects/get')
            .then(response => {
                commit('setProjects', JSON.parse(response.data.success));
            })
            .catch(error => {
                console.error(error);
            });
    },
    fetchProject({ commit }, id) {
        axios.get(`/project-details/get-details/${id}`)
            .then(response => {
                commit('setProject', response.data.success);
                return response.data.success;
            })
            .catch(error => {
                console.error(error);
                return;
            });
    },
    
};

const getters = {
    projects(state) {
        return state.projects;
    },
    project(state) {
        return state.project;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};