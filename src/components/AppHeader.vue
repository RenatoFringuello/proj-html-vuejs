<script>
import FContact from './footer/FContact.vue';

    export default {
    name: "AppHeader",
    components: { FContact },
    data() {
        return {
            nav:{
                heading:'Address',
                links:[
                    {href:'#',text:''},
                    {href:'#',text:''},
                    {href:'#',text:''},
                ]
            }
        }
    },

}
</script>

<template>
    <header>
        <div class="container">
            <a href="#" class="logo"><img src="../assets/images/brands/dark-logo.png" alt="MaxCoach's logo"></a>
            <FContact />
            
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss' as *;
    @use '../style/partials/variables' as *;
    header{
        padding: 1.1rem 0;
        .container{
            @include container($header-max-w, auto);
            @include flex(center, space-between);
            
            .logo img{
                display: block;
                width: 120px;
            }

            ul{
                @include flex(center, space-between);
                li{
                    margin:0 1rem;
                }
                &.social-container li{
                    margin:0 .5rem;
                }
            }
        }
    }
</style>