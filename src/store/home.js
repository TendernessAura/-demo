import {
    reqCategoryList,
    reqBanners,
    reqFloors
} from '@/api'

const state = {
    categoryList: [],
    banners: [],
    floors: []
}
const mutations = {
    RECEIVE_CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    RECEIVE_BANNERS(state, banners) {
        state.banners = banners
    },
    RECEIVE_FLOORS(state, floors) {
        state.floors = floors
    }
}
const actions = {
    async getCategoryList({
        commit
    }) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('RECEIVE_CATEGORYLIST', result.data)
        }
    },
    async getBanners({
        commit
    }) {
        let result = await reqBanners()
        if (result.code === 200) {
            commit('RECEIVE_BANNERS', result.data)
        }
    },
    async getFloors({
        commit
    }) {
        let result = await reqFloors()
        if (result.code === 200) {
            commit('RECEIVE_FLOORS', result.data)
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