import axios from "axios";

const ajaxMock = axios.create({
    baseURL: '/mock',
    timeout: 10000
})
ajaxMock.interceptors.request.use((config) => {
    return config
})

ajaxMock.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})


export default ajaxMock