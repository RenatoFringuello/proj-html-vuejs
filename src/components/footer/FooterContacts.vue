<script>
import FContact from './FContact.vue';
    export default {
    name: "FooterContacts",
    components: { 
        FContact 
    },
    props:{
        navs:Array
    }
    
}
</script>

<template>
    <div class="navs-container">
        <FContact   v-for="nav in navs"
                :heading="nav.heading" :links="nav.links"/>
        <nav>
            <span class="title">Instagram</span>
            <a href="#" class="link">@maxcoach</a>
            <ul>
                <li><img src="../../assets/images/insta_posts/120012142_177596140500760_8623485824101406058_n.jpg"></li>
                <li><img src="../../assets/images/insta_posts/120084500_197897808368764_8114555493043279565_n.jpg"></li>
                <li><img src="../../assets/images/insta_posts/120099363_364334431619755_7198812647386067017_n.jpg"></li>
            </ul>
        </nav>
    </div>
    <div class="credits">
        <p>&COPY; 2020 Maxcoach. All Rights Reserved</p>
    </div>
            
</template>

<style lang="scss" scoped>
  @use '../../style/general.scss' as *;
  @use '../../style/partials/variables' as *;
    .navs-container{
        padding: 4rem 0;
        @include container($header-max-w, auto);
        @include flex(flex-start, space-between);
        
        nav{
            font-size: .8rem;
            .title{
                font-weight: 600;
            }
            a.link{
                margin-left: .3rem;
                border: 0;
                font-size: .7rem;
                font-weight: 300
            }
            ul{
                margin-top: 1rem;
                @include flex(flex-start, space-between);
                img{
                    object-fit: cover;
                    width:  100px;
                    height: 100px;
                    margin-right: 1rem;
                }
            }
        }        
    }
    .credits{
        text-align: center;
        padding-bottom: 3rem;
        p{
            opacity: .6;
            font-size: .6rem;
        }
    }
</style>