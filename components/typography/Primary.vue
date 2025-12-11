<template>
  <div ref="primaryCharWrap" class="primary-char-wrap inline-block 2xl:ml-[-17px] md:ml-[-12px] ml-[-1.5vw]">
    <div ref="primaryChar" class="primary-char inline-block">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'  
  import { useNuxtApp } from '#app'

  const { $gsap, $ScrollTrigger } = useNuxtApp();


  const primaryCharWrap = ref([]);
  const primaryChar = ref(null);
  let scrollTriggerInstance = null;

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
      scrollTriggerInstance = $ScrollTrigger.create({
        trigger: primaryChar.value,
        once: false,
        start: "top 80%",
        //markers: true,
        scroller: window,
        invalidateOnRefresh: true,
        onEnter: () => {
          $gsap.to(primaryChar.value, {
            x: '0%',
            duration: 1,
            ease: 'power4.out',
          });
        }
      })
    });
  })
</script>

<style scoped>
  .primary-char-wrap {
    overflow: clip;
    clip-path: inset(0 0 -.086em 0) !important;
    overflow: unset !important;
    
  }

  .primary-char {
    transform: translateX(-103%);
    clip-path: inset(0 0 -.086em 0);
    will-change: transform;
    perspective: 1000px;

  }

  @media screen and (max-width: 1023px) {
    .subPageTitle .primary-char-wrap {
      margin-left: -2vw;
    }
  }

  @media screen and (max-width: 767px) {
    .subPageTitle .primary-char-wrap {
      margin-left: -2.5vw;
    }
  }

  @media screen and (max-width: 480px) {
    .subPageTitle .primary-char-wrap {
      margin-left: -3.5vw;
    }
  }
</style>