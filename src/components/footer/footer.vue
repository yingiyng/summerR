<template>
    <div class="foot_guide">
        <section class="guide_item">
            <router-link to="/goods">商品</router-link>
        </section>
        <section class="guide_item">
            <router-link to="">搜索</router-link>
        </section>
        <section class="guide_item">
            <router-link to="">订单</router-link>            
        </section>
        <section class="guide_item">
            <router-link to="">我的</router-link>            
        </section>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
    .foot_guide{
        position: fixed;
        display: flex;
        background: #fff;
        left: 0;
        bottom:0;
        width: 100%;
        height: 50px;
        border-top: 1px solid rgba(0,0,0,0.1);
        align-items: center;
        font-size: 13px;
    }
    .guide_item{
        flex: 1;
        text-align:center;
        vertical-align: middle;
        flex-direction: column;
        align-items: center;
    }
</style>

