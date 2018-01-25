<template>
    <div>
        <head-top :head-title="headTitle" @goBack="goBack"></head-top>
        <section class="order-header">
            <router-link to="/confimOrder/chooseAddress" class="order-address">
                <div class="order-address-left">
                    <p>
                        <b class="person-name">韦莹莹</b>女士
                        <span class="person-phone">13661073032</span>
                    </p>
                    <p>
                        <span class="address-tips">公司</span>
                        银河sohoD座
                    </p>
                </div>
                <div class="order-address-right">
                    》
                </div>
            </router-link>
        </section>
        <section class="order-songTime">
            <div class="order-songTime-left">
                送达时间
            </div>
            <div class="order-songTime-right">
                <p>尽快送达 | 预计 13:41</p>
                <p><span class="song-tips">蜂鸟专送</span></p>
            </div>
        </section>
        <!-- 支付方式 -->
        <section class="order-pay">
            <ul>
                <li>
                    <b>支付方式</b>
                    <span @click="payTypeFun">在线支付 ></span>
                </li>
                <li>
                    <b>红包</b>
                    <span>暂时只在饿了吗APP支持</span>
                </li>
            </ul>
        </section>
        <!-- 食物列表 -->
        <section class="food-list">
            <h3 class="food-header">
                <img src="http://cangdu.org:8001/img/16030503576260.jpg" alt="" class="shangjia-img">
                北京烤肉饭
            </h3>
            <ul class="food-list-ul">
                <li class="food-item">
                    <p class="food-name">孜然烤肉饭</p>
                    <p class="food-num-price">
                        <span class="food-number">x1</span>
                        <span class="food-price">￥20</span>
                    </p>
                </li>
                <li class="food-item">
                    <p class="food-name">餐盒</p>
                    <p class="food-num-price">
                        <span class="food-price">￥2</span>
                    </p>
                </li>
                <li class="food-item">
                    <p class="food-name">配送费</p>
                    <p class="food-num-price">
                        <span class="food-price">￥5</span>
                    </p>
                </li>
                <li class="order-pay food-item">
                    <p class="food-name">订单</p>
                    <p class="food-num-price">待支付 <span class="food-countPrice">￥144</span></p>
                </li>
            </ul>
        </section>
        <section class="order-pay container_style">
            <ul>
                <li>
                   <router-link to="/confirmOrder/remark">
                        <b>订单备注</b>
                        <span>口味、偏好等 ></span>
                   </router-link>
                </li>
                <li>
                    <router-link to="/confirmOrder/invoice">
                        <b>发票抬头</b>
                        <span>不需要开发票 ></span>
                    </router-link>
                </li>
            </ul>
        </section>
        <footer class="order-footer">
            <p class="waitingPay">待支付 ￥144</p>
            <router-link to="/confimOrder/payment" class="comfimOrder">确认下单</router-link>
        </footer>
        <!-- 遮盖背景 -->
        <div class="bgCover" v-if='bgCover' @click="closeCover"></div>
        <div class="boxList" v-if='bgCover'>
            <header class="boxList-header">
                支付方式
                <span @click="closeCover">完成</span>
            </header>
            <ul>
                <li v-for="(item,index) in payTypeList" :class="{'payChecked':index==payTypeIndex}" @click="payTypeCheck(index)">{{item.payType}} <span class="payType"></span></li>
                <!-- <li @click="payType">在线支付 <span class="payType"></span></li> -->
            </ul>
        </div>
    </div>
</template>
<script>
import headTop from '../../components/head/head.vue'
export default {
  data(){
      return{
          headTitle:'确认订单',
          bgCover:false,
          payTypeList:[{payType:'货到付款'},{payType:'在线支付'}],
          payTypeIndex:1
      }
  },
  components:{
      'headTop':headTop
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      },
      closeCover(){
          this.bgCover=false;
      },
      payTypeFun(){
          this.bgCover=true;
      },
      payTypeCheck(index){
          this.payTypeIndex=index;
      }
  }
}
</script>
<style>
    @import url('../confimOrder/confimOrder.css');
</style>
