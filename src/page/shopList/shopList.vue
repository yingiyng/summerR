<template>
    <div class="shoplist_container">
        <ul>
            <li class="shop_li" v-for="(item,index) in shopList">
                <router-link to="/shop">
                    <section class="shop_img">
                        <img :src="item.image_url" alt="">
                    </section>
                    <section class="shop_right">
                        <header class="shop_header">
                            <h4>
                                <span class="shopHeader_tips">品牌</span>
                                {{item.name}}
                            </h4>
                            <span class="shop_header_right">{{item.icon_name}}</span>
                        </header>
                        <div class="rating_order_num">
                            <section class="rating-left">
                                <start :score="item.score"></start>
                                <span class="ratingNum">月售{{item.recent_order_num}}单</span>
                            </section>
                            <section class="rating-right">
                                <span class="delivery_style delivery_left">{{item.delivery_mode.text}}</span>
                                <span class="delivery_style delivery_right">{{item.zhunshi}}</span>
                            </section>
                        </div>
                        <div class="fee_distance">
                            <section class="fee-left">
                                ￥{{item.float_minimum_order_amount}}起送 <span class="segmentation">/</span> {{item.piecewise_agent_fee.tips}}
                            </section>
                            <section class="fee-right">
                                <span>{{item.km}}</span>
                                <span class="segmentation">/</span>
                                <span class="order_time">{{item.order_lead_time}}</span>
                            </section>
                        </div>
                    </section>
                </router-link>
            </li>
            
        </ul>
    </div>
</template>
<script>
import requestcrossdom from '../../common/js/requestDOM'
import start from '../../components/start/start.vue'
export default {
    data(){
        return{
            shopList:[]
        }
    },
    created:function(){
        this.getshopList();
    },
    components:{
        'start':start
    },
    methods:{
        getshopList(){
            var self=this;
            requestcrossdom.requestCrossDomain(function(json,textStatus){
                console.log(json.shopList)
                self.shopList=json.shopList;
            })
        }
    }
}
</script>
<style>
    .shoplist_container{
        margin-top: 10px;
    }
    .shop_li{
        border-bottom:1px solid #ededed;
        padding: 10px;
    }
    .shop_li>a{
        display: flex;
        align-items: center;
    }
    .shop_right{
        flex:1;
    }
    .shop_img img{
        width: 70px;
        height: 70px;
    }
    .shop_right .shop_header{
        display: flex;
        align-items: center;
        width: 100%;
    }
    .shop_right .shop_header h4{
        font-size: 16px;
        color: #333;
        font-weight:700;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    }
    .shopHeader_tips{
        background: #ffd930;
        font-size: 14px;
        font-weight:700;
        padding: 0 1px;
    }
    .shop_header_right{
        flex: 1;
        text-align: right;
        padding-right: 10px;
        font-size: 10px;
    }
    .rating_order_num{
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #666;
        padding:3px 0 3px 10px;
    }
    .rating-left{
        display: flex;
        flex: 1;
    }
    .rating-left .ratingNum{
        margin-left: 5px;
    }
    .rating-right{
        flex:1;
        text-align: right;
    }
    .delivery_style{
        font-size: 12px;
        padding: 1px 3px;
        border-radius: 2px;
    }
    .delivery_left{
        background: #3190e8;
        color: #fff;
        border:1px solid #3190e8;
    }
    .delivery_right{
        border:1px solid #3190e8;
        color: #3190e8;
    }
    .fee_distance{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px 0 3px 10px;
        color: #666;
        font-size: 12px;
    }
    .fee-right{
        flex:1;
        text-align: right;
        padding-right: 10px;
    }
    .order_time{
        color: #3190e8;
    }
</style>

