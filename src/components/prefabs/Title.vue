<script>
    export default {
        name:'Title' , 
        props:{
            text:String,
            fontSize:String,
            className:String,
        } 
    }
</script>

<template>
    <div :class="className" :style="`font-size:${fontSize}`">{{text}}</div>
</template>

<style lang="scss" scoped>
    @use '../../style/partials/variables' as *;

    //font birtstone bounce
    .birthstone-bounce-ft{
        //w400-500
        font-family: 'Birthstone Bounce', cursive;
        color: $main-btn-hover-bg;
        font-weight: 500;
    }
    .quote{
        font-weight: 600;
    }
</style>