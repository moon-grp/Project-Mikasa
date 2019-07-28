import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from '@/components/navbar'
import Newemployee from '@/components/newemployee'
import Viewemployee from '@/components/viewemployee'
import Dashboard from '@/components/dashboard'
import Editemployee from '@/components/editemployee'
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
