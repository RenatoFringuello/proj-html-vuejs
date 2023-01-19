<script>
    import DynamicBox from '../prefabs/DynamicBox.vue';

    export default {
    name: "MainHero",
    components: { 
        DynamicBox 
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
            <!-- component-corsivo -->
            <div class="birthstone-bounce-ft">Hello, Im Matin</div>
            
            <!-- component-quote -->
            <div class="quote">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>

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
            font-size: 1.8rem;
            text-align: center;
            .birthstone-bounce-ft{
                font-size: 2rem;
            }
            .quote{
                font-weight: 600;
                margin-bottom: 1rem;
            }
        }
    }
</style>