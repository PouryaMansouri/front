export const state = () => ({
    wishlist: [],
});

export const getters = {
};

export const mutations = {
    ADD_PRODUCT_TO_WISHLIST(state, product) {
        const wishlist = [...state.wishlist]
        const wishlistLength = wishlist.filter((wishlist) => wishlist.id === product.id).length

        if (wishlistLength === 0) {
            wishlist.push({ ...product })

            state.wishlist = [...wishlist]

            this.$cookies.set('wishlist', state.wishlist, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            })
        }
    },
    REMOVE_PRODUCT_FROM_WISHLIST(state, id) {
        const wishlist = [...state.wishlist]
        const filteredData = wishlist.filter((wishlist) => wishlist.id !== id)

        state.wishlist = [...filteredData]

        this.$cookies.set('wishlist', state.wishlist, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
    }
};

export const actions = {
    async addProductToWishlist({ commit }, product) {
        commit('ADD_PRODUCT_TO_WISHLIST', product)
    },
    async removeProductFromWishlist({ commit }, id) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', id)
    },
};