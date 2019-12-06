import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Input, Button, Layout, Tree, Form, Table, Col } from 'ant-design-vue'
// @ts-ignore
import { GridLayout, GridItem } from 'vue-grid-layout'
import ExtForm from '@/components/ext-components/ExtForm.vue'
import ExtRow from '@/components/ext-components/ExtRow.vue'

import ExtCol from '@/components/ext-components/ExtCol.vue'
// @ts-ignore
import Draggable from 'vuedraggable'
const { Header, Sider, Content, Footer } = Layout
const { Item } = Form
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Layout.name, Layout)
Vue.component(Form.name, Form)
Vue.component(Item.name, Item)
Vue.component(Table.name, Table)
Vue.component(Header.name, Header)
Vue.component(Sider.name, Sider)
Vue.component(Footer.name, Footer)
Vue.component(Content.name, Content)
Vue.component(ExtForm.name, ExtForm)
Vue.component(ExtRow.name, ExtRow)
Vue.component(Tree.name, Tree)
Vue.component(Col.name, Col)
Vue.component(ExtCol.name, ExtCol)
Vue.component('vvv-grid-layout', GridLayout)
Vue.component('vvv-grid-item', GridItem)
Vue.component('vvv-drag', Draggable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
