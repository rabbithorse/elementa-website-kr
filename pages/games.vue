<template>
  <div>
    <!-- section01 : 인트로 -->
    <section class="intro relative overflow-hidden" ref="introSection">
      <div class="movie-bg w-full sticky top-0 left-0" ref="movieBg">
        <video ref="bgVideo" class="video-bg" autoplay loop muted playsinline preload="none">
          <source src="~/assets/videos/game_visuals_06.mp4" type="video/mp4" />
        </video>
        <div class="intro-vid-cover absolute w-full h-full top-0 left-0 bg-black"></div>
      </div>
      <div class="panel_01 vh-section-40"></div>
      <div class="title-area-wrap absolute left-0 top-0 w-full flex flex-col justify-center items-center vh-section">
        <div class="title-area text-center flex justify-center items-center" ref="titleArea">
          <img src="~/assets/images/sub/game-logo01.png" alt="실버 팰리스" class="block">
        </div>
      </div>
    </section>
    <!-- section02 : 대사 씬 -->
    <section class="cut-scene w-full relative overflow-hidden vh-section" ref="cutScene">
      <!-- 씬 1 -->
      <div class="cut_01 w-full h-full flex items-end absolute z-20" ref="cutBg01">
        <!-- 씬 1 배경 -->
        <div class="cut_01_inner absolute sm:bottom-0 left-0 w-full">
            <img src="~/assets/images/sub/cut-scene-01.png" alt="scene image 1" class="pc-scene">
            <img src="~/assets/images/sub/cut-scene-01-m.jpg" alt="scene image 1" class="m-scene">
        </div>
        <!-- 씬 1 대사 -->
        <Container>
          <div class="line-box absolute flex items-end" ref="cutLine01">
            <div class="line01-1 grow flex flex-col justify-center relative" ref="line01_1">
              <p class="title lg:text-2xl sm:text-lg text-[0.94rem] font-semibold absolute z-10">실버니아</p>
              <p class="text-white normal lg:text-2xl sm:text-[0.94rem] text-sm">큰 화재가 있었어.</p>
              <p class="text-white normal lg:text-2xl sm:text-[0.94rem] text-sm">많은 사상자가 나왔고.. 모두 잿더미가 됐지.</p>
              <p class="text-white normal-2 lg:text-2xl sm:text-[0.94rem] text-sm">그래서 최고의 탐정이 필요해.</p>
            </div>
          </div>
        </Container>
      </div>
      <!-- //씬 1 -->
      <!-- 씬 2 -->
      <div class="cut_02 w-full h-full flex items-end absolute z-10" ref="cutBg02">
        <!-- 씬 2 배경 -->
        <div class="cut_02_inner absolute bottom-0 left-0 w-full">
            <img src="~/assets/images/sub/cut-scene-02.png" alt="scene image 2" class="pc-scene">
            <img src="~/assets/images/sub/cut-scene-02-m.jpg" alt="scene image 2" class="m-scene">
        </div>
        <!-- 씬 2 대사 -->
        <Container>
          <div class="line-box absolute flex items-end" ref="cutLine02">
            <div class="line02-1 grow flex flex-col justify-center relative" ref="line02_1">
              <p class="title lg:text-2xl sm:text-lg text-[0.94rem] font-semibold absolute">탐정</p>
              <p class="text-white normal lg:text-2xl sm:text-[0.94rem] text-sm">하지만 실버니아는 최고의 도시가 아니지.</p>
            </div>
          </div>
        </Container>
      </div>
      <!-- //씬 2 -->
      <button class="cutscene-replay-btn text-white text-base absolute left-0 bottom-[40px] xl:hidden z-10" ref="replayBtn">다시보기</button>
    </section>
    <!-- section03 : 게임 설명 intro-->
    <section class="description relative overflow-hidden vh-section" ref="descriptionSec">
      <div class="movie-dimmed absolute w-full h-full top-0 left-0 z-30"></div>
      <!-- video 1 -->
      <div class="movie-bg-des absolute sec01 w-full top-0 left-0 z-20 vh-section">
        <video class="video-bg" autoplay loop muted playsinline preload="none">
          <source src="~/assets/videos/game_visuals_01.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 2 -->
      <div class="movie-bg-des absolute sec02 w-full top-0 left-0 z-10 vh-section">
        <video class="video-bg" autoplay loop muted playsinline preload="none">
          <source src="~/assets/videos/game_visuals_02.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 3 -->
      <div class="movie-bg-des absolute sec03 w-full top-0 left-0 z-10 vh-section">
        <video class="video-bg" autoplay loop muted playsinline preload="none">
          <source src="~/assets/videos/game_visuals_03.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 4 -->
      <div class="movie-bg-des absolute sec04 w-full top-0 left-0 z-10 vh-section">
        <video class="video-bg" autoplay loop muted playsinline preload="none">
          <source src="~/assets/videos/game_visuals_04.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 5 -->
      <div class="movie-bg-des absolute sec05 w-full top-0 left-0 z-10 vh-section">
        <video class="video-bg" autoplay loop muted playsinline preload="none">
          <source src="~/assets/videos/game_visuals_05.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 6 -->
      <div class="movie-bg-des absolute sec06 w-full top-0 left-0 z-10 vh-section">
        <video class="video-bg" autoplay loop muted playsinline preload="none">
          <source src="~/assets/videos/game_visuals_06.mp4" type="video/mp4" />
        </video>
      </div>

     <!-- text 6 -->
      <Container>
      <div class="text-area sec06 flex w-full lg:justify-end justify-center items-end z-40 absolute top-0 left-0 vh-section">
        <div class="text-box game-info bottom relative">
          <div class="game-info-title relative z-10 left">
            <span class="block lg:text-lg text-xs">강력한 액션과 짜릿한 쾌감</span>
            <p class="text-white lg:text-[1.75rem] text-lg font-normal">스타일리시 배틀</p>
          </div>
          <div class="game-info-cont relative z-10 lg:py-[2.5rem] py-[1.88rem] lg:px-[1.88rem] px-[1.25rem]">
            <p class="text-white lg:text-[1.06rem] text-sm break-keep">각기 다른 개성을 가진 동료들과 함께 싸우고, <br>속도감 넘치는 액션과 타격감으로 전장을 지배하라.</p>
            <p class="text-white lg:text-[1.06rem] text-sm pt-[1.25rem] break-keep">한 발의 총성과 한 번의 선택이 역사를 다시 쓰는 <br>짜릿한 경험이 펼쳐진다.</p>
          </div>
        </div>
      </div>
      </Container>
      <!-- text 5 -->
      <div class="text-area sec05 flex w-full justify-center items-center z-40 absolute top-0 left-0 vh-section">
        <div class="text-box text-center">
          <span class="lg:text-2xl text-lg font-semibold relative">강력한 액션과 짜릿한 쾌감</span>
          <div class="text-white text-2xl lg:leading-[1.7] xl:py-[55px] py-[35px] mt-[30px] sub-text type2 relative">
            <p class="text-white xl:text-[3.44rem] lg:text-4xl sm:text-[1.63rem] text-[1.53rem] title tracking-[-1.75px] relative font-semibold z-10">
            <EffectFlotingDotsOther />
            콤보와 QTE로 완성되는 <br class="lg:hidden block">스타일리시 배틀</p>
          </div>
        </div>
      </div>
      <!-- text 4_2 -->
      <Container>
      <div class="text-area sec04_2 flex w-full lg:justify-start justify-center lg:items-start items-end z-40 absolute top-0 left-0 vh-section">
        <div class="text-box game-info left relative">
          <div class="game-info-title relative z-10 left">
            <span class="block lg:text-lg text-xs">압도적 비주얼과 시대적 배경</span>
            <p class="text-white lg:text-[1.75rem] text-lg font-normal">살아 숨 쉬는 배경</p>
          </div>
          <div class="game-info-cont relative z-10 lg:py-[2.5rem] py-[1.88rem] lg:px-[1.88rem] px-[1.25rem]">
            <p class="text-white lg:text-[1.06rem] text-sm break-keep">언리얼 엔진 5로 구현된 빅토리아풍의 대도시 실버니아.</p>
            <p class="text-white lg:text-[1.06rem] text-sm pt-[1.25rem] break-keep">찬란한 번영과 몰락의 그림자가 교차하는 실버니아에서 <br>압도적 스케일의 드라마가 펼쳐진다.</p>
          </div>
        </div>
      </div>
      </Container>
      <!-- text 4 -->
      <div class="text-area sec04 flex w-full justify-center items-center z-40 absolute top-0 left-0 vh-section">
        <div class="text-box text-center">
          <span class="lg:text-2xl text-lg font-semibold relative">압도적 비주얼과 시대적 배경</span>
          <div class="text-white text-2xl lg:leading-[1.7] xl:py-[55px] py-[35px] mt-[30px] sub-text type2 relative">
            <p class="text-white xl:text-[3.44rem] lg:text-4xl sm:text-[1.63rem] text-[1.53rem] title tracking-[-1.75px] relative font-semibold z-10">
            <EffectFlotingDotsOther />
            압도적 스케일의 살아 숨 쉬는 배경</p>
          </div>
        </div>
      </div>
      <!-- text 3 -->
      <Container>
      <div class="text-area sec03 flex w-full lg:justify-end justify-center lg:items-start items-end z-40 absolute top-0 left-0 vh-section">
        <div class="text-box game-info relative">
          <div class="game-info-title relative z-10">
            <span class="block lg:text-lg text-xs">독창적 세계관</span>
            <p class="text-white lg:text-[1.75rem] text-lg font-normal">미스터리 판타지</p>
          </div>
          <div class="game-info-cont relative z-10 lg:py-[2.5rem] py-[1.88rem] lg:px-[1.88rem] px-[1.25rem]">
            <p class="text-white lg:text-[1.06rem] text-sm break-keep">숨 막히는 사건, 교차하는 음모, <br>그리고 3년 만에 돌아온 탐정.</p>
            <p class="text-white lg:text-[1.06rem] text-sm pt-[1.25rem] break-keep">현실과 우화가 겹쳐진 실버니아에서, <br>플레이어는 진실을 찾아내고 도시의 운명을 뒤바꾼다. <br>누구도 예상치 못한 반전과 깊이 있는 스토리가 당신을 기다린다.</p>
          </div>
        </div>
      </div>
      </Container>
      <!-- text 2 -->
      <div class="text-area sec02 flex w-full justify-center items-center z-40 absolute top-0 left-0 vh-section">
        <div class="text-box text-center">
          <span class="lg:text-2xl text-lg font-semibold relative">독창적 세계관</span>
          <div class="text-white text-2xl lg:leading-[1.7] xl:py-[55px] py-[35px] mt-[30px] sub-text type2 relative">
            <p class="text-white xl:text-[3.44rem] lg:text-4xl sm:text-[1.63rem] text-[1.53rem] title tracking-[-1.65px] relative font-semibold z-10">
            <EffectFlotingDotsOther />
            탐정 서사와 흑동화로 완성된 <br class="lg:hidden block">미스터리 판타지</p>
          </div>
        </div>
      </div>
      <!-- text 1 -->
      <div class="text-area sec01 flex flex-col w-full justify-center items-center z-40 absolute top-0 left-0 vh-section">
        <div class="text-box text-center">
          <span class="lg:text-2xl text-lg font-semibold">Intro</span>
          <p class="text-white xl:text-[3.44rem] lg:text-4xl sm:text-[1.63rem] text-[1.53rem] lg:pt-[20px] pt-[5px] title tracking-[-1.65px] relative font-semibold">
            <EffectFlotingDotsOther />
            사건의 진위, 그 무대의 서막
          </p>
          <div class="text-white xl:text-[1.5rem] lg:text-[1.125rem] text-[0.94rem] leading-[1.6] xl:py-[60px] py-[40px] sub-text lg:mt-[40px] mt-[30px] lg:mx-[0px] mx-[15px] relative">펠리아나 3년, 다시 실버니아로 돌아온 탐정. <br class="lg:hidden block">그리고 현실과 우화가 뒤섞이고, <br class="lg:hidden block">번영과 몰락의 경계에 서 있는 실버니아. <br>
          사교와 조사, 판단 그리고 전투, <br class="lg:hidden block">당신이 그 총알 한 발의 진실을 찾아낸다면, <br class="lg:hidden block">자신은 물론, 모든 이들의 운명까지 결정짓게 될 것이다.</div>
        </div>
        <ButtonsBasic color="yellow" size="lg" id="openChar" @click="openModal">캐릭터 소개</ButtonsBasic>
      </div>
    </section>
    <!-- section04 : 유튜브 영상-->
    <section class="youtube-area relative overflow-visible" ref="youtubeArea">
      <div class="video-wrap w-full flex justify-center items-center relative vh-section">
        <div class="bg-text flex flex-col justify-center items-center">
          <p class="font-extrabold">SILVER</p>
          <p class="font-extrabold">PALACE</p>
        </div>
        <Container>
        <div class="inner-video w-full h-full flex justify-center items-center relative">
          <div class="dumy-box-left relative"><span class="font-bold">Official Trailer</span></div>
          <div class="video-box relative">
            <div class="movie-frame relative z-10">
              <div class="w-full mx-auto aspect-video">
                <iframe
                  class="w-full h-full js-youtube"
                  src="https://www.youtube.com/embed/iFXoYNc9-vA?controls=1&rel=0&playsinline=1"
                  data-src-play="https://www.youtube.com/embed/iFXoYNc9-vA?autoplay=1&mute=1&controls=1&rel=0&playsinline=1"
                  data-src-stop="https://www.youtube.com/embed/iFXoYNc9-vA?controls=1&rel=0&playsinline=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div class="dumy-box-right"></div>
        </div>
        </Container>
      </div>
      <section class="xl:h-[500px] h-[300px]"></section>
    </section>
    <!-- 위 영역과 간격 -->
    <!-- section05 : 수사보드 -->
    <section class="inv-board overflow-hidden relative xl:block hidden" ref="invBoard">
      <div class="inv-dimmed absolute z-10 w-full h-full top-0 left-0"></div>
      <div class="in-camera w-full overflow-hidden relative vh-section">
        <div class="bg relative flex flex-col items-center justify-end overflow-visible">
          <!-- 배경 캔버스 -->
          <canvas class="bg-canvas absolute top-0 left-0 w-full h-full" id="boardCanvas"></canvas>
          <!-- 처음 ~ 두번째 지점 사진 -->
          <div class="picbox-01 w-full absolute z-20">
            <div class="box1 absolute z-20"><img src="~/assets/images/sub/inv-board-box1.webp" alt="point 1 image"></div>
            <div class="box2 absolute z-10"><img src="~/assets/images/sub/inv-board-box2.webp" alt="point1 image 2"></div>
            <div class="box2-5 absolute z-10"><img src="~/assets/images/sub/inv-board-box2-5.webp" alt="point1~2 image"></div>

            <div class="box3 absolute z-20"><img src="~/assets/images/sub/inv-board-box3.webp" alt="point 2 image"></div>
            <div class="box4 absolute z-10"><img src="~/assets/images/sub/inv-board-box4.webp" alt="point 2 image 2"></div>
          </div>
          <!-- 세번째 ~ 네번째 지점 사진 -->
          <div class="picbox-02 w-full absolute z-10">
            <div class="box5 absolute z-20"><img src="~/assets/images/sub/inv-board-box5.webp" alt="point 3 image"></div>
            <div class="box5-5 absolute z-10"><span class="text-[100px] font-normal text-center leading-[1.2]">펠리아나 3년 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;번영과 몰락의 경계</span></div>
            <div class="box6 absolute z-20"><img src="~/assets/images/sub/inv-board-box6.webp" alt="point 4 image"></div>
            <div class="box6-5 absolute z-10"><span class="text-[100px] font-normal text-center leading-[1.2]">하지만 실버니아는 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최고의 도시가 아니지.</span></div>
          </div>
          <!-- 다섯번째 ~ 여섯번째 지점 사진 -->
          <div class="picbox-03 w-full absolute">
            <div class="box7 absolute z-10"><img src="~/assets/images/sub/inv-board-box7.webp" alt="point 5 image"></div>
            <div class="box8 absolute z-10"><img src="~/assets/images/sub/inv-board-box8.webp" alt="point 6 image"></div>
          </div>
          <!-- 일곱번째 ~ 여덟번째 지점 사진 -->
          <div class="picbox-04 w-full absolute">
            <div class="box9 absolute"><img src="~/assets/images/sub/inv-board-box9.webp" alt="point 7 image 1"></div>
            <div class="box9-5 absolute text-center"><span class="text-[100px] font-normal text-center leading-[1.2]">당신이 그 총알 <br>한 발의 진실을 찾아낸다면,</span></div>
            
            <div class="box10 absolute"><img src="~/assets/images/sub/inv-board-box10.webp" alt="point 8 image 1"></div>
            <div class="box11 absolute"><img src="~/assets/images/sub/inv-board-box11.webp" alt="point 8 image 2"></div>

            <div class="box12 absolute"><img src="~/assets/images/sub/inv-board-box12.webp" alt="last image"></div>
          </div>
          <!-- 마지막 제작사 리스트 -->
          <ul class="text-white text-center flex flex-col gap-[195px] text-4xl z-30 credit-list" ref="creditList">
            <li class="credit-list-item"><span class="text-[0.94rem]">제작사, 배급사</span><img src="~/assets/images/sub/credit-logo.svg" alt="엘리멘타 로고"></li>
            <li class="credit-list-item"><span class="text-[0.94rem]">장르</span>서브컬처 빅월드 ARPG</li>
            <li class="credit-list-item"><span class="text-[0.94rem]">진출 국가</span>글로벌</li>
            <li class="credit-list-item"><span class="text-[0.94rem]">언어</span>다국어 지원</li>
            <li class="credit-list-item"><span class="text-xl">실버팰리스 알아보기</span></li>
          </ul>
          <ul class="z-40 pb-[600px] pt-[30px] flex justify-center items-center gap-[65px] credit-list-links">
            <li class="text-white text-lg"><a href="" role="button" aria-label="공유하기" class="block w-[80px] h-[80px]"></a></li>
            <li class="text-white text-lg"><a href="" role="button" aria-label="유튜브" class="block w-[80px] h-[80px]"></a></li>
            <li class="text-white text-lg"><a href="" role="button" aria-label="인스타그램" class="block w-[80px] h-[80px]"></a></li>
            <li class="text-white text-lg"><a href="" role="button" aria-label="x" class="block w-[80px] h-[80px]"></a></li>
            <li class="text-white text-lg"><a href="" role="button" aria-label="다운로드" class="block w-[80px] h-[80px]"></a></li>
          </ul>
          <div class="bg-line absolute top-0 left-0 z-30">
            <canvas class="line absolute w-full h-full top-0 left-0 z-50" id="boardLine"></canvas>
          </div>
        </div>        
      </div>
    </section>
    <!-- section06 : 에필로그 -->
    <section class="last-scene w-full overflow-hidden xl:block hidden vh-section" ref="lastScene">
      <div class="last-scene-inner w-full h-full relative">
        <!-- 비디오 -->
        <div class="w-full h-full top-0 left-0 z-20 absolute epilogue-video text-white">
          <video class="e-video-bg" muted playsinline preload="none">
            <source src="~/assets/videos/epilogue.mp4" type="video/mp4" />
          </video>
        </div>
        <!-- 엔딩 문구 -->
        <div class="epilogue-dimmed absolute  top-0 left-0 z-20 w-full"></div>
        <!-- 엔딩 text 2 -->
        <div class="e-text sec02 flex w-full justify-center items-center z-20 absolute top-0 left-0 vh-section">
          <div class="text-box text-center">
            <span class="lg:text-2xl text-lg font-semibold block">탐정</span>
            <p class="text-white xl:text-[3.44rem] lg:text-4xl sm:text-[1.63rem] text-[1.53rem] lg:pt-[20px] pt-[5px] title tracking-[-1.65px] relative font-semibold">당신이 다시 써줄 수 있다면</p>
            <div class="btn-wrap relative mt-[40px]">
              <ButtonsBasic color="yellow" size="lg-wide" id="dwnGame" href="">실버팰리스 다운로드</ButtonsBasic>
            </div>
          </div>
          <div class="bottom-link flex justify-between absolute w-full bottom-0 left-0 px-[3.13rem] pb-[5.63em] z-30">
            <ul class="flex justify-center items-center credit-list-links gap-[30px]">
              <li class="text-white text-lg"><a href="" role="button" aria-label="공유하기" class="block w-[60px] h-[60px]"></a></li>
              <li class="text-white text-lg"><a href="" role="button" aria-label="유튜브" class="block w-[60px] h-[60px]"></a></li>
              <li class="text-white text-lg"><a href="" role="button" aria-label="인스타그램" class="block w-[60px] h-[60px]"></a></li>
              <li class="text-white text-lg"><a href="" role="button" aria-label="x" class="block w-[60px] h-[60px]"></a></li>
              <li class="text-white text-lg"><a href="" role="button" aria-label="다운로드" class="block w-[60px] h-[60px]"></a></li>
            </ul>
            <a href="" class="bottom-dwn-link block w-[270px] h-[60px] rounded-[3.75rem]" aria-label="실버팰리스 다운로드"></a>
          </div>
        </div>
         <!-- 엔딩 text 1 -->
        <div class="e-text sec01 flex w-full justify-center items-center z-20 absolute top-0 left-0 vh-section">
          <div class="text-box text-center">
            <span class="lg:text-2xl text-lg font-semibold block">탐정</span>
            <p class="text-white xl:text-[3.44rem] lg:text-4xl sm:text-[1.63rem] text-[1.53rem] lg:pt-[20px] pt-[5px] title tracking-[-1.65px] relative font-semibold">우리는 운명에서 벗어날 수 없단 걸, <br>전 이미 깨달았죠.</p>
          </div>
        </div>
        <Container class="absolute left-1/2 -translate-x-1/2 transform top-[120px] z-20 e-side-text">
          <p class="relative text-white font-bold text-[1.75rem] opacity-[0.8] pl-[3.13rem]">Epilogue</p>
          <span class="smoke"></span>
        </Container>
        <!-- 비디오 커버 -->
        <div class="w-full h-full bg-white z-20 absolute video-cover"></div>
        <!-- 로고 홀더 -->
        <div class="text-mask-wrap w-full h-full relative z-30">
          <div class="logo-hole w-full h-full absolute left-0 top-0"></div>
          <div class="rec-hole w-full h-full absolute left-0 top-0"></div>
          <div class="mask-bg-line absolute left-0 top-0 w-full"></div>
        </div>
      </div>
    </section>
    <!-- section 06 : 에필로그 모바일 -->
    <section class="last-scene-m w-full overflow-hidden xl:hidden block relative vh-section" ref="lastSceneMobile">
      <div class="last-scene-m cover-dimmed absolute top-0 left-0 z-40 w-full h-full"></div>
      <div class="epilogue-dimmed absolute  top-0 left-0 z-20 w-full"></div>
      <Container class="absolute left-1/2 -translate-x-1/2 transform top-[100px] z-20 e-side-text">
        <p class="relative text-white font-bold text-xl opacity-[0.8] xl:pl-[3.13rem] sm:pl-[1.88rem] pl-[0px]">Epilogue</p>
        <span class="smoke"></span>
      </Container>

      
      <!-- 엔딩 text 2 -->
      <div class="e-text sec02 flex w-full justify-center items-center z-20 absolute top-0 left-0 vh-section">
        <div class="text-box text-center sm:mb-[0px] mb-[100px]">
          <span class="lg:text-2xl text-lg font-semibold block">탐정</span>
          <p class="text-white xl:text-[3.44rem] lg:text-4xl sm:text-[1.63rem] text-[1.53rem] lg:pt-[20px] pt-[5px] title tracking-[-1.65px] relative font-semibold">당신이 다시 써줄 수 있다면</p>
          <div class="btn-wrap relative mt-[20px]">
            <ButtonsBasic color="yellow" size="sm" id="dwnGame" href="">실버팰리스 다운로드</ButtonsBasic>
          </div>
        </div>
      </div>
      <!-- 엔딩 text 1 -->
      <div class="e-text sec01 flex w-full justify-center items-center z-20 absolute top-0 left-0 vh-section">
        <div class="text-box text-center sm:mb-[0px] mb-[30px]">
          <span class="lg:text-2xl text-lg font-semibold block">탐정</span>
          <p class="text-white xl:text-[3.44rem] lg:text-4xl sm:text-[1.63rem] text-[1.53rem] lg:pt-[20px] pt-[5px] title tracking-[-1.65px] relative font-semibold">우리는 운명에서 벗어날 수 없단 걸, <br>전 이미 깨달았죠.</p>
        </div>
      </div>

      <!-- 하단 링크 및 게임 다운로드 -->
      <div class="bottom-link flex items-center absolute w-full bottom-0 left-0 px-[10px] z-30">
        <div class="f-logo">
          <img src="~/assets/images/sub/game-logo01.png" alt="실버 팰리스" class="block">
        </div>
        <ul class="flex justify-center items-center credit-list-links">
          <li class="text-white text-lg"><a href="" role="button" aria-label="공유하기" class="block"></a></li>
          <li class="text-white text-lg"><a href="" role="button" aria-label="유튜브" class="block"></a></li>
          <li class="text-white text-lg"><a href="" role="button" aria-label="인스타그램" class="block"></a></li>
          <li class="text-white text-lg"><a href="" role="button" aria-label="x" class="block"></a></li>
          <li class="text-white text-lg"><a href="" role="button" aria-label="다운로드" class="block"></a></li>
        </ul>
        <a href="" class="bottom-dwn-link block rounded-[3.13rem]" aria-label="실버팰리스 다운로드"></a>
      </div>
    </section>

    <!-- 캐릭터 소개 모달 -->
    <Transition name="fade">
    <section class="character-intro-modal fixed inset-0 z-50" v-show="showCharModal">
      <div class="modal-inner bg-white w-full h-full relative overflow-y-auto" ref="modalContentRef">
        <!-- Sticky 가로 아코디언 -->
        <div class="char-accordion sticky top-0 flex md:flex-row flex-col" ref="accordionRef">
          <!-- 탐정 : 여 -->
          <div class="acc-box" @click="jumpTo(0)">
            <!-- 캐릭터 이름 -->
            <div class="char-name lg:overflow-hidden">
              <p class="num lg:text-2xl text-[0.94rem] font-medium md:text-center">01</p>
              <span class="name-light"></span>
              <p class="name-tit font-normal">탐정</p>
              <span class="char-thumb md:block hidden"><img src="~/assets/images/sub/acc-char-thumb01.png" alt="탐정"></span>
              <span class="char-thumb md:hidden block"><img src="~/assets/images/sub/acc-char-thumb01-m.png" alt="탐정"></span>
              <span class="acc-line"></span>
            </div>
            <!-- 캐릭터 콘텐츠 -->
            <div class="char-cont relative z-10 w-full h-full overflow-hidden">
              <div class="inner relative">
                <div class="info text-white absolute z-10">
                  <p class="info-tit text-center 2xl:text-3xl lg:text-2xl text-lg opacity-[.7] font-bold z-10 relative">Character</p>
                  <div class="info-wrap relative">
                    <div class="tit-wrap relative z-10">
                      <p class="tit 2xl:text-[1.75rem] text-xl font-normal">탐정</p>
                      <p class="opacity-[.5] lg:text-[0.94rem] text-xs font-normal">주인공</p>
                    </div>
                    <p class="2xl:text-[1.06rem] lg:text-sm text-xs font-normal relative z-10 leading-[1.6] break-keep">두뇌가 명석하고 능률적인 일처리를 선보이는 <br>
                    이성적이며 신뢰할 수 있는 탐정. <br>
                    현재 가족의 죽음을 둘러싼 진상을 밝히기 위해 분투하고 있다. <br>
                    파국적인 사건 이후 줄곧 실버니아를 더나 있었지만, <br>
                    3년이 지난 지금 다시 이곳에 돌아왔다.</p>
                  </div>
                </div>
                <img src="~/assets/images/sub/char-cont-image01.png" alt="탐정 캐릭터" class="char-thumb">
              </div>
            </div>
            <button class="modal-close absolute lg:w-[126px] lg:h-[145px] w-[63px] h-[68px] flex justify-center items-center z-[100]" @click="closeModal">
              &times;
            </button>
          </div>
          <!-- //탐정 : 여 -->
          <!-- 탐정 : 남 -->
          <div class="acc-box" @click="jumpTo(1)">
            <!-- 캐릭터 이름 -->
            <div class="char-name lg:overflow-hidden">
              <p class="num lg:text-2xl text-[0.94rem] font-medium md:text-center">02</p>
              <span class="name-light"></span>
              <p class="name-tit font-normal">탐정</p>
              <span class="char-thumb md:block hidden"><img src="~/assets/images/sub/acc-char-thumb02.png" alt="탐정"></span>
              <span class="char-thumb md:hidden block"><img src="~/assets/images/sub/acc-char-thumb02-m.png" alt="탐정"></span>
              <span class="acc-line"></span>
            </div>
            <!-- 캐릭터 콘텐츠 -->
            <div class="char-cont relative z-10 w-full h-full overflow-hidden">
              <div class="inner relative">
                <div class="info text-white absolute z-10">
                  <p class="info-tit text-center 2xl:text-3xl lg:text-2xl text-lg opacity-[.7] font-bold z-10 relative">Character</p>
                  <div class="info-wrap relative">
                    <div class="tit-wrap relative z-10">
                      <p class="tit 2xl:text-[1.75rem] text-xl font-normal">탐정</p>
                      <p class="opacity-[.5] lg:text-[0.94rem] text-xs font-normal">주인공</p>
                    </div>
                    <p class="2xl:text-[1.06rem] lg:text-sm  text-xs font-normal relative z-10 leading-[1.6] break-keep">
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
            <button class="modal-close absolute lg:w-[126px] lg:h-[145px] w-[63px] h-[68px] flex justify-center items-center z-[100]" @click="closeModal">
              &times;
            </button>
          </div>
          <!-- //탐정 : 남 -->
          <!-- 알프 -->
          <div class="acc-box" @click="jumpTo(2)">
            <!-- 캐릭터 이름 -->
            <div class="char-name lg:overflow-hidden">
              <p class="num lg:text-2xl text-[0.94rem] font-medium md:text-center">03</p>
              <span class="name-light"></span>
              <p class="name-tit font-normal">알프</p>
              <span class="char-thumb md:block hidden"><img src="~/assets/images/sub/acc-char-thumb03.png" alt="알프"></span>
              <span class="char-thumb md:hidden block"><img src="~/assets/images/sub/acc-char-thumb03-m.png" alt="알프"></span>
              <span class="acc-line"></span>
            </div>
            <!-- 캐릭터 콘텐츠 -->
            <div class="char-cont relative z-10 w-full h-full overflow-hidden">
              <div class="inner relative">
                <div class="info text-white absolute z-10">
                  <p class="info-tit text-center 2xl:text-3xl lg:text-2xl text-lg opacity-[.7] font-bold z-10 relative">Character</p>
                  <div class="info-wrap relative">
                    <div class="tit-wrap relative z-10">
                      <p class="tit 2xl:text-[1.75rem] text-xl font-normal">알프</p>
                      <p class="opacity-[.5] lg:text-[0.94rem] text-xs font-normal">주인공</p>
                    </div>
                    <p class="2xl:text-[1.06rem] lg:text-sm  text-xs font-normal relative z-10 leading-[1.6] break-keep">
                      메이드 협회의 49번 메이드로, 덤벙대고 고집스러운 소녀. <br>
                      탐정의 선한 본성을 본능적으로 느꼈는지, 항상 그 곁을 떠나려 <br class="sm:block hidden">
                      하지 않는다. 상식이 없고 가산ㄴ 미숙하며, 또 눈치도 없다. <br>
                      그녀는 세상 모든 것이 신선한 듯하다.
                    </p>
                  </div>
                </div>
                <img src="~/assets/images/sub/char-cont-image03.png" alt="알프 캐릭터" class="char-thumb">
              </div>
            </div>
            <button class="modal-close absolute lg:w-[126px] lg:h-[145px] w-[63px] h-[68px] flex justify-center items-center z-[100]" @click="closeModal">
              &times;
            </button>
          </div>
          <!-- //알프 -->
          <!-- 아르고스 -->
          <div class="acc-box" @click="jumpTo(3)">
            <!-- 캐릭터 이름 -->
            <div class="char-name lg:overflow-hidden">
              <p class="num lg:text-2xl text-[0.94rem] font-medium md:text-center">04</p>
              <span class="name-light"></span>
              <p class="name-tit font-normal">아르고스</p>
              <span class="char-thumb md:block hidden"><img src="~/assets/images/sub/acc-char-thumb04.png" alt="아르고스"></span>
              <span class="char-thumb md:hidden block"><img src="~/assets/images/sub/acc-char-thumb04-m.png" alt="아르고스"></span>
              <span class="acc-line"></span>
            </div>
            <!-- 캐릭터 콘텐츠 -->
            <div class="char-cont relative z-10 w-full h-full overflow-hidden">
              <div class="inner relative">
                <div class="info text-white absolute z-10">
                  <p class="info-tit text-center 2xl:text-3xl lg:text-2xl text-lg opacity-[.7] font-bold z-10 relative">Character</p>
                  <div class="info-wrap relative">
                    <div class="tit-wrap relative z-10">
                      <p class="tit 2xl:text-[1.75rem] text-xl font-normal">아르고스</p>
                      <p class="opacity-[.5] lg:text-[0.94rem] text-xs font-normal">주인공</p>
                    </div>
                    <p class="2xl:text-[1.06rem] lg:text-sm  text-xs font-normal relative z-10 leading-[1.6] break-keep">
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
            <button class="modal-close absolute lg:w-[126px] lg:h-[145px] w-[63px] h-[68px] flex justify-center items-center z-[100]" @click="closeModal">
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
  import { onBeforeRouteLeave } from 'vue-router'
  import Container from '~/components/Container.vue';
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import { useNuxtApp } from '#app'

  // 리사이즈 핸들러
  let handleResize = null

  const { $gsap, $ScrollTrigger, $lenis } = useNuxtApp()

  // section 01 refs - 인트로
  const introSection = ref(null)
  const movieBg = ref(null)
  const bgVideo = ref(null)
  const panel02 = ref(null)
  const titleArea = ref(null)

  // section 02 refs - 컷신
  const cutScene = ref(null)

  const cutLine01 = ref(null)
  const line01_1 = ref(null)
  const cutBg01 = ref(null)

  const cutLine02 = ref(null)
  const line02_1 = ref(null)
  const cutBg02 = ref(null)

  const replayBtn = ref(null);


  // 캐릭터 소개 모달 열기 함수
  const showCharModal = ref(false)

  // section 03 refs - 게임소개
  const descriptionSec = ref(null)

  // section 04 refs - 유튜브 영상
  const youtubeArea = ref(null)

  // section 05 refs - 수사보드
  const invBoard = ref(null)
  const creditList = ref(null)

  // section 06 refs - 마지막 영역
  const lastScene = ref(null)
  const lastSceneMobile = ref(null)

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

  // vh 자동계산 변수
  /*let vhTimer

  const setVh = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }*/

  /*-----------------------*/
    // 00. intro 섹션 - 초기 동작 애니메이션 세팅 & Lenis
  /*-----------------------*/

  onMounted(async () => {

    normalizeInstance = $ScrollTrigger.normalizeScroll({
      momentum: 0.08,
      allowNestedScroll: true,
      lockAxis: true,
    })

    await nextTick()

    const introVidDim = movieBg.value.querySelector('.intro-vid-cover')
    const video = bgVideo.value
    const introEl = introSection.value

    let faded = false

    const fadeOut = () => {
      if (faded) return
      faded = true

      $gsap.timeline({
        onComplete: () => {
          // CSS 최종 상태로 전환
          introEl.classList.add('is-intro-done')
        }
      })
      .to(introVidDim, {
        opacity: 0,
        duration: 0.9,
        ease: 'none'
      })
      .to(titleArea.value, {
        opacity: 1,
        duration: 0.9,
        ease: 'none'
      }, "<")
      .fromTo(
        movieBg.value,
        { scale: 1.5 },
        {
          scale: 1,
          duration: 4,
          ease: "power3.out"
        }, "<"
      )
    }

    video.addEventListener('loadeddata', fadeOut, { once: true })
    setTimeout(fadeOut, 800)
  })


onMounted(() => {

  $ScrollTrigger.config({
      ignoreMobileResize: true
    });

    /*-----------------------*/
    // 00. 모바일 높이 vh 계산 
    /*-----------------------*/
    // setVh()
    // window.addEventListener('resize', () => {
    //   clearTimeout(vhTimer)
    //   vhTimer = setTimeout(setVh, 150)
    // })

    /*-----------------------*/
    // 01. intro 섹션 - movieBg 고정
    /*-----------------------*/

      // $ScrollTrigger.create({
      //   trigger: introSection.value,
      //   start:  panel02.value.offsetTop + 'top',
      //   end: 'bottom top',
      //   pinspacing: true,
      //   pin: movieBg.value,
      //   pinType: "transform",
      //   scrub: 2,
      //   anticipatePin: 1,
      //   invalidateOnRefresh: true,
      //   //markers: true,
      // })
    

    /*-----------------------*/
    // 02. intro 섹션 - title 스크롤 효과
    /*-----------------------*/
    // title 효과 - intro 섹션 고정 + 인트로 섹션  사라짐
    let restartIntroVideo = false;

    const scrollIntro = $gsap.timeline()

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
      { opacity: 1 },
      { opacity: 0, duration: 0.4, ease: "none" },
    )
    .to(
      introSection.value,
      { opacity: 0, duration: 0.4, ease: "none" }, ">"
    )

    let introST;

    $ScrollTrigger.matchMedia({

      // PC
      "(min-width: 1280px)": () => {
        introST = $ScrollTrigger.create({
          trigger: introSection.value,
          start: "top top",
          end: "+=" + scrollIntro.duration() * 600,
          pin: titleArea.value,          
          pinType: "transform",
          scrub: 0.1,
          animation: scrollIntro,
          anticipatePin: 1.5,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,

          onUpdate(self) {
            const progress = self.progress;
            const currentTime = scrollIntro.totalDuration() * progress;
            const t1 = scrollIntro.labels["videoIntroRestart"];

            if (currentTime < t1) {
              restartIntroVideo = false;
            }
          }
        });
      },

      // Mobile
      "(max-width: 1279px)": () => {
        introST = $ScrollTrigger.create({
          trigger: introSection.value,
          start: "top top",
          end: "+=500",
          scrub: 0.1,                    
          animation: scrollIntro,
          anticipatePin: 1.5,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,

          onUpdate(self) {
            const progress = self.progress;
            const currentTime = scrollIntro.totalDuration() * progress;
            const t1 = scrollIntro.labels["videoIntroRestart"];

            if (currentTime < t1) {
              restartIntroVideo = false;
            }
          }
        });
      }

    });

    
    /*-----------------------*/
    // 03. 컷신 섹션 - 컷신 타임라인 애니메이션
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
    const cutSceneTimeline = $gsap.timeline({ paused: true })
    // (01) 컷 신 나옴
    .fromTo(cutScene.value, { opacity: 0 }, { opacity: 1, duration: 1 })

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
    .fromTo(cutLine02.value, { "filter": "blur(50px)", "transform": "translateX(100px)" }, { "filter": "blur(0px)", "transform": "translateX(0px)", duration: 1 },"<")//동시 실행

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

    // 컷 신 pc용
    $ScrollTrigger.matchMedia({
      "(min-width: 1280px)": () => {
        $ScrollTrigger.create({
          trigger: cutScene.value,
          start: 'top top',
          end: "+=" + cutSceneTimeline.duration() * 700, // timeline 길이에 자동 매칭
          // markers: true,
          scrub: 0.1,
          pin: true,
          animation: cutSceneTimeline,
          anticipatePin: 1.5,
          fastScrollEnd: true,         // 빠르게 스크롤 시 '튐' 방지
          invalidateOnRefresh: true,
        })
      }
    });

    // 컷 신 모바일용
    $ScrollTrigger.matchMedia({
      "(max-width: 1279px)": () => {

        $ScrollTrigger.create({
          trigger: cutScene.value,
          start: "center center",   // 화면 중앙쯤
          animation: cutSceneTimeline,
          end: "+=1", 
          once: true,
          pinType: "transform",
          onEnter: () => {
            cutSceneTimeline.restart();
          }
        });
      }
    });

    replayBtn.value?.addEventListener("click", () => {
      cutSceneTimeline.restart(true);
    });


    

    /*-----------------------*/
    // 05. 게임소개 섹션 - 게임소개 타임라인 애니메이션
    /*-----------------------*/
    const movieDimmed = descriptionSec.value.querySelector(".movie-dimmed");
    const videoDes1 = descriptionSec.value.querySelector(".movie-bg-des.sec01");
    const videoDes2 = descriptionSec.value.querySelector(".movie-bg-des.sec02");
    const videoDes3 = descriptionSec.value.querySelector(".movie-bg-des.sec03");
    const videoDes4 = descriptionSec.value.querySelector(".movie-bg-des.sec04");
    const videoDes5 = descriptionSec.value.querySelector(".movie-bg-des.sec05");
    const videoDes6 = descriptionSec.value.querySelector(".movie-bg-des.sec06");
    const textDes1 = descriptionSec.value.querySelector(".text-area.sec01");
    const textDes1inner = textDes1.querySelector(".text-box");
    const textDes2 = descriptionSec.value.querySelector(".text-area.sec02");
    const textDes2inner = textDes2.querySelector(".text-box");
    const textDes3 = descriptionSec.value.querySelector(".text-area.sec03");
    const textDes3inner = textDes3.querySelector(".text-box");
    const textDes4 = descriptionSec.value.querySelector(".text-area.sec04"); 
    const textDes4inner = textDes4.querySelector(".text-box");
    const textDes4_2 = descriptionSec.value.querySelector(".text-area.sec04_2");
    const textDes4inner_2 = textDes4_2.querySelector(".text-box");
    const textDes5 = descriptionSec.value.querySelector(".text-area.sec05"); 
    const textDes5inner = textDes5.querySelector(".text-box");
    const textDes6 = descriptionSec.value.querySelector(".text-area.sec06"); 
    const textDes6inner = textDes6.querySelector(".text-box");

    // 게임소개 타임라인 애니메이션
    $ScrollTrigger.matchMedia({
      "(min-width: 1280px)": () => {
        const desBgTimeline = $gsap.timeline({ paused: true })
        // (01) 비디오 딤드 투명해지면서 첫번째 비디오 밝아짐, 첫번째 텍스트 나타남
        .fromTo(movieDimmed, { opacity: 1 }, { opacity: 0, duration: 4 })
        .to(textDes1, { opacity: 1, duration: 3}, "<") // 동시 진행
        .fromTo(textDes1inner, { y: "30px", "mask-image": "radial-gradient(circle, black -30%, transparent 60%);" }, { "mask-image": "radial-gradient(circle, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행
      
        // (02) 첫번째 비디오 서서히 사라짐, 첫번째 텍스트 사라짐
        .to(videoDes1, { opacity: 0, duration: 4 })
        .to(textDes1inner, { "mask-image": "radial-gradient(circle, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2") // 이전 효과 후 바로 실행
        .to(textDes1, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
        .to(textDes1, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행
        
        // (03) 두번째 비디오 서서히 나타남, 두번째 텍스트 나타남
        .fromTo(videoDes2, { opacity: 0 }, { opacity: 1, duration: 4 },">-3") // 이전 효과 진행 후 바로 실행
        .to(textDes2, { opacity: 1, duration: 3 }, "<") //동시 진행
        .fromTo(textDes2inner, { y: "30px", "mask-image": "radial-gradient(circle, black -30%, transparent 60%);"}, { "mask-image": "radial-gradient(circle, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행
        
        // (04) 두번째 비디오 서서히 사라짐. 두번째 텍스트 사라짐
        .to(videoDes2, { opacity: 0, duration: 4 })
        .to(textDes2inner, { "mask-image": "radial-gradient(circle, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2")
        .to(textDes2, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
        .to(textDes2, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행
        
        // (05) 세번째 비디오 서서히 나타남, 세번째 텍스트 나타남
        .fromTo(videoDes3, { opacity: 0 }, { opacity: 1, duration: 4 },">-3") // 이전 효과 진행 후 바로 실행
        .to(textDes3, { opacity: 1, duration: 3 }, "<") //동시 진행
        .fromTo(textDes3inner, { y: "30px", "mask-image": "linear-gradient(to right, black -30%, transparent 60%);"}, { "mask-image": "linear-gradient(to right, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행
        
        // (06) 세번째 비디오 서서히 사라짐, 세번째 텍스트 사라짐
        .to(videoDes3, { opacity: 0, duration: 4 })
        .to(textDes3inner, { "mask-image": "linear-gradient(to right, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2")
        .to(textDes3, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
        .to(textDes3, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

        // (07) 네번째 비디오 서서히 나타남, 네번째 텍스트 나타남
        .fromTo(videoDes4, { opacity: 0 }, { opacity: 1, duration: 4 },">-3") // 이전 효과 진행 후 바로 실행
        .to(textDes4, { opacity: 1, duration: 3 }, "<") //동시 진행
        .fromTo(textDes4inner, { y: "30px", "mask-image": "radial-gradient(circle, black -30%, transparent 60%);"}, { "mask-image": "radial-gradient(circle, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행
        
        // (08) 네번째(4_1) 텍스트 사라짐
        .to(textDes4inner, { "mask-image": "radial-gradient(circle, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"})
        .to(textDes4, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
        .to(textDes4, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

        // (09) 네번째(4_2) 텍스트 나타남
        .to(textDes4_2, { opacity: 1, duration: 3 }, ">-2") //이전 효과 후 바로 실행
        .fromTo(textDes4inner_2, { y: "30px", "mask-image": "linear-gradient(to right, black -30%, transparent 60%);"}, { "mask-image": "linear-gradient(to right, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행

        // (10) 네번째 비디오 서서히 사라짐, 네번째(4-2) 텍스트 사라짐
        .to(videoDes4, { opacity: 0, duration: 4 })
        .to(textDes4inner_2, { "mask-image": "linear-gradient(to right, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2")
        .to(textDes4_2, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
        .to(textDes4_2, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

        // (11) 다섯번째 비디오 서서히 나타남, 다섯번째 텍스트 나타남
        .fromTo(videoDes5, { opacity: 0 }, { opacity: 1, duration: 4 },">-3") // 이전 효과 진행 후 바로 실행
        .to(textDes5, { opacity: 1, duration: 3 }, "<") //동시 진행
        .fromTo(textDes5inner, { y: "30px", "mask-image": "radial-gradient(circle, black -30%, transparent 60%);"}, { "mask-image": "radial-gradient(circle, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행

        // (12) 다섯번째 비디오 서서히 사라짐. 다섯번째 텍스트 사라짐
        .to(videoDes5, { opacity: 0, duration: 4 })
        .to(textDes5inner, { "mask-image": "radial-gradient(circle, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2")
        .to(textDes5, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
        .to(textDes5, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

        // (13) 여섯번째 비디오 서서히 나타남, 여섯번째 텍스트 나타남
        .fromTo(videoDes6, { opacity: 0 }, { opacity: 1, duration: 4 },">-3") // 이전 효과 진행 후 바로 실행
        .to(textDes6, { opacity: 1, duration: 3 }, "<") //동시 진행
        .fromTo(textDes6inner, { y: "30px", "mask-image": "linear-gradient(to right, black -30%, transparent 60%);"}, { "mask-image": "linear-gradient(to right, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행
        
        // (14) 여섯번째 비디오 서서히 사라짐, 여섯번째 텍스트 사라짐
        .to(videoDes6, { opacity: 0, duration: 2 })
        .to(textDes6, { opacity: 0, duration: 2 }, ">-2") // 이전 효과 후 바로 실행
        $ScrollTrigger.create({
          trigger: descriptionSec.value,
          start: 'top top',
          end: "+=" + desBgTimeline.duration() * 700, // timeline 길이에 자동 매칭
          pin: true,
          scrub: 0.1,
          animation: desBgTimeline,
          fastScrollEnd: true,         // 빠르게 스크롤 시 '튐' 방지
          invalidateOnRefresh: true,
          anticipatePin: 1.5
          // markers: true,
        })
      },
      // 모바일
      "(max-width: 1279px)": () => {
        const desBgTimelineMobile = $gsap.timeline({ paused: true })
        // (01) 비디오 딤드 투명해지면서 첫번째 비디오 밝아짐, 첫번째 텍스트 나타남
        .fromTo(movieDimmed, { opacity: 1 }, { opacity: 0, duration: 1 })
        .to(textDes1, { opacity: 1, duration: 1}, "<") // 동시 진행
        .fromTo(textDes1inner, { opacity: 0}, { opacity: 1, duration: 1, ease:"none"}, "<") // 동시 진행
      
        // (02) 첫번째 비디오 서서히 사라짐, 첫번째 텍스트 사라짐
        .to(videoDes1, { opacity: 0, duration: 1 })
        .to(textDes1inner, {opacity: 0, duration: 1, ease:"ease"}, "<") // 이전 효과 후 바로 실행
        .to(textDes1, { opacity: 0, duration: 1 }, "<") // 이전 효과 후 바로 실행
        .to(textDes1, { "visibility": "hidden"},"+=0.01") // 이전 효과 후 바로 실행
        
        // (03) 두번째 비디오 서서히 나타남, 두번째 텍스트 나타남
        .fromTo(videoDes2, { opacity: 0 }, { opacity: 1, duration: 1 }, ">-1") // 이전 효과 진행 후 바로 실행
        .to(textDes2, { opacity: 1, duration: 1 }, "<") //동시 진행
        .fromTo(textDes2inner, { opacity: 0}, { opacity: 1, duration: 1, ease:"none"}, "<") // 동시 진행
        
        // (04) 두번째 비디오 서서히 사라짐. 두번째 텍스트 사라짐
        .to(videoDes2, { opacity: 0, duration: 1 })
        .to(textDes2inner, {opacity: 0, duration: 1, ease:"ease"}, "<") // 이전 효과 후 바로 실행
        .to(textDes2, { opacity: 0, duration: 1 }, "<") // 이전 효과 후 바로 실행
        .to(textDes2, { "visibility": "hidden"},">+0.01") // 이전 효과 후 바로 실행

        // (05) 세번째 비디오 서서히 나타남, 세번째 텍스트 나타남
        .fromTo(videoDes3, { opacity: 0 }, { opacity: 1, duration: 1 }, ">-1") // 이전 효과 진행 후 바로 실행
        .to(textDes3, { opacity: 1, duration: 1 }, "<") //동시 진행
        .fromTo(textDes3inner, { opacity: 0}, { opacity: 1, duration: 1, ease:"none"}, "<") // 동시 진행
        
        // (06) 세번째 비디오 서서히 사라짐, 세번째 텍스트 사라짐
        .to(videoDes3, { opacity: 0, duration: 1 })
        .to(textDes3inner, {opacity: 0, duration: 1, ease:"ease"}, "<") // 이전 효과 후 바로 실행
        .to(textDes3, { opacity: 0, duration: 1 }) // 이전 효과 후 바로 실행
        .to(textDes3, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

        // (07) 네번째 비디오 서서히 나타남, 네번째 텍스트 나타남
        .fromTo(videoDes4, { opacity: 0 }, { opacity: 1, duration: 1 }, ">-2") // 이전 효과 진행 후 바로 실행
        .to(textDes4, { opacity: 1, duration: 1 }, "<") //동시 진행
        .fromTo(textDes4inner, { opacity: 0}, { opacity: 1, duration: 1, ease:"none"}, "<") // 동시 진행
        // (08) 네번째(4_1) 텍스트 사라짐
        .to(textDes4, { opacity: 0, duration: 1 }) // 이전 효과 후 바로 실행
        .to(textDes4, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

        // (09) 네번째(4_2) 텍스트 나타남
        .to(textDes4_2, { opacity: 1, duration: 1 }) //이전 효과 후 바로 실행
        // (10) 네번째 비디오 서서히 사라짐, 네번째(4-2) 텍스트 사라짐
        .to(videoDes4, { opacity: 0, duration: 1 })
        .to(textDes4inner_2, {opacity: 0, duration: 1, ease:"ease"}, "<") // 이전 효과 후 바로 실행
        .to(textDes4_2, { opacity: 0, duration: 1 }) // 이전 효과 후 바로 실행
        .to(textDes4_2, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

        // (11) 다섯번째 비디오 서서히 나타남, 다섯번째 텍스트 나타남
        .fromTo(videoDes5, { opacity: 0 }, { opacity: 1, duration: 1 }, ">-2") // 이전 효과 진행 후 바로 실행
        .to(textDes5, { opacity: 1, duration: 1 }, "<") //동시 진행
        .fromTo(textDes5inner, { opacity: 0}, { opacity: 1, duration: 1, ease:"none"}, "<") // 동시 진행

        // (12) 다섯번째 비디오 서서히 사라짐. 다섯번째 텍스트 사라짐
        .to(videoDes5, { opacity: 0, duration: 1 })
        .to(textDes5inner, {opacity: 0, duration: 1, ease:"ease"}, "<") // 이전 효과 후 바로 실행
        .to(textDes5, { opacity: 0, duration: 1 }) // 이전 효과 후 바로 실행
        .to(textDes5, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

        // (13) 여섯번째 비디오 서서히 나타남, 여섯번째 텍스트 나타남
        .fromTo(videoDes6, { opacity: 0 }, { opacity: 1, duration: 1 }, ">-2") // 이전 효과 진행 후 바로 실행
        .to(textDes6, { opacity: 1, duration: 1 }, "<") //동시 진행
        .fromTo(textDes6inner, { opacity: 0}, { opacity: 1, duration: 1, ease:"none"}, "<") // 동시 진행
        
        // (14) 여섯번째 비디오 서서히 사라짐, 여섯번째 텍스트 사라짐
        .to(videoDes6, { opacity: 0, duration: 1 })
        .to(textDes6inner, {opacity: 0, duration: 1, ease:"ease"}, "<") // 이전 효과 후 바로 실행 
        .to(textDes6, { opacity: 0, duration: 1 }) // 이전 효과 후 바로 실행
        .to(textDes6, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

        $ScrollTrigger.create({
          trigger: descriptionSec.value,
          start: 'top top',
          end: "+=8000", // timeline 길이에 자동 매칭
          pin: true,
          scrub: 2,
          animation: desBgTimelineMobile,
          fastScrollEnd: true,         // 빠르게 스크롤 시 '튐' 방지
          invalidateOnRefresh: true,
          anticipatePin: 1.5,
          pinType: "transform"
          // markers: true,
        })
      }
    });
     
    

    /*-----------------------*/
    // 06. 유튜브 영상 섹션
    /*-----------------------*/
    const dumyBoxLeft = youtubeArea.value.querySelector(".dumy-box-left");
    const dumyBoxRight = youtubeArea.value.querySelector(".dumy-box-right");
    const videoBox = youtubeArea.value.querySelector(".video-box");
    const bgText = youtubeArea.value.querySelector(".bg-text");

    const youtubeTimeline = $gsap.timeline()
    .fromTo(dumyBoxLeft, { y: "300px"}, { y: "0", duration: 4, ease: "power3.out" }) // 동시 진행
    .fromTo(dumyBoxRight, { y: "-300px"}, { y: "0", duration: 4, ease: "power3.out" }, "<") // 동시 진행
    .fromTo(bgText, {transform: "translate(-50%, -45%)"}, {duration: 2, ease: "power3.out", transform: "translate(-50%, -50%)"}, "<") // 동시 진행

    // 섹션 고정 전담 - 고정이 살짝 늦게 풀림
    $ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        $ScrollTrigger.create({
          trigger: youtubeArea.value,
          start: 'top top',
          end: "+=" + youtubeTimeline.duration() * 200,
          scrub: 2,
          pin: youtubeArea.value,
          pinType: "transform",
          anticipatePin: 1,
          fastScrollEnd: true,         // 빠르게 스크롤 시 '튐' 방지
          invalidateOnRefresh: true,
          preventOverlaps: true
          // markers: true,
        })
      }
    });

    // 애니메이션 재생 전담 - 타임라인 애니메이션만큼 end 지점 설정해서 애니메이션만큼 진행
    $ScrollTrigger.matchMedia({
      // 1024px 이상
      "(min-width: 1024px)": () => {
        $ScrollTrigger.create({
          trigger: videoBox,
          start: 'top bottom',
          end: "+=" + youtubeTimeline.duration() * 100 + " top",
          //markers: true,
          scrub: 2,
          animation: youtubeTimeline,
        })
      }
    });

    
    // 유튜브 섹션 사라짐 효과
    $ScrollTrigger.matchMedia({

      // 1280px 이상
      "(min-width: 1280px)": () => {
        $gsap.timeline({
          scrollTrigger: {
            trigger: youtubeArea.value,
            start: "center-=500 top",
            end: "+=699",
            scrub: 0.1,
            anticipatePin: 1.5,
            fastScrollEnd: true,
            preventOverlaps: true,
            // markers: true,
          }
        }).to(youtubeArea.value, {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out"
        })
      },

      // 1280px 미만
      "(max-width: 1279px)": () => {
        $gsap.timeline({
          scrollTrigger: {
            trigger: youtubeArea.value,
            start: "center-=300 top",
            end: "+=399",
            scrub: 0.1,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true, 
            pinType: "transform"
            // markers: true,
          }
        }).to(youtubeArea.value, {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out"
        })
      }

    });



    /*-----------------------*/
    // 07. 수사보드 섹션
    /*-----------------------*/

    
    // 배경 캔버스 생성
    const canvas = document.getElementById("boardCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = 5760;
    canvas.height = 6492;

    const bgImg = new Image();
    bgImg.src = new URL('@/assets/images/sub/board_bg_new.webp', import.meta.url).href;

    bgImg.onload = () => {
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);      
    };

    // 라인 캔버스 생성
    const canvasLine = document.getElementById("boardLine");
    if (!canvasLine) return;
    const ctxLine = canvasLine.getContext("2d");
    canvasLine.width = 5760;
    canvasLine.height = 6492;

    const bgImgLine = new Image();
    bgImgLine.src = new URL('@/assets/images/sub/inv-board-line-new.webp', import.meta.url).href;

    bgImgLine.onload = () => {
      ctxLine.drawImage(bgImgLine, 0, 0, canvasLine.width, canvasLine.height);
    };

    // 수사보드 변수
    const invDimmed = invBoard.value.querySelector(".inv-dimmed");
    const bgInvBoard = invBoard.value.querySelector(".bg");

    const box1 = invBoard.value.querySelector(".box1"); //1지점 사진들
    const box2 = invBoard.value.querySelector(".box2"); 
    const box2_5 = invBoard.value.querySelector(".box2-5");

    const box3 = invBoard.value.querySelector(".box3"); //2지점 사진들
    const box4 = invBoard.value.querySelector(".box4");

    const box5 = invBoard.value.querySelector(".box5"); //3지점 사진들과 텍스트
    const box5_5 = invBoard.value.querySelector(".box5-5");

    const box6 = invBoard.value.querySelector(".box6"); //4지점 텍스트와 사진들
    const box6_5 = invBoard.value.querySelector(".box6-5");

    const box7 = invBoard.value.querySelector(".box7"); //5지점 사진들

    const box8 = invBoard.value.querySelector(".box8"); //6지점 사진들

    const box9 = invBoard.value.querySelector(".box9"); //7지점 사진들과 텍스트
    const box9_5 = invBoard.value.querySelector(".box9-5");

    const box10 = invBoard.value.querySelector(".box10"); //8지점 사진들
    const box11 = invBoard.value.querySelector(".box11");

    const box12 = invBoard.value.querySelector(".box12");

    const creditListItems = creditList.value.querySelectorAll("li");

    // GPU 레이어 고정
    $gsap.set([bgInvBoard, box1, box2, box2_5, box3, box4, box5, box5_5, box6, box6_5, box7, box8, box9, box9_5, box10, box11, box12], {
      force3D: true,
      transform: "translate3d(0,0,0)" 
    });

    // 수사보드 사진 타임라인
    const pic01 = $gsap.timeline()
    .fromTo(box1, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" }) //1지점 사진들
    .fromTo(box2, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" })
    .fromTo(box2_5, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" })

    const pic02 = $gsap.timeline()
    .fromTo(box3, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" }) //2지점 사진들
    .fromTo(box4, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" })

    const pic03 = $gsap.timeline()
    .fromTo(box5, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" }) //3지점 사진들
    .fromTo(box5_5, { opacity: 0 }, { opacity: 0.05, duration: 0.5, ease: "none" })
        
    const pic04 = $gsap.timeline()
    .fromTo(box6, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" }) //4지점 사진들
    .fromTo(box6_5, { opacity: 0 }, { opacity: 0.05, duration: 0.5, ease: "none" })

    const pic05 = $gsap.timeline()
    .fromTo(box7, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" }) //5지점 사진들

    const pic06 = $gsap.timeline()
    .fromTo(box8, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" }) //6지점 사진들

    const pic07 = $gsap.timeline()
    .fromTo(box9, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" }) //7지점 사진들
    .fromTo(box9_5, { opacity: 0 }, { opacity: 0.05, duration: 0.5, ease: "none" },">+2")
        
    const pic08 = $gsap.timeline()
    .fromTo(box10, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" })
    .fromTo(box11, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "none" }, ">+0.5")
        
    const invBoardTimeline = $gsap.timeline()
    .to(invDimmed, {opacity: 0, duration: 0.3, ease: "none" })
    .to(invDimmed, {visibility: "hidden", duration: 0.3, ease: "none" })
    .addLabel("startMove") //1지점
    .to(bgInvBoard, {x:-998, y:-513 , duration: 2, ease: "none" , force3D: true}, "startMove+=1") //첫번째 구간 이동

    .addLabel("movePoint_01") //2지점
    .to(bgInvBoard, {x:-350, y:-999 , duration: 2, ease: "none", force3D: true }, "movePoint_01+=1") //두번쨰 구간 이동

    .addLabel("movePoint_02") //3지점 
    .to(bgInvBoard, {x:-2316, y:-1250 , duration: 2, ease: "none", force3D: true }, "movePoint_02+=1") //세번째 구간 이동

    .addLabel("movePoint_03") //4지점
    .to(bgInvBoard, {x:-1437, y:-2466 , duration: 2, ease: "none", force3D: true }, "movePoint_03+=1") //네번째 구간 이동

    .addLabel("movePoint_04") //5지점
    .to(bgInvBoard, {x:-2268, y:-2697 , duration: 2, ease: "none", force3D: true }, "movePoint_04+=1") //다섯번째 구간 이동

    .addLabel("movePoint_05") //6지점
    .to(bgInvBoard, {x:-3432, y:-2951 , duration: 2, ease: "none", force3D: true }, "movePoint_05+=1") //여섯번째 구간 이동

    .addLabel("movePoint_06") //7지점
    .to(bgInvBoard, {x:() => (window.innerWidth - bgInvBoard.offsetWidth) / 2, y: -3812, duration: 2, ease: "none", force3D: true }, "movePoint_06+=1") //일곱번째 구간 이동

    .addLabel("movePoint_07") //8지점
    .to(bgInvBoard, {x:() => (window.innerWidth - bgInvBoard.offsetWidth) / 2, y: -6092, duration: 3, ease: "none", force3D: true }, "movePoint_07+=1") // 마지막 구간으로 이동
    .fromTo(box12, { opacity: 0 }, { opacity: 0.6, duration: 0.5, ease: "none" }, "movePoint_07+=1.3")
    .fromTo(creditListItems, { opacity: 0 }, { opacity: 1, duration: 1, ease: "none", stagger: 0.2 }, "movePoint_07+=1") //크레딧 리스트 나타남
    .to(invBoard.value, {opacity: 0.5, duration: 0.3, ease: "none" })

    // 수사보드 라인 시점에 사진 등장
    invBoardTimeline.add(pic01, "startMove"); //1지점 사진 등
    invBoardTimeline.add(pic02, "startMove+=2"); //2지점 사진 등
    invBoardTimeline.add(pic03, "movePoint_01+=2"); //3지점 사진 등
    invBoardTimeline.add(pic04, "movePoint_02+=2"); //4지점 사진 등장 (3,4지점 사이
    invBoardTimeline.add(pic05, "movePoint_03+=2.5"); //5지점 사진 등
    invBoardTimeline.add(pic06, "movePoint_04+=2"); //6지점 사진 등
    invBoardTimeline.add(pic07, "movePoint_05+=2"); //7지점 사진 등
    invBoardTimeline.add(pic08, "movePoint_06+=2"); //8지점 사진 등장

    // invBoardTimeline 세팅 끝난 직후에 추가
    invBoardTimeline.progress(1);
    invBoardTimeline.progress(0);

    let invPc

    $ScrollTrigger.matchMedia({
      "(min-width: 1280px)": () => {
        invPc = $ScrollTrigger.create({
          trigger: invBoard.value,
          start: 'top+=1 top',
          end: "+=" + invBoardTimeline.duration() * 700,
          scrub: 1,
          smooth: 1,
          pin: true,
          //markers: true,
          animation: invBoardTimeline,
          anticipatePin: 3,
          invalidateOnRefresh: true, //리사이즈 시 트윈 리셋,
          fastScrollEnd: true,         // 빠르게 스크롤 시 '튐' 방지
          preventOverlaps: true
        })
      }
    })

    if (window.innerWidth < 1280) {
      invPc?.kill(true)
      invBoard.value.remove()
      $ScrollTrigger.refresh(true)
    }
        
    /*-----------------------*/
    // 08. 에필로그 섹션
    /*-----------------------*/


    // 로고 애니메이션, 비디오 재생 제어
    const logoHoleWrap = lastScene.value.querySelector(".text-mask-wrap");
    const logoHole = logoHoleWrap.querySelector(".logo-hole");
    const recHole = logoHoleWrap.querySelector(".rec-hole");
    const videoCover = lastScene.value.querySelector(".video-cover");
    const maskBgLine = logoHoleWrap.querySelector(".mask-bg-line");
    const eVideoWrap = lastScene.value.querySelector(".epilogue-video");
    const eVideo = eVideoWrap.querySelector(".e-video-bg");

    // 에필로그 문구
    const eDimmed = lastScene.value.querySelector(".epilogue-dimmed");
    const eText1 = lastScene.value.querySelector(".e-text.sec01");
    const eText2 = lastScene.value.querySelector(".e-text.sec02");

    $gsap.set([logoHole, recHole], {
      force3D: true,       
    })
    
    const EpilogueTimeline = $gsap.timeline({
      defaults: {
        ease: "none",
        overwrite: "auto"           
      }
    })
    .to(videoCover, { opacity: 0, duration: 1, ease: "power2.out",
      onComplete: () => {
        eVideo.currentTime = 0;  // 반드시 처음부터
        eVideo.play();
      }
    })
    
    // (01) 에필로그 로고 및 비디오 등장 애니메이션
    .fromTo(maskBgLine, {opacity: 0.5}, {opacity: 0, duration: 1, ease: "power2.out" }, "<") // 동시 진행
    .to([logoHole, recHole], { scale: 40.5, duration: 2, ease: "none" }, ">+0.5")
    .to([logoHole, recHole], { opacity: 0, duration: 1, ease: "none" }, "<")
    .to(maskBgLine, { "visibility": "hidden", duration: 0.01 }, ">+0.01") // 레이어 순서 때문에 뒤에 둠
    .to(logoHoleWrap, { "visibility": "hidden", duration: 0.01 }, "<") // 동시 진행
    .to(videoCover, {"visibility": "hidden", duration: 0.01 }, "<") // 동시 진행

    // (02) 에필로그 문구 애니메이션
    .fromTo(eDimmed, { opacity: 0 }, { opacity: 1, duration: 1, ease: "none" }, "<") // 에필로그 딤드 나타남, 동시 진행

    .fromTo(eText1, { opacity: 0 }, { opacity: 1, duration: 3, ease:"power1.in" }, "<") // 에필로그 문구1 나타남
    .to(eText1, { opacity: 0, duration: 1, ease:"power1.out" }, "+=0.2") // 에필로그 문구1 사라짐
    .to(eText1, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

    .fromTo(eText2, { opacity: 0, y: 20 }, { y:0, opacity: 1, duration: 1.5, ease:"power1.in",onReverseComplete: () => {
    // 역스크롤로 이 구간을 벗어날 때
      eVideo.currentTime = 0; // 비디오를 처음부터 재생 준비
      eVideo.play();
    }, }, "+=0.1") // 에필로그 문구2 나타남
    .to(eVideoWrap, { opacity: 0, duration: 2, ease: "power2.out"}, "+=0.01") // 비디오 서서히 사라짐

    let lastPc

    $ScrollTrigger.matchMedia({
      "(min-width: 1280px)": () => {
        lastPc = $ScrollTrigger.create({
          trigger: lastScene.value,
          start: "top+=1 top",
          end: "+=" + EpilogueTimeline.duration() * 700,  
          animation: EpilogueTimeline,
          scrub: 2,
          pin: true,
          anticipatePin: 1,            
          fastScrollEnd: true,         // 빠르게 스크롤 시 '튐' 방지
          invalidateOnRefresh: true,   // 리사이즈 시 값 재계산 (와이드 대응)
        })
      }
    })

    if (window.innerWidth < 1280) {
      lastPc?.kill(true)
      lastScene.value.remove()
      $ScrollTrigger.refresh(true)
    }

    /*-----------------------*/
    // 08_2. 에필로그 섹션 모바일
    /*-----------------------*/

    const eCoverDimmedMobile = lastSceneMobile.value.querySelector(".cover-dimmed");
    const eText1Mobile = lastSceneMobile.value.querySelector(".e-text.sec01");
    const eText2Mobile = lastSceneMobile.value.querySelector(".e-text.sec02");

    const EpilogueMobileTimeline = $gsap.timeline()
    .to(eCoverDimmedMobile, { opacity: 0, duration: 1, ease: "power2.out"})
    .to(eCoverDimmedMobile, { visibility: "hidden"}, ">+0.001")
    .fromTo(eText1Mobile, { opacity: 0 }, { opacity: 1, duration: 0.5, ease:"power1.in" },">+0.001") // 에필로그 문구1 나타남
    .to(eText1Mobile, { opacity: 0, duration: 0.5, ease:"power1.out" }, "+=0.5") // 에필로그 문구1 사라짐
    .to(eText1Mobile, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행
    .fromTo(eText2Mobile, { opacity: 0, y: 20 }, { y:0, opacity: 1, duration: 0.5, ease:"power1.in" }, "+=0.05") // 에필로그 문구2 나타남
    
    $ScrollTrigger.matchMedia({
      "(max-width: 1279px)": () => {
        $ScrollTrigger.create({
          trigger: lastSceneMobile.value,
          start: "top+=1 top",
          end: "+=1000",  
          animation: EpilogueMobileTimeline,  
          scrub: 0.8,
          pin: true,
          anticipatePin: 1.5,            
          fastScrollEnd: true,         // 빠르게 스크롤 시 '튐' 방지
          invalidateOnRefresh: true,   // 리사이즈 시 값 재계산 (와이드 대응)
          pinType: "transform"
        })
      }
    })
        
    /*-----------------------*/
    // 09. 리사이즈 시 ScrollTrigger 전체 재계산
    /*-----------------------*/
    handleResize = () => {
      $ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    requestAnimationFrame(() => {
      $ScrollTrigger.refresh()
    })

    // vh 단위 재설정
    // window.addEventListener('resize', setVh);
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
        //markers: true,
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

  onUnmounted(() => {
    // resize 이벤트 제거
    window.removeEventListener('resize', handleResize)

    // vh 재설정 이벤트 제거
    // window.removeEventListener('resize', setVh)
  });


  let ctx
  let isFirstLoad = true;
  let normalizeInstance;

  onBeforeUnmount(() => {
    
    if (ctx) {
      ctx.revert();
      $ScrollTrigger.getAll().forEach(t => t.kill());
      $ScrollTrigger.refresh();
      normalizeInstance?.kill()
    }
    console.log('Gsap context reverted');
  })
  

</script>

<style scoped>
  html, body {
  overflow-y:scroll;
overscroll-behavior:none;
}
body { touch-action: pan-y; -webkit-overflow-scrolling: touch;
}


</style>