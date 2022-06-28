export const state = () => ({
    accessToken: null,
    refreshToken: null
});

export const getters = {
    isAuthenticated(state) {
        return !!state.accessToken;
    }
};

export const mutations = {
    setTokens(state, { accessToken, refreshToken = null }) {
        state.accessToken = accessToken;

        if (refreshToken) {
            state.refreshToken = refreshToken;
        }
    },
    setUser(state, user) {
        state.user = user;
    },
    logout(state) {
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
    }
};

export const actions = {
    async login({ commit, dispatch }, { username, password }) {
        const res = await this.$axios.$post('/auth/login', {
            username,
            password
        });

        commit('setTokens', res);
        await dispatch('getUser');
    },
    async register({ commit, dispatch }, { username, password }) {
        const res = await this.$axios.$post('/auth/register', {
            username,
            password
        });

        commit('setTokens', res);
        await dispatch('getUser');
    },
    async getUser({ commit }) {
        const res = await this.$axios.$get('/auth/user');

        commit('setUser', res);
    },
    async refresh({ state, commit }) {
        const res = await this.$axios.$post('/auth/refresh', {
            refreshToken: state.refreshToken
        });

        commit('setTokens', res);
    }
};