export const actions = {
  setItemCart({ commit }, item) {
    try {
      const obj = JSON.parse(localStorage.getItem('itens'))
      let x = [item]

      if (obj && obj.length > 0) {
        x = [item, ...obj]
      }

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
      localStorage.setItem('itens', JSON.stringify(obj))
    } catch (error) {
      return error
    }
  },
}
