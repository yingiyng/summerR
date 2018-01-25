<template>
    <div>
        <head-top :head-title="headTitle" @goBack="goBack"></head-top>
        <section class="integral-box">
            <div class="integral-content">
                <div class="content">
                    <div class="content-header">
                        <span>当前积分</span>
                        <router-link to="/profile/integralInfo" class="jifenTips">积分说明</router-link>
                    </div>
                    <div class="content-num">
                        <span>0</span>
                        分
                    </div>
                    <div class="promit-button">
                        积分兑换商品
                    </div>
                </div>
            </div>
        </section>
        <div class="integral-list">
            <p class="integral-list-title">最近30天积分记录</p>
            <div class="no_list">
                <p class="no_list_text">最近30天无积分记录</p>
                <p class="no_list_goJF">快去下单赚取更多积分吧</p>
            </div>
        </div>
    </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
export default {
  data(){
      return{
        headTitle:'我的积分'
      }
  },
  methods:{
      goBack(){
         this.$router.go(-1);
      }
  },
  components:{
      "headTop":headTop
  }
}
</script>
<style>
    .integral-box{
        background: #3190e8;
        padding: 15px 0;
    }
    .integral-content{
        background: #fff;
        width: 88%;
        margin: 0 auto;
        border-radius: 5px;
        padding: 10px;
    }
    .content-header{
        color: #999;
        font-size: 15px;
    }
    .content-header .jifenTips{
        color: #3190e8;
        float: right;
    }
    .content-num{
        font-size: 15px;
        color: #333;
        margin: 12px 0;
    }
    .content-num span{
        font-size: 38px;
        display: inline-block;
        margin-right: 3px;
    }
    .promit-button{
        margin: 27px 0 5px 0;
        width: 100%;
        padding: 15px 0;
        text-align: center;
        background: #fe6d47;
        color: #fff;
        font-size: 19px;
        border-radius: 5px;
    }
    .integral-list{
        margin-top: 10px;
        padding: 5px 10px; 
    }
    .integral-list-title{
        color: #999;
    }
    .no_list{
        text-align: center;
        color: #999;
        padding: 50px 0;
    }
    .no_list_text{
        font-size: 20px;
        color: #666;
    }
    .no_list_goJF{
        font-size: 13px;
        margin-top: 13px;
    }
</style>
  