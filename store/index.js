export const actions = {
    async nuxtServerInit({ state, commit, dispatch }) {
        const cookie = this.$cookies.get('auth');
        if (cookie) {
            commit('auth/setTokens', cookie.auth);
        }

        const { access, refresh } = state.auth;
        if (access && refresh) {
            try {
                await dispatch('auth/refresh');
            } catch (e) {
                commit('auth/logout');
            }
        }
    }
};