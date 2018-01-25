<template>
  <div>
      <head-top :head-title="headTitle" @goBack="goBack"></head-top>
      <section class="quick_remark">
          <h3 class="remark_title">快速备注</h3>
          <ul>
              <li v-for="(item,index) in remarkList" @click="remarkCheck(index)" :class="{remarkCheck:index==remarkIndex}"><span>{{item.name}}</span></li>
          </ul>
      </section>
      <section class="quick_remark">
          <h3 class="remark_title">其他备注</h3>
          <p>
              <textarea  class="textareaInput" placeholder="请输入备注内容"></textarea>
          </p>
      </section>
      <section>
          <div class="confimBtn">确定</div>
      </section>
  </div>
</template>
<script>
import headTop from '../../components/head/head.vue'
export default {
  data(){
      return{
          headTitle:'订单备注',
          remarkList:[{name:'不要辣'},{name:'少点辣'},{name:'多点辣'},{name:'不要香菜'},{name:'不要洋葱'},{name:'多点醋'},{name:'多点葱'},{name:'去冰'},{name:'少冰'}],
          remarkIndex:1, 
      }
  },
  components:{
      'headTop':headTop
  },
  methods:{
      remarkCheck(index){
          this.remarkIndex=index;
      },
      goBack(){
          this.$router.go(-1);
      }
  }
}
</script>
<style>
    .quick_remark{
        margin-top: 10px;
        background: #fff;
        padding: 10px;
    }
    .remark_title{
        font-size: 18px;
        line-height: 36px;
        margin-bottom: 10px;
    }
    .quick_remark ul{
        display: flex;
        flex-wrap:wrap;
    }
    .quick_remark ul li{
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 8px 12px;
        margin-right: 16px;
        margin-bottom: 13px;
    }
    .textareaInput{
        border:none;
        height: 110px;
        border-radius: 10px;
        background: #f9f9f9;
        border:1px solid #eee;
        outline: none;
        font-size: 15px;
        padding: 13px 3%;
        width: 94%;
    }
    .quick_remark ul li.remarkCheck{
        border:1px solid #3190e8;
        background: #3190e8;
        color: #fff;
    }
    .confimBtn{
        width: 94%;
        margin: 0 auto;
        background: #4cd964;
        line-height: 45px;
        border-radius: 6px;
        color: #fff;
        text-align: center;
        font-size: 18px;
    }
</style>

