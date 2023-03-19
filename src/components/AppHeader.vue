<script>
import HContact from './header/HContact.vue';
import EventTimer from './header/EventTimer.vue';

    export default {
        name: "AppHeader",
        components: { 
            HContact,
            EventTimer,
        },
        data() {
            return {
                links:[
                    {href:'#',text:'Home'},
                    {href:'#',text:'Pages'},
                    {href:'#',text:'Courses'},
                    {href:'#',text:'Features'},
                    {href:'#',text:'Blog'},
                    {href:'#',text:'Shop'},
                ],
            }
        },

}
</script>

<template>
    <header>
        <EventTimer />
        <div class="container">
            <a href="#" class="logo"><img src="../assets/images/brands/dark-logo.png" alt="MaxCoach's logo"></a>
            <HContact :iconClassName="'fa-solid fa-chevron-down'"
                        :links="links"/>
            <nav>
                <ul class="social-container">
                    <li><img src="../assets/images/social/insta.png" alt=""></li>
                    <li><img src="../assets/images/social/twitter.png" alt=""></li>
                    <li><img src="../assets/images/social/linkedin.png" alt=""></li>
                    <li class="face"><img src="../assets/images/social/facebook2.png" alt=""></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../style/general.scss' as *;
    // @use '../style/partials/variables' as *;
    header{
        .container{
            @include container($header-max-w, auto);
            @include flex(center, space-between);
            padding: 1.1rem 0;
            
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
                    &.face{
                        background-color: $cube-boulder;
                    }
                    @include flex();
                    img{
                        margin:auto;
                        display: block;
                        max-width: 20px;
                        height: 20px;
                        filter: grayscale(1);
                        filter: grayscale(1);
                    }
                }
            }
        }
    }
</style>