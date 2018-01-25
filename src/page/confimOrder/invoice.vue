<template>
  <div>
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <section class="invoice-box">
          <span>不需要开发票</span>
          <span class="invoiceIcon" @click="checkInvoiceFun" :class="{checkInvoice:isCheckInvoice}"></span>  
      </section>
      <p class="invoiceBtn">确定</p>
  </div>
</template>
<script>
import headTop from '../../components/head/head.vue'
export default {
  data(){
      return{
          headTitle:'选择发票抬头',
          isCheckInvoice:false
      }
  },
  components:{
      'headTop':headTop
  },
  methods:{
      checkInvoiceFun(){
          this.isCheckInvoice=!this.isCheckInvoice;
      },
      goBack(){
          this.$router.go(-1);
      }
  }
}
</script>
<style> 
    .invoice-box{
        background: #fff;
        padding:  20px;
        font-size: 17px;
        margin-top: 10px;
    }
    .invoiceIcon{
        float: right;
        display: inline-block;
        width: 14px;
        height: 14px;
        border:1px solid #ccc;
    }
    .invoiceBtn{
        line-height: 40px;
        text-align: center;
        background: #4cd964;
        color: #fff;
        border-radius: 5px;
        width: 96%;
        margin: 10px auto;
        font-size: 17px;
    }
    .checkInvoice{
        background: #3190e8;
        border-color: #3190e8;
    }
</style>
