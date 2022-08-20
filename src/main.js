import Vue from 'vue'
import App from '@/App'

import '@/assets/styles/main.css'
import router from '@/router'
import store from '@/store'

import vuetify from '@/plugins/vuetify'

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
