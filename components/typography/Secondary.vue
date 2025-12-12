<template>
  <div ref="secondaryCharWrap" class="secondary-char-wrap inline-block">
    <div ref="secondaryChar" class="secondary-char inline-block">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { useNuxtApp } from '#app'

  const { $gsap, $ScrollTrigger } = useNuxtApp()
  const secondaryCharWrap = ref(null);
  const secondaryChar = ref(null);

  let ctx;
  onBeforeUnmount(() => {
    if (ctx) {
      ctx.revert();
      $ScrollTrigger.getAll().forEach(t => t.kill());
      $ScrollTrigger.refresh();
    }
  });

  onMounted(() => {
    ctx = $gsap.context(() => {
      const secondaryTl = $gsap.timeline({
        scrollTrigger: {
          trigger: secondaryCharWrap.value,
          start: "top 90%",
          end: "bottom 40%",
          //markers: true,
          //scrub: true,
          scroller: window,
          invalidateOnRefresh: true,
        },
      });
      secondaryTl.to(secondaryChar.value, {
        y: '0%',
        duration: 3,
        rotateX: 0,
        ease: 'power4.out',
        stagger: 0.04
      }, "+=");
    });
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