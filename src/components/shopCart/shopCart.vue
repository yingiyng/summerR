<template>
    <div class="shopCart">
        <div class="content">
            <div class="content-left">
                <div class="loger-wraper">
                    <div class="logo"><i class="logo-icon"></i></div>
                    <span class="num" v-show="totalCount>0">{{totalCount}}}</span>
                </div>
                <div class="price" v-show="totalPrice>0">￥{{totalPrice}}</div>
                <div class="desc" v-show="songPrice>0">另需要配送费{{songPrice}}元</div>
            </div>
            <div class="content-right" @click='pay'>
                <div class="pay" :class="payClass">{{payDesc}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        selectedFoods:{
            type:Array,
            default(){
                return [];
            }
        },
        songPrice:{
            type:Number
        },
        minPrice:{
            type:Number,
            default:0
        }
    },
    methods:{
        pay(){
            if(this.totalPrice>this.minPrice){
                alert('应该支付'+this.totalPrice+'元');
            }
        }
    },
    computed:{
          totalCount(){
              let count=0;
              this.selectedFoods.forEach((food)=>{ 
                  count+=food.count;
              })
              return count;
          },
          totalPrice(){
              let price=0;
              this.selectedFoods.forEach((food)=>{
                  price+=food.count * food.price;
              })
              return price;
          },
          payDesc(){
              if(this.totalPrice<this.minPrice){
                   return "还差"+this.minPrice-this.totalPrice+"元起送"; 
              }else{
                  return "去结算";
              }
          },
          payClass(){
              if(this.totalPrice<this.minPrice){
                return 'no-check';
              }else{
                  return 'check'
              }
          }
    }
}
</script>
<style>
    @import './shopCart.css';
</style>
