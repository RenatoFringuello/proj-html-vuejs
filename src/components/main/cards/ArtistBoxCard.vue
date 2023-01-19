<script>
    import {store} from '../../../store.js'
    export default {
        name:'ArtistBoxCard',   
        props:{
            index:Number,
            title:String,
            info:String,
        },
        data() {
            return {
                store,
            }
        },
        computed:{
            getIndex(){
                return (this.index < 10)? `0${this.index}` : this.index;
            }
        }
    }
</script>

<template>
    <article class="card">
        <img :src="store.getImgPath(`artist/artist_boxes/artist-box-image-${getIndex}.png`)" :alt="`artist-box-image-${getIndex}.png`">
        <div>{{ title }}</div>
        <p>{{ info }}</p>
    </article>
</template>

<style lang="scss" scoped>
    .card{
        width: calc((100% / 4) - 1rem);
        font-size: .7rem;

        img{
            object-fit: contain;
            object-position: 0 100%;
            width: 7.8rem;
            height: 6.5rem;
            margin-bottom:.5rem;
        }
        div{
            margin-bottom:.3rem;
            font-size:1rem;
            font-weight: 400;
        }
        p{
            font-weight: 200;
            line-height: 1.2rem;
        }
        
        &:nth-child(even){
            margin-top: 1.6rem;
        }
    }
</style>