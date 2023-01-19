<script>
    import AppTitle from '../prefabs/AppTitle.vue';
    import ArtistBoxCard from './cards/ArtistBoxCard.vue';

    export default {
        name: "MainIntro",
        components: {
            AppTitle,
            ArtistBoxCard
        },
        data() {
            return {
                artistBoxes:[
                    {title:'Online Courses', info: 'Online art coaching now offers you a very powerful way to redesign your artist mind.'},
                    {title:'One to One', info: 'Getting the necessary clarity about the current state to help you improve your ability.'},
                    {title:'Anywhere', info: 'Access to valuable and portable program which allow you to set up and live anywhere you want.'},
                    {title:'On Time', info: 'Punctuality is our top priority because it\'s an essential criteria to assess a program quality.'},
                ]
            }
        },
    }
</script>

<template>
    <section id="intro">
        <div class="sector" id="box-cards">
            <div class="title-container">
                <AppTitle text="Artist coaching" font-size="2rem" className="birthstone-bounce-ft"/>
                <AppTitle text="I understand what it takes to create. I can help you" font-size="1.4rem" className="quote"/>
            </div>
            <div class="cards-container">
                <ArtistBoxCard class="card" v-for="artistBox,i in artistBoxes" :index="i+1" :title="artistBox.title" :info="artistBox.info"/>
            </div>
        </div>
        <div class="sector" id="about-me">
            <div class="blockquote">
                <img src="../../assets/images/artist-quote-icon.png">
                <AppTitle text="I coach and mentor visual artist, like you, to Create Like You Mean it" font-size="2.2rem" className="quote"/>
                <AppTitle text="Martin Garrix" font-size="2rem" className="birthstone-bounce-ft"/>
            </div>
            <div class="description">
                <p>As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you trulu want to be. i support artists in crafting and living a creative life as well as felling good about themselves and theri art.</p>
                <p>As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
                <button class="btn btn-big light-orange">Get started today</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/general.scss' as *;
    section{
        
        div.sector{
            padding:3.5rem 0;
            @include container(900px, auto);
            
            &#box-cards{
                background:rebeccapurple;
                .title-container{
                    @include container(50%,auto);
                    text-align: center;
                }
                .cards-container{
                    @include flex(flex-start, space-between);
                    padding-top:.5rem;
                }
            }
            &#about-me{
                background:magenta;
                @include flex(center, space-between);
                div{
                    &.blockquote{
                        flex-basis: calc(42% - 1rem);
                        text-align: center;
                    }
                    &.description{
                        flex-basis: calc(50% - 1rem);
                        p{
                            font-size: .8rem;
                            margin-bottom: 1.5rem;
                        }
                    }
                }
            }
        }
    }
</style>