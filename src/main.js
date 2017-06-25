import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync'
import store from './store' // vuex store instance
import router from './router' // vue-router instance

Vue.use(VueRouter);
sync(store, router) // done.

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})