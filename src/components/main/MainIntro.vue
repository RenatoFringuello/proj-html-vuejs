<script>
    import AppTitle from '../prefabs/AppTitle.vue';
    import BoxCardsSector from './sectors/BoxCardsSector.vue';

    export default {
        name: "MainIntro",
        components: {
            AppTitle,
            BoxCardsSector,
        }
    }
</script>

<template>
    <section id="intro">
        <BoxCardsSector />
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/general.scss' as *;
</style>