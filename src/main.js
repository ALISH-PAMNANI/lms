

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './assets/sass/index.sass'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {  BIcon, BIconPeopleFill, BIconKanbanFill, BIconBookHalfFill, BIconCone, BIconSkipForwardFill, BIconSkipEndFill, BIconGearFill, BIconPower, BIconQuestionFill, BIconReplyAllFill } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
// import store from './store'

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconPeopleFill', BIconPeopleFill)
Vue.component('BIconKanbanFill', BIconKanbanFill)
Vue.component('BIconBookHalfFill', BIconBookHalfFill)
Vue.component('BIconCone', BIconCone)
Vue.component('BIconSkipForwardFill', BIconSkipForwardFill)
Vue.component('BIconSkipEndFill', BIconSkipEndFill)
Vue.component('BIconGearFill', BIconGearFill)
Vue.component('BIconPower', BIconPower)
Vue.component('BIconQuestionFill', BIconQuestionFill)
Vue.component('BIconReplyAllFill', BIconReplyAllFill)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app');



