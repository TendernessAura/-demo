//二次封装axios
import axios from "axios";
import nprogress from "nprogress";
//nprogress 请求进度条
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: 'http://39.98.123.211/api',
    timeout: 1000,
})

// 请求拦截器
requests.interceptors.request.use(config => {
    nprogress.start()
    config.headers.userTempId = localStorage.getItem('UUID')
    config.headers.token = localStorage.getItem('token')
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功回调
    nprogress.done()
    return res.data
}, (error) => {
    // 失败回调
    return Promise.reject(new error('faile'))
})
export default requests;