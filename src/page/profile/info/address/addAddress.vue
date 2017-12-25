<template>
    <div class="address">
        <head-top :head-title="headTitle" @goBack="goBack"></head-top>
        <section class="addressBox">
            <ul>
                <li>
                    <input type="text" class="inputText" placeholder="请填写你的姓名" :class="{errorBorder:checkName}" v-model="userName" @input="checkUsername">
                    <p class="errorTip" v-show="checkName">请填写收餐人姓名</p>
                </li>
                <li>
                    <input type="text" class="inputText" placeholder="小区/写字楼/学校等" :class="{errorBorder:checkHouse}" v-model="userHouse" @input="checkUserhouse">
                    <p class="errorTip" v-show="checkHouse">请填写小区/写字楼/学校等</p>                    
                </li>
                <li>
                    <input type="text" class="inputText" placeholder="请填写详细送餐地址" :class="{errorBorder:checkAddress}" v-model="userAddress" @input="checkUseraddress">
                    <p class="errorTip" v-show="checkAddress">请填写详细送餐地址</p>                                        
                </li>
                <li>
                    <input type="text" class="inputText" placeholder="请填写能够联系到你的手机号" :class="{errorBorder:checkPhone}" v-model="userPhone" @input="checkUserphone">
                    <p class="errorTip" v-show="checkPhone">请填写正确的手机号</p>                                                            
                </li>
                <li>
                    <input type="text" class="inputText" placeholder="备用联系电话（选填）" v-model="userBeiPhone">
                </li>
            </ul>
        </section>
        <div class="addAddress" :class="{optionText:isOption}" @click="saveAddress">新增地址</div>
    </div>
</template>
<script>
import headTop from '../../../../components/head/head.vue'
import Jquery from 'jquery'
export default {
  data(){
      return{
          headTitle:'新增地址',
          userName:null,
          userHouse:null,
          userAddress:null,
          userPhone:null,
          userBeiPhone:null,
          isOption:true,
          checkName:false, //判断姓名边框
          checkHouse:false, //判断小区
          checkAddress:false, //判断送餐地址
          checkPhone:false, //判断手机号
      }
  },
  components:{
      'headTop':headTop
  },
  methods:{
      goBack(){
            this.$router.go(-1);
      },
    //   判断姓名
      checkUsername(){
          if(this.userName.length<3){
              this.checkName=true;
          }else{
              this.checkName=false;
          }
        this.bindThing();          
      },
    //   判断小区
    checkUserhouse(){
        if(this.userHouse==null){
            this.checkHouse=true;
        }else{
            this.checkHouse=false;
        }
        this.bindThing();        
    },
    // 判断地址
    checkUseraddress(){
        if(this.userAddress.length<10){
            this.checkAddress=true;
        }else{
            this.checkAddress=false;
        }
        this.bindThing();        
    },
    // 判断手机号
    checkUserphone(){
        if(!(/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/.test(this.userPhone))){
            this.checkPhone=true;
        }else{
            this.checkPhone=false;
        }
        this.bindThing();
    },
    bindThing(){
        if(this.checkPhone==false && this.checkAddress==false && this.checkHouse==false && this.checkName==false){
            this.isOption=false;
        }else{
            this.isOption=true;
        }
    },
    saveAddress(){
        if(this.isOption==false){
            var self=this;
            Jquery.ajax({ 
                url: 'http://192.168.1.119:8080/js/data.json', 
                type: 'GET', 
                dataType:"jsonp",    
                jsonp:"callback", 
                jsonpCallback:"success_jsonp",     
                dataFilter:function(json){    
                    console.log("jsonp.filter:"+json);    
                    return json;    
                },    
                success:function(json,textStatus){    
                    console.log(json.address);
                    json.address.push({"address":self.userAddress,"phone":self.userPhone,"phonepk":self.userBeiPhone});  
                },    
                error:function(XMLHttpRequest,textStatus,errorThrown){    
                    console.log("jsonp.error:"+textStatus);    
                }  
        }) 
        }
    }
     
  }
}
</script>
<style scoped>
    body{
        background: #f5f5f5;
    }
    .addressBox{
        background: #fff;
        width: 96%;
        margin: 10px auto;
        border:1px solid #ddd;
    }
    .addressBox li{
        margin:10px 0;
    }
    .addressBox .errorTip{
        color: #f00;
        font-size: 13px;
        padding: 7px 0;
        margin-left: 3%;
    }
    .addressBox .inputText{
        display: block;
        width: 90%;
        margin: 0 auto;
        background: #f2f2f2;
        border:1px solid #ddd;
        font-size: 16px;
        padding: 11px 9px;
        border-radius: 5px;
        outline: none;
    }
    .addressBox .inputText.errorBorder{
        border-color: #f00;
    }
    .addAddress{
        width: 96%;
        margin:0 auto;
        padding: 13px 0;
        text-align: center;
        background: #4cd964;
        color: #fff;
        margin-top: 20px;
    }
    .optionText{
        color: rgba(255,255,255,0.6);
    }
</style>
