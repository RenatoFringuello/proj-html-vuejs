<script>
    export default {
        name:'NewsLetterForm',   
    }
</script>

<template>
    <section>
        <!-- <img src="../../assets/images/artist/artist_courses/artist-course-01-480x480.jpg">
        <img src="../../assets/images/artist/artist_courses/artist-course-08-480x480.jpg"> -->
        <form>
            <div class="title">Newsletter to get in touch</div>
            <label for="email">
                <input id="email" type="email" placeholder="Your e-mail">
                <i class="fa-solid fa-arrow-right-long"></i>
            </label>
        </form>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/general.scss' as *;
    @use '../../style/partials/variables' as *;

    section{
        background: $cube-bay-many;
        color:white;
        padding: 2.5rem 0;
        
        form{
            @include container(875px, auto);
            @include flex(center);

            .title{
                font-size: 2rem;
                font-family: 'Times New Roman', Times, serif;
                text-align: end;
                flex-basis: 25%;
                margin-right: 6rem;
            }
            label{
                border-bottom:.5px solid rgba(255, 255, 255, 0.505);
                padding-bottom: .35rem;
                @include flex(center);
                width: 45%;
                input{
                    width: 100%;
                    font-size: 1.2rem;
                    font-weight: 300;
                }
            }
        }
    }
</style>