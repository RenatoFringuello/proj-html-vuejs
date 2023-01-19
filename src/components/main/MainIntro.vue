<script>
    import AppTitle from '../prefabs/AppTitle.vue';
    import BoxCardsSector from './sectors/BoxCardsSector.vue';
    import AboutMeSector from './sectors/AboutMeSector.vue';

    export default {
        name: "MainIntro",
        components: {
            AppTitle,
            BoxCardsSector,
            AboutMeSector,
        }
    }
</script>

<template>
    <section id="intro">
        <BoxCardsSector />
        <AboutMeSector />
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