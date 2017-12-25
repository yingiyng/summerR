<template>
    <div class="cartcontrol">
        <div class="cart-decrease move-transition" @click="decreaseCart"  v-show="food.count>0">
            <span class="cart-icon cart-jian"></span>
        </div>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-icon cart-add" @click="add"></div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    props:{
        food:{
            type:Object
        }
    },
    methods:{
        add(event){
            if(!this.food.count){
                Vue.set(this.food,'count',1);
            }else{
                this.food.count++;
            }
            this.$emit('add', event.target);
        },
        decreaseCart(event){
            if(this.food.count){
                this.food.count--;
            }
        }
    }
}
</script>
<style>
    @import './cartcontrol.css';
</style>
