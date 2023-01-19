<script>
    import AppTitle from '../../prefabs/AppTitle.vue';
    import ArtistBoxCard from '../cards/ArtistBoxCard.vue';
    export default {
        name:'BoxCardsSector',
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
    <div class="sector" id="box-cards">
        <div class="title-container">
            <AppTitle text="Artist coaching" font-size="2rem" className="birthstone-bounce-ft"/>
            <AppTitle text="I understand what it takes to create. I can help you" font-size="1.4rem" className="quote"/>
        </div>
        <div class="cards-container">
            <ArtistBoxCard class="card" v-for="artistBox,i in artistBoxes" :index="i+1" :title="artistBox.title" :info="artistBox.info"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    #box-cards{
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
</style>