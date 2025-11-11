<template>
  <div>
    <section ref="visualSection" class="visualSection h-[100vh] relative overflow-hidden">
      <div class="bg-video">
        <video class="bg-video--content" autoplay muted loop>
          <source src="~/assets/videos/main-logo-ani.mp4" type="video/mp4" />
        </video>
      </div>
      <div ref="videoWrap" class="video-layer video-layer--main">
          <span ref="videoWrapLayer" class="bg-video-layer"></span>
          <EffectGlass>
            <video autoplay muted loop>
              <source src="~/assets/videos/main-fly.mp4" type="video/mp4" />
            </video>
          </EffectGlass>
        </div>
        <div ref="videoSubWrap" class="video-layer video-layer--sub">
          <video autoplay muted loop>
            <source src="~/assets/videos/main-war.mp4" type="video/mp4" />
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
            <p class="text-white text-[2.3rem] font-normal mb-8 flex flex-col">
              <TypographySecondary>Design the Future of Play,</TypographySecondary>
              <TypographySecondary>Create a Culture the World Shares</TypographySecondary>
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
              <ButtonsBasic size="sm" color="white">View more</ButtonsBasic>
            </EffectGlass>
          </div>
        </div>

      </Container>
       
    </section>
    <section class="accordion-section" ref="accordionSection">
      <div class="accordion-list flex h-full w-full">
        <BlocksAccordion class="silver-palace opened" background ref="accordionItem">
          <template #accordionTitle class="accordion-title">
            <span class="text-white">01</span>
            <h3 class="text-white">SILVER PALACE</h3>
          </template>
          <template #accordionContent>
            <div class="content-bg absolute left-0 top-0 w-[100vw] h-full overflow-hidden">
              <video autoplay muted loop class="w-full h-full object-cover">
                <source src="~/assets/videos/main-game-silverpalace.mp4" type="video/mp4">
              </video>
            </div>

            <div class="content-text w-fit h-full ml-auto ">
              <EffectGlass class="h-full">
                <div class="flex flex-col justify-end gap-y-[3.125rem] pb-[5.625rem] px-8 h-full">
                  <div class="content-title title-img">
                    <img src="~assets/images/main/text-game-silverpalace.svg" alt="icon" />
                  </div>
                  <div class="content-detail flex flex-col gap-y-6 ">
                    <p class="subtitle text-[1.625rem] font-semibold leading-[2rem]">
                      사건의 진위, <br>
                      무대의 서막
                    </p>
                    <p class="text-[1.125rem] leading-7">
                      펠리아나 3년, 다시 실버니아로 돌아온 탐정. <br>
                      그리고 현실과 우화가 뒤섞이고, 번영과 몰락의 경계에 <br>
                      서 있는 실버니아.
                    </p>
                    <p>
                      사교와 조사, 판단 그리고 전투, 당신이 그 총알 한 발의 <br>
                      진실을 찾아낸다면, 자신은 물론, 모든 이들의 운명까지 <br>
                      결정짓게 될 것이다.
                    </p>
                  </div>
                  <div class="content-button">
                    <ButtonsBasic size="sm" color="yellow ">View more</ButtonsBasic>
                  </div>
                </div>
              </EffectGlass>
            </div>
          </template>
        </BlocksAccordion>
        <BlocksAccordion class="locked" ref="accordionItem">
          <template #accordionTitle >
            <span class="locked-title-icon">
            </span>
            <span class="locked-title-text">
              
            </span>
          </template>
          <template #accordionContent></template>
        </BlocksAccordion>
        <BlocksAccordion class="locked" ref="accordionItem">
          <template #accordionTitle >
            <span class="locked-title-icon"></span>
            <span class="locked-title-text"></span>
          </template>
          <template #accordionContent></template>
        </BlocksAccordion>
        <BlocksAccordion class="locked" ref="accordionItem">
          <template #accordionTitle>
            <span class="locked-title-icon"></span>
            <span class="locked-title-text"></span>
          </template>
          <template #accordionContent></template>
        </BlocksAccordion>
      </div>
    </section>
    <section class="h-auto" ref="elementaKoreaSection">
      <div class="slider-wrap">
        <div class="slider-text">
          <h2 class="flex items-center justify-center gap-x-8 text-[17rem] leading-1 font-bold text-white pt-[6.25rem]" ref="elementaKorea">
            <span class="leading-[100%] text-[#9FAEB5] font-[15rem] tracking-[-0.3rem]">
              ELEMENTA
            </span>
            <div class="slider-img flex items-center justify-center mt-3" ref="sliderImg">
              <img src="~assets/images/main/elementakorea-center-img.png" alt="" class="block">
            </div>
            <span class="leading-[100%] text-[#9FAEB5] font-[15rem] tracking-[-0.3rem]">
              KOREA
            </span>
          </h2>
        </div>
        
      </div>
    </section>
    <section class="wetheworld-section flex items-center justify-center" ref="wetheworldSection">
      <div class="wetheworldbg-video01 opacity-0 invisible absolute inset-0 z-0" ref="wetheworldbg1">
        <video class="bg-video--content w-full h-full object-cover" autoplay muted loop>
          <source src="~/assets/videos/main-wetheworld.mp4" type="video/mp4" />
        </video>
      </div>
      <h2 class="text-[17rem] leading-1 font-bold text-white pt-[6.25rem] text-center">
        <span ref="weText" class="block leading-[100%]">
          <TypographyPrimary>
            W
          </TypographyPrimary>
          <TypographyPrimary>
            E
          </TypographyPrimary>
        </span>
        <div class="text-spacer"></div>
        <span ref="theworldText" class="block leading-[100%]">
          <TypographyPrimary>
              T
            </TypographyPrimary>
            <TypographyPrimary>
              H
            </TypographyPrimary>
            <TypographyPrimary>
              E
            </TypographyPrimary>
            <TypographyPrimary>
              W
            </TypographyPrimary>
            <TypographyPrimary>
              O
            </TypographyPrimary>
            <TypographyPrimary>
              R
            </TypographyPrimary>
            <TypographyPrimary>
              L
            </TypographyPrimary>
            <TypographyPrimary>
              D
            </TypographyPrimary>
        </span>
      </h2>
    </section>
    <section class="newsroom-section relative pt-[6.25rem] pb-[6rem]" ref="newsroomSection">
      <div class="bg-text absolute bottom-0 left-0 ">
        <span class="text-[#403B4E] text-[5rem] font-bold">NEW PARADIGM, LASTING IMPACT. ELEMENTA KOREA</span>
        <h2 class="text-[28rem] text-fill font-bold">ELEMENTA ELEMENTA</h2>
      </div>
      <Container>
        <div class="section-heading relative">
          <div class="heading-text flex flex-col gap-y-10">
            <span class="sectionTitle-eng text-white text-base relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-pulse before:bg-[#00C8EB] before:w-3 before:h-3 before:rounded-full pl-5 ">NEWSROOM</span>
            <h6 class="text-white text-[2.3rem] font-normal">
              <TypographySecondary>ELEMENTA의 가장 최신 뉴스를 알아보세요. </TypographySecondary> <br />
              <TypographySecondary>New Paradigm, Lasting Impact</TypographySecondary>
            </h6>
          </div> 
          <div class="heading-button absolute right-0 bottom-0">
            <ButtonsBasic size="lg" color="blue">View more</ButtonsBasic>
          </div>
        </div>
        <div class="section-content flex">
          <div class="content-text">
            <p class="text-white ">
              New Paradigm, <br>
              Lasting Impact
            </p>
          </div>
          <div class="card-grid flex flex-col gap-y-18">
            <EffectGlass class="card-glass pt-[5rem] relative after:absolute after:inset-y-0 after:right-0 after:w-80">
              <div class="card-list flex gap-[3.75rem] justify-center flow-left mb-[4.375rem]" ref="flowLeft">
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb01.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb02.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          UE5로 만든 싱가포르 서브컬처 기대작, 실버 팰리스 공개
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb03.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 게임...
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb04.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 신작 실버 팰리스 첫 공개
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb05.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 공개…글로벌 시장 공략
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb06.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
              </div>
              <div class="card-list flex gap-[3.75rem] justify-center flow-left rows-reverse" ref="flowRight">
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb01.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep ">
                          '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb02.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          UE5로 만든 싱가포르 서브컬처 기대작, 실버 팰리스 공개
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb03.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 게임...
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb04.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 신작 실버 팰리스 첫 공개
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb05.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 공개…글로벌 시장 공략
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb06.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
              </div>
            </EffectGlass>
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
import { EffectGlass } from '#components';
import Container from '~/components/Container.vue';

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
const elementaKoreaSection = ref(null)
const sliderImg = ref(null)
const newsroomSection = ref(null)
const flowLeft = ref(null)
const flowRight = ref(null)
const accordionSection = ref(null)
const accordionItem = ref([])
const wetheworldSection = ref(null)
const wetheworldbg1 = ref(null)
const weText = ref(null)
const theworldText = ref(null)


onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: visualSection.value,
      start: "top top",
      pin: true, 
      pinSpacing: true,
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
    clipPath: 'polygon(60% 0%, 90% 0%, 70% 100%, 40% 100%)',
  },
  {
    x: 1200,
    clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 20% 100%)',
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
    zIndex: 5,
    visibility: 'hidden',
  },
  {
    opacity: 0.5,
    zIndex: 5,
    visibility: 'visible',
    ease: 'none',
    scrollTrigger: {
      trigger: videoWrapLayer.value,
      start: () => "+=" + window.innerHeight,
      end: () => "+=" + window.innerHeight,
      scrub: 1,
    }
  })
  .fromTo(missionSection.value, {
    position: 'relative',
  },{
    position: 'absolute',
    ease: 'none',
    scrollTrigger: {
      trigger: videoWrapLayer.value,
      start: () => "+=" + (window.innerHeight * 1.5),
      end: () => "+=" + (window.innerHeight / 2),
      scrub: 1,
    }
  })

  const accordionItems = accordionSection.value.querySelectorAll('.accordion-list > *');
  const accordionArray = Array.from(accordionItems);
  
  const accordionTl = $gsap.timeline({
    scrollTrigger: {
      trigger: accordionSection.value,
      start: 'top 80%',
      end: () => "+=" + (accordionSection.value.offsetHeight * 0.6),
      scrub: 1,
    }
  })
  accordionTl.from(accordionArray, {
    x: 100,
    y: 50,
    opacity: 0,
    stagger: 0.1,
  })

  const wetheworldTl = $gsap.timeline({
    scrollTrigger: {
      trigger: wetheworldSection.value,
      pin: true,
      pinSpacing: true,
      end: () => "+=" + (wetheworldSection.value.offsetHeight * 5),
      scrub: 1,
      markers: true
    }
  })

  wetheworldTl.to(wetheworldbg1.value, {
    opacity: 1,
    visibility: 'visible',
    start: 'top top',
    end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
  }, 0)
  .to(weText.value, {
    color: 'black',
    start: 'top top',
    end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
  }, 0)
  .to(theworldText.value, {
    color: 'black',
    start: 'top top',
    end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
  }, 0)
  .to(weText.value, {
    y: '-80vh',
    start: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
    end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.2),
    scrub: 1,
  })
  .to(theworldText.value, {
    y: '80vh',
    start: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
    end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.2),
    scrub: 1,
  }, "<")
  
  

  const elementaKoreaTl = $gsap.timeline({
    scrollTrigger: {
      trigger: elementaKoreaSection.value,
      start: 'top 80%',
      end: () => "+=" + (elementaKoreaSection.value.offsetHeight * 1.5),
      scrub: 1,
    }
  })

  elementaKoreaTl.to(sliderImg.value, {
    maxWidth: '30rem',
    ease: 'power2.out',
    duration: 5,
  })

  const newsroomTl = $gsap.timeline({
    scrollTrigger: {
      trigger: newsroomSection.value,
      start: 'top -20%',
      pin: true,
      end: () => "+=" + (newsroomSection.value.offsetHeight * 3),
      scrub: 1,
    }
  })

  newsroomTl.fromTo(flowLeft.value, {
    x: calcTransform("x", "calc(100% - 100vw)"),
  }, {
    x: calcTransform("x", "calc(100% - 150vw)"),
    ease: 'power2.out',
    duration: 3,
  }, 0.2)

  newsroomTl.fromTo(flowRight.value, {
    x: calcTransform("x", "calc(-80% + 100vw)"),
  }, {
    x: calcTransform("x", "calc(-100% + 150vw)"),
    ease: 'power2.out',
    duration: 3,
  }, 0.2)

  function calcTransform(property, value) {
    let alias = { y: "translateY", x: "translateX", z: "translateZ", rotation: "rotate" };
    return function (i, target) {
      let transform = target.style.transform;
      target.style.transform = (alias[property] || property) + "(" + value + ")";
      let computed = parseFloat($gsap.getProperty(target, property, property.substr(0, 3) === "rot" ? "deg" : "px", true));
      target.style.transform = transform;
      $gsap.getProperty(target, property, "px", true);
      return computed; 
    };
  }

  
  // .fromTo(weCreate.value, {
  //   opacity: 0,
  //   visibility: 'hidden',
  // },{
  //   opacity: 1,
  //   visibility: 'visible',
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: videoWrapLayer.value,
  //     start: () => "+=" + (window.innerHeight * 2.5),
  //     end: () => "+=" + (window.innerHeight / 2),
  //     scrub: 1,
  //   }
  // })
  // .fromTo(newParadigm.value, {
  //   opacity: 0,
  //   visibility: 'hidden',
  // },{
  //   opacity: 1,
  //   visibility: 'visible',
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: videoWrapLayer.value,
  //     start: () => "+=" + (window.innerHeight * 2.5),
  //     end: () => "+=" + (window.innerHeight / 2),
  //     scrub: 1,
  //   }
  // })
  // .fromTo(lastingImpact.value, {
  //   opacity: 0,
  //   visibility: 'hidden',
  // },{
  //   opacity: 1,
  //   visibility: 'visible',
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: videoWrapLayer.value,
  //     start: () => "+=" + (window.innerHeight * 3),
  //     end: () => "+=" + (window.innerHeight / 2),
  //     scrub: 1,
  //   }
  // })
  

  
  //const primaryAni = $gsap.timeline();
  
  // const starsContainer = document.querySelector(".stars-container");

  // function createStar() {
  //     const star = document.createElement("div");
  //     star.classList.add("star");

  //     // Random position
  //     star.style.left = Math.random() * window.innerWidth + "px";
  //     star.style.animationDuration = (Math.random() * 5 + 2) + "s";
      
  //     starsContainer.appendChild(star);

  //     // Remove the star after animation ends
  //     setTimeout(() => {
  //         star.remove();
  //     }, 7000);
  // }

  // // Generate stars at intervals
  // setInterval(createStar, 200);

  
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


  
</style>
