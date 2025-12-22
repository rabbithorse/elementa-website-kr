<template>
  <div>
    <section class="subSection lg:pt-[130px] pt-[95px] relative" ref="subSection">
      <div class="path-visual absolute" ref="pathVisual">
        <div class="inner relative">
          <div class="big shape" ref="shapeBig"></div>
          <div class="small shape absolute lg:opacity-100 opacity-40" ref="shapeSmall"></div>
        </div>
      </div>
      <Container>
        <h2 class="leading-1 font-bold text-white subPageTitle relative">
          <TypographyPrimary>
            J
          </TypographyPrimary>
          <TypographyPrimary>
            o
          </TypographyPrimary>
          <TypographyPrimary>
            i
          </TypographyPrimary>
          <TypographyPrimary>
            n
          </TypographyPrimary>
          <TypographyPrimary>
            U
          </TypographyPrimary>
          <TypographyPrimary>
            s
          </TypographyPrimary>
        </h2>
        <h3 class="text-white font-semibold relative subPageTitle2">
          <TypographySecondary>우리가 만드는 오늘, 내일의 기록</TypographySecondary>
        </h3>
        <p class="text-white relative subPageTitle3">
          <TypographySecondary>게임 출시, 업데이트, 파트너십, 사회적 활동 등 <br class="lg:hidden block">다양한 소식을 투명하고 <br class="lg:block hidden">생생하게 전달하며, <br class="lg:hidden block">플레이어와 세계를 하나로 연결합니다.</TypographySecondary>
        </p>

        <client-only>
        <div class="filter-box text-white 2xl:mt-[5.5rem] mt-[3.75rem] flex lg:flex-row flex-col 2xl:gap-10 gap-[0.94rem] items-end relative">
          <div class="filter-noise"></div>
          <EffectGlassTest />
          <div class="filter-shine"></div>
          <BlocksCustomSelect class="z-30"
          label="직군"
          :options="['전체','직군1','직군2']" />

          <BlocksCustomSelect class="z-20"
            label="고용형태"
            :options="['전체','정규직','계약직']" />

          <BlocksCustomSelect class="z-10"
            label="채용상태"
            :options="['전체','채용중','마감']" />
            
          <div class="flex gap-[10px] grow sch-box lg:w-auto w-full relative">
            <input type="text" placeholder="검색어를 입력해주세요." class="input-basic relative lg:text-lg text-[0.88rem]">
            <ButtonsBasic size="lg" color="sch" role="search"><i class="ico ico-sch bg-white"></i></ButtonsBasic>
          </div>
        </div>
        </client-only>
      </Container>

      <!-- 채용 리스트 -->
      <div class="list-recruit lg:pt-[100px] pt-[30px] lg:pb-[190px] pb-[60px] relative" ref="listRecruit">
        <div class="list-bg absolute" ref="listBg"></div>
        <Container>
          <p class="lg:text-2xl text-sm list-header lg:mb-[2.5rem] mb-[1.25rem] relative overflow-hidden"><span class="block" ref="upText">100개의 검색결과</span></p>
          <ul class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-[1.25rem] lg:gap-y-[5.63rem] gap-y-[1.25rem] list relative">
            <li v-for="(n, index) in 24" :key="index" class="relative">
              <EffectCardHover filter="distort" blur="blurred4">
                <!-- <div class="filter-glass"></div> -->
                <a class="cont relative" href="./join_us_detail">
                  <figure>
                    <img src="~/assets/images/sub/join-us-img01.png" alt="대표 이미지">
                  </figure>
                  <div class="text-box">
                    <div class="info">
                      <div class="tit">
                        <ButtonsBadge class="mb-[10px]">D-10</ButtonsBadge>
                        <h4 class="text-white lg:text-xl text-base">개발 PM 담당</h4>
                        <p class="text-white lg:text-[0.88rem] text-xs">경력직 ㆍ 경력 2-4년</p>
                      </div>
                      <p class="text-white date lg:text-[0.88rem] text-xs">25.10.01~25.10.30</p>
                    </div>
                    <div class="apply absolute">
                      <span class="text-xs text-[var(--main-color)]">100명의 지원자가 보고갔어요!</span>
                      <ButtonsBasic size="sm">지원하러 가기</ButtonsBasic>
                    </div>
                  </div>
                </a>
                <!-- 채용 마감 시 보임 -->
                <div class="circle-filter absolute" :class="{ on: index === 7 }"></div>
                <div class="end-bg absolute" :class="{ on: index === 7 }">
                  <div class="inner-circle">
                    <p class="lg:text-[2.5rem] text-[1.88rem] text-white font-bold">채용 마감</p>
                  </div>
                </div>
                <!-- //채용 마감 시 보임 -->
              </EffectCardHover>
            </li>
          </ul>
        </Container>
      </div>
      <!-- 채용 리스트 -->
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

  // Visual 도형
  const shapeBig = ref(null)
  const shapeSmall = ref(null)
  const pathVisual = ref(null)

  // 텍스트 애니메이션
  const upText = ref(null)

  // 채용 리스트 배경 고정
  const listRecruit = ref(null);
  const listBg = ref(null);

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

    // 리스트 고정 배경
    $gsap.timeline({
      scrollTrigger: {
        trigger: listRecruit.value,
        start: 'top+=175 top',
        end: 'bottom-=190 bottom',
        scrub: 2,
        //markers: true,
        pin: listBg.value,
        pinspacing: false
      },
    })

    // 텍스트 애니메이션
    $gsap.timeline({
      scrollTrigger: {
        trigger: upText.value,
        start: 'top 75%',
        end: 'bottom 75%',
        // markers: true
      }
    }).fromTo(upText.value, 
      { y: '100%', opacity: 0 }, 
      { y: '0%', opacity: 1, duration: 1, ease: 'power2.out'   
    })

    // 카드 스크롤 애니메이션
    const cardItem = document.querySelectorAll('.list-recruit .list > li');

    // 카드 스크롤 애니메이션
    cardItem.forEach((cardEl) => {
      $gsap.timeline({
        scrollTrigger: {
          trigger: cardEl,
          start: 'top 90%',
          end: 'top 90%',
          // markers: true
      }
      }).fromTo(cardEl, 
        { y: '30%', opacity: 0 }, 
        { y: '0%', opacity: 1, duration: 1.5, ease: 'ease'   
      })
    })
  })

  
</script>

<style scoped>
  .filter-glass {filter: url(#glass-distortion); background: none; backdrop-filter: blur(6px); width: 100%; height:100%; position: absolute; left: 0;  bottom: 0; z-index: 1;}
  .circle-filter{visibility: hidden; opacity: 0; filter: url(#glass-distortion); backdrop-filter: blur(3px); z-index: 1; width: 265px; height: 265px;  left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 50%;}
  .circle-filter.on{visibility: visible; opacity: 1;}

  @media (min-width: 768px) and (max-width: 1023px) {
    .circle-filter {width: 217px; height: 217px;}
  }
  
  @media (max-width: 767px) {
    .circle-filter {width: 217px; height: 217px;}
  }
</style>