import { createStore } from "vuex";

export default createStore({
  state: {
    isHamburgerClicked: false,
  },
  actions: {
    clickHamburger(context) {
      context.commit("toggleMenu");
    },
  },
  mutations: {
    toggleMenu(state) {
      state.isHamburgerClicked = !state.isHamburgerClicked;
    },
  },
  getters: {},
});
