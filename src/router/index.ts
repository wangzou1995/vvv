import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DragLayout from '../components/DragLayout.vue'
import Draggable from '@/components/Draggable.vue'
import EditorPage from '@/views/EditorPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dl',
    name: 'DragLayout',
    component: DragLayout
  },
  {
    path: '/dg',
    name: 'Draggable',
    component: Draggable
  },
  {
    path: '/ep',
    name: 'EditorPage',
    component: EditorPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
