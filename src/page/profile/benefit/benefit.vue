<template>
  <div>
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <div class="benefit-box">
          <section class="box-nav">
              <span :class="{check:isEnvelopes}" @click="envelopesFun">红包</span>
              <span :class="{check:!isEnvelopes}" @click="businessFun">商家代金券</span>
          </section>
          <section class="box-list">
              <div v-show="isEnvelopes">
               <div class="box-list-top">
                    <span>有 <span>{{envelopes_list.length}}</span> 个即将到期的红包</span>
                    <router-link to="/profile/benefit/hbInfo"  class="hbTips">红包说明</router-link>
              </div>
                <ul class="envelopes_list">
                    <li v-for="(item,index) in envelopes_list">
                        <section class="list_section">
                            <div class="list_section_left">
                                <p class="list_price">
                                    <span>￥</span>
                                    <b>{{item.amount}}</b>
                                </p>
                                <p class="list_bottom">{{item.describe}}</p>
                            </div>
                            <div class="list_section_right">
                                <div class="list_flex">
                                    <span>{{item.hongbaoType}}</span>
                                    <span class="shengri">{{item.description_map.delat}}</span>
                                </div>
                                <p>{{item.expireDate}}到期</p>
                                <p>仅限手机号为{{item.onlyphone}}收货</p>
                            </div>
                        </section>
                        <footer v-if="item.description_map.delat_other" class="delat_other">
                            {{item.description_map.delat_other}}
                        </footer>
                    </li>
                </ul>
                <p class="historyHongbao">
                    <router-link to="/profile/hbHistory">查看历史红包></router-link>
                </p>
              </div>
              <div v-show="!isEnvelopes">
                <div class="box-list-top">
                    <router-link to="/profile/benefit/sjInfo"  class="hbTips">商家代金券说明</router-link>
                </div>
                <div class="unable_use">
                    <h3>无法使用代金券</h3>
                    <p>非客户端或客户端版本太低</p>
                    <p class="downBtn">下载或升级客户端</p>          
                </div>
              </div>
          </section>
      </div>
  </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
import Jquery from 'jquery'
export default {
    data(){
        return{
            headTitle:'我的优惠',
            isEnvelopes:true,
            envelopes_list:[]
        }
    },
    components:{
        'headTop':headTop
    },
    created:function(){
        this.getEnvelopesList();
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        envelopesFun(){
            this.isEnvelopes=true;
        },
        businessFun(){
            this.isEnvelopes=false;
        },
        getEnvelopesList(){
            var self=this;
            Jquery.ajax({ 
            url: 'http://192.168.1.124:8089/js/data.json', 
            type: 'GET', 
            dataType:"jsonp",    
            jsonp:"callback", 
            jsonpCallback:"success_jsonp",     
            dataFilter:function(json){    
                console.log("jsonp.filter:"+json);    
                return json;    
            },    
            success:function(json,textStatus){    
                console.log(json.envelopesList);
                for(var i=0;i<json.envelopesList.length;i++){
                    if(json.envelopesList[i].hbGuoqi==false){
                        self.envelopes_list.push(json.envelopesList[i]);
                    }
                }                
            },    
            error:function(XMLHttpRequest,textStatus,errorThrown){    
                console.log("jsonp.error:"+textStatus);    
            }  
        }) 
        }
    }
}
</script>
<style scoped>
    .unable_use{
        font-size: 13px;
        color: #999;
        text-align: center;
        line-height: 30px;
        margin-top: 20%;
    }
    .unable_use h3{
        font-size: 18px;
        color: #333;
    }
    .unable_use .downBtn{
        display: inline-block;
        color: #fff;
        border-radius: 4px;
        padding: 4px 10px;
        background: #56d176;
        margin-top: 3px;
        font-size: 17px;
    }
    .box-nav{
        padding: 16px 0;
        text-align: center;
        display: flex;
        background: #fff;
    }
    .box-nav span{
        display: inline-block;
        flex:1;
    }
    .box-nav span.check{
        color: #3190e8;
    }
    .box-list{
        width: 93%;
        margin: 20px auto;
    }
    .box-list-top{
        display: flex;
    }
    .box-list-top span{
        flex:1;
        font-size: 13px;
        color: #999;
    }
    .box-list-top .hbTips{
        flex:1;
        text-align: right;
        font-size: 13px;
        color: #3190e8;
    }
    .envelopes_list{
        font-size: 14px;
        margin-top: 13px;
        border-radius: 5px;
    }
    .envelopes_list li{
        background: #ffffff;
        margin-top: 9px;
        border-radius: 4px;
    }
    .list_section{
        display: flex;
        justify-content: space-between;
        padding: 20px 15px 15px 15px;
    }
    .list_section_left{
        flex:1;
        border-right: 1px dotted #ddd;
    }
    .list_price{
        color: #ff5340;
    }
    .list_price span{
        font-weight: 600;
        font-size: 16px;
    }
    .list_price b{
        font-size: 26px;
        font-weight: 700;
    }
    .list_bottom{
        margin-top: 10px;
        color: #999;
    }
    .list_section_right{
        flex:2;
        color: #999;
        padding-left: 20px;
    }
    .list_section_right .list_flex{
        display: flex;
        font-size: 17px;
        margin-bottom: 6px;
    }
    .list_flex span{
        flex:1;
        color: #333;
    }
    .list_flex .shengri{
        text-align: right;
        color:#ff5340;
    }
    .list_section_right p{
        line-height: 20px;
        font-size: 13px;
    }
    .delat_other{
        text-align: center;
        background: #F9F9F9;
        padding: 12px 0;
        color: #999;
        font-size: 13px;
    }
    .historyHongbao{
        text-align: center;
        font-size: 14px;
        margin-top:40px;
    }
</style>
