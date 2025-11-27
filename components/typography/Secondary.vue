<template>
  <div ref="secondaryCharWrap" class="secondary-char-wrap inline-block">
    <div ref="secondaryChar" class="secondary-char inline-block">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { $gsap } = useNuxtApp()
  const secondaryCharWrap = ref(null);
  const secondaryChar = ref(null);

  onMounted(() => {
    const secondaryTl = $gsap.timeline({
      scrollTrigger: {
        trigger: secondaryCharWrap.value,
        start: "top 90%",
        end: "bottom 40%",
        //markers: true,
        scrub: true,
      },
    });
      secondaryTl.to(secondaryChar.value, {
        y: '0%',
        duration: 3,
        rotateX: 0,
        ease: 'power4.out',
      }, "0.5");
    });

</script>

<style scoped>
  .secondary-char-wrap {
    overflow: clip;
    clip-path: inset(0 0 .06em 0) !important;
    overflow: unset !important;
    
  }

  .secondary-char {
    transform: translateY(-15%) rotateX(-500deg);
    clip-path: inset(0 0 .06em 0);
    transform-origin: center top;
    will-change: transform;
    perspective: 1000px;

  }
</style>