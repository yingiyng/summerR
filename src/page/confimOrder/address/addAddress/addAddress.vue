<template>
  <div>
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <section class="addAddress">
          <section class="addAddress_item">
              <span class="item_title">联系人</span>
              <section class="item_con">
                  <p class="child_item">
                      <input type="text" placeholder="你的名字" v-model="uname">
                  </p>
                  <p class="child_item chooseSex">
                      <span :class="{checkSex:uSex==1}" @click="chooseSexFun(1)">男士</span>
                      <span :class="{checkSex:uSex==0}" @click="chooseSexFun(0)">女士</span>
                  </p>
              </section>
          </section>
          <section class="addAddress_item">
              <span class="item_title">联系电话</span>
              <section class="item_con">
                  <input type="text" placeholder="你的手机号" v-model="uphone">
              </section>
          </section>
          <section class="addAddress_item">
              <span class="item_title">送餐地址</span>
              <section class="item_con">
                 <p class="child_item">
                     <input type="text" placeholder="小区/写字楼/学校等" v-model="uaddress">
                 </p>
                 <p class="child_item">
                     <input type="text" placeholder="详细地址（如门牌号等）" v-model="uDetailAddress">
                 </p>     
              </section> 
          </section>
          <section class="addAddress_item">
              <span class="item_title">标签</span>
              <section class="item_con">
                  <input type="text" placeholder="无/家/学校公司" v-model="uTag">
              </section>
          </section>
      </section>
      <section>
          <p class="addAddressBtn" @click="addAddressSaveFun">确定</p>
      </section>
      <tip-box :msg="msg" v-if='tipBox' @closeBox="closeBox"></tip-box>
  </div>
</template>
<script>
import headTop from '../../../../components/head/head.vue'
import tipBox from '../../../../components/tipBox/tipBox.vue'
import requestcrosedom from '../../../../common/js/requestDOM'

export default {
  data(){
      return{
          headTitle:'添加地址',
          uSex:0,
          uname:null,
          uphone:null,
          uaddress:null,
          uDetailAddress:null,
          uTag:null,
          tipBox:false,
          msg:'111'
      }
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      },
      chooseSexFun(index){
          this.uSex=index;
      },
      closeBox(){
          this.tipBox=false;
      },
      addAddressSaveFun(){
          if(this.uname==null){
              this.tipBox=true;
              this.msg="请输入姓名";
          }else if(this.uphone==null){
              this.tipBox=true;
              this.msg="请输入手机号";
          }else if(!/^1[34578]\d{9}$/.test(this.uphone)){
              this.tipBox=true;
              this.msg="请输入正确的手机号"
          }else if(!this.uaddress){
              this.tipBox=true;
              this.msg="请输入地址";
          }else if(!this.uDetailAddress){
              this.tipBox=true;
              this.msg="详细地址信息有误";
          }else if(!this.uTag){
              this.tipBox=true;
              this.msg="标签错误";
          }else{
              var self=this;
              requestcrosedom.requestCrossDomain(function(json,textState){
                  json.address.push({name:self.uname,sex:self.uSex,phone:self.uphone,address_detail:self.uDetailAddress,tag:self.uTag});
                  alert(json.address.length);
                  self.$router.go(-1);
              })
            
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
@import url(../addAddress/addAddress.css);

</style>
