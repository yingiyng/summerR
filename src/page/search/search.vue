<template>
  <div>
    <head-top :head-title="headTitle" @goBack="goBack"></head-top>
    <form action="" class="searchform">
        <input type="search" class="searchInput" placeholder="请输入商家或美食名称" v-model="searchVal"  @input="changeInput">
        <input type="submit" value="提交" class="searchBtn" @click.prevent="searchTarget('')">
    </form>
    <section class="search_history" v-if="searchHistory.length&&showHistory">
        <h4 class="historyTitle">搜索历史</h4>
        <ul>
            <li class="history_list" v-for="(item,index) in searchHistory">
                <span class="history_text ellipsis">{{item}}</span>
                <span class="delHistory" @click="delHistory(index)">x</span>
            </li>
        </ul>
        <footer class="clearHistory" @click="clearHistory">清空搜索历史</footer>
    </section>
    <section class="search_none" v-if="emptyResult">抱歉，未找到搜索结果！</section>
  </div>
</template>
<script>
import headTop from '../../components/head/head.vue'
import {getStore,setStore} from '../../common/js/mUtils'
export default {
  data(){
      return{
          headTitle:'搜索',
          searchVal:'',
          searchHistory:[],
          restaurantList:[],//搜索返回的结果
          showHistory:true,
          emptyResult: false, // 搜索结果为空时显示
      }
  },
  mounted(){
        // this.geohash = this.$route.params.geohash;
        //获取搜索历史记录
        if (getStore('searchHistory')) {
            this.searchHistory = JSON.parse(getStore('searchHistory'));
        }
    },
  components:{
      'headTop':headTop,
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      },
      searchFun(){
          console.log(this.searchVal);
          if(this.searchVal.length>0){
            this.searchHistory.push(this.searchVal);
            this.searchVal='';
          }
      },
      changeInput(){
        if(this.searchVal==''){
            this.showHistory=true;
            this.emptyResult=false;
        }
      },
      async searchTarget(historyValue){
            if (historyValue) {
                this.searchVal = historyValue;
            }else if (!this.searchVal) {
                return 
            }
            //隐藏历史记录
            this.showHistory = false;
            //获取搜索结果
            this.restaurantList = this.searchVal;
            this.emptyResult = true;
            
            /**
             * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
             * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
             */
            let history = getStore('searchHistory');
            if (history) { 
                let checkrepeat = false;
                this.searchHistory = JSON.parse(history);
                this.searchHistory.forEach(item => {
                    if (item == this.searchVal) {
                        checkrepeat = true;
                    }
                })
                if (!checkrepeat) {
                    this.searchHistory.push(this.searchVal)
                }
            }else {
                this.searchHistory.push(this.searchVal)
            }
            setStore('searchHistory',this.searchHistory)
        },
        delHistory(index){
            this.searchHistory.splice(index,1);
            setStore('searchHistory',this.searchHistory);
        },
        clearHistory(){
            this.searchHistory=[];
            setStore('searchHistory',this.searchHistory);
        }
  }
}
</script>
<style>
    .searchform{
        background: #fff;
        padding: 16px 12px;
        display: flex;
    }
    .searchform .searchInput{
        flex: 4;
        border: 1px solid #e4e4e4;
        font-size: 15px;
        color: #333;
        background: #f2f2f2;
        border-radius: 5px;
        padding: 8px 10px;
        font-weight: 700;
        outline: none;
    }
    .searchform .searchBtn{
        flex: 1;
        margin-left:  10px;
        background: #3190e8;
        border: 1px solid #3190e8;
        color: #fff;
        border-radius: 5px;
        font-weight: 700;
        font-size: 15px;
    }
    .historyTitle{
        font-size: 16px;
        padding: 16px 20px;
        font-weight: 700;
        color: #666;
    }
    .history_list{
        padding: 16px 16px;
        border-bottom:1px solid #ddd;
        background: #fff;        
    }
    .history_list .delHistory{
        font-size: 20px;
        float: right;
        color: #999;
    }
    .search_none{
        text-align: center;
        font-size: 16px;
        padding: 17px 0;
        background: #fff;
        margin-top: 10px;
    }
    .clearHistory{
        text-align: center;
        color: #3190e8;
        font-weight: bold;
        background: #fff;
        font-size: 16px;
        padding: 18px 0;
    }
</style>
