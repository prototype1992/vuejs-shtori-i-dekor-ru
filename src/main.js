import Vue from 'vue';
import VModal from 'vue-js-modal';
import VueInputMask from 'vue-inputmask';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VModal);
Vue.use(VueInputMask.default);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
