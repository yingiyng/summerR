<template>
  <div class="info">
    <head-top :head-title="headTitle" @goBack="goBack"></head-top>
    <section class="info-list mt10">
        <div class="list-item">
            <router-link to='/profile/info/setUserName'>
                <span class="item-label">用户名</span>
                <div class="item-div">
                    <p>{{username}}</p>
                    <span>></span>
                </div>
            </router-link>
        </div>
        <div class="list-item">
            <router-link to='/profile/info/address'>
                <span class="item-label">收货地址</span>
                <div class="item-div">
                    <p>{{address}}</p>
                    <span>></span>
                </div>
            </router-link>
        </div>
    </section>
    <p class="info-title">账号绑定</p>
    <section class="info-list">
        <div class="list-item">
            <router-link to=''>
                <span class="item-label">手机</span>
                <div class="item-div">
                    <p>{{userphone}}</p>
                    <span>></span>
                </div>
            </router-link>
        </div>
    </section>
    <p class="info-title">安全设置</p>
    <section class="info-list">
        <div class="list-item">
            <router-link to='/forgetPwd'>
                <span class="item-label">登录密码</span>
                <div class="item-div">
                    <p>修改</p>
                    <span>></span>
                </div>
            </router-link>
        </div>
    </section>
    <div class="exitLogin" @click="exitLogin">退出登录</div>
  </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
export default {
  data(){
      return{
          headTitle:'账户信息',
          username:'13661073032',
          address:'',
          userphone:''
      }
  },
  components:{
      'headTop':headTop
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      },
      exitLogin(){
         this.$router.push({path:'/login'})
      }
  }
}
</script>
<style>
    body{
        background: #F5F5F5;
    }
    .info-list.mt10{
        margin-top: 10px;
    }
    .info-list{
        background: #fff;
    }
    .list-item{
        border-bottom: 1px solid #ededed;
    }
    .list-item a{
        width: 100%;
        display: flex;
        align-items: center;    
        padding: 19px 10px;
        position: relative;    
    }   
    .item-label{
        font-size: 16px;
        color: #333;
    }
    .item-div{
        text-align: right;
        display: flex;
        position: absolute;
        right:7%;
        color: #999;
        font-size: 16px;
    }
    .item-div span{
        display: inline-block;
        margin-left: 10px;
    }
    .info-title{
        height: 38px;
        line-height: 38px;
        font-size: 13px;
        padding-left: 10px;
    }
    .exitLogin{
        margin:40px 2% 0 2%;
        widows: 96%;
        background: #d8584a;
        color: #fff;
        font-size: 16px;
        padding: 13px 0;
        border-radius: 6px;
        text-align: center;
    }
</style>
