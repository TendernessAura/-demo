import {
    reqGetCartList
} from "../api"
const state = {
    cartList: []
}
const mutations = {
    REQCARTLIST(state, data) {
        state.cartList = data
    }
}
const actions = {
    async reqCartList({
        commit
    }) {
        let result = await reqGetCartList()
        if (result.code == 200) commit('REQCARTLIST', result.data)
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}