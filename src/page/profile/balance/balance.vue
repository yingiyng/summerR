<template>
    <div class="balance">
        <head-top :head-title="headTitle" @goBack="goBack"></head-top>
        <section class="content_container">
            <div class="content">
                <header class="content-header">
                    <span>当前余额</span>
                    <router-link to="/profile/balance/detail" class="yuePlain">余额说明</router-link>
                </header>
                <div class="content-num">
                    <span>{{balance}}</span>元
                </div>
                <div class="promit-button" :class="{checkButton:balance>0}">
                    提现
                </div>
            </div>
        </section>
        <section class="balance_list">
            <p class="balance_list_title">交易明细</p>
            <div class="no_list">
                暂无交易信息
            </div>
        </section>
    </div>
</template>
<script>
import headTop from '../../../components/head/head.vue'
export default {
    data(){
        return{
            headTitle:'账户余额',
            balance:'0.00'
        }
    },
    components:{
        'headTop':headTop
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style>
    .content_container{
        background: #3190e8;
        padding:15px 0;
    }
    .content_container .content{
        background: #fff;
        width: 88%;
        margin:0 auto;
        border-radius: 5px;
        padding: 10px;
    }
    .content-header{
        color: #999;
        font-size: 15px;
    }
    .content-header .yuePlain{
        color: #3190e8;
        float: right;
    }
    .content-num{
        font-size: 15px;
        color: #333;
        margin: 12px 0;
    }
    .content-num span{
        font-size: 38px;
        display: inline-block;
        margin-right: 3px;
    }
    .promit-button{
        margin: 27px 0 5px 0;
        width: 100%;
        padding: 15px 0;
        text-align: center;
        background: #ccc;
        color: #fff;
        font-size: 19px;
        border-radius: 5px;
    }
    .checkButton{
        background: #3190e8;
    }
    .balance_list{
        margin-top: 10px;
        padding:5px 10px;
    }
    .balance_list_title{
        color: #999;
    }
    .no_list{
        padding:50px 0;
        font-size: 18px;
        color: #999;
        text-align: center;
    }
</style>
