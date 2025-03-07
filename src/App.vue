<template>
  <div>
    <HeaderSection />
    <router-view></router-view>
  </div>
</template>
  

 

<script>
import HeaderSection from './components/sections/HeaderSection.vue'
export default {
  name: "App",
  components : {
    HeaderSection
  }
};
</script>

<style>
</style>
