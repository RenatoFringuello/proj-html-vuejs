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
            <p>{{ category }}</p>
            <div class="title">{{ title }}</div>
            <div class="wrapper">
                <p><i class="fa-regular fa-file-lines"></i> {{ getDate }}</p>
                <p><i class="fa-regular fa-user"></i> {{ nViews }} Views</p>
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
            
            .price{
                font-size:.8rem;
                font-weight: 600;
                color:$main-btn-bg;
            }
            .title{
                font-size:.9rem;
                font-weight: 500;
                max-width: 85%
            }
            .wrapper{
                @include flex();
                p{
                    font-weight: 400;
                    font-size: .6rem;
                    margin-right: 1rem;
                    i{
                        margin-right: .2rem;
                    }
                }
            }
        }
    }
</style>