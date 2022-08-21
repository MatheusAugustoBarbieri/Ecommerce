export const state = () => ({
  cart_product: [],
})

export const mutations = {
  setItemCart(state, product) {
    state.cart_product = product
  },
}

export const actions = {
  setItemCart({ commit }, item) {
    try {
      const obj = JSON.parse(localStorage.getItem('itens'))
      let x = []
      if (item) {
        x = [item]
      }
      if (obj && obj.length > 0) {
        if (item) {
          x = [...obj]
        } else {
          x = obj
        }
      }
      commit('setItemCart', x)
      localStorage.setItem('itens', JSON.stringify(x))
      this.$router.push({ path: '/carrinho' })
    } catch (error) {
      return error
    }
  },

  removeItemCart({ commit }, item) {
    try {
      const obj = JSON.parse(localStorage.getItem('itens'))
      const positionItem = obj.findIndex(a => a.id === item.id)

      if (obj && obj.length > 0) {
        obj.splice(positionItem, 1)
      }
      commit('setItemCart', obj)
      localStorage.setItem('itens', JSON.stringify(obj))
    } catch (error) {
      return error
    }
  },
}
