import Vue from 'vue'
import App from './app.vue'
import router from '@/router/router'

import './assets/styles/reset.styl'
import './assets/styles/global.styl'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')