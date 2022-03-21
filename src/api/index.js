// API统一管理
import requests from './request'
import ajaxMock from './ajaxMock'

// 三级联动
// /api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})

export const reqBanners = () => ajaxMock({
    url: '/banners',
    method: 'get'
})
export const reqFloors = () => ajaxMock({
    url: '/floors',
    method: 'get'
})

export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})

export const reqGetGoodInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'get'
})

export const reqGetAddShopCar = (
        skuId,
        skuNum
    ) =>
    requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })

export const reqGetCartList = () => requests({
    url: '/cart/cartList',
    method: 'get'
})

export const reqDeleteCart = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})

export const reqChangeChecked = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})

export const reqGetCode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})

export const reqUserRegister = (
        phone, password, code
    ) =>
    requests({
        url: `/user/passport/register`,
        method: 'post',
        data: {
            phone,
            password,
            code
        }
    })

export const reqLogin = (data) => requests({
    url: '/user/passport/login',
    method: 'post',
    data
})

//获取token
export const reqGetUserInfo = () => requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
})

//退出登录
export const reqLogout = () => requests({
    url: '/user/passport/logout',
    method: 'get'
})

//获取用户地址
export const reqUserAddress = () => requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
})

//获取商品清单
export const reqOrderInfo = () => requests({
    url: '/order/auth/trade',
    method: 'get'
})

//提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: 'post'
})

//获取支付信息
export const reqPayInfo = (orderId) => requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get'
})