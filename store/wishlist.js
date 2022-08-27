export const state = () => ({
    wishlist: [],
});

export const getters = {
    totalCart: (state) => state.wishlist.reduce((currentQuantiy, cart) => currentQuantiy + cart.quantity, 0),
    totalAmount: (state) => state.wishlist.reduce((currentAmount, cart) => currentAmount + cart.quantity * cart.price, 0),
};

export const mutations = {
    SET_WISHLIST(state, wishlist) {
        state.wishlist = [...wishlist]
    },
    ADD_PRODUCT_TO_CART(state, product) {
        const wishlist = [...state.wishlist]
        const cartIndex = wishlist.findIndex((cart) => cart.id === product.id)

        if (cartIndex !== -1) {
            wishlist[cartIndex].quantity++
        } else {
            wishlist.push({ ...product, quantity: 1 })
        }

        state.wishlist = [...wishlist]

        this.$cookies.set('wishlist', state.wishlist, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })

    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        const wishlist = [...state.wishlist]
        const cartIndex = wishlist.findIndex((cart) => cart.id === product.id)

        if (cartIndex !== -1) {
            const item = wishlist[cartIndex]

            if (item.quantity === 1) {
                wishlist.splice(cartIndex, 1)
            } else {
                wishlist[cartIndex].quantity--
            }
        }

        state.wishlist = [...wishlist]
    },
};

export const actions = {
    async addProductToCart({ commit }, product) {
        commit('ADD_PRODUCT_TO_CART', product)
    },
    async removeProductFromCart({ commit }, productId) {
        commit('REMOVE_PRODUCT_FROM_CART', productId)
    },
};