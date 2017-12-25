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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      component:info
    },
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
    {
      path:'/profile/balance',
      component:balance
    },
    {
      path:'/profile/balance/detail',
      component:balanceDetail
    },
    {
      path:'/profile/benefit',
      component:benefit
    },
    {
      path:'/profile/hbHistory',
      component:hbHistory
    }
  ]
})
