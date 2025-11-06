<template>
  <div ref="primaryCharWrap" class="primary-char-wrap inline-block">
    <div ref="primaryChar" class="primary-char inline-block">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { $gsap } = useNuxtApp()
  const primaryCharWrap = ref(null);
  const primaryChar = ref(null);

  onMounted(() => {
    const primaryTl = $gsap.timeline();
      primaryTl.to(primaryChar.value, {
        x: '0%',
        duration: 1.5,
        ease: 'power4.out',
      }, "+=1.5");
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