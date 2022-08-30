export const state = () => ({
    carts: [],
});

export const getters = {
    totalCart: (state) => state.carts.reduce((currentQuantiy, cart) => currentQuantiy + cart.quantity, 0),
    totalAmount: (state) => state.carts.reduce((currentAmount, cart) => currentAmount + cart.quantity * cart.price, 0),
};

export const mutations = {
    SET_CARTS(state, carts) {
        state.carts = [...carts]
    },
    RESET_CART(state) {
        state.carts = []

        this.$cookies.set('carts', state.carts, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
    },
    ADD_PRODUCT_TO_CART(state, product) {
        const carts = [...state.carts]
        const cartIndex = carts.findIndex((cart) => cart.id === product.id)

        if (cartIndex !== -1) {
            const c = carts[cartIndex].quantity
            carts[cartIndex].quantity = c + product.count
        } else {
            carts.push({ ...product, quantity: product.count })
        }

        state.carts = [...carts]

        this.$cookies.set('carts', state.carts, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })

    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        const carts = [...state.carts]
        const cartIndex = carts.findIndex((cart) => cart.id === product.id)

        if (cartIndex !== -1) {
            const item = carts[cartIndex]

            if (item.quantity === 1) {
                carts.splice(cartIndex, 1)
            } else {
                carts[cartIndex].quantity--
            }
        }

        state.carts = [...carts]
    },
};

export const actions = {
    async addProductToCart({ commit }, product) {
        commit('ADD_PRODUCT_TO_CART', product)
    },
    async removeProductFromCart({ commit }, productId) {
        commit('REMOVE_PRODUCT_FROM_CART', productId)
    },
    async resetCart({ commit }) {
        commit('RESET_CART')
    },
};