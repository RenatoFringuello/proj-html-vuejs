<script>
    import {store} from '../../../store.js'
    export default {
        name:'LatestBlogCard',   
        props:{
            index:Number,
            className:String,
            imgSize:String,
            category:String,
            title:String,
            date:String,
            nViews:Number,
        },
        data() {
            return {
                store,
                DateTime:store.getLuxonDateTime(),
            }
        },
        computed:{
            getIndex(){
                return (this.index < 10)? `0${this.index}` : this.index;
            },
            getUppercase(){
                return string => string.toUppercase();
            },
            getDate(){
                return  this.DateTime.fromJSDate(new Date(this.date))
                        .setLocale('en')
                        .toLocaleString(this.DateTime.DATE_FULL);
            }
        }
    }
</script>

<template>
    <article class="card" :class="className">
        <img :src="store.getImgPath(`artist/artist_blogs/artist-blog-${getIndex}-${imgSize}`)" :alt="`artist-blog-${getIndex}-${imgSize}`">
        <div class="info">
            <p class="category">{{ category }}</p>
            <div class="title">{{ title }}</div>
            <div class="wrapper">
                <p><i class="fa-regular fa-calendar"></i> {{ getDate }}</p>
                <p><i class="fa-regular fa-eye"></i> {{ nViews }} Views</p>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    @use '../../../style/partials/variables' as *;
    .card{
        cursor: pointer;
        width: 373px;
        margin-bottom: 1.5rem;
        box-shadow: 0 15px 70px 5px #0003;
        
        &.middle{
            position: relative;
            margin:0 3.2rem;
            .info{
                padding:2rem;
                width: 100%;
                background-image:linear-gradient(#0000, #0005);
                position: absolute;
                bottom: 0;
                color:white;
                p{
                    color:inherit;
                }
            }
        }
        &:not(.middle){
            width: 202px;

            &:nth-child(1){
                margin-top: 2.7rem;
            }
            &:nth-child(3){
                margin-top: 8.2rem;
            }
        }

        img{
            width:  100%;
            object-fit: cover;
            object-position: center;
            display: block;
        }
        .info{
            padding: 1rem;
            div{
                margin-bottom:.5rem;
            }
            .category{
                letter-spacing: .1rem;
            }
            .title{
                font-weight: 500;
                font-size:.85rem;
            }
            .wrapper{
                @include flex();
                p{
                    font-size: .6rem;
                    &:first-of-type{
                        margin-right: 1.5rem;
                    }
                    i{
                        margin-right: .2rem;
                    }
                }
            }
        }
    }
</style>