// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import Axios from 'axios'
// import VueSplide from '@splidejs/vue-splide';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, Axios);
Vue.use(VueSweetalert2);
// Vue.use(VueSplide);


export var $hayLogin = false;
export var $nombreGlobal = "";

new Vue({
  el: '#app',  
  // render: h => h( App ),
  router,
  components: { App },
  template: '<App/>',
})
