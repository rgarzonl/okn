import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
import { i18n } from './lang/i18n.js' // eslint-disable-line
import 'reset-css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'

Vue.config.productionTip = false

Vue.prototype.$moment = moment

Vue.use(ElementUI, { locale })

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
