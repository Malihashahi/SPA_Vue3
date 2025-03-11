<template>
  <div>
    <Header />
    <router-view></router-view>
 
  </div>
</template>

<script>
import Header from './components/sections/HeaderSection.vue'
export default {
  name: "App",
  components : {
    Header
  }
};
</script>

<style>
</style>
.