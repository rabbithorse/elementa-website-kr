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
          <h2 class="text-[17rem] leading-1 font-bold text-white pt-[6.25rem]" >
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
        <div class="mission-section flex flex-col justify-center items-center" ref="missionSection">
          <div class="text-wrap">
            <h2 class="text-[17rem] leading-1 font-bold text-white pt-[6.25rem]">
              <div ref="weCreate" class="" >
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
              <div ref="newParadigm" class="" >
                <span>
                  <TypographyPrimaryBoth>
                  N
                  </TypographyPrimaryBoth>
                  <TypographyPrimaryBoth>
                  E
                  </TypographyPrimaryBoth>
                  <TypographyPrimaryBoth>
                  W
                  </TypographyPrimaryBoth>
                </span>
                <span>
                  <TypographyPrimaryBoth>
                  P
                  </TypographyPrimaryBoth>
                  <TypographyPrimaryBoth>
                  A
                  </TypographyPrimaryBoth>
                  <TypographyPrimaryBoth>
                  R
                  </TypographyPrimaryBoth>
                  <TypographyPrimaryBoth>
                  A
                  </TypographyPrimaryBoth>
                  <TypographyPrimaryBoth>
                  D
                  </TypographyPrimaryBoth>
                  <TypographyPrimaryBoth>
                  I
                  </TypographyPrimaryBoth>
                  <TypographyPrimaryBoth>
                  G
                  </TypographyPrimaryBoth>
                  <TypographyPrimaryBoth>
                  M
                  </TypographyPrimaryBoth>
                </span>
              </div>
              <div ref="lastingImpact" class="" >
                <span>
                  <TypographyPrimary>
                  L
                  </TypographyPrimary>
                  <TypographyPrimary>
                  A
                  </TypographyPrimary>
                  <TypographyPrimary>
                  S
                  </TypographyPrimary>
                  <TypographyPrimary>
                  T
                  </TypographyPrimary>
                  <TypographyPrimary>
                  I
                  </TypographyPrimary>
                  <TypographyPrimary>
                  N
                  </TypographyPrimary>
                  <TypographyPrimary>
                  G
                  </TypographyPrimary>
                </span>
                <span>
                  <TypographyPrimary>
                  I
                  </TypographyPrimary>
                  <TypographyPrimary>
                  M
                  </TypographyPrimary>
                  <TypographyPrimary>
                  P
                  </TypographyPrimary>
                  <TypographyPrimary>
                  A
                  </TypographyPrimary>
                  <TypographyPrimary>
                  C
                  </TypographyPrimary>
                  <TypographyPrimary>
                  T
                  </TypographyPrimary>
                </span>
              </div>
            </h2>
          </div>
          <div class="box-wrap">
            <EffectGlass>
              <span class="sectionTitle-eng">Our Mission</span>
              <div class="text-content gap-x-7 py-[0.9rem]">
                <p>혁신적 경험으로 게임의 기준을 새롭게 쓰고, 협력과 도전으로 문화를 확장하며, 전 세계가 공감할 지속 가능한 감동을 만드는 문화·패러다임의 선도자로 성장하겠습니다.</p>
              </div>
              <button type="button">View more</button>
            </EffectGlass>
          </div>
        </div>

      </Container>
      <div class="primaryTrigger trigger1 h-full" ref="trigger1"></div> 
      <div class="primaryTrigger trigger2 h-full" ref="trigger2"></div> 
      <div class="primaryTrigger trigger3 h-full" ref="trigger3"></div> 
    </section>
    <section class="relative">
      
    </section>
    <section></section>
    <section class="newsroom-section">
      <Container>
        <div class="section-heading">
          <div class="heading-text">
            <span class="sectionTitle-eng">NEWSROOM</span>
            <h6>
              ELEMENTA의 가장 최신 뉴스를 알아보세요. <br>
              New Paradigm, Lasting Impact
            </h6>
          </div>
          <div class="heading-button">
            <a href="">View more</a>
          </div>
        </div>
        <div class="section-content">
          <div class="card-grid">
            <div class="card-list flex flex-wrap gap-8 justify-center py-20 flow-left">
              <div class="card" v-for="news in newsPosts" :key="news.title">
                <EffectCardHover>
                  <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div class="card-img">
                      <img :src="news.src" alt="">
                    </div>
                    <div class="card-content">
                      <div class="card-title">
                        {{ news.title }}
                      </div>
                    </div>
                  </div>
                </EffectCardHover>
              </div>
            </div>
            <div class="card-list flex flex-wrap gap-8 justify-center py-20 flow-right">
              <div class="card" v-for="news in newsPosts" :key="news.title">
                
              </div>
            </div>
          </div>
        </div>
        
      </Container>
    </section>
    <section class="careers-section">
      <Container>
        <div class="section-heading">
          <div class="heading-text">
            <span class="sectionTitle-eng">CAREERS</span>
            <h6>
              ELEMENTA와 함께 성장할 동료를 기다립니다. <br>
              Design the Future of Play, Create a Culture the World Shares 
            </h6>
          </div>
          <div class="heading-button">
            <a href="">View more</a>
          </div>
        </div>
        <div class="section-content">
          <div class="card-grid">
            <div class="card-list flex flex-wrap gap-8 justify-center py-20 flow-left">
              
            </div>
          </div>
        </div>
        
      </Container>
    </section>
  </div>
</template>

<script setup>
import Container from '~/components/Container.vue';
import { useNuxtApp } from '#app'

const newsPosts = [
      { title: "'실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'", src: "~/assets/images/main/newsroom-thumb01.png" },
      { title: "UE5로 만든 싱가포르 서브컬처 기대작, 실버 팰리스 공개", src: "~/assets/images/main/newsroom-thumb02.png" },
      { title: "엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 게임...", src: "~/assets/images/main/newsroom-thumb03.png" },
      { title: "엘리멘타, 신작 실버 팰리스 첫 공개", src: "~/assets/images/main/newsroom-thumb04.png" },
      { title: "엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 공개…글로벌 시장 공략", src: "~/assets/images/main/newsroom-thumb05.png" },
      { title: "'실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'", src: "~/assets/images/main/newsroom-thumb06.png" },
    ]


const { $gsap, $ScrollTrigger } = useNuxtApp()
const videoWrap = ref(null)
const videoWrapLayer = ref(null)
const visualSection = ref(null)
const videoSubWrap = ref(null)
const visualTitle = ref(null)
const missionSection = ref(null)
const weCreate = ref(null)
const newParadigm = ref(null)
const lastingImpact = ref(null)


onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: visualSection.value,
      start: "top top",
      pin: true, 
      end: () => "+=" + (window.innerHeight * 7),
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
  .fromTo(weCreate.value, {
    opacity: 0,
    visibility: 'hidden',
  },{
    opacity: 1,
    visibility: 'visible',
    ease: 'none',
    scrollTrigger: {
      trigger: videoWrapLayer.value,
      start: () => "+=" + (window.innerHeight * 2.5),
      end: () => "+=" + (window.innerHeight / 2),
      scrub: 1,
    }
  })
  .fromTo(newParadigm.value, {
    opacity: 0,
    visibility: 'hidden',
  },{
    opacity: 1,
    visibility: 'visible',
    ease: 'none',
    scrollTrigger: {
      trigger: videoWrapLayer.value,
      start: () => "+=" + (window.innerHeight * 2.5),
      end: () => "+=" + (window.innerHeight / 2),
      scrub: 1,
    }
  })
  .fromTo(lastingImpact.value, {
    opacity: 0,
    visibility: 'hidden',
  },{
    opacity: 1,
    visibility: 'visible',
    ease: 'none',
    scrollTrigger: {
      trigger: videoWrapLayer.value,
      start: () => "+=" + (window.innerHeight * 3),
      end: () => "+=" + (window.innerHeight / 2),
      scrub: 1,
    }
  })

  
  //const primaryAni = $gsap.timeline();
  

  
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

.mission-section {
  width: 100svw; 
  height: 100svh;
}
  
</style>
