<script>
    import AppTitle from '../../prefabs/AppTitle.vue';
    import UpcomingEventCard from '../cards/UpcomingEventCard.vue';

    export default {
        name:'UpcomingEventsSector',
        components: {
            AppTitle,
            UpcomingEventCard
        },
        data() {
            return {
                events:[
                    {location:"Texas, US",title:"Storytelling Workshop",date:"2020-11-22"},
                    {location:"New York, US",title:"Painting Art Contest 2020",date:"2020-10-10"},
                    {location:"Hamburg, Germany",title:"International Art fair 2020",date:"2020-11-23"},
                    {location:"Illinois, US",title:"Street Performance: Call for Artist",date:"2020-12-15"},
                ],
            }
        },
        methods: {
        },
        computed:{
            getIndex(){
                return (direction, index) => (direction > 0)? index+1 :this.events.length - index;
            }
        }
    }
</script>

<template>
    <div id="upcoming-events">
        <div class="title-container">
            <AppTitle text="Upcoming Events" font-size="2rem" className="birthstone-bounce-ft"/>
            <AppTitle text="Let's Work Together" font-size="1.4rem" className="quote"/>
        </div>
        <div class="cards-container">
            <UpcomingEventCard  v-for="event,i in events"
                                :class="i>1?'reverse':''"
                                :index="getIndex(-1,i)"
                                :date="event.date"
                                :title="event.title"
                                :location="event.location"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    @use '../../../style/partials/variables' as *;
    #upcoming-events{
        @include container(875px, auto);
        padding:4rem 0rem 3.7rem;
        .title-container{
            @include container(50%,auto);
            text-align: center;
        }
        .cards-container{
            @include flex(flex-start, space-between, wrap);
            padding-top:2.5rem;
        }
    }
</style>