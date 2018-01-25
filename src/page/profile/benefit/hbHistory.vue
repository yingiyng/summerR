<template>
  <div>
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <section class="box-list">
              <div>
                <ul class="envelopes_list">
                    <li v-for="(item,index) in hbHistoryList">
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
                                </div>
                                <p>{{item.expireDate}}到期</p>
                                <p>仅限手机号为{{item.onlyphone}}收货</p>
                            </div>
                        </section>
                        <footer v-if="item.description_map.delat_other&&item.hbGuoqi" class="delat_other">
                            {{item.description_map.delat_other}}
                        </footer>
                    </li>
                </ul>
              </div>
          </section>
  </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
import Jquery from 'jquery'
export default {
  data(){
      return{
          headTitle:"历史红包",
          hbHistoryList:[],
      }
  },
  components:{
      'headTop':headTop
  },
  created:function(){
      this.gethbHistory();
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      },
      gethbHistory(){
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
                        if(json.envelopesList[i].hbGuoqi){
                            self.hbHistoryList.push(json.envelopesList[i]);
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
<style>
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
        color: #999;
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
        color: #7E7E7E;
    }
    .list_flex .shengri{
        text-align: right;
        color:#999;
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
</style>
