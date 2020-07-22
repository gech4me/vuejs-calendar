import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: 2020,
    currentMonth: 7,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    events: [
      { description: 'random event 1', date: moment('2020-07-23', 'YYYY-MM-DD') },
      { description: 'random event 2', date: moment('2020-07-24', 'YYYY-MM-DD')},
      { description: 'random event 3', date: moment('2020-07-25', 'YYYY-MM-DD')},
    ]
  },
  mutations: {
    setCurrentMonth(state, payload) {
      state.currentMonth = payload;
    },
    setCurrentYear(state, payload) {
      state.currentYear = payload;
    },
    eventFormPos(state, payload) {
      state.eventFormPosX = payload.x;
      state.eventFormPosY = payload.y;
    },
    eventFormActive(state, payload) {
      state.eventFormActive = payload;
    }
  }
})