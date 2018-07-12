import Vue from 'vue'
import App from './App.vue'

import YmapPlugin from 'vue-yandex-maps'

Vue.use(YmapPlugin);

new Vue({
  el: '#app',
  render: h => h(App)
});
