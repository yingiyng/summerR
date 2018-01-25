<template>
  <div>
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <section>
          <section class="detail-box">
              <h3>Q1：怎么获得积分</h3> 
              <p>
                在线支付的订单将获得订单积分奖励： <br>
                积分将在用户完成评价后获得。<br>
                可获得积分=订单金额×10（即1元=10点积分）。<br>
                订单金额指实际付款金额，不包含活动优惠金额。<br>
                每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。    
              </p> 
              <h3>Q2：积分用来做什么</h3>
               <p>可以在积分商城兑换各种礼品。</p> 
               <h3>Q3：积分兑换了好几天的礼品，却没有收到 怎么办？</h3> 
               <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
                <h3>Q4：充值前会给我打电话确认吗？</h3> 
                <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p> 
            </section>
      </section>
  </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
export default {
  data(){
      return{
          headTitle:'积分说明',
      }
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  },
  components:{
      'headTop':headTop
  }
}
</script>
<style>
    body{
        background: #fff;
    }
    .detail-box{
        margin: 20px;
    }
    .detail-box h3{
        font-size: 17px;
        line-height: 26px;
    }
    .detail-box p{
        font-size: 15px;
        color: #999;
        margin-top: 13px;
        margin-bottom: 20px;
        line-height: 25px;
    }
</style>
