<script>
    import AppTitle from '../prefabs/AppTitle.vue';
    import BoxCardsSector from './sectors/BoxCardsSector.vue';
    import AboutMeSector from './sectors/AboutMeSector.vue';
    import VideoSector from './sectors/VideoSector.vue';
    import TestimonialsSector from './sectors/TestimonialsSector.vue';

    export default {
        name: "MainIntro",
        components: {
            AppTitle,
            BoxCardsSector,
            AboutMeSector,
            VideoSector,
            TestimonialsSector,
        }
    }
</script>

<template>
    <section id="intro">
        <BoxCardsSector />
        <AboutMeSector />
        <VideoSector videoId="G1IbRujko-A" />
        <TestimonialsSector />
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/general.scss' as *;
    section{
        div.sector{
            padding:3.5rem 0;
            @include container(900px, auto);
        }
    }
</style>