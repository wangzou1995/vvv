import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Input, Button, Layout } from 'ant-design-vue'
// @ts-ignore
import { GridLayout, GridItem } from 'vue-grid-layout'
// @ts-ignore
import Draggable from 'vuedraggable'
const { Header, Sider, Content, Footer } = Layout

Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Layout.name, Layout)
Vue.component(Header.name, Header)
Vue.component(Sider.name, Sider)
Vue.component(Footer.name, Footer)
Vue.component(Content.name, Content)
Vue.component('vvv-grid-layout', GridLayout)
Vue.component('vvv-grid-item', GridItem)
Vue.component('vvv-drag', Draggable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
