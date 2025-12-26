<template>
  <div>
      <section class="subSection media-area lg:pt-[130px] pt-[95px] relative" ref="subSection">
        <div class="path-visual absolute" ref="pathVisual">
          <div class="inner relative">
            <div class="big shape" ref="shapeBig"></div>
            <div class="small shape absolute lg:opacity-100 opacity-40" ref="shapeSmall"></div>
          </div>
        </div>
        <!-- slider wrap -->
        <div class="media-slider-wrap relative">
          <div class="dimmed-yellow absolute"></div>
          <div class="dimmed-glass absolute"></div>
          <Container>
            <h2 class="leading-1 font-bold text-white subPageTitle relative">
            <TypographyPrimary>
              N
            </TypographyPrimary>
            <TypographyPrimary>
              e
            </TypographyPrimary>
            <TypographyPrimary>
              w
            </TypographyPrimary>
            <TypographyPrimary>
              s
            </TypographyPrimary>
            <TypographyPrimary>
              r
            </TypographyPrimary>
            <TypographyPrimary>
              o
            </TypographyPrimary>
            <TypographyPrimary>
              o
            </TypographyPrimary>
            <TypographyPrimary>
              m
            </TypographyPrimary>
            </h2>
            <h3 class="text-white font-semibold relative subPageTitle2">
              <TypographySecondary>우리가 만드는 오늘, 내일의 기록</TypographySecondary>
            </h3>
            <p class="text-white relative subPageTitle3">
              <TypographySecondary>게임 출시, 업데이트, 파트너십, 사회적 활동 등 <br class="lg:hidden block">다양한 소식을 투명하고 <br class="lg:block hidden">생생하게 전달하며, <br class="lg:hidden block">플레이어와 세계를 하나로 연결합니다.</TypographySecondary>
            </p>
          </Container>
          <!-- slider -->
          <div
          class="media-slider relative 2xl:mt-[5.5rem] mt-[3.75rem]"
          :class="{ 'swiper-hidden': !isSwiperReady }"
          >
            <div class="float-box absolute"></div>
            <Swiper
              :modules="[Navigation, Autoplay]"
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }"
              :slides-per-view="2"
              :centeredSlides="true"
              :space-between="10"
              :loop="true"
              :speed="1500"
              :simulateTouch="true"
              :touchStartPreventDefault="false"
              :grabCursor="true"
              :loopedSlides="12"
              :slideToClickedSlide="true"
              :allowTouchMove="true"
              :breakpoints="{
                '1280' : {
                  slidesPerView: 4,
                  spaceBetween: 20,
                  allowTouchMove: false
                },
                '768' : {
                  slidesPerView: 4,
                  spaceBetween: 10,
                  allowTouchMove: true
                },
              }"
              @slideChange="onSlideChange"
              @swiper="onSwiper"
            >
              <swiper-slide data-text="'실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://news.nate.com/view/20251219n15148" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide01.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 2번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://www.g-enews.com/article/ICT/2025/08/202508071152291640c5fa75ef86_1" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide02.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 3번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://news.nate.com/view/20251219n15148" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide03.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 4번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://www.g-enews.com/article/ICT/2025/08/202508071152291640c5fa75ef86_1" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide04.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 5번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://news.nate.com/view/20251219n15148" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide05.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 6번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://www.g-enews.com/article/ICT/2025/08/202508071152291640c5fa75ef86_1" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide06.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 7번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://news.nate.com/view/20251219n15148" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide01.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 8번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://www.g-enews.com/article/ICT/2025/08/202508071152291640c5fa75ef86_1" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide02.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 9번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://news.nate.com/view/20251219n15148" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide03.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 10번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://www.g-enews.com/article/ICT/2025/08/202508071152291640c5fa75ef86_1" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide04.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 11번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://news.nate.com/view/20251219n15148" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide05.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 12번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://www.g-enews.com/article/ICT/2025/08/202508071152291640c5fa75ef86_1" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide06.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 12번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://news.nate.com/view/20251219n15148" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide06.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
              <swiper-slide data-text="뉴스룸 13번 슬라이드 설명 텍스트">
                <div class="swiper-image">
                  <EffectCardHover>
                  <a class="image" href="https://www.g-enews.com/article/ICT/2025/08/202508071152291640c5fa75ef86_1" target="_blank">
                    <img src="~/assets/images/sub/newsroom-slide06.png" alt="">
                  </a>
                  </EffectCardHover>
                </div>
              </swiper-slide>
            </Swiper>
          </div>
          <!-- //slider -->
          <div class="slider-text relative z-20">
              <p class="text-white text-center xl:text-[1.63rem] lg:text-base text-sm font-sm overflow-hidden text-ellipsis w-[80%] whitespace-nowrap mx-auto">{{ currentText }}</p>
          </div>
        </div>
        <!-- //slider wrap -->
        
        <!-- 뉴스 리스트 -->
        <div class="media-list lg:pt-[140px] pt-[70px] lg:pb-[270px] pb-[200px] relative">
          <Container>
            <div class="list-sch-bar flex lg:gap-[20px] gap-[10px]">
              <input type="text" placeholder="검색어를 입력해주세요." class="input-basic relative text-[0.94rem] text-white">
              <ButtonsBasic color="sch" role="search"><i class="ico ico-sch bg-white"></i></ButtonsBasic>
            </div>
            <ul class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[1.25rem] gap-y-[5.63rem] list lg:pt-[3.75rem] pt-[1.88rem] relative">
              <li v-for="(n, index) in 16" :key="index" class="relative card w-full">
                <EffectCardHover>
                  <a class="flex flex-col gap-y-4 w-full h-full justify-start text-white" :href="index % 2 === 0 ? 'https://news.nate.com/view/20251219n15148' : 'https://www.g-enews.com/article/ICT/2025/08/202508071152291640c5fa75ef86_1'" target="_blank">
                    <div class="card-img relative">
                        <img src="~assets/images/main/newsroom-thumb01.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'
                        </div>
                      </div>
                  </a>
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

  const shapeBig = ref(null)
  const shapeSmall = ref(null)
  const pathVisual = ref(null)

  // swiper settings
  import { Navigation, Autoplay } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css/navigation';
  import 'swiper/css';

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

    const isDesktop = window.matchMedia('(min-width: 1280px)').matches
    
    const floatBox = document.querySelector('.float-box')
    const slider = document.querySelector('.media-slider')

    if (!floatBox || !slider) return

    // 마우스가 슬라이더에 들어오면 등장
    slider.addEventListener('mouseenter', () => {
      if (!isDesktop) return
      $gsap.to(floatBox, {
        opacity: 1,
        scale: 1,
        duration: 0.2
      })
    })

    let isDragging = false

    // 마우스 누르면 드래그 시작
    slider.addEventListener('mousedown', () => {
      isDragging = true
    })

    // 마우스 떼면 드래그 종료
    document.addEventListener('mouseup', () => {
      isDragging = false
    })

    // 마우스 이동 → float-box 따라오기
    slider.addEventListener('mousemove', (e) => {
      const rect = slider.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (isDesktop) {
        $gsap.to(floatBox, {
          x: x,
          y: y,
          duration: 0.2,
          ease: "power3.out"
        })
      }

      // --- 왼쪽 / 오른쪽 감지 ---
      const activeSlide = document.querySelector('.swiper-slide-active')
      if (!activeSlide) return

      const slideRect = activeSlide.getBoundingClientRect()
      const slideRight = slideRect.left + slideRect.width

      if (e.clientX < slideRect.left) {
        floatBox.classList.add('left')
        floatBox.classList.remove('right')
      } else if(e.clientX >= slideRight) {
        floatBox.classList.add('right')
        floatBox.classList.remove('left')
      } else if(e.clientX > slideRect.left && e.clientX < slideRight) {
        floatBox.classList.remove('left')
        floatBox.classList.remove('right')
      }

    })

    // 마우스가 슬라이더에서 벗어나면 사라짐
    slider.addEventListener('mouseleave', () => {
      if (!isDesktop) return
      $gsap.to(floatBox, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2
      })
    })

    // 카드 스크롤 애니메이션
    const cardItem = document.querySelectorAll('.media-list .list .card');

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

  // 현재 텍스트
  const currentText = ref("")
  const swiperInstance = ref(null)
  let textTimer = null

  const isSwiperReady = ref(false)

  // **슬라이더 변경 시**
  const onSlideChange = (swiper) => {
    const textEl = document.querySelector('.slider-text p')
    if (!textEl) return

    // 타이머 중첩 방지
    clearTimeout(textTimer)

    // 0) 초기화 (클래스 모두 제거 → opacity 0, right-bottom)
    textEl.classList.remove('fade-in', 'fade-out')

    // 1) 아주 약간의 지연 후 fade-out 실행
    textTimer = setTimeout(() => {
      textEl.classList.add('fade-out')

      // 2) fade-out 끝난 뒤 텍스트 교체 + fade-in
      textTimer = setTimeout(() => {
        const activeSlide = swiper.slides[swiper.activeIndex]
        currentText.value = activeSlide?.dataset?.text || ""

        // fade-out 제거하고 fade-in으로 중앙 등장
        textEl.classList.remove('fade-out')
        textEl.classList.add('fade-in')
      }, 400) // fade-out 애니메이션과 동일해야 함

    }, 400) 
  }

  // **swiper 초기화 시**
  const onSwiper = (swiper) => {
    swiperInstance.value = swiper
    
    // 약간의 시간차 후 swiper-hidden 제거
    setTimeout(() => {
      isSwiperReady.value = true
    }, 400) 
  }

</script>

<style scoped>
</style>