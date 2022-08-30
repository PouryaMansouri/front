export const state = () => ({
    wishlist: [],
});

export const getters = {
    totalWishlist: (state) => state.wishlist.reduce((currentQuantiy, wishlist) => currentQuantiy + wishlist.quantity, 0),
    totalAmount: (state) => state.wishlist.reduce((currentAmount, wishlist) => currentAmount + wishlist.quantity * wishlist.price, 0),
};

export const mutations = {
    SET_WISHLIST(state, wishlist) {
        state.wishlist = [...wishlist]
    },
    RESET_WISHLIST(state) {
        state.wishlist = []

        this.$cookies.set('wishlist', state.wishlist, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
    },
    ADD_PRODUCT_TO_WISHLIST(state, product) {
        const wishlist = [...state.wishlist]
        const wishlistIndex = wishlist.findIndex((wishlist) => wishlist.id === product.id)

        if (wishlistIndex !== -1) {
            wishlist[wishlistIndex].quantity++
        } else {
            wishlist.push({ ...product, quantity: 1 })
        }

        state.wishlist = [...wishlist]

        this.$cookies.set('wishlist', state.wishlist, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })

    },

    REMOVE_PRODUCT_FROM_WISHLIST(state, product) {
        const wishlist = [...state.wishlist]
        const wishlistIndex = wishlist.findIndex((wishlist) => wishlist.id === product.id)

        if (wishlistIndex !== -1) {
            const item = wishlist[wishlistIndex]

            if (item.quantity === 1) {
                wishlist.splice(wishlistIndex, 1)
            } else {
                wishlist[wishlistIndex].quantity--
            }
        }

        state.wishlist = [...wishlist]
    },
};

export const actions = {
    async addProductToWishlist({ commit }, product) {
        commit('ADD_PRODUCT_TO_WISHLIST', product)
    },
    async removeProductFromWishlist({ commit }, productId) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', productId)
    },
};