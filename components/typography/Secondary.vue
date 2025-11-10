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
        //once: true,
        start: "top 80%",
        end: "bottom 40%",
        markers: true,
        scrub: true,
        onEnter: () => {
          secondaryTl.resume()
        }
      },
    });
      secondaryTl.to(secondaryChar.value, {
        y: '0%',
        duration: 1.5,
        rotate: 0,
        ease: 'power4.out',
      }, "+=1.5");
    });

</script>

<style scoped>
  .secondary-char-wrap {
    overflow: clip;
    clip-path: inset(0 0 .06em 0) !important;
    overflow: unset !important;
    
  }

  .secondary-char {
    transform: translateY(200%) rotate(12deg);
    clip-path: inset(0 0 .06em 0);
    will-change: transform;
    perspective: 1000px;

  }
</style>