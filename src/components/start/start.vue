<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span> 
    </div>
</template>
<script>
    const length=5;
    const cls_on='on';
    const cls_half="half";
    const cls_off="off";
    export default {
        props:{
            // size:{
            //     type:Number
            // },
            score:{
                type:Number
            }
        },
        computed:{
            starType(){
                return 'start-'+this.size;
            },
            itemClasses(){
                let result=[]; //存储星星的个数
                let score=this.score;
                let hasDecimal=score % 1 !== 0; //小数
                console.log(score % 1);
                let integer=Math.floor(score); //整数
                for(var i=0;i<integer;i++){
                    result.push(cls_on);
                }
                if(hasDecimal){
                    result.push(cls_half);
                }
                while(result.length<length){
                    result.push(cls_off);
                }
                return result;
            }
        }
    }
</script>
<style>
    @import "./start.css"
</style>
