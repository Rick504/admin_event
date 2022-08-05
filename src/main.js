import Vue from 'vue'
import App from '@/App'

import '@/assets/styles/main.css'
import store from '@/store'

import vuetify from '@/plugins/vuetify'

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
