<template>
  <div id="app">
      <!-- <v-header :seller="seller"></v-header>
      <div class="tab">
        <div class="tab_item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab_item">
          <router-link to="">评论</router-link>
        </div>
        <div class="tab_item">
          <router-link to="" >商家</router-link>
        </div>
      </div>
      -->
      <div class="content">
        <keep-alive>
            <router-view :seller="seller"></router-view>
        </keep-alive>  
      </div> 
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default {
  data(){
    return{
      seller:{
        avatar:'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
        name:'麻辣诱惑',
        description:'蜂鸟专送',
        deliveryTime:'50分钟到达',
        supports:true,
        supports:[
          {
            type:0,
            description:'在线支付满28减5',
          },
           {
            type:1,
            description:'在场所有果汁8折优惠',
          },
          {
            type:2,
            description:'已加入“外卖保”计划，保质保量',
          },
          {
            type:3,
            description:'该商家支持发票，请写好发票抬头',
          }
        ],
        bulletin:'粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。',
        avatar:'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
        score:'3.5',
      }
    }
  },
  components: {
    'v-header': header
  }
}
</script>
<style>
  @import './App.css'
</style>

