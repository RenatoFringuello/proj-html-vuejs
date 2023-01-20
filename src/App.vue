<script>
  import AppHeader from './components/AppHeader.vue';
  import EventTimer from './components/EventTimer.vue';
import AppFooter from './components/footer/AppFooter.vue';
  import MainHero from './components/main/MainHero.vue';
  import MainIntro from './components/main/MainIntro.vue';

  export default{
    components:{
    EventTimer,
    AppHeader,
    MainHero,
    MainIntro,
    AppFooter
}
  }

</script>

<template>
  <EventTimer />
  <AppHeader />
  <main>
    <MainHero />  
    <MainIntro />
  </main>
  <AppFooter />

  <!-- <button class="btn btn-big ">Get started today</button>
  <button class="btn btn-big light-orange">Get started today</button> -->
</template>

<style lang="scss">
  @use './style/general.scss' as *;
  @use './style/partials/variables' as *;
</style>



<!-- 
  <script>
    export default {
        name:'',   
    }
</script>

<template>

</template>

<style lang="scss" scoped>
    
</style>
 -->
