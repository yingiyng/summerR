<template>
  <div class="detail">
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <section class="detail-box">
          <h3>Q1：使用余额的条件</h3>
          <p>为了保护账户安全，使用余额前必须绑定手机号</p>
          <h3>Q2：使用余额的条件</h3>
          <p>为了保护账户安全，使用余额前必须绑定手机号</p>
          <h3>Q3：使用余额的条件</h3>
          <p>为了保护账户安全，使用余额前必须绑定手机号</p>
          <h3>Q4：使用余额的条件</h3>
          <p>为了保护账户安全，使用余额前必须绑定手机号</p>
          <h3>Q5：使用余额的条件</h3>
          <p>为了保护账户安全，使用余额前必须绑定手机号</p>
      </section>
  </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
export default {
    data(){
        return{
            headTitle:'余额问题',
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
        font-size: 15px;
        color:#999;
        margin-top: 13px;
        margin-bottom: 20px;
    }
</style>
