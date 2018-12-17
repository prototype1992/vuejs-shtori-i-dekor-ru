import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {},
  actions: {
    sendForm({ state, commit }, payload) {
      axios.post('/mail.php', {
        name: payload.name,
        phone: payload.phone,
        email: payload.email || '',
      })
        .then((response) => {
          console.log('response', response);
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
  },
});
