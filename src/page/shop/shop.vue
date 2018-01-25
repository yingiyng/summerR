<template>
    <div class="shop_container">
        <nav class="shop_goBack">
            <span class="goBack" @click="goBack"></span>
        </nav>
        <header class="shop_detail_top">
            <img :src="shopDetailData.image_path" class="header_conver_img" alt="">
            <div class="header_conver_con">
                <div class="header_con_top">
                    <section class="header_con_left">
                        <img :src="shopDetailData.image_path" alt="">
                    </section>
                    <section class="header_con_right">
                        <h3>{{shopDetailData.name}}</h3>
                        <p>商家配送/{{shopDetailData.order_lead_time}}分钟送达/配送费￥{{shopDetailData.float_delivery_fee}}元</p>
                        <p>公告：{{shopDetailData.promotionInfo}}</p>
                    </section>
                    <section class="header_con_arrow"> > </section>
                </div>
                <div class="header_con_foot">
                    <p class="header_con_foot_left">
                        <span v-for="activitey in shopDetailData.activities">{{activitey.description}} </span>
                        （APP专享）
                    </p>
                    <p class="header_con_foot_right">{{shopDetailData.activities.length}}个活动</p>
                </div>
            </div>
        </header>
        <nav class="changeNav">
            <p><span :class="{checked:changeShowType==true}" @click="changeShowCommodityType">商品</span></p>
            <p><span :class="{checked:changeShowType==false}" @click="changeShowEvaluateType">评价</span></p>
        </nav>
        <section class="foot_container" v-show="changeShowType">
            <div class="menu_left" id="wrapper_menu"  ref="wrapperMenu">
                <ul>
                    <li class="menu_left_li menuList" v-for="(item,index) in menuList" :class="{checkedLi: index == menuIndex}" @click="chooseMenu(index)"><span>{{item.name}}</span></li>
                </ul>
            </div>
            <div class="menu_right">
                <ul>
                    <li v-for="(item,index) in menuList" :key="index">
                        <header class="menu_right_header">
                            <h4>{{item.name}}</h4>
                            <span>{{item.description}}</span>
                        </header>
                        <section class="menu_right_list" v-for="food in item.foods">
                            <div class="menu_foot_img">
                                <img :src="food.image_path" alt="">
                            </div>
                            <div class="menu_foot_desc">
                                <h3 class="foot_desc_name">{{food.name}}</h3>
                                <p class="food_desc_content">{{food.description}}</p>
                                <p class="food_desc_sale_rating"><span>月售{{food.month_sales}}份</span> <span>好评率{{food.satisfy_rate}}%</span></p>
                                <footer class="foot_desc_footer">
                                    <section class="foot_price"><span>￥{{food.specfoods[0].price}}</span><span v-if="food.specfoods.length>0">起</span></section>
                                    <section class="foot_card">
                                        <span class="card_btn card_btn_jian" v-if="food.number>0" @click="cardJianFun(food)">-</span>
                                        <span class="card_numer">{{food.number}}</span>
                                        <span class="card_btn card_btn_jia" @click="cardJiaFun(food)">+</span>
                                    </section> 	
                                </footer>
                            </div>
                        </section>
                    </li>
                </ul>
            </div>
            <section class="buy_cart_container">
                <section class="buy_card_left">
                    <div class="cart_num">
                        <div class="cart_allMoney">￥{{totalPrice}}</div>
                        <div class="cart_songMoney">配送费￥{{deliveryFee}}</div>
                    </div>
                </section>
                <section class="buy_card_right">
                    <span class="gotopay_button_style" v-if="minimumOrderAmount > 0">还差¥{{minimumOrderAmount}}起送</span>
                    <router-link to="/confimOrder" class="buy_card_btn" v-else>去结算</router-link>
                </section>
            </section>
        </section>
        <section class="evaluate_container" v-show="changeShowType==false"> 
            <div class="eval_header">
                <div class="eval_header_left">
                    <h3 class="eval_score">{{shopDetailData.rating}}</h3>
                    <p>综合评价</p>
                    <p class="eval_gao">高于周边商家67%</p>
                </div>
                <div class="eval_header_right">
                    <div>
                        服务态度
                        <start :score='shopDetailData.service_score'></start>
                        <span>{{shopDetailData.service_score}}</span>
                    </div>
                    <div>
                        菜品评价
                        <start :score='shopDetailData.food_score'></start>                        
                        <span>{{shopDetailData.food_score}}</span>                        
                    </div>
                    <div>
                        送达时间
                        <span class="minute">{{shopDetailData.order_lead_time}}分钟</span>
                    </div>
                </div>
            </div>
            <ul class="eval_tag_ul">
                <li v-for="(item,index) in ratingTagsList" :class="{tagActive:tagActiveIndex==index,unState:item.unState}" @click="changeTagIndex(index,item.name)">{{item.name}}{{item.count}}</li>
                <!-- <li>满意(300)</li>
                <li class="unState">不满意(20)</li>
                <li>不满意(20)</li>
                <li>有图(2)</li>
                <li>味道好(49)</li>
                <li>送货快(47)</li>
                <li>分量足(32)</li>
                <li>包装精美(18)</li>
                <li>干净卫生(15)</li>
                <li>食材新鲜(15)</li>
                <li>服务不错(11)</li> -->
            </ul>
            <ul class="rating_list_ul">
                <li class="rating_list_li" v-for="(item,index) in ratingList">
                    <img :src="item.ImgPath" class="user_bar" alt="">
                    <section class="rating_list_detail">
                        <header>
                            <section class="username_bar">
                                <p>{{item.username}}</p>
                                <start :score="item.rating_star"></start>{{item.time_spent_desc}}
                            </section>
                            <time class="user_date">
                                {{item.rated_at}}
                            </time>
                        </header>
                        <ul class="rating_list_img" v-if="item.item_ratings.length>0">
                            <li v-for="(itemImg,index) in item.item_ratings">
                                <img :src="itemImg.getImgPath" alt="">
                            </li>
                        </ul>
                        <ul class="rating_list_pingjia">
                            <li v-for="(itemText,index) in item.item_ratingText">{{itemText.food_name}}</li>
                        </ul>
                    </section>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import start from '../../components/start/start.vue'
import requestcrossdom from '../../common/js/requestDOM'
export default {
  data(){
      return{
          foodScroll:null,//食品列表scroll,
          shopDetailData:null,//商铺详情
          changeShowType:true,//true默认显示商品,false显示评价
          menuList:[],
          menuIndex:0,
          shopListTop:[],//商品列表高度集合
          foodScroll:null,//食品列表scroll
          tagActiveIndex:0,
          tagActiveName:null,
          ratingTagsList:[],//评价分类列表
          ratingList:[],//评分列表
          totalPrice:0.00,//已选商品价格
          deliveryFee:10,//配送费
      }
  },
  components:{
      'start':start
  },
  created:function(){
      this.getShopDetailData();
      this.$nextTick(()=>{
        this._initScroll()
      })
  },
  computed:{
      minimumOrderAmount(){
        if(this.shopDetailData){
            return this.shopDetailData.float_minimum_order_amount-this.totalPrice;
        }else{
            return null;
        }
      }
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      },
    //   商铺详情
    getShopDetailData(){
        var self=this;
        requestcrossdom.requestCrossDomain(function(json,textStatus){
            self.shopDetailData=json.shopList[1].shopDetail;
            self.menuList=json.shopList[1].foodList;
            self.ratingTagsList=json.shopList[1].ratingTagsList;
            self.ratingList=json.shopList[1].ratingList;
        }) 
    },    
    // 显示商品
    changeShowCommodityType(){
        this.changeShowType=true;
    },
    // 显示评论
    changeShowEvaluateType(){
        this.changeShowType=false;
    },
    // 减少购物车
    cardJianFun(food){
        food.number--;
    },
    // 加入购物车
    cardJiaFun(food){
        food.number++;
        this.totalPrice+=parseInt(food.specfoods[0].price);
    },
    // 滚动到指定位置
    chooseMenu(index){
        this.menuIndex=index;
    },
    changeTagIndex(index,name){
        this.tagActiveIndex=index;
        this.tagActiveName=name;
    }
    // //   食品列表滑动时，监听列表
    //   listenScroll(element){ 
    //       this.foodScroll=new BScroll(element,{
    //            probeType: 3,
    //            deceleration: 0.001,
    //            bounce: false,
    //            swipeTime: 2000,
    //            click: true,
    //       })
    //        const wrapperMenu = new BScroll('#wrapper_menu', {
    //           click: true,
    //        });
    //        const wrapMenuHeight = this.$refs.wrapperMenu.clientHeight;
    //        this.foodScroll.on('scroll', (pos) => {
    //         if (!this.$refs.wrapperMenu) {
    //                 return 
    //         }
    //         this.shopListTop.forEach((item, index) => {
    //             if (this.menuIndexChange && Math.abs(Math.round(pos.y)) >= item) {
    //                         this.menuIndex = index;
    //                         const menuList=this.$refs.wrapperMenu.querySelectorAll('.activity_menu');
    //                         const el = menuList[0];
    //                         wrapperMenu.scrollToElement(el, 800, 0, -(wrapMenuHeight/2 - 50));
    //             }
    //         })
    //     })
    //   }
  }
}
</script>
<style>
    @import url(../shop/shop.css);
</style>
