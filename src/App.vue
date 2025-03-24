<template>
  <div>
    <Header />
    <router-view></router-view>
    <h2>{{ count }} </h2>
 
  </div>
</template>

<script setup>
import Header from './components/sections/HeaderSection.vue'
import {ref,watch } from 'vue';


    Header
function trackChange(x) {
   watch(x, (x) => {
    console.log('x changed!')
  })
}

let number = $ref(0);
trackChange($$(number));
 
</script>

<style>
</style>
.