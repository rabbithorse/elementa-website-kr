

<template>
  <ClientOnly>
    <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
      <swiper-slide>
        <BlocksJoinCard />
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup>
  
</script>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>