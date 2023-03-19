<script>
    import {store} from '../../../store.js'
    export default {
        name:'CourseCard',   
        props:{
            index:Number,
            price:Number,
            title:String,
            nLessons:Number,
            nStudents:Number,
        },
        data() {
            return {
                store,
            }
        },
        computed:{
            getIndex(){
                return (this.index < 10)? `0${this.index}` : this.index;
            },
            getPrice(){
                return this.price.toFixed(2);
            }
        }
    }
</script>

<template>
    <article class="card">
        <img :src="store.getImgPath(`artist/artist_courses/artist-course-${getIndex}-480x480.jpg`)" :alt="`artist-course-${getIndex}`">
        <div class="info">
            <div class="price">&dollar;{{ getPrice }}</div>
            <div class="title">{{ title }}</div>
            <div class="wrapper">
                <p><i class="fa-regular fa-file-lines"></i> {{ nLessons }} Lessons</p>
                <p><i class="fa-regular fa-user"></i> {{ nStudents }} Students</p>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    // @use '../../../style/partials/variables' as *;
    .card{
        cursor: pointer;
        width: calc((100% / 4) - 1rem);
        margin-bottom: 1.5rem;

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