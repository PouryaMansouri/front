export const state = () => ({
    affiliateCode: 0,
});

export const getters = {
};

export const mutations = {
    ADD(state, code) {
        state.affiliateCode = code
        this.$cookies.set('affiliate_code', state.affiliateCode, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30
        })
    },
    REMOVE(state) {
        state.affiliateCode = 0

        this.$cookies.set('affiliate_code', state.affiliateCode, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30
        })
    }
};

export const actions = {
    async addAffiliate({ commit }, code) {
        commit('ADD', code)
    },
    async removeAffiliate({ commit }) {
        commit('REMOVE')
    },
};