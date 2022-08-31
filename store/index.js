export const state = () => ({
  counter: 0
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async nuxtServerInit({ state, commit, dispatch }) {
    const carts = this.$cookies.get('carts');
    if (carts) {
      commit('cart/SET_CARTS', carts);
    }
    // const wishlist = this.$cookies.get('wishlist');
    // if (wishlist) {
    //   commit('wishlist/SET_WISHLIST', wishlist);
    // }
  },
  async fetchCounter(state) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}
