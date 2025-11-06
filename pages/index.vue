<template>
  <div>
    <section ref="visualSection" class="visualSection h-[100vh] relative overflow-hidden">
      <div class="bg-video">
        <video class="bg-video--content" autoplay muted loop>
          <source src="~/assets/videos/main-logo-ani.mp4" type="video/mp4" />
        </video>
      </div>
      <Container class="h-full">
        <!-- 첫번째 애니메이션 -->
        <div class="section-text flex flex-col h-full pb-[6.25rem]" ref="visualTitle">
          <h2 class="text-[17rem] leading-1 font-bold text-white pt-[6.25rem]">
            <TypographyPrimary>
              E
            </TypographyPrimary>
            <TypographyPrimary>
              L
            </TypographyPrimary>
            <TypographyPrimary>
              E
            </TypographyPrimary>
            <TypographyPrimary>
              M
            </TypographyPrimary>
            <TypographyPrimary>
              E
            </TypographyPrimary>
            <TypographyPrimary>
              N
            </TypographyPrimary>
            <TypographyPrimary>
              T
            </TypographyPrimary>
            <TypographyPrimary>
              A
            </TypographyPrimary>
          </h2>
          <div class="flex flex-col mt-auto">
            <p class="text-white text-[2.3rem] font-normal mb-8">
              Design the Future of Play, <br />
              Create a Culture the World Shares
            </p>
            <div class="w-fit">
              <EffectGlass>
                <div class="text-list flex gap-x-7 py-[0.9rem]">
                  <span class="text-lg text-white">Innovation</span>
                  <span class="text-lg text-white">Trust</span>
                  <span class="text-lg text-white">Culture</span>
                </div>
              </EffectGlass>
            </div>
          </div>
        </div>
        
        <div ref="videoWrap" class="video-layer video-layer--main">
          <span ref="videoWrapLayer" class="bg-video-layer"></span>
          <EffectGlass>
            <video autoplay muted loop>
              <source src="~/assets/videos/main-fly.mp4" type="video/mp4" />
            </video>
          </EffectGlass>
        </div>
        <div ref="videoSubWrap" class="video-layer video-layer-sub">
          <video autoplay muted loop>
            <source src="~/assets/videos/main-war.mp4" type="video/mp4" />
          </video>
        </div>

        <!-- 두번째 애니메이션 -->
        <div>
          <h2 class="text-[17rem] leading-1 font-bold text-white pt-[6.25rem]">
            <div>
              <span>
                <TypographyPrimary>
                W
                </TypographyPrimary>
                <TypographyPrimary>
                E
                </TypographyPrimary>
              </span>
              <span>
                <TypographyPrimary>
                C
                </TypographyPrimary>
                <TypographyPrimary>
                R
                </TypographyPrimary>
                <TypographyPrimary>
                E
                </TypographyPrimary>
                <TypographyPrimary>
                A
                </TypographyPrimary>
                <TypographyPrimary>
                T
                </TypographyPrimary>
                <TypographyPrimary>
                E
                </TypographyPrimary>
              </span>
            </div>
            <div>
              <span>
                <TypographyPrimary>
                N
                </TypographyPrimary>
                <TypographyPrimary>
                E
                </TypographyPrimary>
                <TypographyPrimary>
                W
                </TypographyPrimary>
              </span>
              <span>
                <TypographyPrimary>
                P
                </TypographyPrimary>
                <TypographyPrimary>
                A
                </TypographyPrimary>
                <TypographyPrimary>
                R
                </TypographyPrimary>
                <TypographyPrimary>
                A
                </TypographyPrimary>
                <TypographyPrimary>
                D
                </TypographyPrimary>
                <TypographyPrimary>
                I
                </TypographyPrimary>
                <TypographyPrimary>
                G
                </TypographyPrimary>
                <TypographyPrimary>
                M
                </TypographyPrimary>
              </span>
            </div>

          </h2>
        </div>

      </Container>
        
    </section>
    <section class="relative">
      <Container>
        <div class="card-list flex flex-wrap gap-8 justify-center py-20">
          <EffectCardHover v-for="n in 6" :key="n">
            <div class="w-[300px] h-[400px] bg-gray-200 flex items-center justify-center">
              <h3 class="text-2xl font-bold">Card {{ n }}</h3>
            </div>
          </EffectCardHover>
        </div>
      </Container>
    </section>
    <section></section>
    <section>
    
    </section>
  </div>
</template>

<script setup>
import Container from '~/components/Container.vue';
import { useNuxtApp } from '#app'


const { $gsap, $ScrollTrigger } = useNuxtApp()
const videoWrap = ref(null)
const videoWrapLayer = ref(null)
const visualSection = ref(null)
const videoSubWrap = ref(null)
const visualTitle = ref(null)

onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: visualSection.value,
      start: "top top",
      pin: true, 
      end: () => "+=" + (window.innerHeight * 5),
    }
  });
  tl.fromTo(videoWrap.value, {
      clipPath: 'polygon(60% 0%, 90% 0%, 70% 100%, 40% 100%)',
      scale: 1,
    },
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scale: 1.4,
      ease: 'none',
      scrollTrigger: {
        trigger: videoWrap.value,
        start: 'top top',
        end: () => "+=" + window.innerHeight,
        scrub: 1,
      },
    }
  )

  tl.fromTo(visualTitle.value, {
    x: 0,
  },
  {
    x: -1200,
    ease: 'none',
    scrollTrigger: {
      trigger: visualTitle.value,
      start: 'top top',
      end: () => "+=" + window.innerHeight,
      scrub: 1,
    }
  }, 0)

  tl.fromTo(videoSubWrap.value, {
    x: 0,
  },
  {
    x: 1200,
    ease: 'none',
    scrollTrigger: {
      trigger: videoSubWrap.value,
      start: 'top top',
      end: () => "+=" + window.innerHeight,
      scrub: 1,
    }
  })
  .fromTo(videoWrapLayer.value, {
    opacity: 0,
    zIndex: 1,
    visibility: 'hidden',
  },
  {
    opacity: 0.5,
    zIndex: 1,
    visibility: 'visible',
    ease: 'none',
    scrollTrigger: {
      trigger: videoWrapLayer.value,
      start: () => "+=" + window.innerHeight,
      end: () => "+=" + window.innerHeight,
      scrub: 1,
    }
  })
})

const nodeVersion = process.version
</script>

<style scoped>
#nuxt-devtools-container {
    display: none !important;
  }
.page {
  text-align: center;
  margin-top: 60px;
  font-family: system-ui, sans-serif;
}

h2 {
  font-family: "Oswald";
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
}

.bg-video-layer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
}

.bg-video__content {
  height: 100%;
  width: 100%;
  object-fit: cover;
  
}

.video-layer--main {
  position: absolute;
  top: 5rem;
  clip-path: polygon(60% 0%, 90% 0%, 70% 100%, 40% 100%);
}

.video-layer-sub {
  position: absolute;
  top: 5rem;
  clip-path: polygon(91% 0%, 100% 0%, 100% 100%, 71% 100%);
}
  
</style>
