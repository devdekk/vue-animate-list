import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)

Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
