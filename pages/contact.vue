<template>
  <div>
    <section class="subSection contact-area lg:pt-[130px] pt-[95px] relative" ref="subSection">
      <div class="path-visual absolute" ref="pathVisual">
        <div class="inner relative">
          <div class="big shape" ref="shapeBig"></div>
          <div class="small shape absolute lg:opacity-100 opacity-40" ref="shapeSmall"></div>
        </div>
      </div>
      <Container>
        <h2 class="leading-1 font-bold text-white subPageTitle relative">
          <TypographyPrimary>
            C
          </TypographyPrimary>
          <TypographyPrimary>
            o
          </TypographyPrimary>
          <TypographyPrimary>
            n
          </TypographyPrimary>
          <TypographyPrimary>
            t
          </TypographyPrimary>
          <TypographyPrimary>
            a
          </TypographyPrimary>
          <TypographyPrimary>
            c
          </TypographyPrimary>
          <TypographyPrimary>
            t
          </TypographyPrimary>
        </h2>
        <h3 class="text-white font-semibold relative subPageTitle2">
          <TypographySecondary>당신의 목소리가 만드는 내일</TypographySecondary>
        </h3>
        <p class="text-white relative subPageTitle3">
          <TypographySecondary>플레이어, 파트너, 창작자 모두의 <br class="lg:hidden block">이야기를 경청하며, <br>함께 미래를 설계합니다.</TypographySecondary>
        </p>

        <!-- wide image -->
        <div class="wide-image-area xl:h-[600px] lg:h-[450px] h-[300px] 2xl:mt-[228px] xl:mt-[148px] mt-[3.5rem] relative" ref="wideImageArea"></div>
        <!-- //wide image -->
      </Container>

      <!-- contact info -->
      <div class="xl:mt-[50px] lg:mt-[100px] mt-[50px] lg:pb-[150px] pb-[60px] contact-info">
        <Container>
          <div class="contact-info-inner flex lg:flex-row flex-col 2xl:gap-[175px] xl:gap-[100px] gap-[50px] items-stretch">
            <div class="info flex flex-col xl:gap-[6.25rem] lg:gap-[3.25rem] gap-[1.88rem] w-full">
              <h3 class="text-white xl:text-[2rem] lg:text-[1.5rem] text-[1.25rem] xl:pl-[4.63rem] px-[2.63rem] xl:pt-[5.25rem] pt-[3.25rem] relative deco-text break-keep">문의, 협력, 제안까지. <br>우리의 여정을 함께할 대화의 문은 언제나 열려 있습니다.</h3>
              <ul class="grow grid grid-rows-3">
                <li class="text-white xl:py-[3.75rem] py-[1.88rem] flex md:flex-row flex-col gap-[20px] justify-between">
                  <p class="font-semibold md:text-2xl text-xl break-keep">사업제휴 및 업무</p>
                  <ul class="flex flex-col md:items-end items-start gap-[7px]">
                    <li class="md:text-lg text-base flex gap-[10px] items-center"><i class="profile-icon"></i>담당자&nbsp;&nbsp;이재현</li>
                    <li class="md:text-lg text-base flex gap-[10px] items-center"><i class="mail-icon"></i>hello@elementakorea.com</li>
                    <li class="md:text-lg text-base flex gap-[10px] items-center"><i class="phone-icon"></i>02-1234-5678</li>
                  </ul>
                </li>
                <li class="text-white xl:py-[3.75rem] py-[1.88rem] flex md:flex-row flex-col gap-[20px] justify-between">
                  <p class="font-semibold md:text-2xl text-xl break-keep">채용문의</p>
                  <ul class="flex flex-col md:items-end items-start gap-[7px]">
                    <li class="md:text-lg text-base flex gap-[10px] items-center"><i class="profile-icon"></i>담당자&nbsp;&nbsp;이재현</li>
                    <li class="md:text-lg text-base flex gap-[10px] items-center"><i class="mail-icon"></i>hello@elementakorea.com</li>
                    <li class="md:text-lg text-base flex gap-[10px] items-center"><i class="phone-icon"></i>02-1234-5678</li>
                  </ul>
                </li>
                <li class="text-white xl:py-[3.75rem] py-[1.88rem] flex md:flex-row flex-col gap-[20px] justify-between">
                  <p class="font-semibold md:text-2xl text-xl break-keep">기타문의</p>
                  <ul class="flex flex-col md:items-end items-start gap-[7px]">
                    <li class="md:text-lg text-base flex gap-[10px] items-center"><i class="profile-icon"></i>담당자&nbsp;&nbsp;이재현</li>
                    <li class="md:text-lg text-base flex gap-[10px] items-center"><i class="mail-icon"></i>hello@elementakorea.com</li>
                    <li class="md:text-lg text-base flex gap-[10px] items-center"><i class="phone-icon"></i>02-1234-5678</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="map grow w-full">
              <div class="map-inner w-full lg:h-full h-[300px] overflow-hidden rounded-[5px]">
                <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3691962633593!2d127.02562367640358!3d37.49920962798501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca159c890cafd%3A0xfbe99f7032ea37a6!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsl63sgrzrj5kgODE5!5e0!3m2!1sko!2skr!4v1762931840726!5m2!1sko!2skr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <!-- //contact info -->
      
    </section>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'sub', 
  })

  import Container from '~/components/Container.vue';
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useNuxtApp } from '#app'

  const { $gsap, $ScrollTrigger } = useNuxtApp()

  const subSection = ref(null)
  const shapeBig = ref(null)
  const shapeSmall = ref(null)
  const pathVisual = ref(null)

  // wide image area
  const wideImageArea = ref(null);

  onMounted(() => {
    // Visual Parallax Effect

    // gsap 미디어 쿼리
    $ScrollTrigger.matchMedia({

      // 1024 이상
      "(min-width: 1024px)": () => {
        // 큰 토형
        $gsap.timeline({
          scrollTrigger: {
            trigger: shapeBig.value,
            start: 'top top',
            end: 'center top',
            scrub: true,
            // markers: true
          },
        }).to(shapeBig.value, {
          backgroundPositionY: '-100px',
          ease: 'none',
        })

        // 작은 도형
        $gsap.timeline({
          scrollTrigger: {
            trigger: shapeSmall.value,
            start: '10% 20%',
            end: '50% top',
            scrub: true,
            //markers: true
          },
        }).to(shapeSmall.value, {
          backgroundPositionY: '-80px',
          ease: 'none',
        })
      },

      // 1023 이하
      "(max-width: 1023px)": () => {
        // 큰 토형
        $gsap.timeline({
          scrollTrigger: {
            trigger: shapeBig.value,
            start: 'top top',
            end: 'center top',
            scrub: true,
            // markers: true
          },
        }).to(shapeBig.value, {
          backgroundPositionY: '-40px',
          ease: 'none',
        })

        // 작은 도형
        $gsap.timeline({
          scrollTrigger: {
            trigger: shapeSmall.value,
            start: '10% 20%',
            end: '50% top',
            scrub: true,
            //markers: true
          },
        }).to(shapeSmall.value, {
          backgroundPositionY: '-30px',
          ease: 'none',
        })
      },
    })
    // gsap 미디어 쿼리

    // 와이드 이미지 상단 공백 방지
    $ScrollTrigger.matchMedia({
      "(min-width: 1280px)": () => {
        $gsap.timeline({
          scrollTrigger: {
            trigger: wideImageArea.value,
            start: 'top 80%',
            end: 'top top',
            scrub: true,
            //markers: true,
            duration: 2,
          },
        }).to(wideImageArea.value, {
          y: '-100px',
          ease: 'none',
        })
      }
    });

    $gsap.timeline({
      scrollTrigger: {
        trigger: subSection.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        //markers: true,
      },
    }).to(wideImageArea.value, {
     backgroundPositionY: '-20%',
      ease: 'none',
    })
  })

  
</script>

<style scoped>
  
</style>