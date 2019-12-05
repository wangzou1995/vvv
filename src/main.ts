import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
// @ts-ignore
import { GridLayout, GridItem } from 'vue-grid-layout'
// @ts-ignore
import Draggable from 'vuedraggable'

const { Input, Button } = Antd

Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component('vvv-grid-layout', GridLayout)
Vue.component('vvv-grid-item', GridItem)
Vue.component('vvv-drag', Draggable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
