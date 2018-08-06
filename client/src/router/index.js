/*
路由器
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../pages/Login/Login';
import Shop from '../pages/Shop/Shop';
// import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods';
// import ShopRatings from '../pages/Shop/ShopGoods/ShopRatings';
// import ShopInfo from '../pages/Shop/ShopGoods/ShopInfo';
const ShopGoods = () => import('../pages/Shop/ShopGoods/ShopGoods');
const ShopRatings = () => import('../pages/Shop/ShopGoods/ShopRatings');
const ShopInfo = () => import("../pages/Shop/ShopGoods/ShopInfo");
// 声明使用插件
Vue.use(VueRouter);

export default new VueRouter({ // 配置对象
                               // 配置应用中所有路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop/info',
          component:ShopInfo,
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    }
  ]
})
