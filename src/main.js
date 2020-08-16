import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'https://localhost:5001/api/'
//axios.defaults.baseURL = 'https://anonymousfeedback20200804045526.azurewebsites.net/api/'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
