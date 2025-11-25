<template>
  <div>
    <section class="subSection culture-area pt-[130px] relative" ref="subSection">
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
        <p class="text-white text-xl pt-[1.25rem] text-[2.5rem] relative subPageTitle3">
          <TypographySecondary>플레이어의 경험을 넘어, 우리의 문화를 만들어갈 동료를 찾습니다.</TypographySecondary>
        </p>

      </Container>

      <div class="wide-image-container w-full overflow-hidden">
        <Container>
        <!-- wide image -->
        <div class="wide-image-area h-[600px] mt-[228px] relative " ref="wideImageArea"></div> 
        </Container>
      </div>      
        
      

      <div class="culture-slogan pb-72">
        <Container>
          <h3 class="text-white pt-[200px] text-[5.625rem] font-semibold relative text-center">
            <TypographySecondary>Design the Future of Play,</TypographySecondary>
            <TypographySecondary>Create a Culture the World Shares</TypographySecondary>
          </h3>
        </Container>
      </div>

      <div class="culture-work pb-72">
        <Container>
          <div class="flex justify-between">
            <div class="col-title flex-shrink-0 ">
              <h5 class="text-white sticky top-40 text-[1.75rem]">
                How We Work?
              </h5>
            </div>
            <div class="col-list work-list w-[66%] flex-shrink-0">
              <ul class="flex flex-col gap-y-[6.25rem]">
                <li class="flex flex-col gap-y-[1.875rem]">
                  <h6 class="text-[2.5rem] leading-[150%] font-bold text-white">소통 ∙ Communicate</h6>
                  <p class="text-2xl text-white">
                    생각을 나누면, 새로운 가능성이 열린다. <br>
                    우리는 아이디어와 피드백을 자유롭게 공유하며, 투명한 대화를 통해 더 나은 해답을 찾습니다.
                  </p>
                </li>
                <li class="flex flex-col gap-y-[1.875rem]">
                  <h6 class="text-[2.5rem] leading-[150%] font-bold text-white">협력 ∙ Collaborate</h6>
                  <p class="text-2xl text-white">
                    혼자보다 함께일 때, 더 큰 세계가 만들어진다.<br>
                    서로의 전문성을 존중하고 신뢰를 바탕으로 협력하며, 유저에게 최고의 경험을 전달합니다.
                  </p>    
                </li>
                <li class="flex flex-col gap-y-[1.875rem]">
                  <h6 class="text-[2.5rem] leading-[150%] font-bold text-white">도전 ∙ Challenge</h6>
                  <p class="text-2xl text-white">
                    새로운 모험은 두려움이 아니라 기회의 시작이다.<br>
                    우리는 익숙한 틀을 깨고 끊임없이 도전하며, 실패조차 학습과 성장의 자산으로 여깁니다.
                  </p>
                </li>
                <li class="flex flex-col gap-y-[1.875rem]">
                  <h6 class="text-[2.5rem] leading-[150%] font-bold text-white">확장 ∙ Expand</h6>
                  <p class="text-2xl text-white">
                    경험은 나눌수록 커지고, 세계는 연결될수록 넓어진다.<br>
                    우리는 유저의 경험과 우리의 가능성을 한계 없이 확장하며, 글로벌 무대에서 더 큰 가치를 창출합니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
        </Container>
      </div>

      <EffectMarquee class="text-[#9FAEB5] text-[145px]" >
        <template #goLeftText >COMMUNICATE COLLABORATE COMMUNICATE COLLABORATE</template>
        <template #goRightText >CHALLENGE EXPAND CHALLENGE EXPAND CHALLENGE</template>
      </EffectMarquee>
      <!-- //contact info -->
      
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
        markers: true,
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
        start: 'top top',
        end: '+=60%',
        scrub: 1,
        markers: true,
      },
    }).to(wideImageArea.value, {
      backgroundPositionY: '-20%',
      ease: 'none',
      transformOrigin: "center center",
      duration: 1,
      scale: scaleValue,
    })
  })

  
</script>

<style scoped>
  .subSection {overflow: unset;}
</style>