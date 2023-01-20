<script>
    import {store} from '../../../store.js'
    export default {
        name:'UpcomingEventCard',   
        props:{
            index:Number,
            date:String,
            title:String,
            location:String,
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
                        .toLocaleString(this.DateTime.DATE_MED);
            }
        }
    }
</script>

<template>
    <article class="card">
        <img :src="store.getImgPath(`artist/artist_events/artist-event-${getIndex}-250x300.jpg`)" :alt="`artist-event-${getIndex}`">
        <div class="info">
            <p class="location"> {{ getDate.toUpperCase() }}</p>
            <div class="title">{{ title }}</div>
            <p class="thin"><i class="fa-solid fa-location-dot"></i> {{ location }}</p>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    @use '../../../style/partials/variables' as *;
    .card{
        cursor: pointer;
        flex-basis: calc(50% - .8rem);
        margin-bottom: 1.5rem;
        @include flex(center, flex-start, nowrap, row);
        &.reverse{
            @include flex(center, flex-start, nowrap, row-reverse);
        }

        img{
            width:  40%;
            object-fit: cover;
            object-position: center;
            display: block;
        }
        .info{
            padding: 2rem;
            div{
                margin-bottom:.5rem;
            }
            .location{
                font-size: .75rem;
            }
            .title{
                font-weight: 500;
                font-size:.85rem;
            }
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
</style>