<template>
  <div ref="secondaryCharWrap" class="secondary-char-wrap inline-block">
    <div ref="secondaryChar" class="secondary-char inline-block">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
  import { useNuxtApp } from '#app'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  const secondaryCharWrap = ref(null);
  const secondaryChar = ref(null);

  let ctx;
  let resizeTimeout;
  
  onBeforeUnmount(() => {
    if (ctx) {
      ctx.revert();
      $ScrollTrigger.getAll().forEach(t => t.kill());
      $ScrollTrigger.refresh();
    }
  });

  const secondaryAnimation = () => {
    requestAnimationFrame(() => {
      ctx = $gsap.context(() => {
        $ScrollTrigger.matchMedia({
          "(min-width: 1024px)": function() {
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
            }, "+=0.4");
          },
          "(max-width: 1024px)": function() {
            const secondaryTl = $gsap.timeline({
              scrollTrigger: {
                trigger: secondaryCharWrap.value,
                start: "top 98%",
                end: "bottom 40%",
                //markers: true,
                //scrub: true,
                scroller: window,
                invalidateOnRefresh: true,
              },
            });
            secondaryTl.to(secondaryChar.value, {
              y: '0%',
              duration: 2,
              rotateX: 0,
              ease: 'power4.out',
              stagger: 0.04
            }, 0);
          },
        });
      });
    })
  }

  const isMainPage = computed(() => route.path === '/')

  onMounted(() => {
    if (isMainPage.value) {
      console.log('메인페이지입니다.');
      
      const minTimeout = new Promise(resolve => setTimeout(resolve, 2000));
      const loadComplete = new Promise(resolve => {
        if (document.readyState === 'complete') resolve();
        else window.addEventListener('load', resolve, { once: true });
      });

      Promise.all([minTimeout, loadComplete]).then(() => {
        secondaryAnimation();
      });

    } else {
      console.log('서브페이지입니다.');
      secondaryAnimation();
    }


    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
    });

    resizeObserver.observe(secondaryCharWrap.value);

    onUnmounted(() => {
      clearTimeout(resizeTimeout);
      resizeObserver.disconnect();
      
      ctx?.revert();
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