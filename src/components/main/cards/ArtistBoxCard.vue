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
        <h3>{{ title }}</h3>
        <p>{{ info }}</p>
    </article>
</template>

<style lang="scss" scoped>
    
</style>