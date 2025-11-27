<template>
  <div>
    <!-- section01 : 인트로 -->
    <section class="intro relative overflow-hidden" ref="introSection">
      <div class="movie-bg absolute w-full" ref="movieBg">
        <video ref="bgVideo" class="video-bg" autoplay loop muted playsinline preload="auto">
          <source src="~/assets/videos/main-war.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="panel_01"></div>
      <div class="panel_02" ref="panel02"></div>
      <div class="title-area absolute w-full flex flex-col justify-center items-center text-center left-0 top-0" ref="titleArea">
        <img src="~/assets/images/sub/game-logo01.png" alt="실버 팰리스" class="block">
      </div>
    </section>
    <section class="cut-scene w-full relative overflow-hidden" ref="cutScene">
      <div class="cut_01 w-full h-full flex items-end">
        <!-- 씬 1 -->
        <div class="cut_01_inner relative">
            <img src="~/assets/images/sub/cut-scene-01.png" alt="scene image 1" class="block">
        </div>
        <div class="line-box absolute" ref="cutLine01">
          <div class="line01-1" ref="line01_1">
            <p class="title text-white text-2xl font-semibold">실버니아</p>
            <p class="text-white normal">큰 화재가 있었어.</p>
            <p class="text-white normal">많은 사상자가 나왔고.. 모두 잿더미가 됐지.</p>
            <p class="text-white normal-2">그래서 최고의 탐정이 필요해.</p>
          </div>
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

  const { $gsap, $ScrollTrigger } = useNuxtApp()

  // section 01 refs
  const introSection = ref(null)
  const movieBg = ref(null)
  const panel02 = ref(null)
  const titleArea = ref(null)

  // section 02 refs
  const cutScene = ref(null)
  const cutLine01 = ref(null)
  const line01_1 = ref(null)

  // 내부 텍스트를 글자 단위로 분리하는 함수
  const splitText = (element) => {
    const text = element.innerText;
    element.innerHTML = "";  

    text.split("").forEach(char => {
      const span = document.createElement("span");
      span.innerText = char;
      element.appendChild(span);
    });
  };

  onMounted(() => {

    /*-----------------------*/
    // 01. intro 섹션 - movieBg 고정
    /*-----------------------*/
    $ScrollTrigger.create({
      trigger: introSection.value,
      start:  panel02.value.offsetTop + 'top',
      end: 'bottom bottom',
      pinspacing: true,
      pin: movieBg.value,
      scrub: 2,
      // markers: true,
    })

    /*-----------------------*/
    // 02. intro 섹션 - title 스크롤 효과
    /*-----------------------*/
    // title 효과 - intro 섹션 고정 + 스크롤시 타이틀 사라짐
    const scrollIntro = $gsap.timeline()
    .to(titleArea.value, { opacity: 1, duration: 0 })   // 시작값
    .to(titleArea.value, { opacity: 0, duration: 1 })   // 끝으로 갈수록 점점 사라짐

    // movieBg 어두워짐 (밝기 감소)
    .fromTo(
      movieBg.value,
      { filter: "brightness(1)" },
      { filter: "brightness(0)", duration: 1, ease: "none" },
      0 // titleArea와 같은 타이밍에서 시작
    )

    $ScrollTrigger.create({
      trigger: introSection.value,
      start: 'top top',
      end: 'bottom bottom',
      pin: titleArea.value,
      scrub: 2,
      animation: scrollIntro,
      // markers: true,
    })
    
    /*-----------------------*/
    // 03. intro 섹션 - 초기화면 movieBg 확대 축소 효과
    /*-----------------------*/
    $gsap.fromTo(
      movieBg.value,
      { scale: 1.5 },
      {
        scale: 1,
        duration: 3,
        ease: "power3.out"
      }
    )

    /*------------////////////////////////-----------*/

    // 첫번째 대사 텍스트 분리
    const cut01Title = line01_1.value.querySelector(".title");
    const cut01Normal = line01_1.value.querySelectorAll(".normal");

    splitText(cut01Title);
    cut01Normal.forEach(element => splitText(element));

    // 두번째 대사 텍스트 분리
    const cut02Normal = line01_1.value.querySelector(".normal-2");
    splitText(cut02Normal);

    // 각각의 문장 span 모으기
    const cut01TitleSpans = cut01Title.querySelectorAll("span");
    const cut01NormalSpans = line01_1.value.querySelectorAll(".normal span");
    const cut02NormalSpans = cut02Normal.querySelectorAll("span");

    const cutSceneTimeline = $gsap.timeline()
    // (01) 컷 신 나옴
    .fromTo(cutScene.value, 
      { opacity: 0 }, 
      { opacity: 1, duration: 2 }
    )
    // (02) 컷 신 텍스트 첫번째 박스 선명하게 나옴
    .fromTo(cutLine01.value, 
      { "filter": "blur(50px)" }, 
      { "filter": "blur(0px)", duration: 2 },
      "<" //동시 실행
    )
    // (03) 컷 신 텍스트 박스 안의 문장들 서서히 나타남
    .fromTo(cut01Title,
      { opacity: 0 }, 
      { opacity: 1, duration: 3 },
      "<" //동시 실행
    )
    .fromTo(cut01Normal,
      { opacity: 0 }, 
      { opacity: 1, duration: 3 },
      "<" //동시 실행
    )
    .fromTo(cut02Normal,
      { opacity: 0 }, 
      { opacity: 0, duration: 3 },
      "<" //동시 실행
    )
    // (04) 컷 신 텍스트 박스 안의 글자들 타자 치듯 등장
    .from(
       cut01TitleSpans,
      {
        opacity: 0,
        duration: 0.03,
        stagger: 0.02,   // 각 글자마다 타자 치듯 등장
        ease: "none"
      },
      ">-1" //이전 효과 후 바로 실행
    )
    .from(
      cut01NormalSpans,
      {
        opacity: 0,
        duration: 0.03,
        stagger: 0.02,   // 각 글자마다 타자 치듯 등장
        ease: "none"
      },
      ">" //이전 효과 후 바로 실행
    )
    // (05) 컷 신 첫번째 텍스트는 점점 사라짐 
    .to(cut01Normal,
      { opacity: 0, duration: 1.5 },
      ">" //
    )
    // (06) 컷 신 두번째 텍스트 나타남
    .to(cut02Normal,
      { opacity: 1, duration: 0.5 },
      ">" //동시 실행
    )
    .from(
      cut02NormalSpans,
      {
        opacity: 0,
        duration: 0.03,
        stagger: 0.02,   // 각 글자마다 타자 치듯 등장
        ease: "none"
      },
      ">" //이전 효과 후 바로 실행
    )
    .to(cutLine01.value, 
      { opacity: 0, "filter": "blur(50px)", duration: 3 },
      ">+1" //이전 효과 후 1초 뒤 실행
    );
    
    $ScrollTrigger.create({
      trigger: cutScene.value,
      start: 'top top',
      end: "+=" + cutSceneTimeline.duration() * 500, // timeline 길이에 자동 매칭
      markers: true,
      scrub: 1,
      pin: true,
      animation: cutSceneTimeline
    })
  });
</script>

<style scoped>
  /* section 01 */
  .movie-bg {left: 0; top: 0; z-index: -1; height: calc(100vh + 50vh); inset: 0; animation: fadeIn 2s ease-in-out;}
  .video-bg {width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;}
  .panel_01, .panel_02 {width: 100%; height: 50vh;}
  .panel_02 {height: 1500px;}

  .title-area {height: 100vh; animation: fadeIn 2s ease-in-out;}
  .title-area img {max-width: 697px;}

  /* 화면 열었을 때 페이드 인 효과 */
  @keyframes fadeIn {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  /* section 02 */
  .cut-scene {height: 100vh;}
  .cut-scene img {width: 100%;}
  .cut-scene .cut_01 {height: 100%;}
  .cut-scene .cut_01 .line-box {width:1131px; height: 308px; background: url('~/assets/images/sub/line-box.png') no-repeat center / cover; right:50px; bottom: 50px;}

</style>