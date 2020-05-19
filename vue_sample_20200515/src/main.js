import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(router);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
