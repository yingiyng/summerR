<template>
    <div>
        <head-top :head-title="headTitle"></head-top>
        <form action="" class="form">
            <section class="form-item">
                <input type="text" placeholder="账号" v-model="userAccount">
            </section>
            <section class="form-item">
                <input type="text" placeholder="密码" v-if="showPwd" v-model="userPwd">
                <input type="password" placeholder="密码" v-if="!showPwd" v-model="userPwd">
                <div class="switchButton" :class="{right:showPwd}">
                    <div class="circel_button" :class="{right:showPwd}" @click="changePassWordType"></div>
                    <span>abc...</span>
                </div>
            </section>
            <section class="form-item">
                <input type="text" placeholder="验证码" v-model="userCode">
            </section>
        </form>
        <p class="login-tips">温馨提示：未注册过的账号，被登陆后即将默认被注册</p>
        <p class="login-tips">注册过的用户即可凭账号和密码登录</p>
        <div class="loginBtn" @click="mobileLogin">登录</div>
        <router-link to="/forgetPwd" class="to_forget">重置密码？</router-link>  
        <tip-box :msg="msgTip" v-show="isShowTipBox" @closeBox="closeBox"></tip-box> 
    </div>
</template>
<script>
import headTop from '../../components/head/head.vue'
import tipBox from '../../components/tipBox/tipBox.vue'
export default {
    data(){
        return{
            showPwd:false,
            userAccount:null,
            userPwd:null,
            userCode:null,
            headTitle:'用户登录',
            msgTip:null,
            isShowTipBox:false
        }
    },
    components:{
        'headTop':headTop,
        'tipBox':tipBox
    },
    methods:{
        changePassWordType(){
            this.showPwd=!this.showPwd;
        },
        mobileLogin(){
            if(this.userAccount==null){
                this.msgTip='请输入用户名';
                 this.isShowTipBox=true;
                return false;
            }else if(!this.userPwd){
                this.msgTip='请输入密码';
                 this.isShowTipBox=true;
                return false;
            }else if(this.userPwd.length<6){
                this.msgTip='密码必须大于等于6位';
                 this.isShowTipBox=true;
                return false;
            }
            else if(!this.userCode){
                this.msgTip='请输入验证码';
                 this.isShowTipBox=true;
                return false;
            }else if(!(/^\d{4}$/.test(this.userCode))){
                this.msgTip='请输入4位纯数字验证码';
                 this.isShowTipBox=true;
                return false;
            }else{
                this.$router.push({path:'/profile'})
            }
        
        },
        closeBox(){
            this.isShowTipBox=false;
        }
    },
   
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
    .login-tips{
        font-size: 12px;
        color:#f00;
        width: 93%;
        margin: 0 auto;
        margin-top:13px;
    }
    .loginBtn{
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
    .to_forget{
        display: block;
        margin-top: 20px;
        padding-right: 3.5%;
        text-align: right;
        font-size: 15px;
        color: #4A7DBC;
    }
    .switchButton{
        position: absolute;
        right:8%;
        display: flex;
        align-items: center;
        background: #ccc;
        width: 51px;
        height: 19px;
        border-radius: 10px;        
    }
    .switchButton.right{
        background: #4cd964;
    }
    .circel_button{
        transition: all .3s;
        position: absolute;
        top: -6px;
        z-index: 1;
        left: -10px;
        width: 29px;
        height: 29px;
        box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0,0,0,.1);
        background-color: #f1f1f1;
        border-radius: 50%;
    }
    .circel_button.right{
        transform: translateX(38px);
    }
    .switchButton span{
        font-size: 12px;
        color: #fff;
        position: absolute;
        right: 13px;
    }
</style>
