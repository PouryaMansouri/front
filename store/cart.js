export const state = () => ([]);

export const getters = {
    totalCart: (state) => state.reduce((currentQuantiy, cart) => currentQuantiy + cart.quantity, 0),
    totalAmount: (state) => state.reduce((currentAmount, cart) => currentAmount + cart.quantity * cart.price, 0),
};

export const mutations = {
    ADD_PRODUCT_TO_CART(state, product) {
        const carts = [...state]
        const cartIndex = carts.findIndex((cart) => cart.id === product.id)

        if (cartIndex !== -1) {
            carts[cartIndex].quantity++
        } else {
            carts.push({ ...product, quantity: 1 })
        }

        state = [...carts]
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        const carts = [...state]
        const cartIndex = carts.findIndex((cart) => cart.id === product.id)

        if (cartIndex !== -1) {
            const item = carts[cartIndex]

            if (item.quantity === 1) {
                carts.splice(cartIndex, 1)
            } else {
                carts[cartIndex].quantity--
            }
        }

        state = [...carts]
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