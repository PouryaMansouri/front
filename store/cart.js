export const state = () => ({
    carts: [],
});

export const getters = {
    totalCart: (state) => {
        return state.carts.reduce((currentQuantiy, cart) => currentQuantiy + cart.quantity, 0)
    },
    totalAmount: (state) => {
        return state.carts.reduce((currentAmount, cart) => currentAmount + cart.quantity * cart.price, 0)
    },
};

export const mutations = {
    SET_CARTS(state, carts) {
        state.carts = [...carts]

        this.$cookies.set('carts', state.carts, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
    },
    SET_CARTS_ONLINE(state, carts) {
        state.carts = [...carts]
    },
    RESET_CART(state) {
        state.carts = []

        this.$cookies.set('carts', state.carts, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
    },
    ADD_TO_CART_WHEN_LOGIN(state) {
        const carts = [...state.carts]

        this.$axios
            .post("cart/create-from-guest-to-login-user/", {
                items: [
                    ...carts
                ],
                status: 0,
                affiliate_code: null
            })
            .then((response) => {
                if (response.status == 200) {
                    commit('RESET_CART')
                    commit('SET_CARTS_ONLINE', response.data.items)
                    if (response.data.messages.length != 0)
                        Object.keys(response.data.messages).forEach((element) => {
                            this.$toast.error(e.response.data[element], { duration: 4000 });
                        });
                }
            })
            .catch((e) => {
                console.log(e);
            });
    },
    ADD_PRODUCT_TO_CART(state, product) {
        const carts = [...state.carts]
        const cartIndex = carts.findIndex((cart) => cart.item === product.item)

        if (cartIndex !== -1) {
            if (product.count > 1) {
                const c = carts[cartIndex].quantity
                carts[cartIndex].quantity = c + product.count
            }
            else {
                carts[cartIndex].quantity++
            }

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
        const cartIndex = carts.findIndex((cart) => cart.item === product.item)

        if (cartIndex !== -1) {
            const item = carts[cartIndex]

            if (item.quantity === 1) {
                carts.splice(cartIndex, 1)
            } else {
                carts[cartIndex].quantity--
            }
        }

        state.carts = [...carts]

        this.$cookies.set('carts', state.carts, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
    },
    REMOVE_CART(state, item) {
        const carts = [...state.carts]
        const filtered = carts.filter((cart) => cart.item !== item)

        state.carts = [...filtered]

        this.$cookies.set('carts', state.carts, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        })
    },
    REMOVE_CART_ONLINE(state, item) {
        this.$axios
            .delete(`cart/delete-cart-item/${item}/`)
            .then((response) => {
                if (response.status == 200) {
                    commit('RESET_CART')
                    commit('SET_CARTS', response.data.items)
                    if (response.data.messages.length != 0)
                        Object.keys(response.data.messages).forEach((element) => {
                            this.$toast.error(e.response.data[element], { duration: 4000 });
                        });
                }
            })
            .catch((e) => {
                console.log(e);
            });
    },
    ADD_PRODUCT_TO_CART_ONLINE(state, product) {
        this.$axios
            .post("cart/create-update-one-cart-item/", {
                item: product.item,
                quantity: product.count
            })
            .then((response) => {
                if (response.status == 200) {
                    commit('RESET_CART')
                    commit('SET_CARTS', response.data.items)
                    if (response.data.messages.length != 0)
                        Object.keys(response.data.messages).forEach((element) => {
                            this.$toast.error(e.response.data[element], { duration: 4000 });
                        });
                }
            })
            .catch((e) => {
                console.log(e);
            });

    },
};

export const actions = {
    async addProductToCart({ commit }, product) {
        if (await this.$auth.loggedIn) {
            commit('ADD_PRODUCT_TO_CART_ONLINE', product)
        } else {
            commit('ADD_PRODUCT_TO_CART', product)
        }
    },
    // async removeProductFromCart({ commit }, productId) {
    //     if (await this.$auth.loggedIn) {
    //         commit('REMOVE_PRODUCT_FROM_CART_ONLINE', productId)
    //     } else {
    //         commit('REMOVE_PRODUCT_FROM_CART', productId)
    //     }
    // },
    async addToCartWhenLogin({ commit }) {
        commit('ADD_TO_CART_WHEN_LOGIN')
    },
    async resetCart({ commit }) {
        commit('RESET_CART')
    },
    async removeCart({ commit }, item) {
        if (await this.$auth.loggedIn) {
            commit('REMOVE_CART_ONLINE', item)
        } else {
            commit('REMOVE_CART', item)
        }
    },
};