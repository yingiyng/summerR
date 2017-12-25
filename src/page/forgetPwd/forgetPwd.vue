<template>
  <div class="forgetBox">
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <form action="" class="form">
        <section class="form-item">
            <input type="text" placeholder="账号" v-model="userAccount">
        </section>
        <section class="form-item">
            <input type="text" placeholder="旧密码" v-model="userOldPwd">
        </section>
        <section class="form-item">
            <input type="text" placeholder="新密码" v-model="userNewPwd">
        </section>
        <section class="form-item">
            <input type="text" placeholder="确认新密码" v-model="userNewAgainPwd">
        </section>
        <section class="form-item">
            <input type="text" placeholder="验证码" v-model="userCode">
        </section>
      </form>
      <div class="forgetBtn" @click="mobileForget">确定修改</div>
      <tip-box :msg="errorMsg" @closeBox='closeBox' v-show="isShowTipBox"></tip-box>
  </div>
</template>
<script>
import headTop from '../../components/head/head.vue'
import tipBox from '../../components/tipBox/tipBox.vue'
export default {
    data(){
        return{
            headTitle:'重置密码',
            userAccount:null,
            userOldPwd:null,
            userNewPwd:null,
            userNewAgainPwd:null,
            userCode:null,
            errorMsg:null,
            isShowTipBox:false,
            updatePwd:false
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        mobileForget(){
            if(!this.userAccount){
                this.errorMsg='请输入用户名';
                this.isShowTipBox=true;
                return false;
            }else if(!this.userOldPwd){
                this.errorMsg='请输入旧密码';
                this.isShowTipBox=true;                
                return false;
            }else if(!this.userNewPwd){
                this.errorMsg='请输入新密码';
                this.isShowTipBox=true;                
                return false;
            }else if(!this.userNewAgainPwd&&this.userNewPwd!=this.userNewAgainPwd){
                this.errorMsg='两次密码输入不一致';
                this.isShowTipBox=true;                
                return false;
            }else if(!(/^\d{4}$/.test(this.userCode))){
                this.errorMsg='请输入4位数字验证码';
                this.isShowTipBox=true;                
                return false;
            }else{
                this.errorMsg='密码修改成功';
                this.isShowTipBox=true; 
                this.updatePwd=true; 
            }
        },
        closeBox(){
            this.isShowTipBox=false;
            if(this.updatePwd==true){
                this.$router.push({path:'/login'})  
            }
        }
    },
    components:{
        'headTop':headTop,
        'tipBox':tipBox
    }
}
</script>
<style>
body{
        background: #F5F5F5;
    }
    .form{
        background: #fff;
        width: 100%;
        margin-top: 15px;
    }
    .form-item{
        display: flex;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid #ededed;
    }
    .form-item input{
        border:none;
        outline: none;
        font-size: 16px;
        color: #333;
    }
    .forgetBtn{
        background: #4cd964;
        height: 45px;
        line-height: 45px;
        color: #fff;
        font-size: 16px;
        text-align: center;
        width: 93%;
        margin: 0 auto;
        margin-top: 20px;
        border-radius: 3px;
    }
   
</style> 
