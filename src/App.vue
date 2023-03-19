<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/footer/AppFooter.vue';
  import AsideNav from './components/prefabs/AsideNav.vue';
  import MainHero from './components/main/MainHero.vue';
  import MainIntro from './components/main/MainIntro.vue';
import AboutMeSector from './components/main/sectors/AboutMeSector.vue';
import VideoSector from './components/main/sectors/VideoSector.vue';
import TestimonialsSector from './components/main/sectors/TestimonialsSector.vue';
import CoursesSector from './components/main/sectors/CoursesSector.vue';
import LatestBlogSector from './components/main/sectors/LatestBlogSector.vue';
import UpcomingEventsSector from './components/main/sectors/UpcomingEventsSector.vue';
  // import AboutMeSector from './sectors/AboutMeSector.vue';
  // import VideoSector from './sectors/VideoSector.vue';
  // import TestimonialsSector from './sectors/TestimonialsSector.vue';
  // import CoursesSector from './sectors/CoursesSector.vue';
  // import LatestBlogSector from './sectors/LatestBlogSector.vue';
  // import UpcomingEventsSector from './sectors/UpcomingEventsSector.vue';

  export default{
    components:{
    AppHeader,
    MainHero,
    MainIntro,
    AppFooter,
    AsideNav,
    AboutMeSector,
    VideoSector,
    TestimonialsSector,
    CoursesSector,
    LatestBlogSector,
    UpcomingEventsSector
}
  }

</script>

<template>
  <AsideNav />
  <AppHeader />
  <main>
    <MainHero />  
    <MainIntro />
    <AboutMeSector/>
    <VideoSector/>
    <TestimonialsSector/>
    <CoursesSector/>
    <LatestBlogSector/>
    <UpcomingEventsSector/>
  </main>
  <AppFooter />

  <!-- <button class="btn btn-big ">Get started today</button>
  <button class="btn btn-big light-orange">Get started today</button> -->
</template>

<style lang="scss">
  @use './style/general.scss' as *;
  // @use './style/partials/variables' as *;
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
