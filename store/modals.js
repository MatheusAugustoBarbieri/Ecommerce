export const state = () => ({
  menu_header_open: false,
})

export const mutations = {
  openHeaderMenu(state, payload) {
    state.menu_header_open =
      payload === undefined ? !state.menu_header_open : payload
  },
}
