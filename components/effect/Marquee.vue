<template>
  <div class="marquee-wrap overflow-hidden">
    <div class="marquee">
      <div class="marquee-inner text-inherit font-bold flex flex-auto whitespace-nowrap font-oswald" ref="left">
        <slot v-for="n in 5" :key="'left-' + n" name="goLeftText"></slot>
      </div>
    </div>
    <div class="marquee reverse">
      <div class="marquee-inner text-inherit font-bold flex flex-auto whitespace-nowrap font-oswald" ref="right">
        <slot v-for="n in 5" :key="'right-' + n" name="goRightText"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useNuxtApp } from '#app'

  const { $gsap } = useNuxtApp()

  const left = ref(null);
  const right = ref(null);

  onMounted(() => {
    
    const createMarquee = (el) => {
      return $gsap.to(el, {
        xPercent: -100,
        ease: 'linear',
        duration: 30,
        repeat: -1,
        // modifiers: {
        //   xPercent: $gsap.utils.unitize((v) => (parseFloat(v) % -100))
        // }
      }).totalProgress(0.5);

      $gsap.set(".marquee", {xPercent: -50});
    }

    const leftDirection = createMarquee(left.value);
    const rightDirection = createMarquee(right.value);

    leftDirection.timeScale(1);
    rightDirection.timeScale(-1);
})
  

</script>

<style scoped>
  .marquee {font-size: inherit;}
  .marquee.reverse {will-change: transform;}
</style>