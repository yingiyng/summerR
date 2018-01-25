<template>
  <div>
      <head-top :head-title="headTitle"></head-top>
      <section class="show-time">
          <p>支付剩余时间</p>
          <p class="time">{{changeTime}}</p>
      </section>
      <div class="payWay">选择支付方式</div>
      <div class="payWayList">
          <section class="payWayItem">
              <div class="payItemIcon">
                  支付宝
              </div>
              <div class="payItemChoose" :class="{checkPayItem:chooseItme==1}" @click="chooseItmeFun(1)"></div>
          </section>
          <section class="payWayItem">
              <div class="payItemIcon">微信</div>
              <div class="payItemChoose" :class="{checkPayItem:chooseItme==2}" @click="chooseItmeFun(2)"></div>
          </section>
      </div>
      <p class="comfimPay" @click="payBtnFun">确认支付</p>
      <tip-box :msg="msg" v-if="isShowBox" @closeBox="closeBox"></tip-box>
  </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
import tipBox from '../../../components/tipBox/tipBox.vue'
export default {
  data(){
      return{
          headTitle:'在线支付',
          countNum:900, //倒计时15分钟
          msg:'支付超时',
          isShowBox:false,
          chooseItme:1
      }
  },
  components:{
      'headTop':headTop,
      'tipBox':tipBox
  },
  created(){
      this.daojishi();
  },
  computed:{
      changeTime(){
          let m=parseInt(this.countNum/60);
          if(m<10){
              m='0'+m;
          }
          let s=parseInt(this.countNum%60);
          if(s<10){
              s='0'+s;
          }
          return '00:'+m+':'+s;
      }
  },
  methods:{
       chooseItmeFun(index){
          this.chooseItme=index; 
      },
      //倒计时
      daojishi(){
          clearInterval(this.timer);
          this.timer=setInterval(()=>{
              this.countNum--;
              if(this.countNum==0){
                  clearInterval(this.timer);
                  this.isShowBox=true;

              }
          },1000)
      },
      payBtnFun(){
          this.isShowBox=true;
          this.msg="当前环境无法支付，请打开APP进行支付";
      },
      closeBox(){
        this.$router.push({
            path:'/order'
        })
        this.isShowBox=false;
      }
  }
}
</script>
<style>
    @import url(../payment/payment.css);
</style>
