import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

import axios from 'axios';

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
    ],
    eventFormDate: moment()
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
    },
    addEvent(state, payload) {
      state.events.push(payload);
    },
    eventFormDate(state, payload) {
      state.eventFormDate = payload;
    }
  },
  actions: {
    addEvent(context, payload) {
      let obj = {
        description: payload,
        date: context.state.eventFormDate
      };
      context.commit('addEvent',obj);
      axios.post('add_event', obj);
    }
  }
})