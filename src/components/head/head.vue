<template>
    <div class="header">
        <span class="goBack" @click="goBack"></span>    
        <section class="head-text">
            {{headTitle}}
        </section>
    </div>
</template>
<script>
export default {
  props:['headTitle'],
  methods:{
      goBack(){
          this.$emit('goBack');
      }
  }
}
</script>
<style>
    .header{
        background: #3190e8;
        position: fixed;
        top:0;
        width: 100%;
        left: 0;
        display: flex;
        align-items: center;
        height: 50px;
        position: relative;
    }
    .goBack{
        position: absolute;
        left:15px;
    }
    .goBack:before{
        content: '<';
        color: #fff;
        font-size: 22px;
    }
    .head-text{
        text-align: center;
        color: #fff;
        font-size: 19px;
        font-weight: 600;
        display: block;
        width:100%;
    }
</style>
