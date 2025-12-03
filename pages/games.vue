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

      <!-- text 3 -->
      <div class="text-area sec03 flex w-full justify-center items-center z-40 absolute top-0 left-0">
        <div class="text-box text-center">
          <span class="text-2xl font-semibold">독창적 세계관</span>
          <div class="text-white text-2xl leading-[1.7] py-[25px] mt-[30px] sub-text type2 relative">
            <p class="text-white text-[3.44rem] title tracking-[-1.65px] relative font-semibold z-10">
            <span class="absolute w-full h-full left-0 top-0 block"></span>
            독창적 세계관 내용입니다</p>
          </div>
        </div>
      </div>
      <!-- text 2 -->
      <div class="text-area sec02 flex w-full justify-center items-center z-40 absolute top-0 left-0">
        <div class="text-box text-center">
          <span class="text-2xl font-semibold">독창적 세계관</span>
          <div class="text-white text-2xl leading-[1.7] py-[25px] mt-[30px] sub-text type2 relative">
            <p class="text-white text-[3.44rem] title tracking-[-1.65px] relative font-semibold z-10">
            <span class="absolute w-full h-full left-0 top-0 block"></span>
            탐정 서사와 흑동화로 완성된 미스터리 판타지</p>
          </div>
        </div>
      </div>
      <!-- text 1 -->
      <div class="text-area sec01 flex w-full justify-center items-center z-40 absolute top-0 left-0">
        <div class="text-box text-center">
          <span class="text-2xl font-semibold">Intro</span>
          <p class="text-white text-[3.44rem] title tracking-[-1.65px] relative font-semibold">
            <span class="absolute w-full h-full left-0 top-0 block"></span>
            사건의 진위, 그 무대의 서막
          </p>
          <div class="text-white text-2xl leading-[1.7] py-[60px] sub-text mt-[40px] relative">펠리아나 3년, 다시 실버니아로 돌아온 탐정. 그리고 현실과 우화가 뒤섞이고, 번영과 몰락의 경계에 서 있는 실버니아. <br>
          사교와 조사, 판단 그리고 전투, 당신이 그 총알 한 발의 진실을 찾아낸다면, 자신은 물론, 모든 이들의 운명까지 결정짓게 될 것이다.</div>
        </div>
        <ButtonsBasic color="yellow" size="lg" id="openChar" @click="openModal">캐릭터 소개</ButtonsBasic>
      </div>
    </section>

    <section class="h-[1000px]"></section>

    <!-- 캐릭터 소개 모달 -->
    <Transition name="fade">
    <section class="character-intro-modal fixed inset-0 z-50" v-show="showCharModal">
      <div class="modal-inner bg-white w-full h-full relative overflow-y-auto" ref="modalContentRef">
        <!-- Sticky 가로 아코디언 -->
        <div class="char-accordion sticky top-0 flex" ref="accordionRef">
          <!-- 탐정 : 여 -->
          <div class="acc-box" @click="jumpTo(0)">
            <!-- 캐릭터 이름 -->
            <div class="char-name overflow-hidden">
              <p class="num text-2xl font-medium text-center">01</p>
              <span class="name-light"></span>
              <p class="name-tit font-normal">탐정</p>
              <span class="char-thumb block"><img src="~/assets/images/sub/acc-char-thumb01.png" alt="탐정"></span>
              <span class="acc-line"></span>
            </div>
            <!-- 캐릭터 콘텐츠 -->
            <div class="char-cont relative z-10 w-full h-full overflow-hidden">
              <div class="inner relative">
                <div class="info text-white absolute z-10">
                  <p class="info-tit text-center text-3xl opacity-[.7] font-bold z-10 relative">Character</p>
                  <div class="info-wrap relative">
                    <div class="tit-wrap relative z-10">
                      <p class="tit text-[1.75rem] font-normal">탐정</p>
                      <p class="opacity-[.5] text-[0.94rem] font-normal">주인공</p>
                    </div>
                    <p class="text-[1.06rem] font-normal relative z-10 leading-[1.6]">두뇌가 명석하고 능률적인 일처리를 선보이는 <br>
                    이성적이며 신뢰할 수 있는 탐정. <br>
                    현재 가족의 죽음을 둘러싼 진상을 밝히기 위해 분투하고 있다. <br>
                    파국적인 사건 이후 줄곧 실버니아를 더나 있었지만, <br>
                    3년이 지난 지금 다시 이곳에 돌아왔다.</p>
                  </div>
                </div>
                <img src="~/assets/images/sub/char-cont-image01.png" alt="탐정 캐릭터" class="char-thumb">
              </div>
            </div>
            <button class="modal-close absolute bottom-[50px] left-[20px] w-[126px] h-[145px] flex justify-center items-center z-[100]" @click="closeModal">
              &times;
            </button>
          </div>
          <!-- //탐정 : 여 -->
          <!-- 탐정 : 남 -->
          <div class="acc-box" @click="jumpTo(1)">
            <!-- 캐릭터 이름 -->
            <div class="char-name overflow-hidden">
              <p class="num text-2xl font-medium text-center">02</p>
              <span class="name-light"></span>
              <p class="name-tit font-normal">탐정</p>
              <span class="char-thumb block"><img src="~/assets/images/sub/acc-char-thumb02.png" alt="탐정"></span>
              <span class="acc-line"></span>
            </div>
            <!-- 캐릭터 콘텐츠 -->
            <div class="char-cont relative z-10 w-full h-full overflow-hidden">
              <div class="inner relative">
                <div class="info text-white absolute z-10">
                  <p class="info-tit text-center text-3xl opacity-[.7] font-bold z-10 relative">Character</p>
                  <div class="info-wrap relative">
                    <div class="tit-wrap relative z-10">
                      <p class="tit text-[1.75rem] font-normal">탐정</p>
                      <p class="opacity-[.5] text-[0.94rem] font-normal">주인공</p>
                    </div>
                    <p class="text-[1.06rem] font-normal relative z-10 leading-[1.6]">
                      두뇌가 명석하고 능률적인 일처리를 선보이는 <br>
                      이성적이며 신뢰할 수 있는 탐정. <br>
                      현재 가족의 죽음을 둘러싼 진상을 밝히기 위해 분투하고 있다. <br>
                      파국적인 사건 이후 줄곧 실버니아를 더나 있었지만, <br>
                      3년이 지난 지금 다시 이곳에 돌아왔다.
                    </p>
                  </div>
                </div>
                <img src="~/assets/images/sub/char-cont-image02.png" alt="탐정 캐릭터" class="char-thumb">
              </div>
            </div>
            <button class="modal-close absolute bottom-[50px] left-[20px] w-[126px] h-[145px] flex justify-center items-center z-[100]" @click="closeModal">
              &times;
            </button>
          </div>
          <!-- //탐정 : 남 -->
          <!-- 알프 -->
          <div class="acc-box" @click="jumpTo(2)">
            <!-- 캐릭터 이름 -->
            <div class="char-name overflow-hidden">
              <p class="num text-2xl font-medium text-center">03</p>
              <span class="name-light"></span>
              <p class="name-tit font-normal">알프</p>
              <span class="char-thumb block"><img src="~/assets/images/sub/acc-char-thumb03.png" alt="알프"></span>
              <span class="acc-line"></span>
            </div>
            <!-- 캐릭터 콘텐츠 -->
            <div class="char-cont relative z-10 w-full h-full overflow-hidden">
              <div class="inner relative">
                <div class="info text-white absolute z-10">
                  <p class="info-tit text-center text-3xl opacity-[.7] font-bold z-10 relative">Character</p>
                  <div class="info-wrap relative">
                    <div class="tit-wrap relative z-10">
                      <p class="tit text-[1.75rem] font-normal">알프</p>
                      <p class="opacity-[.5] text-[0.94rem] font-normal">주인공</p>
                    </div>
                    <p class="text-[1.06rem] font-normal relative z-10 leading-[1.6]">
                      메이드 협회의 49번 메이드로, 덤벙대고 고집스러운 소녀. <br>
                      탐정의 선한 본성을 본능적으로 느꼈는지, 항상 그 곁을 떠나려 <br>
                      하지 않는다. 상식이 없고 가산ㄴ 미숙하며, 또 눈치도 없다. <br>
                      그녀는 세상 모든 것이 신선한 듯하다.
                    </p>
                  </div>
                </div>
                <img src="~/assets/images/sub/char-cont-image03.png" alt="알프 캐릭터" class="char-thumb">
              </div>
            </div>
            <button class="modal-close absolute bottom-[50px] left-[20px] w-[126px] h-[145px] flex justify-center items-center z-[100]" @click="closeModal">
              &times;
            </button>
          </div>
          <!-- //알프 -->
          <!-- 아르고스 -->
          <div class="acc-box" @click="jumpTo(3)">
            <!-- 캐릭터 이름 -->
            <div class="char-name overflow-hidden">
              <p class="num text-2xl font-medium text-center">04</p>
              <span class="name-light"></span>
              <p class="name-tit font-normal">아르고스</p>
              <span class="char-thumb block"><img src="~/assets/images/sub/acc-char-thumb04.png" alt="아르고스"></span>
              <span class="acc-line"></span>
            </div>
            <!-- 캐릭터 콘텐츠 -->
            <div class="char-cont relative z-10 w-full h-full overflow-hidden">
              <div class="inner relative">
                <div class="info text-white absolute z-10">
                  <p class="info-tit text-center text-3xl opacity-[.7] font-bold z-10 relative">Character</p>
                  <div class="info-wrap relative">
                    <div class="tit-wrap relative z-10">
                      <p class="tit text-[1.75rem] font-normal">아르고스</p>
                      <p class="opacity-[.5] text-[0.94rem] font-normal">주인공</p>
                    </div>
                    <p class="text-[1.06rem] font-normal relative z-10 leading-[1.6]">
                      말재간 좋은 바텐더 청년. 성공을 꿈꾸며 야심 차게 메이드 <br>
                      협회에 가입했으나, 현실은 생각처럼 녹록치 않았다. 그래도 <br>
                      일은 해야 했기에, 아르코스는 바 카운터 뒤에서 오가는 말에 <br>
                      귀를 기울이며 때를…… 기다리고 있다.
                    </p>
                  </div>
                </div>
                <img src="~/assets/images/sub/char-cont-image04.png" alt="아르고스 캐릭터" class="char-thumb">
              </div>
            </div>
            <button class="modal-close absolute bottom-[50px] left-[20px] w-[126px] h-[145px] flex justify-center items-center z-[100]" @click="closeModal">
              &times;
            </button>
          </div>
          <!-- //아르고스 -->
        </div>
        <!-- 세로 step들: 실제 스크롤 트리거 -->
        <div class="char-steps" ref="stepsRef">
          <div class="char-step" v-for="i in 4" :key="i"></div>
        </div>
      </div>
    </section>
    </Transition>
    <!-- //캐릭터 소개 모달 -->

  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'sub', 
  })

  import Container from '~/components/Container.vue';
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import { useNuxtApp } from '#app'

  const { $gsap, $ScrollTrigger, $lenis } = useNuxtApp()

  // section 01 refs
  const introSection = ref(null)
  const movieBg = ref(null)
  const bgVideo = ref(null)
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

  // 캐릭터 소개 모달 열기 함수
  const showCharModal = ref(false)

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
    let restartIntroVideo = false;

    const scrollIntro = $gsap.timeline()
    .to(titleArea.value, { opacity: 1, duration: 0 })   // 시작값
    .to(titleArea.value, { opacity: 0, duration: 1 })   // 끝으로 갈수록 점점 사라짐

    .add(() => {
      if (!restartIntroVideo) {
        bgVideo.value.currentTime = 0;
        bgVideo.value.play();
        restartIntroVideo = true;
      }
    }, "videoIntroRestart")  // label
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
      end: "+=" + scrollIntro.duration() * 600,
      pin: titleArea.value,
      scrub: 2,
      animation: scrollIntro,
      // markers: true,

      onUpdate(self) {
        const progress = self.progress;
        const currentTime = scrollIntro.totalDuration() * progress;

        const t1 = scrollIntro.labels["videoIntroRestart"];

        if (currentTime < t1) {
          restartIntroVideo = false;
        }
      }
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

    /*-----------------------*/
    // 05. 게임소개 섹션 - 게임소개 타임라인 애니메이션
    /*-----------------------*/
    const movieDimmed = descriptionSec.value.querySelector(".movie-dimmed");
    const videoDes1 = descriptionSec.value.querySelector(".movie-bg-des.sec01");
    const videoDes2 = descriptionSec.value.querySelector(".movie-bg-des.sec02");
    const video1 = videoDes1.querySelector("video");
    const video2 = videoDes2.querySelector("video");
    const textDes1 = descriptionSec.value.querySelector(".text-area.sec01");
    const textDes1inner = textDes1.querySelector(".text-box");
    const textDes2 = descriptionSec.value.querySelector(".text-area.sec02");
    const textDes2inner = textDes2.querySelector(".text-box");
    const textDes3 = descriptionSec.value.querySelector(".text-area.sec03");
    const textDes3inner = textDes3.querySelector(".text-box");

    let restarted1 = false; // sec01
    let restarted2 = false; // sec02

    const desBgTimeline = $gsap.timeline()
    // (01) 비디오 딤드 투명해지면서 첫번째 비디오 밝아짐, 첫번째 텍스트 나타남
    .fromTo(movieDimmed, { opacity: 1 }, { opacity: .5, duration: 4 })
    .to(textDes1, { opacity: 1, duration: 3}, "<") // 동시 진행
    .fromTo(textDes1inner, { y: "30px", "mask-image": "radial-gradient(circle, black -30%, transparent 60%);" }, { "mask-image": "radial-gradient(circle, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행
    // 첫 번째 비디오 리셋
    .add(() => {
    if (!restarted1) {
      video1.currentTime = 0;
      video1.play();
      restarted1 = true;
    }
    }, "videoRestart1")  // label #1
    // (02) 첫번째 비디오 서서히 사라짐, 첫번째 텍스트 사라짐
    .to(videoDes1, { opacity: 0, duration: 4 })
    .to(textDes1inner, { "mask-image": "radial-gradient(circle, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2") // 이전 효과 후 바로 실행
    .to(textDes1, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
    .to(textDes1, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행
    // (03) 두번째 비디오 서서히 나타남, 두번째 텍스트 나타남
    .fromTo(videoDes2, { opacity: 0 }, { opacity: 1, duration: 4 },">-1") // 이전 효과 진행 후 바로 실행
    
    .to(textDes2, { opacity: 1, duration: 3 }, "<") //동시 진행
    .fromTo(textDes2inner, { y: "30px", "mask-image": "radial-gradient(circle, black -30%, transparent 60%);"}, { "mask-image": "radial-gradient(circle, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행
    
    // (04) 두번째 텍스트 사라짐
    .to(textDes2, { opacity: 0, duration: 4 })
    .to(textDes2inner, { "mask-image": "radial-gradient(circle, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2")

    // (05) 세번째 텍스트 나타남
    .to(textDes3, { opacity: 1, duration: 3 }, ">+0.01") //이전 효과 후 바로 실행
    .fromTo(textDes3inner, { y: "30px", "mask-image": "radial-gradient(circle, black -30%, transparent 60%);"}, { "mask-image": "radial-gradient(circle, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행


    
    // 두 번째 비디오 리셋
    .add(() => {
    if (!restarted2) {
      video2.currentTime = 0;
      video2.play();
      restarted2 = true;
    }
    }, "videoRestart2")  // label #2
    
    $ScrollTrigger.create({
      trigger: descriptionSec.value,
      start: 'top top',
      end: "+=" + desBgTimeline.duration() * 700, // timeline 길이에 자동 매칭
      pin: true,
      scrub: 2,
      animation: desBgTimeline,
      // markers: true,

      onUpdate(self) {
        const progress = self.progress;
        const currentTime = desBgTimeline.totalDuration() * progress;

        const t1 = desBgTimeline.labels["videoRestart1"];
        const t2 = desBgTimeline.labels["videoRestart2"];

        // 첫 번째 비디오 재실행 가능하도록
        if (currentTime < t1) {
          restarted1 = false;
        }

        // 두 번째 비디오 재실행 가능하도록
        if (currentTime < t2) {
          restarted2 = false;
        }
      }
    })
  });

  /*-----------------------
  other. 캐릭터 소개 섹션
-----------------------*/

  // refs
  const modalContentRef = ref(null)
  const accordionRef = ref(null)
  const stepsRef = ref(null)

  // 상태값
  const modalTriggers = []

  // (A) 현재 페이지에서 실행 중인 ScrollTrigger 수집
  const getPageTriggers = () => {
    return $ScrollTrigger.getAll().filter(st => !modalTriggers.includes(st))
  }

  // (B) 세로 step 스크롤 트리거 만들기
  const initStepsTriggers = () => {
    const steps = stepsRef.value.querySelectorAll('.char-step')

    steps.forEach((step, index) => {
      const st = $ScrollTrigger.create({
        trigger: step,
        scroller: modalContentRef.value,
        start: "top 50%", 
        end: "bottom 50%",
        onEnter: () => {
          if (!isScrollingByClick) setActive(index)
        },
        onEnterBack: () => {
          if (!isScrollingByClick) setActive(index)
        },
        // markers: true,
      })

      modalTriggers.push(st)
    })
  }


  // (C) 모달 열기
  const openModal = async () => {
    showCharModal.value = true
    document.body.style.overflow = "hidden"

    // Lenis off
    $lenis.options.smoothWheel = false
    $lenis.options.smoothTouch = false

    // 페이지 scrollTrigger 중지
    getPageTriggers().forEach(st => st.disable(false))

    await nextTick()
    initStepsTriggers()
    setActive(0)
  }

  // (D) 모달 닫기
  const closeModal = () => {
    showCharModal.value = false
    document.body.style.overflow = ""

    // Lenis on
    $lenis.options.smoothWheel = true
    $lenis.options.smoothTouch = true

    // 모달 트리거 제거
    modalTriggers.forEach(st => st.kill())
    modalTriggers.length = 0

    // 페이지 트리거 다시 활성화
    getPageTriggers().forEach(st => st.enable(false))

    $ScrollTrigger.refresh()
  }

  // (E) active index 반영
  const setActive = (index) => {

    // 1) 가로 아코디언
    const acc = accordionRef.value.querySelectorAll('.acc-box')
    acc.forEach((box, i) => {
      box.classList.toggle('open', i === index)
      setTimeout(() => {
        box.querySelector('.char-cont').classList.toggle('open', i === index)
      }, 500)
    })

    // 2) 세로 step
    const steps = stepsRef.value.querySelectorAll('.char-step')
    steps.forEach((step, i) => {
      step.classList.toggle('open', i === index)
    })
  }


  // (F) 아코디언 클릭 → 해당 step으로 스크롤
  let isScrollingByClick = false

  const jumpTo = (index) => {
    const steps = stepsRef.value.querySelectorAll('.char-step')
    const target = steps[index]

    isScrollingByClick = true

    $gsap.to(modalContentRef.value, {
      scrollTo: target.offsetTop,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setActive(index)
        isScrollingByClick = false

        // 스크롤 위치 계산을 다시 맞춰야 불안정함 사라짐
        $ScrollTrigger.refresh()
      }
    })
  }

</script>

<style scoped>
  
</style>