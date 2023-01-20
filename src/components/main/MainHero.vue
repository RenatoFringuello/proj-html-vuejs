<script>
    import AppTitle from '../prefabs/AppTitle.vue';
    import DynamicBox from '../prefabs/DynamicBox.vue';

    export default {
    name: "MainHero",
    components: {
        DynamicBox,
        AppTitle
    },
    data() {
        return {
            offsetX:0,
            offsetY:0
        };
    },
    methods: {
        mouseMove(e) {
            const offW = this.$refs["hero"].offsetWidth;
            const offH = this.$refs["hero"].offsetHeight;
            const offTop = this.$refs["hero"].offsetTop;
            this.offsetX = (e.clientX - (offW / 2)) * 0.007;
            this.offsetY = (e.clientY - offTop - (offH / 2)) * 0.015;
        }
    },
}
</script>

<template>
    <section ref="hero" id="hero" @mousemove="mouseMove">
        <DynamicBox :x=16 :y=10 :direction=1 :offsetX="this.offsetX" :offsetY="this.offsetY" />
        <DynamicBox :x=13 :y=30 :direction=-1 :offsetX="this.offsetX" :offsetY="this.offsetY" />
        <DynamicBox :x=80 :y=23 :direction=1 :offsetX="this.offsetX" :offsetY="this.offsetY" />
        <div class="hero-info">
            <AppTitle text="Hello, Im Martin" fontSize="2.5rem" className="birthstone-bounce-ft"/>
            <AppTitle text="Artist Coaching And Mentoring Might Be for You." fontSize="1.8rem" className="quote" />

            <button class="btn btn-big ">Get started today</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../style/general.scss' as *;
    section{
        @include flex(center, center);
        position: relative;
        background-color: beige;
        height: 68vh;

        .hero-info{
            position: relative;
            width: 35%;
            text-align: center;
        }
    }
</style>