<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item" v-for="(item,index) in goods" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text">
            <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>
              {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
       <ul >
        <li class="food-list food-list-hook" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item" v-for="food in item.foods">
                <div class="icon">
                  <img :src="food.icon" alt="" width="57" height="57">
                </div>
                <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <p class="desc">{{food.desc}}</p>
                    <div class="extra">
                      <span class="count">月售:{{food.sellCount}}</span>
                      <span>好评率:{{food.rating}}%</span>
                    </div>
                    <div class="price">
                      <span class="now">￥{{food.price}}</span>
                      <span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                        <cartcontrol :food="food"> </cartcontrol>
                    </div>
                </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopCart :selected-foods="selectFoods" :song-price='4' :min-price='100'></shopCart>
  </div>
</template>
<script>
import cartcontrol from '../cartcontrol/cartcontrol.vue'
import shopCart from '../shopCart/shopCart.vue'

export default {
  props:{
    seller:{
      type:Object
    }
  },
  data(){
    return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
    };
  },
  computed:{
    currentIndex(){
      for(var i=0;i<this.listHeight.length;i++){
        let height1=this.listHeight[i];
        let height2=this.listHeight[i+1];
        if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
            return i;
        }
      }
      return 0;
    },
    selectFoods(){
        let foods= [];
        this.goods.forEach((good) => {
          // good.foods.forEach((food) => {
            //food.count>0表示该商品被选过
            // console.log("foodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfoodfood");
            // if (food.count) {
            // console.log(food);              
            //   foodList.push(food);
            //   console.log(foodList.length);
            // }
          // });
        });
        return foods;
    }
  },
  created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get("static/data/data.json").then(function (res) {
        var lens = res.body.goods.length;
        console.log("??????????????lens:"+lens);
        console.log(res.body.goods);
        this.goods=res.body.goods;
      })

  },
  methods:{
     getFood(el) {
        this.$nextTick(() => {
          this.$refs.shopcart.drop(el);
        });
      },
    selectMenu(index,event){
        let foodList=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");
        let el=foodList[index];
        this.foodScroll.scrollToElement(el,300);
    },
    selectfood(food,event){
        this.selectedFood=food;
        this.$refs.food.show();
    },
    _initScroll() {
//        this.$refs：取得DOM对象
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true  //取消默认阻止事件
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true, //取消默认阻止事件
          probeType: 3   //监听事件的触发时间，1为即时触发，3为延迟到事件完毕后触发
        });
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
    _calculateHeight(){
       let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          //获取每个li的高度，放入一个数组中
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
    },
     getEvent(el) {
        // 体验优化,异步执行下落动画
        this.$nextTick(() => {
          this.$refs.shopcart.drop(el);
        });
      }
  }, 
  components:{
    'cartcontrol':cartcontrol,
    'shopCart':shopCart
  }
}
</script>
<style>
  @import './goods.css'
</style>

