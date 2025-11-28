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
    <!-- section02 : 대사 씬 -->
    <section class="cut-scene w-full relative overflow-hidden" ref="cutScene">
      <!-- 씬 1 -->
      <div class="cut_01 w-full h-full flex items-end absolute z-20" ref="cutBg01">
        <!-- 씬 1 배경 -->
        <div class="cut_01_inner absolute bottom-0 left-0 w-full">
            <img src="~/assets/images/sub/cut-scene-01.png" alt="scene image 1" class="block">
        </div>
        <!-- 씬 1 대사 -->
        <Container>
          <div class="line-box absolute flex items-end" ref="cutLine01">
            <div class="line01-1 grow flex flex-col justify-center relative" ref="line01_1">
              <p class="title text-2xl font-semibold absolute z-10">실버니아</p>
              <p class="text-white normal text-2xl">큰 화재가 있었어.</p>
              <p class="text-white normal text-2xl">많은 사상자가 나왔고.. 모두 잿더미가 됐지.</p>
              <p class="text-white normal-2 text-2xl">그래서 최고의 탐정이 필요해.</p>
            </div>
          </div>
        </Container>
      </div>
      <!-- //씬 1 -->
      <!-- 씬 2 -->
      <div class="cut_02 w-full h-full flex items-end absolute z-10" ref="cutBg02">
        <!-- 씬 2 배경 -->
        <div class="cut_02_inner absolute bottom-0 left-0 w-full">
            <img src="~/assets/images/sub/cut-scene-02.png" alt="scene image 2" class="block">
        </div>
        <!-- 씬 2 대사 -->
        <Container>
          <div class="line-box absolute flex items-end" ref="cutLine02">
            <div class="line02-1 grow flex flex-col justify-center relative" ref="line02_1">
              <p class="title text-2xl font-semibold absolute">탐정</p>
              <p class="text-white normal text-2xl">하지만 실버니아는 최고의 도시가 아니지.</p>
            </div>
          </div>
        </Container>
      </div>
      <!-- //씬 2 -->
    </section>
    <!-- section03 : 게임 설명 intro-->
    <section class="description relative overflow-hidden" ref="descriptionSec">
      <div class="movie-dimmed absolute w-full h-full top-0 left-0 z-30"></div>
      <!-- video 1 -->
      <div class="movie-bg-des absolute sec01 w-full top-0 left-0 z-20">
        <video class="video-bg" autoplay loop muted playsinline preload="auto">
          <source src="~/assets/videos/main-fly.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 2 -->
      <div class="movie-bg-des absolute sec02 w-full top-0 left-0 z-10">
        <video class="video-bg" autoplay loop muted playsinline preload="auto">
          <source src="~/assets/videos/main-game-silverpalace.mp4" type="video/mp4" />
        </video>
      </div>

      <!-- text 2 -->
      <div class="text-area sec02 flex w-full justify-center items-center z-40 absolute top-0 left-0">
        <div class="text-box text-center">
          <span class="text-2xl font-semibold">독창적 세계관</span>
          <p class="text-white text-[3.44rem] title tracking-[-1.65px]">탐정 서사와 흑동화로 완성된 미스터리 판타지</p>
        </div>
      </div>
      <!-- text 1 -->
      <div class="text-area sec01 flex w-full justify-center items-center z-40 absolute top-0 left-0">
        <div class="text-box text-center">
          <span class="text-2xl font-semibold">Intro</span>
          <p class="text-white text-[3.44rem] title tracking-[-1.65px]">사건의 진위, 그 무대의 서막</p>
          <p class="text-white text-2xl">펠리아나 3년, 다시 실버니아로 돌아온 탐정. 그리고 현실과 우화가 뒤섞이고, 번영과 몰락의 경계에 서 있는 실버니아. <br>
          사교와 조사, 판단 그리고 전투, 당신이 그 총알 한 발의 진실을 찾아낸다면, 자신은 물론, 모든 이들의 운명까지 결정짓게 될 것이다.</p>
        </div>
      </div>
    </section>

    <section class="h-[1000px]"></section>
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
  const cutBg01 = ref(null)

  const cutLine02 = ref(null)
  const line02_1 = ref(null)
  const cutBg02 = ref(null)

  // section 03 refs
  const descriptionSec = ref(null)

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

    /*-----------------------*/
    // 04. 컷신 섹션 - 컷신 타임라인 애니메이션
    /*-----------------------*/

    // 첫번째 씬 - 첫번째 대사 텍스트 분리
    const cut01Title = line01_1.value.querySelector(".title");
    const cut01Normal = line01_1.value.querySelectorAll(".normal");
    splitText(cut01Title);
    cut01Normal.forEach(element => splitText(element));

    // 첫번째 씬 - 두번째 대사 텍스트 분리
    const cut01Normal2 = line01_1.value.querySelector(".normal-2");
    splitText(cut01Normal2);

    // 두번째 씬 - 대사 텍스트 분리
    const cut02Title = line02_1.value.querySelector(".title");
    const cut02Normal = line02_1.value.querySelector(".normal");
    splitText(cut02Title);
    splitText(cut02Normal);

    // 각각의 문장 span 모으기
    const cut01TitleSpans = cut01Title.querySelectorAll("span");
    const cut01NormalSpans = line01_1.value.querySelectorAll(".normal span");
    const cut01Normal2Spans = cut01Normal2.querySelectorAll("span");

    const cut02TitleSpans = cut02Title.querySelectorAll("span");
    const cut02NormalSpans = cut02Normal.querySelectorAll("span");

    // **컷신 타임라인 애니메이션**
    const cutSceneTimeline = $gsap.timeline()
    // (01) 컷 신 나옴
    .fromTo(cutScene.value, { opacity: 0 }, { opacity: 1, duration: 2 })

    // (02) 컷 신 텍스트 첫번째 박스 선명하게 나옴
    .fromTo(cutLine01.value, { "filter": "blur(50px)" }, { "filter": "blur(0px)", duration: 2 },"<")//동시 실행

    // (03) 컷 신 텍스트 박스 안의 문장들 서서히 나타남
    .fromTo(cut01Title, { opacity: 0 }, { opacity: 1, duration: 3 },"<")//동시 실행
    .fromTo(cut01Normal, { opacity: 0 }, { opacity: 1, duration: 3 },"<")//동시 실행
    .fromTo(cut01Normal2, { opacity: 0 }, { opacity: 0, duration: 3 },"<")//동시 실행

    // (04) 컷 신 텍스트 박스 안의 글자들 타자 치듯 등장
    // 각 글자마다 타자 치듯 등장
    .from(cut01TitleSpans, {opacity: 0, duration: 0.03, stagger: 0.03, ease: "none"},">-1")//이전 효과 후 바로 실행
    // 각 글자마다 타자 치듯 등장
    .from(cut01NormalSpans, {opacity: 0, duration: 0.03, stagger: 0.03, ease: "none"},">")//이전 효과 후 바로 실행
    
    // (05) 컷 신 첫번째 텍스트는 점점 사라짐 
    .to(cut01Normal, { opacity: 0, duration: 1.5 },">+1")//이전 효과 후 1초 뒤 실행

    // (06) 컷 신 두번째 텍스트 나타남
    .to(cut01Normal2, { opacity: 1, duration: 0.5 },">")//동시 실행
    .from(cut01Normal2Spans, {opacity: 0, duration: 0.03, stagger: 0.03, ease: "none"},">")//이전 효과 후 바로 실행
    // // 각 글자마다 타자 치듯 등장

    // ****** 두 번째 씬으로 전환*****

    // (07) 컷 신 첫번째 텍스트 박스 사라짐
    .to(cutLine01.value, { opacity: 0, "filter": "blur(50px)", "transform": "translateX(-100px)", duration: 4 },">+1")
    //이전 효과 후 1초 뒤 실행

    // (08) 컷 신 첫번째 배경 서서히 사라짐
    .to(cutBg01.value, { opacity: 0, duration: 2}, "<")//동시 실행
    .to(cutBg01.value, { "visibility": "hidden", duration: 3}, ">+0.01")//이전 효과 후 0.5초 뒤 실행

    // (09) 컷 신 텍스트 박스 선명하게 나옴
    .fromTo(cutLine02.value, { "filter": "blur(50px)", "transform": "translateX(100px)" }, { "filter": "blur(0px)", "transform": "translateX(0px)", duration: 2 },"<")//동시 실행

    // (10) 컷 신 텍스트 박스 안의 문장들 서서히 나타남
    .fromTo(cut02Title, { opacity: 0 }, { opacity: 1, duration: 3 },"<")//동시 실행
    .fromTo(cut02Normal, { opacity: 0 }, { opacity: 1, duration: 3 },"<")//동시 실행

    // (11) 컷 신 텍스트 박스 안의 글자들 타자 치듯 등장
    // 각 글자마다 타자 치듯 등장
    .from(cut02TitleSpans, {opacity: 0, duration: 0.03, stagger: 0.03, ease: "none"},">-1")//이전 효과 후 바로 실행
    // 각 글자마다 타자 치듯 등장
    .from(cut02NormalSpans, {opacity: 0, duration: 0.03, stagger: 0.03, ease: "none"},"<")//이전 효과 후 바로 실행
    // (12) 컷 신 두번째 배경 서서히 사라짐
    .to(cutBg02.value, { opacity: 0, duration: 1}, ">+1")//동시 실행

    $ScrollTrigger.create({
      trigger: cutScene.value,
      start: 'top top',
      end: "+=" + cutSceneTimeline.duration() * 700, // timeline 길이에 자동 매칭
      // markers: true,
      scrub: 1,
      pin: true,
      animation: cutSceneTimeline
    })

    /************************************/

    const movieDimmed = descriptionSec.value.querySelector(".movie-dimmed");
    const videoDes1 = descriptionSec.value.querySelector(".movie-bg-des.sec01");
    const videoDes2 = descriptionSec.value.querySelector(".movie-bg-des.sec02");
    const textDes1 = descriptionSec.value.querySelector(".text-area.sec01");
    const textDes1inner = textDes1.querySelector(".text-box");
    const textDes2 = descriptionSec.value.querySelector(".text-area.sec02");
    const textDes2inner = textDes2.querySelector(".text-box");

    const desBgTimeline = $gsap.timeline()
    // (01) 비디오 딤드 투명해지면서 첫번째 비디오 밝아짐, 첫번째 텍스트 나타남
    .fromTo(movieDimmed, { opacity: 1 }, { opacity: .5, duration: 4 })
    .to(textDes1, { opacity: 1, duration: 3}, ">-1") // 이전 효과 진행 후 바로 실행
    .fromTo(textDes1inner, { y: "30px" }, { y: "0px", duration: 1, ease:"ease"}, "<") // 동시 진행
    // (02) 첫번째 비디오 서서히 사라짐, 첫번째 텍스트 사라짐
    .to(videoDes1, { opacity: 0, duration: 4 })
    .to(textDes1inner, { y: "30px", duration: 1, ease:"ease"}, ">-2") // 이전 효과 후 바로 실행
    .to(textDes1, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
    .to(textDes1, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행
    // (03) 두번째 비디오 서서히 나타남, 두번째 텍스트 나타남
    .fromTo(videoDes2, { opacity: 0 }, { opacity: 1, duration: 3 },">-1") // 이전 효과 진행 후 바로 실행
    .to(textDes2, { opacity: 1, duration: 3 }, ">-1") 
    .fromTo(textDes2inner, { y: "30px" }, { y: "0px", duration: 1, ease:"ease"}, "<") // 동시 진행

    $ScrollTrigger.create({
      trigger: descriptionSec.value,
      start: 'top top',
      end: "+=" + desBgTimeline.duration() * 700, // timeline 길이에 자동 매칭
      pin: true,
      scrub: 2,
      animation: desBgTimeline,
      // markers: true,
    })

  
  });
</script>

<style scoped>
  
</style>