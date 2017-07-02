import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import store from './store'; // vuex store instance
import router from './router'; // vue-router instance
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
sync(store, router); // done.

// Globally register bootstrap-vue components
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
