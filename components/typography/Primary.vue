<template>
  <div ref="primaryCharWrap" class="primary-char-wrap inline-block">
    <div ref="primaryChar" class="primary-char inline-block">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  
  const primaryCharWrap = ref([]);
  const primaryChar = ref(null);

  onMounted(() => {
    const primaryTl = $gsap.timeline({
      scrollTrigger: {
        trigger: primaryChar.value,
        //once: true,
        start: "top 10%",
        //markers: true,
      },
    });
    primaryTl.to(primaryChar.value, {
      x: '0%',
      duration: 3,
      ease: 'power4.out',
      scrub: 1,
    }, "+=1");

  
  });
</script>

<style scoped>
  .primary-char-wrap {
    overflow: clip;
    margin-left: -17px;
    clip-path: inset(0 0 -.086em 0) !important;
    overflow: unset !important;
    
  }

  .primary-char {
    transform: translateX(-100%);
    clip-path: inset(0 0 -.086em 0);
    will-change: transform;
    perspective: 1000px;

  }
</style>