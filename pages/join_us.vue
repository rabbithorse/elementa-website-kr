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
          <div class="filter-glass"></div>
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
      <div class="list-recruit pt-[100px] pb-[190px] relative" ref="listRecruit">
        <div class="list-bg absolute" ref="listBg"></div>
        <Container>
          <p class="text-2xl list-header mb-[2.5rem] relative overflow-hidden"><span class="block" ref="upText">100개의 검색결과</span></p>
          <ul class="grid grid-cols-4 gap-x-[1.25rem] gap-y-[5.63rem] list relative">
            <li v-for="(n, index) in 24" :key="index" class="relative">
              <EffectCardHover>
                <div class="filter-glass liquid"></div>
                <a class="cont relative" href="./join_us_detail">
                  <figure>
                    <img src="~/assets/images/sub/join-us-img01.png" alt="대표 이미지">
                  </figure>
                  <div class="text-box">
                    <div class="info">
                      <div class="tit">
                        <ButtonsBadge class="mb-[10px]">D-10</ButtonsBadge>
                        <h4 class="text-white text-xl">개발 PM 담당</h4>
                        <p class="text-white text-[0.88rem]">경력직 ㆍ 경력 2-4년</p>
                      </div>
                      <p class="text-white date text-[0.88rem]">25.10.01~25.10.30</p>
                    </div>
                    <div class="apply absolute">
                      <span class="text-xs text-[var(--main-color)]">100명의 지원자가 보고갔어요!</span>
                      <ButtonsBasic size="sm">지원하러 가기</ButtonsBasic>
                    </div>
                  </div>
                </a>
                <div class="end-bg absolute" :class="{ on: index === 7 }">
                  <div class="inner-circle">
                    <p class="text-[2.5rem] text-white font-bold">채용 마감</p>
                  </div>
                </div>
              </EffectCardHover>
            </li>
          </ul>
        </Container>
      </div>
      <!-- 채용 리스트 -->
    </section>

    <svg style="display: none">
      <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.009 0.009" numOctaves="2" seed="92" result="noise" />
        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
        <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

    <svg style="display: none">
      <filter id="liquid" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" >
        <feTurbulence type="fractalNoise" baseFrequency="0.002 0.002" numOctaves="2" seed="9" result="turbulence" />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="5" result="softMap" />
        <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lighting-color="white" result="specLight" >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
        <feDisplacementMap in="SourceGraphic" in2="softMap" scale="110" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

        
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
  .filter-glass {filter: url(#lg-dist); backdrop-filter: blur(12px); width: 100%; height:100%; position: absolute; left: 0;  bottom: 0; z-index: 1; background: url(~/assets/images/sub/otis-redding.png) repeat;}
  .filter-glass.liquid {filter: url(#liquid); background: none; backdrop-filter: blur(4px);}
</style>