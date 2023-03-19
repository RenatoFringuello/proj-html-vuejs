<script>
    import {store} from '../../../store.js'
    export default {
        name:'TestimonialCard',   
        props:{
            index:Number,
            fullname:String,
            role:String,
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
        <div class="info">{{ title }}</div>
        <p class="info">{{ info }}</p>
        <div class="profile-container">
            <img :src="store.getImgPath(`artist/artist_testimonials/artist-testimonial-avatar-${getIndex}.jpg`)" :alt="`artist-testimonial-avatar-${getIndex}`">
            <div class="profile-info">
                <div>{{ fullname }}</div>
                <p>{{ role }}</p>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    // @use '../../../style/partials/variables' as *;
    .card{
        width: calc((100% / 3) - 1.8rem);
        padding:2rem 2.3rem 3rem;
        background-color: white;
        border-radius: $btn-border-radius;
        cursor: pointer;

        &.disabled{
            opacity: .35;
        }

        div{
            font-weight: 600;
            font-size:.7rem;
            margin-bottom:.4rem;
            &.info{
                font-size:.9rem;
                margin-bottom:1rem;
            }
        }
        p{
            font-weight: 400;
            &.info{
                font-size: .8rem;
                margin-bottom: 1.6rem;
            }
        }
        .profile-container{
            @include flex(center, flex-start);
            img{
                object-fit: cover;
                object-position: center;
                width:  55px;
                height: 55px;
                border-radius: 50%;
            }
            .profile-info{
                margin-left: 1rem;
            }
            
        }
    }
</style>