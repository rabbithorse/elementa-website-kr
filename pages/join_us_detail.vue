<template>
  <div>
    <section class="subSection logo-bg lg:pt-[180px] pt-[115px] relative overflow-none">
      <div class="join-us-detail-area relative overflow-hidden">
        <Container class="grid 2xl:gap-x-[9.4%] xl:gap-x-[3.4%] xl:grid-cols-[1fr_auto] grid-cols-1 lg:grid-row-[auto 1fr]">
          <div class="detail-title-area xl:col-span-2">
            <ButtonsBadge category="y">Business</ButtonsBadge>
            <h3 class="text-white lg:text-[4.69rem] text-[2.38rem] lg:pb-[90px] pb-[30px] lg:pt-[0px] pt-[5px] font-bold">퍼포먼스 마케터</h3>
          </div>
          <div class="detail-cont" ref="detailCont">
            <TypographySkewText time="0.0">
            <p class="font-bold lg:text-[1.75rem] text-lg text-white leading-[2.63rem] lg:pb-[30px] pb-[10px] deco-text flex gap-[10px] relative items-center">신입 ∙ 0년~2년</p>
            </TypographySkewText>
            <TypographySkewText time="0.3">
            <span class="text-[var(--text-disabled)] lg:text-[0.94rem] text-xs">포지션 소개</span>
            </TypographySkewText>
            <TypographySkewText time="0.6" class="lg:mt-[10px] mt-[5px] lg:mb-[3.75rem] mb-[2.5rem]">
              <p class="text-white lg:text-lg text-sm break-keep lg:leading-[1.81rem] leading-[1.51rem]">퍼포먼스 마케터는 온라인 광고 채널(Google, Meta, Naver, Kakao 등)을 운영하며 KPI 달성을 위한 캠페인을 설계하고 최적화하는 역할을 담당합니다. 데이터 기반으로 예산을 효율적으로 집행하고, 퍼널 분석과 A/B 테스트 등을 통해 신규 유저 유입과 리텐션을 동시에 강화합니다.</p>
            </TypographySkewText>
            <div class="detail-glass-box lg:p-[2.25rem] px-[1.5rem] py-[1rem] flex justify-between items-center relative overflow-hidden" ref="detailGlassBox">
              <EffectGlassTest />
              <div class="filter-noise"></div>
              <div class="filter-shine"></div>
              <p class="text-white grow lg:text-lg text-[0.81rem] font-medium relative z-10">기간</p>
              <div class="date-wrap flex items-center lg:gap-[0.94rem] gap-[0.63rem] relative z-10">
                <ButtonsBadge size="md">D-10</ButtonsBadge>
                <p class="font-bold lg:text-2xl text-base text-white leading-[2.25rem]">25.11.10 ~ 25.12.20 </p>
              </div>
            </div>

            <div class="cont">
              <div class="whitespace-pre-line text-white lg:mt-[3.75rem] mt-[1.25rem]" style="height:1200px; background:#444;"><!--내용-->
                내용 들어가는 곳입니다.
              </div>
            </div>
          </div>

          <!-- Side -->
          <div class="side-btn-wrap xl:mt-[0px] mt-[1.25rem]">
            <div class="flex w-full flex-col lg:gap-[1.88rem] gap-[1.25rem] inner" ref="sideInner">
              <div class="detail-glass-box-side overflow-hidden relative rounded-[5px]">
                <EffectGlassTest />
                <div class="filter-noise"></div>
                <div class="filter-shine"></div>
                <div class="inner flex lg:gap-[1.25rem] gap-[0.94rem] flex-col lg:px-[2.5rem] px-[1.25rem] lg:pt-[1.25rem] lg:pb-[1.88rem] py-[1.56rem] rounded-[5px] relative z-10">
                  <p class="text-white lg:text-base text-sm twink-point flex gap-[10px] items-center">ELEMENTA KOREA</p>
                  <div class="divider"></div>
                  <ul class="text-white">
                    <li class="py-[10px] flex justify-between gap-[10px] lg:text-base text-sm">
                      <span class="shrink-0">직군</span>
                      <span class="text-right">퍼포먼스 마케터</span>
                    </li>
                    <li class="lg:py-[8px] py-[7px] flex justify-between gap-[10px] lg:text-base text-sm">
                      <span class="shrink-0">마감일</span>
                      <div class="flex items-center gap-[10px]">
                        <span>25.11.10 ~ 25.12.20</span>
                        <ButtonsBadge fontColor="white">D-10</ButtonsBadge>
                      </div>
                    </li>
                    <li class="lg:py-[8px] py-[7px] flex justify-between gap-[10px] lg:text-base text-sm">
                      <span class="shrink-0">고용형태</span>
                      <span class="text-right">정규직</span>
                    </li>
                    <li class="lg:py-[8px] py-[7px] flex justify-between gap-[10px] lg:text-base text-sm">
                      <span class="shrink-0">경력</span>
                      <span class="text-right">신입 ∙ 0~2년</span>
                    </li>
                    <li class="lg:py-[8px] py-[7px] flex justify-between gap-[10px] lg:text-base text-sm">
                      <span class="shrink-0">급여</span>
                      <span class="text-right">회사 내규에 따름 (면접 후 결정)</span>
                    </li>
                    <li class="lg:py-[8px] py-[7px] flex justify-between gap-[10px] lg:text-base text-sm">
                      <span class="shrink-0">근무 지역</span>
                      <span class="text-right">서울시 강남구</span>
                    </li>
                  </ul>
                  <div class="divider"></div>
                  <div class="flex lg:gap-[1.25rem] gap-[0.63rem] w-full">
                    <!-- <button class="share-btn relative flex items-center justify-center shrink-0"><i class="ico ico-share bg-white"></i></button> -->
                    <ButtonsBasic class="share-btn"><i class="ico ico-share bg-white"></i></ButtonsBasic>
                    <ButtonsBasic color="blue" width="full" class="grow" href="#">지원하기</ButtonsBasic>
                  </div>
                </div>
              </div>

              <div class="flex w-full flex-col btn-wrap">
                <ButtonsBasic size="lg" width="full" href="./join_us">목록으로</ButtonsBasic>
              </div>

              <div class="cursor-pointer xl:block hidden" @click="scrollToTarget('#ourOfficeArea')">
                <div class="w-full bg-white aspect-[449/160] overflow-hidden relative office-link">
                  <Temporary type="image" />
                  <img src="~/assets/images/sub/recruit-img01.png" alt="" class="w-full h-full object-cover object-[center_-110px]">
                  <span class="text-white text-base font-bold absolute right-[25px] bottom-0 z-10">오피스 둘러보기</span>
                </div>
                <p class="text-white text-right text-sm pt-[10px]">An Office Built for Your Dreams</p>
              </div>
            </div>
          </div>
          <!-- //Side -->
        </Container>
      </div>

      <div class="our-office-area lg:py-[180px] pt-[130px] overflow-hidden" id="ourOfficeArea">
        <Container>
          <p class="text-white twink-point flex gap-[10px] items-center lg:font-bold font-normal lg:pb-[2rem] pb-[0.94rem] lg:text-base text-sm">Our office</p>
          <TypographySkewText time="0.0">
          <p class="text-white lg:font-bold font-normal lg:text-[2.5rem] text-[1.25rem]">Dreaming bigger,</p>
          </TypographySkewText>
          <TypographySkewText time="0.1">
          <p class="text-white lg:font-bold font-normal lg:text-[2.5rem] text-[1.25rem]">Working smarter, Creating together.</p>
          </TypographySkewText>
          <div class="img_area relative lg:mt-[0px] mt-[2.5rem]" ref="imgArea">
            <div class="text-bg" ref="textBg"></div>
            <!-- card1 -->
            <div class="img-item item-01 text-white relative float-right">
              <EffectCardHover>
              <figure class="relative overflow-hidden z-20">
                <span class="dimmed"></span>
                <span class="dimmed blur"></span>
                <div class="inner-img">
                  <img src="/assets/images/sub/join-us-detail-item01.jpg" alt="">
                </div>
                <figcaption class="absolute text-center w-full font-bold 2xl:text-2xl text-[0.81rem]">Company overview</figcaption>
              </figure>
              <p class="2xl:pt-[1.88rem] pt-[10px] 2xl:text-xl text-[0.81rem]">→ Company overview</p>
              </EffectCardHover>
            </div>
            <!-- //card1 -->
            <!-- card2 -->
            <div class="img-item item-02 text-white relative">
              <EffectCardHover>
              <figure class="relative overflow-hidden z-20">
                <span class="dimmed"></span>
                <div class="inner-img">
                  <img src="/assets/images/sub/join-us-detail-item02.jpg" alt="">
                </div>
                <figcaption class="absolute text-center w-full font-bold 2xl:text-[2.5rem] text-base">Employee break area</figcaption>
              </figure>
              <p class="2xl:pt-[1.88rem] pt-[10px] 2xl:text-xl text-[0.81rem]">→ Employee break area</p>
              </EffectCardHover>
            </div>
            <!-- //card2 -->
            <!-- card3 -->
            <div class="img-item item-03 text-white relative lg:float-right">
              <EffectCardHover>
              <figure class="relative overflow-hidden z-20">
                <span class="dimmed"></span>
                <div class="inner-img">
                  <img src="/assets/images/sub/join-us-detail-item03.jpg" alt="">
                </div>
                <figcaption class="absolute text-center w-full font-bold 2xl:text-2xl text-[0.81rem]">Employee break area</figcaption>
              </figure>
              <p class="2xl:pt-[1.88rem] pt-[10px] 2xl:text-xl text-[0.81rem]">→ Employee break area</p>
              </EffectCardHover>
            </div>
            <!-- //card3 -->
            <!-- card4 -->
            <div class="img-item item-04 text-white relative lg:float-none float-right">
              <EffectCardHover>
              <figure class="relative overflow-hidden z-20">
                <span class="dimmed"></span>
                <div class="inner-img">
                  <img src="/assets/images/sub/join-us-detail-item04.jpg" alt="">
                </div>
                <figcaption class="absolute text-center w-full font-bold 2xl:text-2xl text-[0.81rem]">Company overview</figcaption>
              </figure>
              <p class="2xl:pt-[1.88rem] pt-[10px] 2xl:text-xl text-[0.81rem]">→ Company overview</p>
              </EffectCardHover>
            </div>
            <!-- //card4 -->
            <!-- card5 -->
            <div class="img-item item-05 text-white relative lg:float-right float-none">
              <EffectCardHover>
              <figure class="relative overflow-hidden z-20">
                <span class="dimmed"></span>
                <div class="inner-img">
                  <img src="/assets/images/sub/join-us-detail-item05.jpg" alt="">
                </div>
                <figcaption class="absolute text-center w-full font-bold 2xl:text-[2.5rem] text-[0.81rem]">Company overview</figcaption>
              </figure>
              <p class="2xl:pt-[1.88rem] pt-[10px] 2xl:text-xl text-[0.81rem]">→ Company overview</p>
              </EffectCardHover>
            </div>
            <!-- //card5 -->
            <!-- card6 -->
            <div class="img-item item-06 text-white relative">
              <EffectCardHover>
              <figure class="relative overflow-hidden z-20">
                <span class="dimmed"></span>
                <div class="inner-img">
                  <img src="/assets/images/sub/join-us-detail-item03.jpg" alt="">
                </div>
                <figcaption class="absolute text-center w-full font-bold 2xl:text-2xl text-base">Employee break area</figcaption>
              </figure>
              <p class="2xl:pt-[1.88rem] pt-[10px] 2xl:text-xl text-[0.81rem]">→ Employee break area</p>
              </EffectCardHover>
            </div>
            <!-- //card6 -->
          </div>
        </Container>
      </div>
      <!-- <div class="h-[10px] lg:block hidden"></div> -->

      <!-- 모바일 고정 바 -->
      <div class="px-[20px] py-[15px] flex items-end justify-between gap-[10px] sticky bottom-[-1px] xl:hidden left-0 z-30 side-btn-wrap-m w-full">
        <div class="grow">
          <p class="text-base text-white font-semibold">퍼포먼스 마케터</p>
          <p class="text-xs text-white">205.11.10~25.12.10 신입</p>
        </div>
        <div class="flex gap-[10px]">
          <ButtonsBasic class="share-btn"><i class="ico ico-share bg-white"></i></ButtonsBasic>
          <ButtonsBasic color="blue" width="full" class="grow" href="#">지원하기</ButtonsBasic>
        </div>
      </div>
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
  import { onBeforeRouteLeave } from 'vue-router'

  const { $gsap, $ScrollTrigger,  } = useNuxtApp()

  const sideInner = ref(null)
  const detailCont = ref(null)
  const imgArea = ref(null)
  const textBg = ref(null)
  const detailGlassBox = ref(null)

  // 리사이즈 핸들러
  let handleResize = null

  onMounted(() => {
    // 박스 최초 효과
    $gsap.fromTo(detailGlassBox.value, {
      opacity: 0,
      y: 50
    }, {
      ease: 'power2.in',
      opacity: 1,
      duration: 0.8,
      y:0,
      delay: 0.8
    });

    // 사이드 메뉴 고정
    // gsap 미디어 쿼리
    // 1280 이상
    $ScrollTrigger.matchMedia({
      "(min-width: 1280px)": () => {
        $gsap.to(sideInner.value, {
          scrollTrigger: {
            trigger: detailCont.value,
            start: '-=130 top',
            end: () => "+=" + (detailCont.value.offsetHeight - sideInner.value.offsetHeight),
            scrub: 2,
            pin: sideInner.value,
            pinSpacing: true,
            // markers: true
          },
        })
      }
    });
    // gsap 미디어 쿼리

    // 오피스 이미지 애니메이션
    const item = document.querySelectorAll('.img-item')

    item.forEach((el) => {
      $gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: '40% bottom',
          end: '40% top',
          // markers: true,
          onEnter: () => el.classList.add('on'),
        }
      })
    })

    // 오피스 고정 배경
    $ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        $gsap.timeline({
          scrollTrigger: {
            trigger: imgArea.value,
            start: 'top top',
            end: 'bottom+=600 bottom',
            scrub: 2,
            // markers: true,
            pin: textBg.value,
            pinSpacing: false
          },
        })
      }
    });

    $ScrollTrigger.matchMedia({
      "(max-width: 1023px)": () => {
        $gsap.timeline({
          scrollTrigger: {
            trigger: imgArea.value,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
            // markers: true,
            pin: textBg.value,
            pinSpacing: false
          },
        })
      }
    });

    /*-----------------------*/
    // 리사이즈 시 ScrollTrigger 전체 재계산
    /*-----------------------*/
    handleResize = () => {
      $ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)
  });

  // 스크롤 이동 함수
  const scrollToTarget = (selector) => {
    $gsap.to(window, {
      duration: 2,
      scrollTo: selector,
      ease: "power3.out"
    })
  }

  onBeforeRouteLeave(() => {
    if ($ScrollTrigger) {
      $ScrollTrigger.getAll().forEach(st => st.kill())
    }
  })

  onUnmounted(() => {
    // resize 이벤트 제거
    window.removeEventListener('resize', handleResize)
  });

</script>