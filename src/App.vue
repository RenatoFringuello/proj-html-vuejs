<script>
  import EventTimer from './components/EventTimer.vue';

  export default{
    components:{
      EventTimer,
    }
  }

</script>

<template>
  <EventTimer />

  <!-- <button class="btn btn-big ">Get started today</button>
  <button class="btn btn-big light-orange">Get started today</button> -->
</template>

<style lang="scss">
  @use './style/general.scss' as *;
  @use './style/partials/variables' as *;
</style>
