<script>
    export default {
        name:'AppTitle' , 
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

    // @use '../../style/partials/variables' as *;
    .quote{
        font-weight: 600;
        margin-bottom: 1.5rem;
    }
</style>