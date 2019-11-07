import Vue from 'vue'
import Navbar from './Navbar.vue'

import BootstrapVue from 'bootstrap-vue'
Vue.config.productionTip = false

Vue.component('Navbar', require('./components/Navbar.vue').default);

new Vue({
  render: h => h(Navbar),
}).$mount('#nav')


Vue.use(BootstrapVue)