export const actions = {
    async nuxtServerInit({ state, commit, dispatch }) {
        const cookie = this.$cookies.get('auth');
        if (cookie) {
            commit('auth/setTokens', cookie.auth);
        }

        const { accessToken, refreshToken } = state.auth;
        if (accessToken && refreshToken) {
            try {
                await dispatch('auth/refresh');
            } catch (e) {
                commit('auth/logout');
            }
        }
    }
};