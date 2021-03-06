import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './components/global'
Vue.config.productionTip = false
// Vue.ues(components)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
