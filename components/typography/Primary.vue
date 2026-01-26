<template>
  <div ref="primaryCharWrap" class="primary-char-wrap inline-block 2xl:ml-[-17px] md:ml-[-12px] ml-[-1.5vw]">
    <div ref="primaryChar" class="primary-char inline-block">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue'  
  import { useNuxtApp } from '#app'
  import { useRoute } from 'vue-router'

  const { $gsap, $ScrollTrigger, $lenis } = useNuxtApp();

  const route = useRoute()
  const primaryCharWrap = ref([]);
  const primaryChar = ref(null);

  let ctx
  let resizeTimeout;

  onBeforeUnmount(() => {
    if (ctx) {
      ctx.revert();
      $ScrollTrigger.getAll().forEach(t => t.kill());
      $ScrollTrigger.refresh();
    }
  });

  const primaryAnimation = () => {
    requestAnimationFrame(() => {
      ctx = $gsap.context(() => {
        $ScrollTrigger.matchMedia({
          "(min-width: 1024px)": function() {
            const PrimaryTl = $gsap.timeline({
              scrollTrigger: {
                trigger: primaryChar.value,
                once: false,
                start: "top 90%",
                //markers: true,
                scroller: window,
                invalidateOnRefresh: true,
              }
            })

            PrimaryTl.to(primaryChar.value, {
              x: '0%',
              duration: 1.6,
              ease: 'power4.out',
            }, "+=0.5");
          },

          "(max-width: 1024px)": function() {
            const PrimaryTl = $gsap.timeline({
              scrollTrigger: {
                trigger: primaryChar.value,
                once: false,
                start: "top 98%",
                //markers: true,
                scroller: window,
                invalidateOnRefresh: true,
              }
            })

            PrimaryTl.to(primaryChar.value, {
              x: '0%',
              duration: 1.6,
              ease: 'power4.out',
            }, 0);
          }
        });

      });
    })
  }

  const isMainPage = computed(() => route.path === '/')

  onMounted(() => {
    if (isMainPage.value) {
      // 메인 페이지 로드 대기
      const minTimeout = new Promise(resolve => setTimeout(resolve, 2000));
      const loadComplete = new Promise(resolve => {
        if (document.readyState === 'complete') resolve();
        else window.addEventListener('load', resolve, { once: true });
      });

      Promise.all([minTimeout, loadComplete]).then(() => {
        primaryAnimation();
      });

    } else {
      // 서브 페이지 즉시 실행
      primaryAnimation();
    }
    

    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
    });

    resizeObserver.observe(primaryChar.value);

    onUnmounted(() => {
      clearTimeout(resizeTimeout);
      resizeObserver.disconnect();
      
      ctx?.revert();
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