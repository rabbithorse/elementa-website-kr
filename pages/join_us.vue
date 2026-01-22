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
          <EffectGlassLiquid />
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
            <!-- <li v-for="(n, index) in 24" :key="index" class="relative"> -->
            <!-- [무한스크롤] v-for 변경 및 변수 설정 -->
            <li v-for="(item, index) in list" :key="item.id" class="relative" >
              <EffectCardHover filter="distort" blur="blurred4">
                <!-- <div class="filter-glass"></div> -->
                <!-- <a class="cont relative" :href="item.url"> -->
                <NuxtLink class="cont relative" :to="item.url" >
                  <figure class="relative">
                    <Temporary type="image" />
                    <!-- <img src="~/assets/images/sub/join-us-img01.png" alt="대표 이미지"> -->
                    <img :src="item.image" alt="대표 이미지" style="width: 449px; height: 225px;">
                  </figure>
                  <div class="text-box">
                    <div class="info">
                      <div class="tit">
                        <ButtonsBadge class="mb-[10px]">{{ item.dday }}</ButtonsBadge><!-- D-day 표시 -->
                        <h4 class="text-white lg:text-xl text-base">{{ item.title }}</h4><!-- 채용 제목 -->
                        <p class="text-white lg:text-[0.88rem] text-xs">{{ item.desc }}</p><!-- 채용 설명 -->
                      </div>
                      <p class="text-white date lg:text-[0.88rem] text-xs">{{ item.date }}</p><!-- 채용 기간 -->
                    </div>
                    <div class="apply absolute">
                      <span class="text-xs text-[var(--main-color)]">{{ item.applicants }}</span><!-- 지원자 수 표시 -->
                      <ButtonsBasic size="sm">지원하러 가기</ButtonsBasic>
                    </div>
                  </div>
                </NuxtLink>
                <!-- 채용 마감 시 보임 -->
                <div class="circle-filter absolute" :class="{ on: item.recruitEnd }"></div>
                <div class="end-bg absolute" :class="{ on: item.recruitEnd }">
                  <div class="inner-circle">
                    <p class="lg:text-[2.5rem] text-[1.88rem] text-white font-bold">채용 마감</p>
                  </div>
                </div>
                <!-- //채용 마감 시 보임 -->
              </EffectCardHover>
            </li>
          </ul>

          <!-- 검색 결과 없음 화면 -->
          <!-- [무한스크롤] v-if 변경 -->
          <div v-if="!list.length && !isLoading" class="no-result  filter-box text-white flex justify-center items-center relative lg:h-[500px] h-[400px]">
            <div class="filter-noise"></div>
            <EffectGlassLiquid />
            <div class="filter-shine"></div>
            <p class="lg:text-[1.75rem] text-lg text-center relative z-10 break-keep leading-[1.5]">앗, 찾으시는 결과가 없네요. <br>혹시 다른 키워드로 검색해보는 건 어떠세요?</p>
          </div>
          <!-- //검색 결과 없음 화면 -->

          <!-- [무한스크롤] 바닥 감지용 -->
          <div ref="observerEl" class="h-[1px]"></div>
          
        </Container>
      </div>
      <!-- //채용 리스트 -->

    </section>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'sub', 
  })

  import Container from '~/components/Container.vue';
  import { ref, onMounted, onBeforeUnmount } from 'vue'
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

  /* [무한스크롤] list 데이터 */
  const list = ref([])
  const page = ref(1)
  const pageSize = 24
  const isLoading = ref(false)
  const hasMore = ref(true)

  const fetchList = async () => {
    if (isLoading.value || !hasMore.value) return;

    isLoading.value = true;

    // 실제 API로 변경 필요 함.
    // await $fetch(API_ENDPOINT, {
    //       params: {
    //         limit: pageSize,
    //         skip: (page.value - 1) * pageSize
    //       })

    // 임시 데이터 생성
    await new Promise(r => setTimeout(r, 800));

    const newItems = Array.from({ length: pageSize }, (_, i) => ({
      id: (page.value - 1) * pageSize + i,
      image: '/_nuxt/assets/images/sub/join-us-img01.png', // 임시 이미지 URL
      url: `/join_us_detail/${(page.value - 1) * pageSize + i}`, // 임시 URL
      dday: `D-${Math.floor(Math.random() * 10) + 1}`, // 임시 D-day
      title: `채용 제목 ${(page.value - 1) * pageSize + i}`, // 임시 제목
      desc: `채용 설명 ${(page.value - 1) * pageSize + i}`, // 임시 설명
      applicants: `${Math.floor(Math.random() * 100)}명의 지원자가 보고갔어요!`, // 임시 지원자 수
      recruitEnd: Math.random() < 0.5, // 임시로 채용 마감 여부 설정
      date: '25.10.01~25.10.30' // 임시 채용 기간
    }))

    if (newItems.length < pageSize) {
      hasMore.value = false;
    }

    list.value.push(...newItems);
    page.value++;

    isLoading.value = false;

    nextTick(() => {
      initCardAnimation();
    })
  }
  
  // [무한스크롤] GSAP 애니메이션 초기화
  const initCardAnimation = () => {
    const cardItems = document.querySelectorAll('.list-recruit .list > li')
    if (!cardItems.length) return

    cardItems.forEach((cardEl) => {
      if (cardEl.dataset.animated) return
      cardEl.dataset.animated = 'true'

      $gsap.fromTo(
        cardEl,
        { y: '30%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardEl,
            start: 'top 90%',
            once: true
          }
        }
      )
    })
  }

  const observerEl = ref(null);
  let observer;

  onMounted(() => {
    // [무한스크롤] START
    fetchList();
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchList();
        }
      },
      { rootMargin: '200px' } // 미리 로딩
    );

    if (observerEl.value) {
      observer.observe(observerEl.value);
    }
    // [무한스크롤] END

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

  // [무한스크롤] 언마운트
  onBeforeUnmount(() => {
    observer?.disconnect()
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