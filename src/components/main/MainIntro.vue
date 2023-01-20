<script>
    import AppTitle from '../prefabs/AppTitle.vue';
    import BoxCardsSector from './sectors/BoxCardsSector.vue';
    import AboutMeSector from './sectors/AboutMeSector.vue';
    import VideoSector from './sectors/VideoSector.vue';
    import TestimonialsSector from './sectors/TestimonialsSector.vue';
    import CoursesSector from './sectors/CoursesSector.vue';
    import LatestBlogSector from './sectors/LatestBlogSector.vue';
    import UpcomingEventsSector from './sectors/UpcomingEventsSector.vue';

    export default {
        name: "MainIntro",
        components: {
            AppTitle,
            BoxCardsSector,
            AboutMeSector,
            VideoSector,
            TestimonialsSector,
            CoursesSector,
            LatestBlogSector,
            UpcomingEventsSector,
        }
    }
</script>

<template>
    <section id="intro">
        <BoxCardsSector />
        <AboutMeSector />
        <VideoSector videoId="G1IbRujko-A" />
        <TestimonialsSector />
        <CoursesSector />
        <LatestBlogSector />
        <UpcomingEventsSector />
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