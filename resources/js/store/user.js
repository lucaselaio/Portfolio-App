const state = {
    userName: '',
    userEmail: ''
};

const mutations = {
    setUserName(state, userName) {
        state.userName = userName;
        localStorage.setItem('userName', userName);
    },
    setUserEmail(state, userEmail){
        state.userEmail = userEmail;
        localStorage.setItem('userEmail', userEmail);
    }
};

const actions = {
    setLoggedUser({commit}) {
        commit('setUserName', localStorage.getItem('setUserName'));
        commit('setUserEmail', localStorage.getItem('setUserEmail'));
    }
};

const getters = {
    userName(state) {
        return state.userName;
    },
    userEmail(state) {
        return state.userName;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};