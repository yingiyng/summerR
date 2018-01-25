import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goods from '../components/goods/goods.vue'
import login from '../page/login/login.vue'
import forgetPwd from '../page/forgetPwd/forgetPwd.vue'
import profile from '../page/profile/profile.vue'
import info from '../page/profile/info/info.vue'
import setUserName from '../page/profile/info/setUserName/setUserName.vue'
import address from '../page/profile/info/address/address.vue'
import addAddress from '../page/profile/info/address/addAddress.vue'
import balance from '../page/profile/balance/balance.vue'
import balanceDetail from '../page/profile/balance/balanceDetail.vue'
import benefit from '../page/profile/benefit/benefit.vue'
import hbHistory from '../page/profile/benefit/hbHistory.vue'
import hbInfo from '../page/profile/benefit/hbInfo.vue'
import sjInfo from '../page/profile/benefit/sjInfo.vue'
import integral from '../page/profile/integral/integral.vue'
import integralInfo from '../page/profile/integral/integralInfo.vue'
import order from '../page/order/order.vue'
import orderDetail from '../page/order/orderDetail.vue'
import search from '../page/search/search.vue'
import msite from '../page/msite/msite.vue'
import shop from '../page/shop/shop.vue'
import confimOrder from '../page/confimOrder/confimOrder.vue'
import remark from '../page/confimOrder/remark.vue'
import invoice from '../page/confimOrder/invoice.vue'
import chooseAddress from '../page/confimOrder/address/chooseAddress.vue'
import orderaddAddress from '../page/confimOrder/address/addAddress/addAddress'
import payment from '../page/confimOrder/payment/payment.vue'
import food from '../page/food/food.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/forgetPwd',
      component:forgetPwd
    },
    {
      path:'/profile',
      component:profile,
    },
    {
      path:'/profile/info',
      component:info,
      children:[
        {
          path:'/profile/info/setUserName',
          component:setUserName
        },
        {
          path:'/profile/info/address',
          component:address
        },
        {
          path:'/profile/info/address/add',
          component:addAddress
        },
      ]
    },
    {
      path:'/profile/balance',
      component:balance,
    },
    {
      path:'/profile/balance/detail',
      component:balanceDetail
    },
    {
      path:'/profile/benefit',
      component:benefit,
      children:[
        { path: '/profile/benefit/sjInfo', component: sjInfo},
        { path: '/profile/benefit/hbInfo', component: hbInfo}
      ]
    },
    {
      path:'/profile/hbHistory',
      component:hbHistory
    },
    {
      path:'/profile/integral',
      component:integral,
    },
    {
      path:'/profile/integralInfo',
      component:integralInfo
    },
    {
      path:'/order',
      component:order
    },
    {
      path:'/order/orderDetail',
      component:orderDetail
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/msite',
      component:msite
    },
    {
      path:'/shop',
      component:shop
    },
    {
      path:'/confimOrder',
      component:confimOrder
    },
    {
      path:'/confimOrder/payment',
      component:payment
    },
    {
      path:'/food',
      component:food
    },
    {
      path:'/confirmOrder/remark',
      component:remark
    },
    {
      path:'/confirmOrder/invoice',
      component:invoice
    },
    {
      path:'/confimOrder/chooseAddress',
      component:chooseAddress
    },
    {
      path:'/comfimOrder/chooseAddress/addAddress',
      component:orderaddAddress
    }
  ]
})
