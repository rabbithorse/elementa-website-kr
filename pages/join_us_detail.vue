<template>
  <div>
    <section class="subSection logo-bg pt-[180px] relative">
      <div class="join-us-detail-area pb-[250px]">
        <Container class="grid gap-x-[9.4%] grid-cols-[1fr_23.7%] grid-row-[auto 1fr]">
          <div class="detail-title-area col-span-2">
            <ButtonsBadge category="y">Business</ButtonsBadge>
            <h3 class="text-white text-[4.69rem] pb-[90px] font-bold">퍼포먼스 마케터</h3>
          </div>
          <div class="detail-cont">
            <p class="font-bold text-[1.75rem] text-white leading-[2.63rem] pb-[30px] deco-text flex gap-[10px] relative items-center">신입 ∙ 0년~2년</p>
            <span class="text-[var(--text-disabled)] text-[0.94rem]">포지션 소개</span>
            <p class="text-white text-lg break-keep pt-[10px] pb-[3.75rem] leading-[1.81rem]">퍼포먼스 마케터는 온라인 광고 채널(Google, Meta, Naver, Kakao 등)을 운영하며 KPI 달성을 위한 캠페인을 설계하고 최적화하는 역할을 담당합니다. 데이터 기반으로 예산을 효율적으로 집행하고, 퍼널 분석과 A/B 테스트 등을 통해 신규 유저 유입과 리텐션을 동시에 강화합니다.</p>
            
            <div class="detail-glass-box p-[2.25rem] flex justify-between items-center relative overflow-hidden">
              <div class="filter-glass"></div>
              <div class="filter-shine"></div>
              <p class="text-white grow text-lg font-medium relative z-10">기간</p>
              <div class="date-wrap flex items-center gap-[0.94rem] relative z-10">
                <ButtonsBadge size="md">D-10</ButtonsBadge>
                <p class="font-bold text-2xl text-white leading-[2.25rem]">25.11.10 ~ 25.12.20 </p>
              </div>
            </div>

            <div class="cont">
              <div class="whitespace-pre-line text-white mt-[3.75rem]" style="height:1000px; background:#444;"><!--내용-->
                내용 들어가는 곳입니다.
              </div>
            </div>
          </div>

          <!-- Side -->
          <div class="side-btn-wrap">
            <div class="flex w-full flex-col gap-[30px] inner" ref="sideInner">
              <div class="detail-glass-box-side overflow-hidden relative rounded-[5px]">
                <div class="filter-glass"></div>
                <div class="filter-shine"></div>
                <div class="inner flex gap-[20px] flex-col px-[40px] pt-[20px] pb-[40px] rounded-[5px] relative z-10">
                  <p class="text-white twink-point flex gap-[10px] items-center">ELEMENTA KOREA</p>
                  <div class="divider"></div>
                  <ul class="text-white">
                    <li class="py-[10px] flex justify-between gap-[10px]">
                      <span class="shrink-0">직군</span>
                      <span class="text-right">퍼포먼스 마케터</span>
                    </li>
                    <li class="py-[10px] flex justify-between gap-[10px]">
                      <span class="shrink-0">마감일</span>
                      <div class="flex items-center gap-[10px]">
                        <span>25.11.10 ~ 25.12.20</span>
                        <ButtonsBadge fontColor="white">D-10</ButtonsBadge>
                      </div>
                    </li>
                    <li class="py-[10px] flex justify-between gap-[10px]">
                      <span class="shrink-0">고용형태</span>
                      <span class="text-right">정규직</span>
                    </li>
                    <li class="py-[10px] flex justify-between gap-[10px]">
                      <span class="shrink-0">경력</span>
                      <span class="text-right">신입 ∙ 0~2년</span>
                    </li>
                    <li class="py-[10px] flex justify-between gap-[10px]">
                      <span class="shrink-0">급여</span>
                      <span class="text-right">회사 내규에 따름 (면접 후 결정)</span>
                    </li>
                    <li class="py-[10px] flex justify-between gap-[10px]">
                      <span class="shrink-0">근무 지역</span>
                      <span class="text-right">서울시 강남구</span>
                    </li>
                  </ul>
                  <div class="divider"></div>
                  <div class="flex gap-[20px] w-full">
                    <button class="share-btn relative flex items-center justify-center shrink-0"><i class="ico ico-share bg-white"></i></button>
                    <ButtonsBasic color="blue" width="full" class="grow" href="#">지원하기</ButtonsBasic>
                  </div>
                </div>
              </div>

              <div class="flex w-full flex-col btn-wrap">
                <ButtonsBasic size="lg" width="full" href="./join_us">목록으로</ButtonsBasic>
              </div>

              <div class="cursor-pointer">
                <div class="w-full bg-white aspect-[2.22] overflow-hidden">
                  <img src="~/assets/images/sub/recruit-img01.png" alt="" class="w-full h-full object-cover object-center">
                </div>
                <p class="text-white text-right text-sm pt-[10px]">An Office Built for Your Dreams</p>
              </div>
            </div>
          </div>
          <!-- //Side -->
        </Container>
      </div>
    </section>

    <svg style="display: none">
      <filter id="liquid" x="0%" y="0%" width="140%" height="140%" filterUnits="objectBoundingBox" >
        <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="2" seed="9" result="turbulence" />
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

<style scoped>
  .filter-glass {filter: url(#liquid); backdrop-filter: blur(20px); width: 160%; height:160%; position: absolute; left: 50%;  top: 50%; transform: translate(-50%, -50%); z-index: 1; background: url(~/assets/images/sub/otis-redding.png) repeat;}
</style>

<script setup>
  definePageMeta({
    layout: 'sub', 
  })

  import Container from '~/components/Container.vue';
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useNuxtApp } from '#app'

  const { $gsap, $ScrollTrigger } = useNuxtApp()

  onMounted(() => {
    
  });
</script>