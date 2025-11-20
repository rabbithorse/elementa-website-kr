<template>
  <div>
    <section class="subSection pt-[180px] relative">
      <div class="media-detail-area pb-[250px]">
        <Container class="grid gap-[9.4%] grid-cols-[1fr_23.7%] grid-row-[auto 1fr]">
          <div class="detail-title-area col-span-2">
            <span class="text-[0.94rem] text-[var(--text-disabled)]">2025-09-17</span>
            <h3 class="text-white text-[2.5rem] font-bold pt-[10px]">'실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'</h3>
            <p class="text-white pt-[1.88rem] text-lg leading-[1.81rem]">짧은 설명이 들어가는 공간입니다. 짧은 설명이 들어가는 공간입니다.</p>
          </div>
          <div class="movie-frame" ref="movieFrame">
            <div class="w-full mx-auto aspect-video">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/M7AHYpILIsc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="side-btn-wrap">
            <div class="flex flex-col gap-[10px]" ref="sideBtnWrap">
              <ButtonsBasic href="#" color="blue" width="full" size="lg"><i class="ico ico-prev bg-white"></i>이전 게시글 보기</ButtonsBasic>
              <ButtonsBasic href="#" color="blue" width="full" size="lg">다음 게시글 보기<i class="ico ico-next bg-white"></i></ButtonsBasic>
              <ButtonsBasic href="#" width="full" size="lg">목록으로</ButtonsBasic>
            </div>
          </div>
        </Container>
      </div>

      <!-- 리스트 -->
      <div class="media-list pb-[190px] relative">
        <Container>
          <div class="list-header pb-[40px] flex justify-between items-start">
            <p class="font-bold text-3xl text-white deco-text relative pl-[60px]">연관 콘텐츠</p>
            <div class="controls flex gap-3 items-center">
              <PrevButton :swiper="swiperInstance" class="media-prev"/>
              <NextButton :swiper="swiperInstance" class="media-next"/>
            </div>
          </div>
          <!-- 슬라이더 -->
          <Swiper
            :slidesPerView="4"
            :grid="{
              rows: 2,
              fill: 'row'
            }"
            :spaceBetween="20"
            :navigation="{
              nextEl: '.media-next',
              prevEl: '.media-prev'
            }"
            :modules="[Navigation, Autoplay, Grid]"
            class="media-grid-swiper w-full block"
          >
            <swiper-slide v-for="(n, index) in 16" :key="index">
              <EffectCardHover>
                <a class="flex flex-col gap-y-4 w-full h-full justify-start text-white" href="./media_detail">
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
            </swiper-slide>
          </Swiper>
          <!-- //슬라이더 -->
        </Container>
      </div>
      <!-- 리스트 -->
    </section>
  </div>
</template>

<style scoped>
</style>

<script setup>
  definePageMeta({
    layout: 'sub', 
  })

  import Container from '~/components/Container.vue';
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useNuxtApp } from '#app'

  const { $gsap, $ScrollTrigger } = useNuxtApp()

  // swiper settings + grid
  import { Navigation, Autoplay, Grid } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css/navigation';
  import 'swiper/css/grid';
  import 'swiper/css';

  import NextButton from '@/components/buttons/nextButton.vue'
  import PrevButton from '@/components/buttons/prevButton.vue'
  // swiper settings + grid

  const movieFrame = ref(null)
  const sideBtnWrap = ref(null)

  onMounted(() => {
    $gsap.to(movieFrame.value, {
      scrollTrigger: {
        trigger: movieFrame.value,
        start: '-=150 top',
        end: 'bottom-=150 25%',
        scrub: 2,
        //markers: true,
        pin: sideBtnWrap.value,
      },
    })
  });


</script>

