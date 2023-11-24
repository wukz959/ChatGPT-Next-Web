import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/common.less'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/iconfont.css'
import { Menu, Submenu, MenuItem, Container, Header, Main, Footer, Button, Input, Avatar, InfiniteScroll } from 'element-ui'

Vue.use(InfiniteScroll)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Button)
Vue.use(Input)
Vue.use(Avatar)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
