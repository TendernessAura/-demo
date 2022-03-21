import Vue from 'vue'
import App from './App.vue'
import router from './router'

import TypeNav from '@/components/TypeNav'
import Carousel from "@/components/Carousel";
import {
  Button
} from 'element-ui';
import {
  nanoid
} from 'nanoid'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Button.name, Button)
//引入仓库
import store from '@/store'
import '@/mock/mockServer.js'
// 注册临时ID
if (!localStorage.getItem('UUID')) {
  localStorage.setItem('UUID', nanoid())
}

//统一引入API
import * as API from '@/api'
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //注册路由
  router,
  //注册仓库
  store
}).$mount('#app')