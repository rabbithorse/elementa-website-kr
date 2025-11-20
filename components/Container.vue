<template>
  <div class="
    container 
    justify-between 
    w-[97%] 
    max-w-full
    2xl:max-w-[1856px]
    mx-auto
  " >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>
  @media (max-width: 1024px) {
    .container {width: 90%;}
  }
</style>
