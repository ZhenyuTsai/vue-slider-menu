import Vue from 'vue'
import App from './App.vue'
import SliderMenu from '../packages'
Vue.use(SliderMenu)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
