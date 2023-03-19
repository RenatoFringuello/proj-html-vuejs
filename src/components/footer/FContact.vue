<script>
    export default {
        name:'FContact',
        props:{
            heading:String,
            links:Array,
            iconClassName:String
        }
    }
</script>

<template>
    <nav>
        <div class="title">{{ heading }}</div>
        <ul>
            <li v-for="link in links">
                <a :href="link.href">{{ link.text }}</a>
                <i :class="iconClassName" v-if="iconClassName != ''"></i>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
 @use '../../style/general.scss' as *;
//   @use '../../style/partials/variables' as *;
    nav{

        .title{
            font-size: .8rem;
            font-weight: 600;
            margin-bottom: .7rem;
        }
        li{
            margin-bottom: .5rem;
            
            a{
                font-size: .65rem;
                color:$cube-boulder;
            }
        }
    }
    
</style>