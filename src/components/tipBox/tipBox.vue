<template>
  <div class="tipSection">
    <div class="tipBox">
        <section class="errorMsg">
            {{msg}}
        </section>
        <p class="confrimBtn" @click="closeBox">确认</p>
    </div>
  </div>
</template>
<script>
export default {
  props:['msg'],
  methods:{
      closeBox(){
        this.$emit('closeBox');
      }
  }
}
</script>
<style>
    .tipSection{
        position: fixed;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        top:0;
        left:0;
        background: rgba(255,255,255,0);
    }
    .tipBox{
        width: 80%;
        margin: 0 auto;
        background: #fff;
        border:1px solid #ddd;
        border-radius: 10px;
        padding: 40px 0 0px 0; 
    }
    .errorMsg{
        text-align: center;
        font-size: 16px;
        padding-bottom: 40px;
    }
    .confrimBtn{
        background: #4cd964;
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 16px;
        text-align: center;
        width: 100%;
        margin-top: 20px;
        border-radius: 3px;
    }
</style>
