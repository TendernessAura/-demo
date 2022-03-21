import Home from '../views/Home'
import Search from '../views/Search'
import Login from '../views/Login'
import Register from '../views/Register'
import Detail from '../views/Detail'
import AddCartSuccess from '../views/AddCartSuccess'
import ShopCart from '../views/ShopCart'
import Trade from '../views/Trade'
import Pay from '../views/Pay'

export default [{
        path: "/pay",
        component: Pay,
        meta: {
            show: true
        }
    }, {
        path: "/trade",
        component: Trade,
        meta: {
            show: true
        }
    }, {
        path: "/shopcart",
        component: ShopCart,
        meta: {
            show: true
        }
    }, {
        path: "/home",
        component: Home,
        meta: {
            show: true
        }
    },
    {
        path: "/search/:keyword?",
        component: Search,
        meta: {
            show: true
        },
        name: 'search'
    },
    {
        path: "/login",
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: "/register",
        component: Register,
        meta: {
            show: false
        }
    },
    {
        name: 'detail',
        path: '/detail/:skuId',
        component: Detail,
        meta: {
            show: true
        }
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: {
            show: true
        }
    },
    {
        path: '*',
        redirect: '/home'
    }
]