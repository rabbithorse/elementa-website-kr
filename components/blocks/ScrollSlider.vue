<template>
  <div class="card-grid flex flex-col gap-y-18" ref="cardGrid">
    <EffectGlass blur="blurred16" class="card-glass glass-blur relative after:absolute after:inset-y-0 after:right-0 after:w-80 5xl:pt-20 5xl:pb-44 lg:pt-16 lg:pb-20 pt-[52px] pb-[42px] xl:w-auto w-[101vw]">
      <div 
        ref="glassRef"
        @mouseenter="isHovered = true; showCustomCursor()"
        @mouseleave="isHovered = false; hideCustomCursor()"
        @mousemove="moveCursor"
        @wheel="handleWheel"
        class="cursor-none"
      >
        <div v-if="!isTouchDevice">
          <!-- 첫 번째 슬라이더 (우 -> 좌) -->
          <div class="slider-wrapper">
            <div ref="slider1Ref" class="slider card-list md:gap-[3.75rem] gap-4 justify-center flow-left md:mb-[4.375rem] flex flex-row">
              
              <div 
                v-for="(news, index) in newsItems" :key="index" 
                @mouseenter="cursorMode = 'click'"
                @mouseleave="cursorMode = 'scroll'"
                class="card md:w-[28rem] w-[21rem]"
              >
                <a :href="news.link" target="_blank" rel="noopener noreferrer">
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <Temporary type="image" />
                        <img :src="news.src" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          {{ news.title }}
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </a>
              </div>
            </div>
          </div>

          <!-- 두 번째 슬라이더 (좌 -> 우) -->
          <div class="slider-wrapper">
            <div ref="slider2Ref" class="slider card-list gap-[3.75rem] justify-center flow-left rows-reverse xl:flex flex-row hidden">
              <div 
                v-for="(news, index) in newsItems" :key="index" 
                @mouseenter="cursorMode = 'click'"
                @mouseleave="cursorMode = 'scroll'"
                class="card md:w-[28rem] w-[21rem]"
              >
                <a :href="news.link" target="_blank" rel="noopener noreferrer">
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <Temporary type="image" />
                        <img :src="news.src" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          {{ news.title }}
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 모바일 버전: Swiper.js -->
        <div v-else>
          <!-- 첫 번째 Swiper -->
          <div class="slider-wrapper">
            <div class="swiper swiper1">
              <div class="swiper-wrapper">
                <div 
                  v-for="(news, index) in newsItems" :key="index"
                  class="swiper-slide card">
                  <a :href="news.link" target="_blank" rel="noopener noreferrer" class="card-link">
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <Temporary type="image" />
                        <img :src="news.src" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          {{ news.title }}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Teleport to="body">
        <div 
          v-if="cursorVisible"
          class="custom-cursor flex align-center justify-center"
          :class="`mode-${cursorMode}`"
          :style="{ left: cursorX + 'px', top: cursorY + 'px', transform: 'translate(-50%, -50%)' }"
        >
          <img src="~assets/images/main/scroll-cursor-bg.png" alt="스크롤 하세요">
          <span 
            :class="[cursorMode === 'click' ? 'canClick' : '']"
            class="text-[white] text-[16px] font-bold font-paperlogy absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Scroll
          </span>
        </div>
      </Teleport>
    </EffectGlass> 
  </div>  
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  const { $gsap, $ScrollTrigger, $lenis } = useNuxtApp()
  import Swiper from 'swiper';
  import 'swiper/css';

  import newsThumb01 from '@/assets/images/main/newsroom-thumb01.png';
  import newsThumb02 from '@/assets/images/main/newsroom-thumb02.png';
  import newsThumb03 from '@/assets/images/main/newsroom-thumb03.png';
  import newsThumb04 from '@/assets/images/main/newsroom-thumb04.png';
  import newsThumb05 from '@/assets/images/main/newsroom-thumb05.png';
  import newsThumb06 from '@/assets/images/main/newsroom-thumb06.png';

  const newsItems = [
    { title: "'실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'", src: newsThumb01, link: "https://naver.com" },
    { title: "UE5로 만든 싱가포르 서브컬처 기대작, 실버 팰리스 공개", src: newsThumb02, link: "https://developer.mozilla.org/ko/" },
    { title: "엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 게임...", src: newsThumb03, link: "https://www.figma.com" },
    { title: "엘리멘타, 신작 실버 팰리스 첫 공개", src: newsThumb04, link: "https://www.google.com/" },
    { title: "엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 공개…글로벌 시장 공략", src: newsThumb05, link: "https://chatgpt.com/" },
    { title: "'실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'", src: newsThumb06, link: "https://www.google.com/" },
  ]

  const cardGrid = ref(null)
  const glassRef = ref(null)
  const slider1Ref = ref(null)
  const slider2Ref = ref(null)
  const isHovered = ref(false)
  const padding = ref(50)
  const isTouchDevice = ref(false)
  let scrollTrigger = null
  let scrollAmount = 0
  let swiper1 = null

  const detectTouchDevice = () => {
    isTouchDevice.value = window.matchMedia('(pointer: coarse)').matches;
  }

  const outerSpace = computed(() => {
    const viewportWidth = window.innerWidth
    const containerWidth = Math.min(1856, viewportWidth * 0.97)
    return (viewportWidth - containerWidth) / 2
  })

  const updatePadding = () => {
    const width = window.innerWidth

    if (width >= 1856) {
      padding.value = 350
    } else if (width >= 1280) {
      padding.value = 250
    } else {
      padding.value = 20
    }

    if (!isTouchDevice.value) {
      $gsap.set(slider1Ref.value, { x: padding.value })
      $gsap.set(slider2Ref.value, { x: -padding.value })
    }
  }

  // 마우스 휠 이벤트 핸들러
  const handleWheel = (e) => {
    if (isTouchDevice.value) return
    if (!isHovered.value) return

    e.preventDefault()
    e.stopPropagation()
    
    const slider1 = slider1Ref.value
    const slider2 = slider2Ref.value
    const delta = e.deltaY
    const speed = 2

    // 스크롤 양 누적
    scrollAmount += delta * speed

    //console.log('scrollAmount:', scrollAmount);

    // 슬라이더의 전체 너비와 보이는 영역 계산
    const slider1Width = slider1.scrollWidth
    const cardGridInner = cardGrid.value.clientWidth
    const cardGridWrap = cardGridInner + outerSpace.value

    console.log(cardGridWrap);
    
    
    // 최대 스크롤 거리: 전체 너비 - 화면 너비 + 시작 여백
    const maxScroll = slider1Width - cardGridInner + padding.value + 40

    // 스크롤 범위 제한
    scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll));

    // 첫 번째 슬라이더: 우 -> 좌 
    $gsap.to(slider1, {
      x: padding.value - scrollAmount,
      duration: 1.2,
      ease: 'power1.out',
      overwrite: 'auto'
    })

    // 두 번째 슬라이더: 좌 -> 우
    $gsap.to(slider2, {
      x: -maxScroll + scrollAmount + padding.value,
      duration: 1.2,
      ease: 'power1.out',
      overwrite: 'auto'
    })
  }

  // 마우스 업 핸들러
  const handleMouseUp = () => {
    if (!isHovered.value || isTouchDevice.value) return
    
    const slider1 = slider1Ref.value
    const slider2 = slider2Ref.value
    
    // 초기 위치로 복귀
    $gsap.to(slider1, {
      x: padding.value,
      duration: 1.2,
      ease: 'power1.out',
      overwrite: 'auto'
    })
    
    $gsap.to(slider2, {
      x: -padding.value,
      duration: 1.2,
      ease: 'power1.out',
      overwrite: 'auto'
    })
    
    // 스크롤 양도 초기화
    scrollAmount = 0
  }

  // 마우스 진입/이탈 핸들러
  const handleMouseEnter = () => {
    if (isTouchDevice.value) return
    
    isHovered.value = true
    if (scrollTrigger) {
      scrollTrigger.pin(true)
    }

    if (isTouchDevice.value) return
  }

  const handleMouseLeave = () => {
    if (isTouchDevice.value) return
  
    isHovered.value = false
    if (scrollTrigger) {
      scrollTrigger.pin(false)
    }

    if (isTouchDevice.value) return
  }

  onMounted(() => {
    detectTouchDevice()
    updatePadding()

    const glass = glassRef.value

    if (!isTouchDevice.value) {
      const slider1 = slider1Ref.value
      const slider2 = slider2Ref.value
      const cardGridInner = cardGrid.value.clientWidth
      const cardGridWrap = cardGridInner + outerSpace.value

      $gsap.set(slider1, { x: padding.value }) 
      $gsap.set(slider2, { x: -(slider2.scrollWidth - cardGridWrap) -50 })

      // 스크롤 트리거 설정 - 초기에는 pin 비활성화
      scrollTrigger = $ScrollTrigger.create({
        trigger: glass,
        start: 'top top',
        end: '+=300%',
        pin: false,
        pinSpacing: true,
        anticipatePin: 1
      })

      // 휠 이벤트 리스너 추가
      glass.addEventListener('wheel', handleWheel, { passive: false })
    } else {
      nextTick(() => {
        const swiperEl = document.querySelector('.swiper1')
        if (!swiperEl) return

        glass.style.touchAction = 'pan-x pan-y'

        let startX = 0
        let startY = 0
        let swiperInstance = null
        let disabledByVertical = false
        let isDragging = false

        swiperInstance = new Swiper('.swiper1', {
          slidesPerView: '1.2',
          spaceBetween: 15,
          breakpoints: {
            640: { slidesPerView: 1.6 },
            1024: { slidesPerView: 2 },
          },
          grabCursor: true,
          simulateTouch: true,
          allowTouchMove: true,
          threshold: 10,
          preventClicks: true,
          preventClicksPropagation: true,
          touchStartPreventDefault: false,
          nested: true,
          slidesOffsetBefore: padding.value,
          slidesOffsetAfter: padding.value,
          speed: 600,
          on: {
            touchMove() {
              isDragging = true
            },
            sliderMove() {
              isDragging = true
            },
            touchEnd() {
              setTimeout(() => {
                isDragging = false
              }, 0)
            },
          },
        })

        document.querySelectorAll('.card-link').forEach((link) => {
          link.addEventListener('click', (e) => {
            if (isDragging) {
              e.preventDefault()
              e.stopPropagation()
            }
          })

          link.addEventListener('touchend', (e) => {
            if (isDragging) {
              e.preventDefault()
            }
          })
        })

        swiperEl.addEventListener(
          'touchstart',
          (e) => {
            const t = e.touches[0]
            startX = t.clientX
            startY = t.clientY
            disabledByVertical = false
          },
          { passive: true }
        )

        swiperEl.addEventListener(
          'touchmove',
          (e) => {
            if (!swiperInstance || disabledByVertical) return

            const t = e.touches[0]
            const diffX = Math.abs(t.clientX - startX)
            const diffY = Math.abs(t.clientY - startY)

            if (diffY > diffX && diffY > 6) {
              swiperInstance.allowTouchMove = false
              disabledByVertical = true
            }
          },
          { passive: true }
        )

        swiperEl.addEventListener(
          'touchend',
          () => {
            if (swiperInstance) {
              swiperInstance.allowTouchMove = true
            }
          },
          { passive: true }
        )
      })
    }

    window.addEventListener('resize', updatePadding)
  })

  onUnmounted(() => {
    const glass = glassRef.value
  
    if (scrollTrigger) {
      scrollTrigger.kill()
    }
    
    if (glass && !isTouchDevice.value) {
      glass.removeEventListener('wheel', handleWheel)
    }

    if (swiper1) {
      swiper1.destroy()
    }

    
    window.removeEventListener('resize', updatePadding)
  })

  // Cursor
  const cursorVisible = ref(false);
  const cursorMode = ref('scroll');
  const cursorX = ref(0);
  const cursorY = ref(0);

  const showCustomCursor = () => {
    if (isTouchDevice.value) return
    cursorVisible.value = true;
    console.log(`showCustomerCursor: ${cursorVisible.value}`);
    
  };

  const hideCustomCursor = () => {
    cursorVisible.value = false;
  };

  const moveCursor = (e) => {
    cursorX.value = e.clientX;
    cursorY.value = e.clientY;
  };
</script>

<style>
  .card .card-wrap {
    cursor: none;
  }

  .custom-cursor {
    position: fixed !important;
    pointer-events: none;
    z-index: 9999;
    width: 80px;
    height: 80px;
  }

  .custom-cursor span.canClick {
    display: flex; 
    align-items: center;
    justify-content: center;
  }
  
  .custom-cursor span.canClick::after {
    content: "»";
    display: inline-block;
    font-size: 20px;
    line-height: 1;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    .custom-cursor {
      display: none;
    }
  }
</style>