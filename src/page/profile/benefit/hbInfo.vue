<template>
    <div>
        <head-top :head-title="headTitle" @goBack="goBack"></head-top>
        <section class="detail-box">
          <h3>Q1：什么是商家代金券</h3>
          <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
          <h3>Q2：什么是商家代金券</h3>
          <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
          <h3>Q3：什么是商家代金券</h3>
          <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
          <h3>Q4：什么是商家代金券</h3>
          <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
          <h3>Q5：什么是商家代金券</h3>
          <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
      </section>
    </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
export default {
    data(){
        return{
            headTitle:"红包说明"
        }
    },
    components:{
        'headTop':headTop
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
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
    }
    .detail-box p{
        font-size: 16px;
        line-height: 22px;
        color:#999;
        margin-top: 13px;
        margin-bottom: 20px;
    }
</style>
