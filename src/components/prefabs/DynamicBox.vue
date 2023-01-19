<script>
    export default {
        name:'DynamicBox',
        props:{
            x:Number,
            y:Number,
            direction:Number,
            offsetX:Number,
            offsetY:Number
        },
        computed: {
            position(){
                return {
                    left : `${(this.offsetX * this.direction) + this.x}%`,
                    top :  `${(this.offsetY * this.direction) + this.y}%`,
                }
            }
        },
    }
</script>

<template>
    <div class="box" :style="position"></div>
</template>

<style lang="scss" scoped>
    .box{
        position: absolute;
        background-color: cyan;
        box-shadow: 5px 5px 15px 0px #0002;
        
        //da rimuovere
        width: 150px;
        height: 300px;
    }
</style>