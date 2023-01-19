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
            /**
             *  It calculate the position of the element and return the style
             *  for top and left positions.
             * 
             *  - x,y are the coordinates for the origin position of the box
             *  - direction is passed to revert or not the step direction
             *  - offsets are the distance to move from the origin position
             */
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