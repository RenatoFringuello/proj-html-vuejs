<script>
    export default {
        name:'HContact',
        props:{
            links:Array,
            iconClassName:String
        }
    }
</script>

<template>
    <nav>
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
  @use '../../style/partials/variables' as *;
    nav{

        .title{
            font-size: .8rem;
            font-weight: 600;
            margin-bottom: .7rem;
        }
        ul{
            @include flex();
            li{
                margin:0 1rem;                
                a{
                    font-size: .7rem;
                }
                i{
                    font-size: .5rem;
                    margin-left: .3rem;
                }
            }
        }
    }
    
</style>