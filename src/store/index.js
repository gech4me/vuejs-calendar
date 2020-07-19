import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: 2020,
    currentMonth: 7
  },
  mutations: {
    setCurrentMonth(state, payload) {
      state.currentMonth = payload;
    }
  }
})