<template>
  <div ref="primaryBothCharWrap" class="primary-char-wrap inline-block">
    <div ref="primaryBothChar" class="primary-char inline-block">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  
  const primaryBothCharWrap = ref(null);
  const primaryBothChar = ref(null);

  onMounted(() => {
    const primaryBothTl = $gsap.timeline({
      scrollTrigger: {
          trigger: primaryBothCharWrap.value,
          once: true,
          start: 'top 80%',
        }
    });

      primaryBothTl.fromTo(primaryBothChar.value, {
        x: '-100%',
        ease: 'power4.out',
        
      },{
        x: '0%',
        duration: 1.5,
        ease: 'power4.out',
      }, "+=1");
      
      primaryBothTl.to(primaryBothChar.value, {
        x: '100%',
        duration: 1.5,
        ease: 'power4.out',
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