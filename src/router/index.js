import Vue from 'vue'
import VueRouter from 'vue-router'
// 打包后按需加载
const Layout = () => import('@/views/layout')
const Home = () => import('@/views/layout/home')
const Gpt = () => import('@/views/layout/gpt')
const Owner = () => import('@/views/layout/owner')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', redirect: '/home' },
      { path: '/home', component: Home },
      { path: '/gpt', component: Gpt },
      { path: '/owner', component: Owner }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
