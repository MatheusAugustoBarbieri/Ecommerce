export const state = () => ({
  products: [],
})

export const mutations = {
  setProducts(state, payload) {
    console.log(payload)
    state.products = payload
  },
}

export const actions = {
  async setProducts({ commit }) {
    try {
      const { data } = await this.$axios('/pokemon')
      commit('setProducts', data)
    } catch (error) {
      return error
    }
  },
}

export const getters = {
  getProducts(state) {
    return state.products.results
  },
}
