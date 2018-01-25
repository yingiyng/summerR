<template>
  <div class="profile">
      <head-top :head-title="headTitle"></head-top>
      <section class="profileBox">
          <section class="profile-my">
              <router-link to='/profile/info'>
                  <div class="my-img"></div>
                  <div class="my-info">
                      <p class="my-name">13661073032</p>
                      <p class='my-phone'>暂无绑定手机号</p>
                  </div>
                  <div class="arrow">></div>
              </router-link>
          </section>
          <section class="profile-info">
              <ul>
                  <li class="info-item">
                    <router-link to='/profile/balance'>
                        <span><b>{{blanace}}</b>元</span>
                        <span>我的余额</span>
                    </router-link>
                  </li>
                  <li class="info-item">
                    <router-link to='/profile/benefit'>
                        <span><b>{{youhui}}</b>个</span>
                        <span>我的优惠</span>
                    </router-link>                        
                  </li>
                  <li class="info-item">
                    <router-link to='/profile/integral'>                      
                        <span><b>{{jifen}}</b>分</span>
                        <span>我的积分</span>
                    </router-link>                    
                  </li>
              </ul>
          </section>
          <section class="profile-list">
            <ul>
                <li>
                    <router-link to='/order'>
                        <span class="list-icon"></span>
                        <div class="list-text-arrow">
                            <span class="list-text">我的订单</span>
                            <span class="list-arrow">></span>
                        </div>
                    </router-link>    
                </li>
                <li>
                    <router-link to=''>
                        <span class="list-icon"></span>
                        <div class="list-text-arrow">
                            <span class="list-text">积分商城</span>
                            <span class="list-arrow">></span>
                        </div>
                    </router-link>    
                </li>
                <li>
                    <router-link to=''>
                        <span class="list-icon"></span>
                        <div class="list-text-arrow">
                            <span class="list-text">饿了么会员卡</span>
                            <span class="list-arrow">></span>
                        </div>
                    </router-link>    
                </li>
            </ul>
          </section>
          <section class="profile-list">
            <ul>
                <li>
                    <router-link to='/info'>
                        <span class="list-icon"></span>
                        <div class="list-text-arrow">
                            <span class="list-text">服务中心</span>
                            <span class="list-arrow">></span>
                        </div>
                    </router-link>    
                </li>
                <li>
                    <router-link to=''>
                        <span class="list-icon"></span>
                        <div class="list-text-arrow">
                            <span class="list-text">下载饿了么APP</span>
                            <span class="list-arrow">></span>
                        </div>
                    </router-link>    
                </li>
            </ul>
          </section>
      </section>
      <foot-bottom></foot-bottom>
  </div>
</template>
<script>
import headTop from '../../components/head/head.vue'
import footBottom from '../../components/footer/footer.vue'
export default {
  data(){ 
      return{
          headTitle:'我的',
          blanace:'0.00',
          youhui:3,
          jifen:0
      }
  },
  components:{
      'headTop':headTop,
      'footBottom':footBottom
  }
}
</script>
<style>
    body{
        background: #F5F5F5;
    }
    .profile-my{
        display: flex;
        background: #3190e8;
        color: #fff;
        padding: 20px;
    }
    .profile-my a{
        display: block;
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
    }
    .my-img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border:1px solid #ddd;
        margin-right: 20px;
    }
    .my-info{
        color: #fff;
    }
    .my-name{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 7px;
    }
    .my-phone{
        font-size: 14px;
    }
    .arrow{
        color: #fff;
        position: absolute;
        right:0;
        font-size: 25px;
    }
    .profile-info ul{
        display: flex;
        background: #fff;
    }
    .profile-info ul .info-item{
        flex:1;
        text-align: center;
        padding: 20px 0;
        border-right: 1px solid #ededed;
    }
    .profile-info ul .info-item:last-child{
        border-right: none;
    }
    .info-item span{
        display: block;
        line-height: 24px;
        color: #999;
    }
    .info-item span b{
        font-size: 22px;
        font-weight: 600;
        margin-right: 3px;
    }
    .profile-info ul .info-item:nth-child(1) b{
        color: #f90;
    }
    .profile-info ul .info-item:nth-child(2) b{
        color: #ff5f3e;
    }
    .profile-info ul .info-item:nth-child(3) b{
        color: #6ac20b;
    }
    .profile-list{
        background: #fff;
        margin-top: 10px;
    }
    .profile-list li{
        height: 53px;
        width: 100%;
    }
    .profile-list li a{
        display: flex;
        align-items: center;  
        width: 96%;
        margin-left: 4%;
    }
    .list-icon{
        display: inline-block;
        width: 15px;
        height: 15px;
        border:1px solid #ddd;
    }
    .list-text-arrow{
        flex: 5;
        border-bottom: 1px solid #ededed;
        position: relative;
        height: 53px;
        line-height: 53px;
        margin-left: 10px;
        padding-left: 5px;
    }
    .list-text{
        font-size: 17px;
        color: #333;
    }
    .list-arrow{
        position: absolute;
        right: 11px;
        font-size: 17px;
        color: #BBBBBB;
    }
</style>

