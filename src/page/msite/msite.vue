<template>
  <div>
      <header class="head_top">
          <router-link to='/search' class="head_search">搜索</router-link>
          <router-link to='/profile' class="head_profile">我的</router-link>
      </header>
      <div class="msite_nav">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide food_types_container">
                        <router-link to="/food" v-for="(item, index)  in footList" v-if="index<8" :key="item.id" class="link_to_food">
                            <figure>
                                <img :src="item.image_url" alt="">
                            </figure>  
                            <figcaption>{{item.title}}</figcaption> 
                        </router-link>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide food_types_container">
                        <router-link to="" v-for="(item,index) in footList"  v-if="index>8&&index<17" :key="item.id" class="link_to_food">
                            <figure>
                                <img :src="item.image_url" alt="">
                            </figure>  
                            <figcaption>{{item.title}}</figcaption> 
                        </router-link>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
      <div class="shop_list_container">
          <header class="shop_header">附近商家</header>
          <shop-list></shop-list>
      </div>
      <foot-bottom></foot-bottom>
  </div>
</template>
<script>
import footBottom from '../../components/footer/footer.vue'
import requestCrossDomain from '../../common/js/requestDOM'
import shopList from '../shopList/shopList.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){
        return{
            headTitle:'首页',
            footList:[],
             swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                notNextTick: true,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }
    },
    components:{
        'shopList':shopList,
        'footBottom':footBottom,
        swiper,
        swiperSlide,
    },
    created:function(){
        this.getFootList();
    },
    methods:{
        getFootList(){
            var self=this;
            requestCrossDomain.requestCrossDomain(function(json,textStatus){    
                    console.log(json.footList);
                    self.footList=json.footList;
                });
        }
    }
}
</script>
<style>
    @import url("../../common/style/swiper.min.css");  
    .head_top{
        background: #3190e8;
        position: fixed;
        top: 0;
        width: 100%;
        left: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 50px;
        position: relative;
    }
    .head_search{
        color:#fff;
        padding-left: 10px;
    }
    .head_profile{
        flex:1;
        text-align: right;
        color: #fff;
        padding-right: 10px;
    }
    .msite_nav{
        background: #fff;
        border-bottom: 1px solid #ddd;
    }
    .swiper-pagination{
        position: inherit;
    }
    .swiper-pagination .swiper-pagination-bullet{
        margin: 0 6px 10px 6px;
    }
    .food_types_container{
        background: #fff;
        display: flex;
        padding:10px 0 4px 0;
        flex-wrap: wrap;
    }
    .link_to_food{
        display: inline-block;
        margin-bottom: 15px;
        width: 25%;
        text-align: center;
    }
    .link_to_food img{
        width: 55px;
        height: 55px;
    }
    .link_to_food figcaption{
        text-align: center;
        font-size: 13px;
        margin-top: 12px;
    }
    .shop_list_container{
        margin-top: 10px;
        background: #fff;
        border-top:1px solid #ddd;
        margin-bottom: 60px;
    }
    .shop_list_container .shop_header{
        color:#999;
        font-size: 13px;
        padding: 10px 0;
        padding-left: 10px;
    }
</style>
