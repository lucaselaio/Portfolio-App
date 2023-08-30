const state = {
    user: {}
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    }
};

const actions = {
    setLoggedUser({commit}, user) {
        commit('setUser', user);
    }
};

const getters = {
    user(state) {
        return state.user;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};