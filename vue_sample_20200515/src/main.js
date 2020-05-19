import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(router);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
