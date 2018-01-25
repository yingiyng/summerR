<template>
    <div>
        <head-top :head-title="headTitle" @goBack="goBack"></head-top>
        <section>
            <div class="orderbody">
                <div class="orderCardList" v-for="(item,index) in orderList">
                   <router-link to="" class="orderCard">
                        <div class="ordercard-body">
                            <router-link to="" class="orderImg">
                                <img :src=item.orderImg alt="">
                            </router-link>
                            <div class="ordercard-content">
                                <div class="ordercard-head" @click="showItemDetail(item)">
                                    <div class="title">
                                        <router-link to="" class="name">{{item.restaurant_name}}</router-link>
                                        <span class="payState">{{item.payState}}</span>
                                    </div>
                                    <p class="datetime">2分钟前</p>
                                </div>
                                <div class="ordercard-detail">
                                    <p class="detail">
                                        <span><i v-for="group in item.productGroup">{{group.groupName}}</i></span>
                                        <span v-if="item.productGroup.length>1">等{{item.productGroup.length}}件商品</span>
                                    </p>
                                    <p class="price">￥{{item.productPrice}}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <div class="ordercard-bottom">
                        <button class="cardBtn"><router-link :to="{path:'/goods',query: {geohash, id: item.restaurant_id}}">再来一单</router-link></button>
                    </div>     
                </div>
            </div>
        </section>
        <foot-bottom></foot-bottom>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import headTop from '../../components/head/head.vue'
import footBottom from '../../components/footer/footer.vue'
import requestCrossDomain from '../../common/js/requestDOM'
export default {
  data(){
      return{
          headTitle:'订单列表',
          orderList:[]
      }
  },
  created:function(){
      this.getOrderList();
  },
  computed: {
       ...mapState([
                'userInfo', 'geohash'
        ]),
    //   author () {
    //     return this.$store.state.author
    //   }
  },
  methods:{
       ...mapMutations([
               'SAVE_ORDER'
            ]),
      goBack(){
          this.$router.go(-1);
      },
      getOrderList(){
          var self=this;
          requestCrossDomain.requestCrossDomain(function(json,textStatus){    
                    console.log(json.orderList);
                    self.orderList=json.orderList;
                });
      },
      showItemDetail(item){
          this.SAVE_ORDER(item);
          this.$router.push('/order/orderDetail');
      }
  },
  components:{
      'headTop':headTop,
      'footBottom':footBottom
  }
}
</script>
<style>
    .orderCardList{
        background-color: #fff;
    }
    .orderCard{
        display: block;
        margin-top: 10px;
        padding: 10px 0 10px 20px;
    }
    .ordercard-body{
        display: flex;
    }
    .orderImg{
        flex: none;
        margin-right: 15px;
    }
    .orderImg img{
        width: 33px;
        height: 33px;
    }
    .ordercard-content{
        flex:1;
        border-bottom: 1px solid #ededed;     
        padding-right: 10px;
        padding-bottom: 10px;   
    }
    .ordercard-head .title{
        display: flex;
        align-items: center;
    }
    .ordercard-head .title .name{
        font-size: 18px;
        color: #333;
    }
    .ordercard-head .title .payState{
        text-align: right;
        flex:1;
        font-size: 13px;
        text-align: right;
    }
    .ordercard-head .datetime{
        font-size: 13px;
        margin-top: 6px;
    }
    .ordercard-detail{
        display: flex;
        align-items: center;
        padding: 20px 0 4px 0;
    }
    .ordercard-detail .detail{
        font-size: 13px;
    }
    .ordercard-detail .detail i{
        font-style: normal;
    }
    .ordercard-detail .price{
        flex:1;
        text-align: right;
        font-weight: 600;
        color: #333;
    }
    .ordercard-bottom{
        text-align: right;
        padding: 5px 10px 10px 0;
    }
    .ordercard-bottom .cardBtn{
        border:1px solid rgba(0,140,255,0.5);
        padding: 7px 13px;
        color: rgb(0,140,255);
        background: none;
        border-radius: 3px;
    }
</style> 

