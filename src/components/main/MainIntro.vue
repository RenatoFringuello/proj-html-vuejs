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
        <div class="title-container">
            <AppTitle text="Artist coaching" font-size="1.8rem" className="birthstone-bounce-ft"/>
            <AppTitle text="lorem lorem lorem lorem v lorem lorem lorem lorem" font-size="1.5rem" className="quote"/>
        </div>
        <div class="cards-container">
            <ArtistBoxCard v-for="artistBox,i in artistBoxes" :index="i+1" :title="artistBox.title" :info="artistBox.info"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/general.scss' as *;
    section{
        background:rebeccapurple;
        .title-container{
            @include container(35%,auto);
            text-align: center;
        }
        .cards-container{
            @include container(70%, auto);
            @include flex(center, center);
        }
    }
</style>