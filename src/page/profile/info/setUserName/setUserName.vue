<template>  
    <div class="setUserName">
        <head-top :head-title="headTitle"></head-top>
        <section class="setName">
            <input type="text" placeholder="请输入用户名" :class="{errorBorder:isBorder}" v-model="username" @input="checkInput">
            <p class="setTips">用户名只能修改一次（5-24个字符之间）</p>
            <p class="reset" :class="{optionText:isOptionText}" @click="confimReset">确定修改</p>
        </section>
    </div>
</template>
<script>
import headTop from '../../../../components/head/head.vue'
export default {
  data(){
      return{
          headTitle:'修改用户名',
          username:null,
          isOptionText:true,
          errorBorder:true,
          isBorder:false
      }
  },
  components:{
      'headTop':headTop
  },
  methods:{
      checkInput(){
          if(this.username.length <5 ||this.username.length>24){
              this.isOptionText=true;
              this.isBorder=true;
          }else{
              this.isOptionText=false;
              this.isBorder=false;
          }
      },
      confimReset(){
          if(this.isOptionText==false){
              this.$router.push({path:'/profile/info'});
          }
      }
  }
}
</script>
<style>
    body{
        background: #f5f5f5;
    }
    .setName{
        width: 96%;
        margin: 10px auto;
        overflow: hidden;
    }
    .setName input{
        border:1px solid #ddd;
        width: 97%;
        padding: 11px 4px;
        background: none;
        outline: none;
    }
    .setName input.errorBorder{
        border-color: #f00;
    }
    .setName .setTips{
        font-size: 13px;
        margin: 15px 0;
        color: #999;
    }
    .reset{
        width: 100%;
        padding: 13px 0;
        text-align: center;
        background: #3190e8;
        color: #fff;
    }
    .reset.optionText{
        color: rgba(255,255,255,0.5);
    }
</style>
