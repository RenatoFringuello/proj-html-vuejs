<script>
    import AppTitle from '../../prefabs/AppTitle.vue';
    import LatestBlogCard from '../cards/LatestBlogCard.vue';
    export default {
        name:'LatestBlogSector',
        components: {
            AppTitle,
            LatestBlogCard
        },
        data() {
            return {
                blogs:[
                    {imgSize:"480x356.jpg", category:"ARTIST",title:"Brush Strokes Energize Trees in Paintings",date:"2020-5-15",nViews:688},
                    {imgSize:"500x680.jpg", category:"ARTIST",title:"Connection Bteween Self-Portraits and Identity",date:"2020-5-15",nViews:397},
                    {imgSize:"480x356.jpeg",category:"ARTIST",title:"Pocket-Sized Notebooks Hold Miniature Paintings",date:"2020-5-15",nViews:603},
                ],
            }
        },
        methods: {
        },
        computed:{
            getIndex(){
                return (direction, index) => (direction > 0)? index+1 :(this.courses.length) - index;
            }
        }
    }
</script>

<template>
    <div id="latest-blog">
        <div class="title-container">
            <AppTitle text="Articles and Tips" font-size="2rem" className="birthstone-bounce-ft"/>
            <AppTitle text="Latest From The Blog" font-size="1.4rem" className="quote"/>
        </div>
        <div class="cards-container">
            <LatestBlogCard v-for="blogCard , i in blogs"
                            :index="i+1"
                            :className="(i===1)?'middle':''"
                            :imgSize="blogCard.imgSize"
                            :category="blogCard.category"
                            :title="blogCard.title"
                            :date="blogCard.date"
                            :nViews="blogCard.nViews"/>
        </div>
        <div class="link-container">
            <p>Get into details now? <a href="#" class="link">View all posts <i class="fa-solid fa-arrow-right-long"></i></a></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    // @use '../../../style/partials/variables' as *;
    #latest-blog{
        @include container($header-max-w, auto);
        padding:4rem 2.5rem 3.7rem;
        .title-container{
            @include container(50%,auto);
            text-align: center;
        }
        .cards-container{
            @include flex(flex-start, center, wrap, row-reverse);
            padding-top:2.5rem;
        }
        div.link-container{
            padding:4.2rem 0 0;
            text-align: center;
            p{
                font-size: .8rem;
                font-weight: 400;
            }
        }
    }
</style>