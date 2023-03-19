<script>
    import AppTitle from '../../prefabs/AppTitle.vue';
    export default {
        name:'AboutMeSector',
        components: {
            AppTitle,
        }
    }
</script>

<template>
    <section class="sector" id="about-me">
        <div class="blockquote">
            <img src="../../../assets/images/artist-quote-icon.png">
            <AppTitle text="I coach and mentor visual artist, like you, to Create Like You Mean it" font-size="2.2rem" className="quote"/>
            <AppTitle text="Martin Garrix" font-size="2rem" className="birthstone-bounce-ft"/>
        </div>
        <div class="description">
            <p>As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you trulu want to be. i support artists in crafting and living a creative life as well as felling good about themselves and theri art.</p>
            <p>As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
            <button class="btn btn-big light-orange">Get started today</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../../style/general.scss' as *;
    #about-me{
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
</style>