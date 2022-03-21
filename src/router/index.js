import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'
import store from '@/store'

//重写push replace
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})

//全局前置守卫

router.beforeEach(async (to, from, next) => {
    if (store.state.user.userInfo.name) {
        if (to.path == '/login') {
            alert('已登录！点击确定返回首页')
            next('/home')
        } else {
            next()
        }
    }
    store.dispatch("getUserInfo")
    next()
    // if (localStorage.getItem('token')) {

    // } else {
    //     next()
    // }
})

export default router