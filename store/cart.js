export const actions = {
  setItemCart({ commit }, item) {
    const obj = JSON.parse(localStorage.getItem('itens'))
    const x = [item, ...obj]
    localStorage.setItem('itens', JSON.stringify(x))
  },
}
