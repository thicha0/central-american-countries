import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Global styles
import '@/assets/styles/expand.scss'
import '@/assets/styles/svg.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
