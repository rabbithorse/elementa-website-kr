<template>
  <div class="marquee-wrap overflow-hidden">
    <div class="marquee">
      <div class="marquee-inner text-inherit font-bold flex flex-auto gap-x-8 whitespace-nowrap font-oswald" ref="left">
        <span v-for="n in 2" :key="'left-' + n"><slot name="goLeftText"></slot></span>
      </div>
    </div>
    <div class="marquee reverse">
      <div class="marquee-inner text-inherit font-bold flex flex-auto gap-x-8 whitespace-nowrap font-oswald" ref="right">
        <span v-for="n in 2" :key="'right-' + n"><slot name="goRightText"></slot></span>
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

    const createMarquee = (el, direction = 1) => {
      const distance = el.scrollWidth / 2;
      const tween = $gsap.to(el, {
        x: -distance / direction,
        ease: 'linear',
        duration: 40,
        repeat: -1,
        // modifiers: {
        //   xPercent: $gsap.utils.unitize((v) => (parseFloat(v) % -100))
        // }
      }).totalProgress(0.5);

      $gsap.set(".marquee", {xPercent: -30});

      return tween;
    }

    const leftDirection = createMarquee(left.value, 1);
    const rightDirection = createMarquee(right.value, 1);

    leftDirection.timeScale(1);
    rightDirection.timeScale(-1);
})
  

</script>

<style scoped>
  .marquee {font-size: inherit;}
  .marquee.reverse {will-change: transform;}
  .marquee span {line-height: 1.2em;}
</style>