<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                    <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
        </div>
        <div class="background"><img :src="seller.avatar" width="100%" height="100%"></div>
        <!-- 商家介绍 -->
        <div class="detail fade-transition" v-show="detailShow">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <!-- <div class="star star-48"></div> -->
                        <v-start :score="seller.score"></v-start>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul v-if="seller.supports" class="supports">
                        <li class="support-item" v-for="(item,index) in seller.supports">
                            <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                            <span class="text">{{seller.supports[index].description}}</span>
                        </li>
                    </ul>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="bulletin">
                        <p class="content">{{seller.bulletin}}</p>
                    </div>
                </div>
            </div>
            <div class="detail-close">
                <div class="icon-close" @click="closeDetail"></div>
            </div>
        </div>
    </div>
</template>
<script>
import star from '../start/start.vue'
export default {
  props:{
      seller:{
          type:Object
      }
  },
  data(){
      return{
        detailShow:false
      }
  },
  methods:{
      showDetail(){
        this.detailShow=true;
      },
      closeDetail(){
          this.detailShow=false;
      }
  },
  created(){
      this.classMap=['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components:{
      'v-start':star
  }
}
</script>
<style>
   	@import "./header.css";
</style>

