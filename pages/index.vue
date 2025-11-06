<template>
  <div>
    <section ref="visualSection" class="visualSection h-[100vh] relative overflow-hidden">
      <div class="bg-video">
        <video class="bg-video--content" autoplay muted loop>
          <source src="~/assets/videos/main-logo-ani.mp4" type="video/mp4" />
        </video>
      </div>
      <Container>
        <div class="section-text flex flex-col">
          <h2 class="text-[17rem] leading-1 font-bold text-white pt-[6.25rem]">ELEMENTA</h2>

          <div class="flex flex-col">
            <p>
              Design the Future of Play, <br />
              Create a Culture the World Shares
            </p>
            <div class="w-fit">
              <EffectGlass>
                <span class="text-lg text-white">Innovation</span>
                <span class="text-lg text-white">Trust</span>
                <span class="text-lg text-white">Culture</span>
              </EffectGlass>
            </div>
          </div>
        </div>
        
        <div ref="videoWrap" class="video-layer video-layer--main">
          <EffectGlass>
            <video src="~/assets/videos/main-fly.mp4" autoplay muted loop></video>
          </EffectGlass>
        </div>
        <div class="video-layer">
          <video src="" controls></video>
        </div>
      </Container>
        
    </section>
    <section></section>
    <section></section>
    <section>
    
    </section>
  </div>
</template>

<script setup>
import Container from '~/components/Container.vue';
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#app'


const { $gsap, $ScrollTrigger } = useNuxtApp()
const videoWrap = ref(null)
const visualSection = ref(null)

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
    },
    {

    }
  )
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
  letter-spacing: -17.875px;
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
</style>
