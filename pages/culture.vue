<template>
  <div>
     <section class="subSection culture-area lg:pt-[130px] pt-[95px] relative" ref="subSection">
      <Container>
        <h2 class="text-[11rem] leading-1 font-bold text-white subPageTitle relative">
          <TypographyPrimary>
            C
          </TypographyPrimary>
          <TypographyPrimary>
            u
          </TypographyPrimary>
          <TypographyPrimary>
            l
          </TypographyPrimary>
          <TypographyPrimary>
            t
          </TypographyPrimary>
          <TypographyPrimary>
            u
          </TypographyPrimary>
          <TypographyPrimary>
            r
          </TypographyPrimary>
          <TypographyPrimary>
            e
          </TypographyPrimary>
        </h2>
        <p class="text-white text-xl pt-[1.25rem] text-[2.5rem] relative subPageTitle3 break-keep lg:leading-[1.81rem] leading-[1.51rem]">
          <TypographySecondary>플레이어의 경험을 넘어, 우리의 문화를 만들어갈 동료를 찾습니다.</TypographySecondary>
        </p>

      </Container>

      <div class="wide-image-container w-full overflow-hidden 2xl:mt-[228px] xl:mt-[148px] mt-[3.5rem]">
        <Container>
        <!-- wide image -->
        <div class="wide-image-area xl:h-[600px] lg:h-[450px] h-[400px] relative " ref="wideImageArea"><Temporary type="image" /></div> 
        </Container>
      </div>      

      <div class="culture-slogan lg:pb-72 md:pb-36 pb-16">
        <Container>
          <h3 class="text-white lg:pt-[200px] md:pt-[100px] pt- 2xl:text-[5.625rem] xl:text-[4rem] lg:text-[3.6rem] text-[6.8vw] font-semibold relative text-center">
            <TypographySecondary>Design the Future of Play,</TypographySecondary>
            <TypographySecondary>Create a Culture <br class="md:hidden block">the World Shares</TypographySecondary>
          </h3>
        </Container>
      </div>

      <div class="culture-work lg:pb-72 md:pb-36 pb-20">
        <Container>
          <div class="flex lg:flex-row flex-col gap-y-8 justify-between">
            <div class="col-title flex-shrink-0 ">
              <h5 class="text-white sticky top-40 lg:text-[1.75rem] text-xl">
                How We Work?
              </h5>
            </div>
            <div class="col-list work-list w-[66%] max-lg:w-full  flex-shrink-0">
              <ul class="flex flex-col xl:gap-y-[6.25rem] md:gap-y-16 gap-y-12">
                <li class="flex flex-col xl:gap-y-[1.875rem] md:gap-y-4 gap-y-3">
                  <h6 class="lg:text-[2.5rem] md:text-[2rem] text-2xl leading-[150%] font-bold text-white">소통 ∙ Communicate</h6>
                  <p class="lg:text-2xl md:text-base text-sm text-white">
                    생각을 나누면, 새로운 가능성이 열린다. <br>
                    우리는 아이디어와 피드백을 자유롭게 공유하며, 투명한 대화를 통해 더 나은 해답을 찾습니다.
                  </p>
                </li>
                <li class="flex flex-col xl:gap-y-[1.875rem] md:gap-y-4 gap-y-3">
                  <h6 class="lg:text-[2.5rem] md:text-[2rem] text-2xl leading-[150%] font-bold text-white">협력 ∙ Collaborate</h6>
                  <p class="lg:text-2xl md:text-base text-sm text-white">
                    혼자보다 함께일 때, 더 큰 세계가 만들어진다.<br>
                    서로의 전문성을 존중하고 신뢰를 바탕으로 협력하며, 유저에게 최고의 경험을 전달합니다.
                  </p>    
                </li>
                <li class="flex flex-col xl:gap-y-[1.875rem] md:gap-y-4 gap-y-3">
                  <h6 class="lg:text-[2.5rem] md:text-[2rem] text-2xl leading-[150%] font-bold text-white">도전 ∙ Challenge</h6>
                  <p class="lg:text-2xl md:text-base text-sm text-white">
                    새로운 모험은 두려움이 아니라 기회의 시작이다.<br>
                    우리는 익숙한 틀을 깨고 끊임없이 도전하며, 실패조차 학습과 성장의 자산으로 여깁니다.
                  </p>
                </li>
                <li class="flex flex-col xl:gap-y-[1.875rem] md:gap-y-4 gap-y-3">
                  <h6 class="lg:text-[2.5rem] md:text-[2rem] text-2xl leading-[150%] font-bold text-white">확장 ∙ Expand</h6>
                  <p class="lg:text-2xl md:text-base text-sm text-white">
                    경험은 나눌수록 커지고, 세계는 연결될수록 넓어진다.<br>
                    우리는 유저의 경험과 우리의 가능성을 한계 없이 확장하며, 글로벌 무대에서 더 큰 가치를 창출합니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
        </Container>
      </div>
      <div class="lg:pb-72 md:pb-36 pb-16">
        <EffectMarquee class="text-[#9FAEB5] lg:text-[145px] text-7xl" >
          <template #goLeftText >COMMUNICATE COLLABORATE COMMUNICATE COLLABORATE</template>
          <template #goRightText >CHALLENGE EXPAND CHALLENGE EXPAND CHALLENGE</template>
        </EffectMarquee>
      </div>

      <div class="h-screen culture-vision xl:mb-72 mb-40" ref="visionSection">
        <div class="flex justify-center h-screen overflow-hidden">
          <img src="~/assets/images/sub/culture-lets-elementa-bg.png" alt="" class="lg:w-full max-w-none lg:h-[125%] h-[110%]" ref="visionImage">
        </div>
        <Container class="h-screen flex items-center absolute top-0 left-1/2 -translate-x-1/2">
          <div class="vision-content flex flex-col justify-center gap-y-12 md:mt-0 -mt-20" ref="visionContent">
            <div class="line-mask">
              <h4 class="text-white md:text-[2.5rem] text-4xl font-semibold showText" ref="showText">LET’S ELEMENTA</h4>
            </div>
            <div class="break-keep">
              <div class="line-mask">
                <p class="text-white text-base leading-[160%] showText">
                  진정한 즐거움은 창의성과 기술의 깊은 융합에서 시작됩니다.
                </p>
              </div>
              <div class="line-mask">
                <p class="text-white text-base leading-[160%] showText">
                  몰입감 넘치는 경험, 영화같은 시청각 효과까지.
                </p>
              </div>
              <br>
              <div class="line-mask">
                <p class="text-white text-base leading-[160%] showText">
                  우리는 게임이라는 매체로 상상의 한계를 넘어
                </p>
              </div>
              <div class="line-mask">
                <p class="text-white text-base leading-[160%] showText">
                  전 세계 플레이어에게 지속적인 공명을 만들기 위한 도전을 하고 있습니다.
                </p>
              </div>
              <br>
              <div class="line-mask">
                <p class="text-white text-base leading-[160%] showText">
                  Elementa에서 '즐거움'은 부가적인 요소가 아닌,
                </p>
              </div>
              <div class="line-mask">
                <p class="text-white text-base leading-[160%] showText">
                  게임 디자인의 필수적인 존재입니다.
                </p>
              </div>
            </div>
            
          </div>
        </Container>
      </div>

      <div class="culture-interview bg-[url('~/assets/images/sub/culture-interview-bg.png')] bg-[#05060B] no-repeat bg-center bg-cover xl:pt-56 pt-32 relative z-10">
        <EffectGlass class="glass-blur">
          <Container class="xl:pt-[4.5rem] md:pt-10 pt-6">
            <div class="section-heading">
              
              <div class="heading-text flex flex-col md:gap-y-10 gap-y-4">
                <span class="sectionTitle-eng text-white md:text-base text-[3.4vw] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-pulse before:bg-[#00C8EB] md:before:w-3 md:before:h-3 before:w-[0.625rem] before:h-[0.625rem] before:rounded-full pl-5 ">Interview</span>
                <h6 class="text-white md:text-[2.3rem] text-[4.3vw] font-normal">
                  엘리멘타의 다양한 목소리
                </h6>
              </div>
              
            </div>
          </Container>
          <Container class="slider-container">
            <div class="section-content">
              <BlocksSlider3D />
            </div>
          </Container>
        </EffectGlass>
        <div class="culture-interview-cta lg:py-56 py-28 overflow-hidden" ref="interviewCta">
          <Container>
            <div class="cta-text flex flex-col items-center md:gap-y-20 gap-y-12">
              <h4 class="text-white lg:text-[2.8rem] lg:leading-[1.3em] md:text-3xl text-2xl font-semibold text-center">
                <TypographySecondary>
                <span class="inline-block text-inherit font-semibold underline md:underline-offset-[6px] underline-offset-[3px] md:decoration-2 decoration-1 relative md:pt-0 pt-3">
                  새로운 퀘스트
                  <em class="alarm-button md:text-[0.875rem] text-xs flex items-center justify-center not-italic text-white bg-[url('~/assets/images/sub/icon-alarm-button.png')] no-repeat bg-center bg-contain md:w-10 md:h-10 w-7 h-7 rounded-full no-underline absolute right-0 top-0 translate-x-2/4 translate-y-1/4 opacity-0" ref="alarmButton">10</em>
                </span>는 <br class="block md:hidden"/>언제나 예고 없이 시작됩니다.
                </TypographySecondary><br>
                <TypographySecondary>
                  당신의 도전을 우리와 함께 <br class="lg:hidden">미래로 이어가 보지 않으시겠습니까?
                </TypographySecondary>
              </h4>
              <ButtonsBasic href="/join_us" size="lg-wide" color="blue">채용 바로가기</ButtonsBasic>
            </div>
          </Container>
        </div>
      </div>
      
      
    </section>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'sub', 
  })

  import { ref, onMounted, onUnmounted } from 'vue'
  import { useNuxtApp } from '#app'

  const { $gsap, $ScrollTrigger } = useNuxtApp()

  const subSection = ref(null)
  const visionSection = ref(null)
  const visionImage = ref(null)
  const visionContent = ref(null)
  const alarmButton = ref(null)
  const interviewCta = ref(null)

  // wide image area
  const wideImageArea = ref(null);

  onMounted(() => {

    // 와이드 이미지 상단 공백 방지
    $gsap.timeline({
      scrollTrigger: {
        trigger: wideImageArea.value,
        start: 'top 60%',
        end: 'top top',
        scrub: true,
        //markers: true,
        duration: 1,
      },
    }).to(wideImageArea.value, {
      y: '-100px',
      ease: 'none',
    })


    const windowWidth = window.innerWidth;
    const scaleValue = windowWidth / wideImageArea.value.offsetWidth;

    $gsap.timeline({
      scrollTrigger: {
        trigger: subSection.value,
        start: 'top 0',
        end: '+=60%',
        scrub: 1,
        //markers: true,
      },
    }).to(wideImageArea.value, {
      backgroundPositionY: '60%',
      ease: 'none',
      transformOrigin: "center center",
      duration: 1,
      scale: scaleValue,
    })

    const textRevealItems = visionSection.value.querySelectorAll('.showText');
    const textRevealArray = Array.from(textRevealItems);

    // let's elementa animation
    $gsap.timeline({
      scrollTrigger: {
        trigger: visionSection.value,
        start: "top 80%",
        end: "+=100",
        pin: true,
        pinSpacing: false,
        scrub: 6,
        //markers: true,
      },
    })
    .fromTo(visionImage.value,
      {
        clipPath: 'inset(50% 95% 0%)',
      },
      {
        clipPath: 'inset(0%)',
        ease: 'none',
        duration: 2.5,
      }
    )
    .to(visionContent.value, {
      clipPath: "inset(0% 0 0 0)",
      ease: "expo.out",
      duration: 1,
    }, ">"
    )
    .to(textRevealArray, {
      y: '0%',
      duration: 1,
      rotateX: 0,
      stagger: 0.1,
    }, "<")

    $gsap.to(visionImage.value, {
      yPercent: -30,   // 이 값을 조절하면 속도 달라짐
      ease: "none",
      scrollTrigger: {
        trigger: visionSection.value,
        start: "top 50%",
        end: "bottom 20%",
        scrub: true
      }
    });

    // $gsap.timeline({
    //   scrollTrigger: {
    //     trigger: visionContent.value,
    //     start: "top bottom",
    //     //end: 'bottom bottom',
    //     //markers: true,
    //   },
    // })
    // ;


    // interview cta alarm button animation
    $gsap.timeline({
      scrollTrigger: {
        trigger: interviewCta.value,
        start: 'top 80%',
        //scrub: true,
      },
    }).to(alarmButton.value, {
      y: 0,
      opacity: 1,
      ease: 'none',
    }, "+=1.5")
  })

  
</script>

<style scoped>
  .subSection {overflow: unset;}

  .culture-area .wide-image-area {background: url(assets/images/sub/culture-wide-image.png) no-repeat 50% 80% / cover;}

  .vision-content {
    -webkit-clip-path: inset(100% 0 0 0);
    clip-path: inset(100% 0 0 0);
  }

  .vision-content .line-mask {
    overflow: clip;
    clip-path: inset(0 0 .06em 0) !important;
    overflow: unset !important;
    
  }

  .vision-content .line-mask > * {
    transform: translateY(-15%) rotateX(-500deg);
    clip-path: inset(0 0 .06em 0);
    transform-origin: center top;
    will-change: transform;
    perspective: 1000px;

  }

  .culture-interview .glass-content {padding: 4.5rem 0;}
  
  .culture-interview .glass-container {
    width: 103vw;
    margin-left: -1vw;
  }

  .alarm-button {
    box-shadow: 2px 2px 3px 0 rgba(255, 255, 255, 0.40) inset;
  }

  @media (max-width: 767px) {
    .slider-container {
      width: 100%;
    }

    .culture-interview .glass {
      padding: 16px 0;
    }
  }
</style>