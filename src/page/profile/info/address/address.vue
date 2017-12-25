<template>
  <div class="address">
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <section class="addressList">
          <ul>
              <li v-for="(item,index) in addressList">
                  <div>
                      <p>{{item.address}}</p>
                      <p>{{item.phone}}<span v-if="item.phonepk">、{{item.phonepk}}</span></p>
                  </div>
              </li>
          </ul>
      </section>
      <section>
          <div class="addAddress">
              <router-link to="/profile/info/address/add">
                <span>新增地址</span>
                <span class="addIcon">></span>
              </router-link>   
          </div>
      </section>
  </div>
</template>
<script>
import headTop from '../../../../components/head/head.vue'
import Jquery from 'jquery'
export default {
  data(){
      return{
          headTitle:'编辑地址',
          addressList:[],
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
        var self = this 
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
                self.addressList=json.address;  
            },    
            error:function(XMLHttpRequest,textStatus,errorThrown){    
                console.log("jsonp.error:"+textStatus);    
            }  
        }) 
        // this.$http.get('http://192.168.1.119:8080/js/data.json').then(Response=>{
        //     this.addressList=Response.body.address;
        //     console.log(Response.body.address);
        // },err=>{
        //     console.log(err);
        // })
      }
  }
}
</script>
<style>
    body{
        background:#f5f5f5;
    }
    .addressList{
        margin-top: 10px;
        background: #fff;
        background: #fff8c3;
        border-top:1px solid #ddd;
    }
    .addressList li{
        border-bottom: 1px solid #ddd;
        padding: 15px 10px;        
    }
    .addressList li p{
        line-height: 23px;
    }
    .addAddress{
        background: #fff;
        padding: 14px 0;
        border-top:1px solid #ddd;
        border-bottom: 1px solid #ddd;
        margin-top: 10px;        
    }
    .addAddress a{
        display: flex;
        position: relative;
        padding-left: 10px;
        font-size: 18px;
        color: #333;
    }
    .addIcon{
        position: absolute;
        right: 10px;
        color: #999;
    }
</style>
