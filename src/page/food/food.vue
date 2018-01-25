<template>
    <div>
        <head-top :head-title="headTitle" @goBack="goBack"></head-top>
        <section class="food-sort">
            <div class="sort-item">
                <div class="sort-item-box" @click="sortFun('fenlei')" :class="{'sort-check':fenleiSection==true}">分类</div>
                <section class="sort_detail_type" v-if="fenleiSection">
                    <section class="sort_nav_left">
                        <ul>
                            <li class="sort_nav_li " v-for="(item,index) in category" @click="chooseCategoryFun(index,item.id)" :class="{sort_nav_li_check:index==chooseCategoryIndex}">
                                <span class="sort_li_name">{{item.name}}</span>
                                <span class="sort_li_num">{{item.count}}</span>
                            </li>
                        </ul>
                    </section>
                    <section class="sort_right">
                        <ul v-for="(item,index) in categoryDetail" v-if="item.id==categoryId">
                            <li class="sort_right_li" v-for="(cdl,cdlIndex) in item.categoryDetailList" >
                                <span class="sort_right_name">{{cdl.name}}</span><span class="sort_right_number">{{cdl.count}}</span>
                            </li>
                        </ul>
                    </section>
                </section>
            </div>
            <div class="sort-item">
                <div class="sort-item-box" @click="sortFun('tuijian')" :class="{'sort-check':tuijianSection==true}">推荐</div>     
                <section class="sort_detail_type" v-if="tuijianSection">
                    <ul class="tuijian_con">
                        <li v-for="(item,index) in Recommend" :class="{checkTuijian:item==checkTuijian}" @click="chooseTuijian(item)">{{item}}</li>
                    </ul>
                </section>           
            </div>
            <div class="sort-item">
                <div class="sort-item-box" @click="sortFun('saixuan')" :class="{'sort-check':saixuanSection==true}">筛选</div>     
                <section class="sort_detail_type" v-if="saixuanSection">
                    <div class="shaixuan_con">
                        <section class="song_type">
                            <header>配送方式</header>
                            <ul class="filter_ul">
                                <li v-for="(item,index) in Delivery" :class="{checkSort:item.isActive}" @click="chooseActivityFun(item,$event)">{{item.name}}</li>
                            </ul>
                        </section>  
                        <section class="shangjia_class">
                            <header>商家属性（可多选）</header>
                            <ul class="filter_ul">
                                <li :class="{checkSort:item.isActive}" v-for="(item,index) in Activity" @click="chooseActivityFun(item,$event)">{{item.name}}</li>
                            </ul>    
                        </section>  
                        <footer class="sort_footer_cancel">
                            <p @click="saixuanClearAll">清空</p>
                            <p class="comfimBtn" @click="saixuanConfimBtn">确定<span>({{checkLength}})</span></p>
                        </footer>
                    </div>
                </section>           
            </div>
        </section>
        <section class="food-list">
            <shop-list></shop-list>
        </section>
    </div>
</template>
<script>
import headTop from '../../components/head/head.vue'
import requestcrossdom from '../../common/js/requestDOM'
import shopList from '../shopList/shopList.vue'

export default {
  data(){
      return{
          headTitle:'美食列表',
          fenleiSection:false,
          tuijianSection:false,
          saixuanSection:false,
          checkTuijian:'',
          Recommend:['智能排序','离我最近','销量最高','起送价最低','配送速度最快','评价最高'],
          Delivery:[{name:'蜂鸟专送',isActive:false}],
          Activity:[{name:'品牌商家',isActive:false},{name:'外卖保',isActive:false},{name:'准时达',isActive:false},{name:'新店',isActive:false},{name:'在线支付',isActive:false},{name:'开发票',isActive:false}],
          checkLength:0,
          category:[{id:1,name:'异国料理',count:'20'},{id:2,name:'快餐便当',count:'120'},{id:3,name:'小吃夜宵',count:'20'},{id:4,name:'果蔬生鲜',count:'20'},{id:5,name:'特色超市',count:'20'}
          ,{id:6,name:'商店超市',count:'20'},{id:7,name:'鲜花蛋糕',count:'20'},{id:8,name:'甜品饮品',count:'20'},{id:9,name:'全部商家',count:'210'}],
          categoryDetail:[
              {
                  id:'1',
                  categoryDetailList:[{name:'简餐',count:'5'},{name:'盖浇饭',count:'12'},{name:'米粉面馆',count:'3'},
                                     {name:'包子粥店',count:'11'},{name:'香锅砂锅',count:'1'},{name:'麻辣烫',count:'2'},
                                     {name:'饺子馄饨',count:'1'},{name:'汉堡',count:'21'},{name:'生煎锅贴',count:'5'}]
              },
              {
                  id:'2',
                  categoryDetailList:[{name:'一荤一素套餐',count:'5'},{name:'一荤两素套餐',count:'12'},{name:'工作餐',count:'3'},
                                     {name:'两荤两素',count:'11'}]
              },
              {
                  id:'3',
                  categoryDetailList:[{name:'包子',count:'5'},{name:'羊肉串',count:'12'},{name:'鸭脖',count:'3'},
                                     {name:'鸭肠',count:'11'},{name:'烤鸡翅',count:'1'},{name:'烤馒头片',count:'2'}]
              },
              {
                  id:'4',
                  categoryDetailList:[{name:'苹果',count:'5'},{name:'香蕉',count:'12'},{name:'橘子',count:'3'},
                                     {name:'葡萄',count:'11'},{name:'鲍鱼',count:'1'},{name:'龙虾',count:'2'}]
              }
          ],
          chooseCategoryIndex:0,
          categoryId:0,
          shopList:[]
      }
  },
  methods:{
      sortFun(sec){
          switch(sec){
              case 'fenlei': 
                this.fenleiSection=!this.fenleiSection;
                this.tuijianSection=false;
                this.saixuanSection=false;
              break;
              case 'tuijian':
                this.fenleiSection=false;
                this.tuijianSection=!this.tuijianSection;
                this.saixuanSection=false;
              break;
              case 'saixuan':
                this.fenleiSection=false;
                this.tuijianSection=false;
                this.saixuanSection=!this.saixuanSection;
              break;
          }
      },
      chooseTuijian(tuijian){
          this.checkTuijian=tuijian;
          this.tuijianSection=!this.tuijianSection;
      },
      chooseActivityFun(item,event){
          if(!item.isActive){
              item.isActive=true;
              this.checkLength++;
          }else{
              item.isActive=false;
              this.checkLength--;
          }
      },
      saixuanClearAll(){
          for(var i=0;i<this.Activity.length;i++){
              this.Activity[i].isActive=false;
          }
          for(var i=0;i<this.Delivery.length;i++){
              this.Delivery[i].isActive=false;
          }
          this.checkLength=0;
      },
      saixuanConfimBtn(){
            this.saixuanSection=!this.saixuanSection;          
      },
      chooseCategoryFun(index,id){
          this.chooseCategoryIndex=index;
          this.categoryId=id;
      },
      getShopList(){
          var self=this;
          requestcrossdom.requestCrossDomain(function(json,textState){
             self.shopList=json.shopList;
          })
      },
      goBack(){
          this.$router.go(-1);
      }
  },
  components:{
      'headTop':headTop,
      'shopList':shopList
  }
}
</script>
<style>
@import url(../food/food.css);
</style>
