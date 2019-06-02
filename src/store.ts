import Vue from 'vue';
import Vuex from 'vuex';
import { User } from './api/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    user: {},

  },
  mutations: {
    increment(state) {
      state.count++;
    },

    setUser(state, user: User) {
      state.user = user;
    },

  },
  actions: {
    increment(context) {
      context.commit('increment');
    },

    setUser(context, user: User) {
      context.commit('setUser', user);
    },
  },
});
