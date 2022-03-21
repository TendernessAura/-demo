import {
    reqGetCode,
    reqLogin,
    reqGetUserInfo
} from '@/api'
const state = {
    code: '',
    token: '',
    userInfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    LOGIN(state, data) {
        state.token = data.token
        localStorage.setItem('token', data.token)
    },
    GETUSERINFO(state, data) {
        state.userInfo = data
    }
}
const actions = {
    async getCode({
        commit
    }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit('GETCODE', result.data)
        }
    },
    async login({
        commit
    }, data) {
        let result = await reqLogin(data)
        if (result.code == 200) {
            commit('LOGIN', result.data)
            alert('登录成功！')
        } else {
            alert(`登录失败!${result.message}`)
            return Promise.reject(result.message)
        }
    },
    async getUserInfo({
        commit
    }) {
        let result = await reqGetUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}