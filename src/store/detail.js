import {
    reqGetGoodInfo,
} from "../api"

const state = {
    goodInfo: {}
}
const mutations = {
    REQGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    reqGoodInfo({
        commit
    }, id) {
        reqGetGoodInfo(id).then((response) => {
            if (response.code == 200) commit('REQGOODINFO', response.data)
        })

    }


}
const getters = {
    categoryView() {
        return state.goodInfo.categoryView || {}
    },
    skuInfo() {
        return state.goodInfo.skuInfo || {
            "skuImageList": [{}]
        }
    },
    spuSaleAttrList() {
        return state.goodInfo.spuSaleAttrList
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}