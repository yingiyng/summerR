<template>
  <div>
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <section>
          <section class="order-title">
            <p class="orderImg">
                <img src="http://cangdu.org:8001/img/16018a6492334.jpeg" alt="">
            </p>
            <p class="orderPayState">等待支付</p>
            <p class="order-again">再来一单</p>
          </section>
          <section class="order-list">
              <router-link :to="{path:''}">
                  <div class="orderList-name">
                      <img src="http://cangdu.org:8001/img/16018a6492334.jpeg" alt="">
                      <span class="name">{{orderDetail.restaurant_name}}</span>
                  </div>
              </router-link>
              <ul class="foot-listUl">
                  <li>
                    <p class="food-name">
                        德州八鸡
                    </p>
                    <p class="foot-price">
                        <span class="footPrice-num">x4</span>
                        <span class="footPrice-span">￥20</span>
                    </p>
                  </li>
                  <li>
                    <p class="food-name">
                        德州八鸡
                    </p>
                    <p class="foot-price">
                        <span class="footPrice-num">x4</span>
                        <span class="footPrice-span">￥20</span>
                    </p>
                  </li>
              </ul>
              <div class="peisong-price">
                  <span>配送费</span>
                  <span class="song-price">￥4</span>
              </div>
              <div class="shiPay">
                  实付：￥1234
              </div>
          </section>
      </section>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import headTop from '../../components/head/head.vue'
// import {getOrderDetail} from '../../common/js/getData'
export default {
  data(){
      return{
          headTitle:'订单详情',
          orderData:null,
      }
  },
  computed:{
    //    ...mapState([
    //             'orderDetail', 'geohash', 'userInfo'
    //     ]),
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      },
      async initData(){
        //   this.orderData = await getOrderDetail(this.userInfo.user_id, this.orderDetail.unique_id);
      }
  },
  components:{
      'headTop':headTop
  }
}
</script>
<style>
    .order-title{
        background: #fff;
        padding: 26px 0;
        text-align: center;
    }
    .order-title .orderImg img{
        width: 75px;
        height: 75px;
        border-radius: 50%;
        border: 1px solid rgb(0,140,255);        
    }
    .order-title .orderPayState{
        font-size: 20px;
        font-weight:bold;
        color: #333;
        margin-top: 20px;
    }
    .order-title .order-again{
        display: inline-block;
        border: 1px solid rgba(0,140,255,0.5);
        padding: 7px 13px;
        color: rgb(0,140,255);
        background: none;
        border-radius: 3px;
        margin-top: 20px;
    }
    .order-list{
        margin-top: 10px;
        background: #fff;
    }
    .orderList-name{
        display: flex;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #ededed;
    }
    .orderList-name img{
        display: inline-block;
        width: 35px;
        height: 35px;
        margin-right: 10px;
    }
    .orderList-name .name{
        font-size: 17px;
        font-weight: bold;
        color: #333;
    }
    .foot-listUl li{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        color: #999;
    }
    .foot-price{
        flex: 1px;
        text-align: right;
    }
    .foot-price .footPrice-num{
        color: #ccc;
        margin-right: 13%;
    }
    .peisong-price{
        color: #999;
        border-top:1px solid #ededed;
        padding: 15px;
        display: flex;
        align-items: center;
    }
    .peisong-price .song-price{
        flex:1;
        text-align: right;
    }
    .shiPay{
        padding: 15px;
        text-align: right;
        color: #fb6b23;
        border-top:1px solid #ededed;
    }
</style>
