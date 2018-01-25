<template>
  <div>
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <section class="address-box">
        <ul>
          <li class="address-item" v-for="(item,index) in addressList" @click="chooseAddressFun(index)" :class="{checkItem:index==chooseIndex}">
            <router-link to="">
              <p class="isChooseIcon"></p>
              <div class="address-info">
                  <p class="info-top">
                    <b class="info-name">{{item.name}}</b>
                    <span class="info-sex" v-if="item.sex==0">女士</span>
                    <span class="info-sex" v-if="item.sex==1">男士</span>
                    <span class="info-phone">{{item.phone}}</span>
                  </p>
                  <p>
                    <span class="info-tips">{{item.tag}}</span>
                    <span class="info-ads">{{item.address_detail}}</span>
                  </p>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
      <footer class="addAds">
        <router-link to="/comfimOrder/chooseAddress/addAddress">             
          新增收获地址                                                                                                                                                   
        </router-link>
      </footer>
  </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
import requestcrosedom from '../../../common/js/requestDOM'
export default {
    data(){
      return{
        headTitle:'选择地址',
        addressList:null,
        chooseIndex:0
      }
    },
    components:{
      'headTop':headTop
    },
    created:function(){
      this.getAddressList();
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      getAddressList(){
          var self=this;
          requestcrosedom.requestCrossDomain(function(json,textState){
              self.addressList=json.address;
          })
      },
      chooseAddressFun(index){
        this.chooseIndex=index;
      }
    }
}
</script>
<style>
    @import url(../address/chooseAddress.css);
</style>
