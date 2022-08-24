export const state = () => ({
    access: null,
    refresh: null,
    user: null
});

export const getters = {
    isAuthenticated(state) {
        return !!state.access;
    },
    
    getAccessToken(state) {
        return state.access;
    }
};

export const mutations = {
    setTokens(state, { access, refresh = null }) {
        state.access = access;

        if (refresh) {
            state.refresh = refresh;
        }
    },
    setUser(state, user) {
        state.user = user;
    },
    logout(state) {
        state.access = null;
        state.refresh = null;
        state.user = null;
    }
};

export const actions = {
    async login({ commit, dispatch }, { email, password }) {
        const res = await this.$axios.$post('accounts/login/', {
            email,
            password
        });
        commit('setTokens', res);
        await dispatch('getUser');
    },
    async register({ commit, dispatch }, {
        email,
        phone_number,
        first_name,
        last_name,
        password }) {
        const res = await this.$axios.$post('accounts/register/', {
            email,
            phone_number,
            first_name,
            last_name,
            password
        }, { isBasic: true });

        commit('setTokens', res);
        await dispatch('getUser');
    },
    async getUser({ commit }) {
        const res = await this.$axios.$get('accounts/details/');

        commit('setUser', res);
    },
    async refresh({ state, commit }) {
        const res = await this.$axios.$post('accounts/auth/token/refresh/', {
            refresh: state.refresh
        });

        commit('setTokens', res);
    }
};