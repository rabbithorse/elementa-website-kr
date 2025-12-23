<template>
  <div>
    <div 
      ref="glassRef"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @wheel="handleWheel"
    >

      <template v-if="!isTouchDevice">
        <!-- 첫 번째 슬라이더 (우 -> 좌) -->
        <div class="slider-wrapper">
          <div ref="slider1Ref" class="slider card-list md:gap-[3.75rem] gap-4 justify-center flow-left md:mb-[4.375rem] flex flex-row">
            
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
        </div>

        <!-- 두 번째 슬라이더 (좌 -> 우) -->
        <div class="slider-wrapper">
          <div ref="slider2Ref" class="slider card-list gap-[3.75rem] justify-center flow-left rows-reverse md:flex flex-row hidden">
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
            <div class="card md:w-[28rem] w-[21rem]" >
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
        </div>
      </template>

      <!-- 모바일 버전: Swiper.js -->
      <template v-else>
        <!-- 첫 번째 Swiper -->
        <div class="slider-wrapper">
          <div class="swiper swiper1">
            <div class="swiper-wrapper ml-4">
              <div class="swiper-slide">
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
              </div>
              <div class="swiper-slide">
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
              </div>
              <div class="swiper-slide">
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
              </div>
              <div class="swiper-slide">
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
              </div>
              <div class="swiper-slide">
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
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  import Swiper from 'swiper';
  import 'swiper/css';

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
    isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }

  const updatePadding = () => {
    const width = window.innerWidth
    if (width >= 1856) { // 3xl
      padding.value = 350
    } else if (width >= 1280) { // xl
      padding.value = 250
    } else if (width >= 1024) { // lg
      padding.value = 120
    } else if (width >= 768) { // md
      padding.value = 40
    } else { // sm
      padding.value = 20
    }
    
    // padding 변경 시 초기 위치도 업데이트
    if (!isTouchDevice.value && slider1Ref.value && slider2Ref.value) {
      $gsap.set(slider1Ref.value, { x: padding.value })
      $gsap.set(slider2Ref.value, { x: -padding.value })
    }
  }

  // 마우스 휠 이벤트 핸들러
  const handleWheel = (e) => {
    if (!isHovered.value || isTouchDevice.value) return

    e.preventDefault()
    e.stopPropagation()
    
    const slider1 = slider1Ref.value
    const slider2 = slider2Ref.value
    const delta = e.deltaY
    const speed = 2.5

    // 스크롤 양 누적
    scrollAmount += delta * speed

    // 슬라이더의 전체 너비와 보이는 영역 계산
    const slider1Width = slider1.scrollWidth
    const viewportWidth = glassRef.value.clientWidth
    
    // 최대 스크롤 거리: 전체 너비 - 화면 너비 + 시작 여백
    const maxScroll = slider1Width - viewportWidth + padding.value + 50

    // 스크롤 범위 제한
    scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll))

    // 첫 번째 슬라이더: 우 -> 좌 
    $gsap.to(slider1, {
      x: padding.value - scrollAmount + 70,
      duration: 0.8,
      ease: 'power1.out',
      overwrite: 'auto'
    })

    // 두 번째 슬라이더: 좌 -> 우
    $gsap.to(slider2, {
      x: -maxScroll + scrollAmount + padding.value - 70,
      duration: 0.8,
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
      x: window.innerWidth - glassRef.value.clientWidth + padding.value,
      duration: 0.8,
      ease: 'power1.out',
      overwrite: 'auto'
    })
    
    $gsap.to(slider2, {
      x: -(slider2.scrollWidth - glassRef.value.clientWidth) -padding.value,
      duration: 0.8,
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
  }

  const handleMouseLeave = () => {
    if (isTouchDevice.value) return
  
    isHovered.value = false
    if (scrollTrigger) {
      scrollTrigger.pin(false)
    }
  }

  onMounted(() => {
    detectTouchDevice()
    updatePadding()

    const glass = glassRef.value

    if (!isTouchDevice.value) {
      const slider1 = slider1Ref.value
      const slider2 = slider2Ref.value

      $gsap.set(slider1, { x: window.innerWidth - glassRef.value.clientWidth + padding.value }) 
      $gsap.set(slider2, { x: -(slider2.scrollWidth - glassRef.value.clientWidth) -padding.value })

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
      swiper1 = new Swiper('.swiper1', {
        slidesPerView: '1.2',
        spaceBetween: 15,
        freeMode: true,
        freeModeMomentum: true,
        freeModeMomentumRatio: 0.5,
        grabCursor: true,
        touchRatio: 1,
        resistance: true,
        resistanceRatio: 0,
        speed: 600,
      })
      
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
</script>