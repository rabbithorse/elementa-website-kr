<template>
  <div>
      <section class="subSection media-area pt-[130px] relative" ref="subSection">
        <div class="path-visual absolute" ref="pathVisual">
          <div class="inner relative">
            <div class="big shape" ref="shapeBig"></div>
            <div class="small shape absolute" ref="shapeSmall"></div>
          </div>
        </div>
        <!-- slider wrap -->
        <div class="media-slider-wrap relative">
          <Container>
            <h2 class="text-[11rem] leading-1 font-bold text-white subPageTitle relative">
              <TypographyPrimary>
                M
              </TypographyPrimary>
              <TypographyPrimary>
                e
              </TypographyPrimary>
              <TypographyPrimary>
                d
              </TypographyPrimary>
              <TypographyPrimary>
                i
              </TypographyPrimary>
              <TypographyPrimary>
                a
              </TypographyPrimary>
            </h2>
            <h3 class="text-white pt-[200px] text-[2rem] font-semibold relative subPageTitle2">
              <TypographySecondary>문화가 콘텐츠가 되는 순간</TypographySecondary>
            </h3>
            <p class="text-white text-xl pt-[1.25rem] relative subPageTitle3">
              <TypographySecondary>게임 트레일러, 음악, 공연, 굿즈까지. 화면과 소리를 넘어, <br>팬덤이 함께 즐기고 공감하는 다채로운 경험을 전합니다.</TypographySecondary>
            </p>
          </Container>
          <!-- slider -->
          <div class="media-slider relative mt-[85px]">슬라이더 들어갈 곳</div>
          <!-- //slider -->
        </div>
        <!-- //slider wrap -->
        
        <!-- 채용 리스트 -->
        <div class="media-list pt-[140px] pb-[270px] relative">
          <Container>
            <div class="list-sch-bar flex gap-[20px]">
              <input type="text" placeholder="검색어를 입력해주세요." class="input-basic relative text-[0.94rem] text-white">
              <button class="sch-btn relative" type="button" role="search"><i class="sch-icon"></i></button>
            </div>
            <ul class="grid grid-cols-4 gap-x-[1.25rem] gap-y-[5.63rem] list pt-[60px] relative">
              <li v-for="(n, index) in 8" :key="index" class="relative card w-full">
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
  })
</script>

<style scoped>
</style>