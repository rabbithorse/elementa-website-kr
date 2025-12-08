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
          <source src="~/assets/videos/game_visuals_01.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 2 -->
      <div class="movie-bg-des absolute sec02 w-full top-0 left-0 z-10">
        <video class="video-bg" autoplay loop muted playsinline preload="auto">
          <source src="~/assets/videos/game_visuals_02.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 3 -->
      <div class="movie-bg-des absolute sec03 w-full top-0 left-0 z-10">
        <video class="video-bg" autoplay loop muted playsinline preload="auto">
          <source src="~/assets/videos/game_visuals_03.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 4 -->
      <div class="movie-bg-des absolute sec04 w-full top-0 left-0 z-10">
        <video class="video-bg" autoplay loop muted playsinline preload="auto">
          <source src="~/assets/videos/game_visuals_04.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 5 -->
      <div class="movie-bg-des absolute sec05 w-full top-0 left-0 z-10">
        <video class="video-bg" autoplay loop muted playsinline preload="auto">
          <source src="~/assets/videos/game_visuals_05.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- video 6 -->
      <div class="movie-bg-des absolute sec06 w-full top-0 left-0 z-10">
        <video class="video-bg" autoplay loop muted playsinline preload="auto">
          <source src="~/assets/videos/game_visuals_06.mp4" type="video/mp4" />
        </video>
      </div>

      <!-- text 6 -->
      <Container>
      <div class="text-area sec06 flex w-full justify-end items-end z-40 absolute top-0 left-0">
        <div class="text-box game-info bottom relative">
          <div class="game-info-title relative z-10 left">
            <span class="block text-lg">강력한 액션과 짜릿한 쾌감</span>
            <p class="text-white text-[1.75rem] font-normal">스타일리시 배틀</p>
          </div>
          <div class="game-info-cont relative z-10 py-[2.5rem] px-[1.88rem]">
            <p class="text-white text-[1.06rem]">각기 다른 개성을 가진 동료들과 함께 싸우고, <br>속도감 넘치는 액션과 타격감으로 전장을 지배하라.</p>
            <p class="text-white text-[1.06rem] pt-[1.25rem]">한 발의 총성과 한 번의 선택이 역사를 다시 쓰는 <br>짜릿한 경험이 펼쳐진다.</p>
          </div>
        </div>
      </div>
      </Container>
      <!-- text 5 -->
      <div class="text-area sec05 flex w-full justify-center items-center z-40 absolute top-0 left-0">
        <div class="text-box text-center">
          <span class="text-2xl font-semibold">강력한 액션과 짜릿한 쾌감</span>
          <div class="text-white text-2xl leading-[1.7] py-[25px] mt-[30px] sub-text type2 relative">
            <p class="text-white text-[3.44rem] title tracking-[-1.65px] relative font-semibold z-10">
            <span class="absolute w-full h-full left-0 top-0 block"></span>
            콤보와 QTE로 완성되는 스타일리시 배틀</p>
          </div>
        </div>
      </div>
      <!-- text 4_2 -->
      <Container>
      <div class="text-area sec04_2 flex w-full items-start z-40 absolute top-0 left-0">
        <div class="text-box game-info left relative">
          <div class="game-info-title relative z-10 left">
            <span class="block text-lg">압도적 비주얼과 시대적 배경</span>
            <p class="text-white text-[1.75rem] font-normal">살아 숨 쉬는 배경</p>
          </div>
          <div class="game-info-cont relative z-10 py-[2.5rem] px-[1.88rem]">
            <p class="text-white text-[1.06rem]">언리얼 엔진 5로 구현된 빅토리아풍의 대도시 실버니아.</p>
            <p class="text-white text-[1.06rem] pt-[1.25rem]">찬란한 번영과 몰락의 그림자가 교차하는 실버니아에서 <br>압도적 스케일의 드라마가 펼쳐진다.</p>
          </div>
        </div>
      </div>
      </Container>
      <!-- text 4 -->
      <div class="text-area sec04 flex w-full justify-center items-center z-40 absolute top-0 left-0">
        <div class="text-box text-center">
          <span class="text-2xl font-semibold">압도적 비주얼과 시대적 배경</span>
          <div class="text-white text-2xl leading-[1.7] py-[25px] mt-[30px] sub-text type2 relative">
            <p class="text-white text-[3.44rem] title tracking-[-1.65px] relative font-semibold z-10">
            <span class="absolute w-full h-full left-0 top-0 block"></span>
            압도적 스케일의 살아 숨 쉬는 배경</p>
          </div>
        </div>
      </div>
      <!-- text 3 -->
      <Container>
      <div class="text-area sec03 flex w-full justify-end items-start z-40 absolute top-0 left-0">
        <div class="text-box game-info relative">
          <div class="game-info-title relative z-10">
            <span class="block text-lg">독창적 세계관</span>
            <p class="text-white text-[1.75rem] font-normal">미스터리 판타지</p>
          </div>
          <div class="game-info-cont relative z-10 py-[2.5rem] px-[1.88rem]">
            <p class="text-white text-[1.06rem]">숨 막히는 사건, 교차하는 음모, <br>그리고 3년 만에 돌아온 탐정.</p>
            <p class="text-white text-[1.06rem] pt-[1.25rem]">현실과 우화가 겹쳐진 실버니아에서, <br>플레이어는 진실을 찾아내고 도시의 운명을 뒤바꾼다. <br>누구도 예상치 못한 반전과 깊이 있는 스토리가 당신을 기다린다.</p>
          </div>
        </div>
      </div>
      </Container>
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
    <!-- section04 : 유튜브 영상-->
    <section class="youtube-area relative overflow-visible" ref="youtubeArea">
      <div class="video-wrap w-full flex justify-center items-center relative">
        <div class="bg-text flex flex-col justify-center items-center">
          <p class="font-extrabold">SILVER</p>
          <p class="font-extrabold">PALACE</p>
        </div>
        <Container>
        <div class="inner-video w-full h-full flex justify-center items-center relative">
          <div class="dumy-box-left relative"><span class="font-bold text-base">Official Trailer</span></div>
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
      <section class="h-[1000px]"></section>
    </section>
    <!-- 위 영역과 간격 -->
    <!-- section05 : 수사보드 -->
    <section class="inv-board overflow-hidden relative" ref="invBoard">
      <div class="inv-dimmed absolute z-10 w-full h-full top-0 left-0"></div>
      <div class="in-camera w-full overflow-hidden">
        <div class="bg relative flex items-end justify-center">
          <!-- 처음 ~ 두번째 지점 사진 -->
          <div class="picbox-01 w-full absolute">
            <div class="box1 absolute z-20"><img src="~/assets/images/sub/inv-board-box1.png" alt="point 1 image"></div>
            <div class="box2 absolute z-10"><img src="~/assets/images/sub/inv-board-box2.png" alt="point1 image 2"></div>
            <div class="box2-5 absolute z-10"><img src="~/assets/images/sub/inv-board-box2-5.png" alt="point1~2 image"></div>

            <div class="box3 absolute z-20"><img src="~/assets/images/sub/inv-board-box3.png" alt="point 2 image"></div>
            <div class="box4 absolute z-20"><img src="~/assets/images/sub/inv-board-box4.png" alt="point 2 image 2"></div>
            <div class="box4-5 absolute z-10"><img src="~/assets/images/sub/inv-board-box4-5.png" alt="point 2 image 2"></div>
          </div>
          <!-- 세번째 ~ 네번째 지점 사진 -->
          <div class="picbox-02 w-full absolute">
            <div class="box5 absolute left-[901px] bottom-[305px] bg-white w-[100px] h-[100px]"></div>
            <div class="box6 absolute left-[3253px] bottom-[115px] bg-white w-[100px] h-[100px]"></div>
          </div>
          <!-- 다섯번째 ~ 여섯번째 지점 사진 -->
          <div class="picbox-03 w-full absolute">
            <div class="box7 absolute left-[2205px] top-[44px] bg-white w-[100px] h-[100px]"></div>
            <div class="box8 absolute left-[2313px] top-[97px] bg-yellow-500 w-[100px] h-[100px]"></div>
            <div class="box9 absolute left-[3380px] bottom-[80px] bg-white w-[100px] h-[100px]"></div>
          </div>
          <!-- 일곱번째 ~ 여덟번째 지점 사진 -->
          <div class="picbox-04 w-full absolute">
            <div class="box10 absolute left-[4809px] top-[0px] bg-white w-[100px] h-[100px]"></div>
            <div class="box11 absolute right-[0px] bottom-[200px] bg-yellow-500 w-[100px] h-[100px]"></div>
            <div class="box12 absolute right-[50%] bottom-[-200px] bg-white w-[100px] h-[100px]"></div>
            <div class="box13 absolute left-[1845px] bottom-[200px] bg-yellow-500 w-[100px] h-[100px]"></div>
          </div>
          <!-- 마지막 제작사 리스트 -->
          <ul class="text-white text-center flex flex-col gap-[195px] text-4xl" ref="creditList">
            <li><span>제작사, 배급사</span>엘리멘타</li>
            <li><span>장르</span>서브컬처 빅월드 ARPG</li>
            <li><span>진출 국가</span>글로벌</li>
            <li><span>언어</span>다국어 지원</li>
            <li><span>실버팰리스 알아보기</span></li>
          </ul>

          <div class="line absolute w-full h-full top-0 left-0 z-50">
            <img src="~/assets/images/sub/inv-board-line-sub01.png" alt="investigation board line sub 01" class="block sub-line-01 absolute">
            <img src="~/assets/images/sub/inv-board-line-sub02.png" alt="investigation board line sub 02" class="block sub-line-02 absolute">
            <img src="~/assets/images/sub/inv-board-line.png" alt="investigation board line" class="block main-line absolute">
          </div>
        </div>
      </div>
    </section>

    <!-- section06 : 마지막 영역 -->
    <section class="last-scene w-full flex items-center justify-center" ref="lastScene">
      <p class="text-white text-[120px]">실버 팰리스</p>
    </section>
    <section class="h-[600px]"></section>


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

  // 캐릭터 소개 모달 열기 함수
  const showCharModal = ref(false)

  // section 03 refs - 게임소개
  const descriptionSec = ref(null)

  // section 04 refs - 유튜브 영상
  const youtubeArea = ref(null)

  // section 05 refs - 수사보드
  const invBoard = ref(null)

  // section 06 refs - 마지막 영역
  const lastScene = ref(null)

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

    const desBgTimeline = $gsap.timeline()
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
    .fromTo(videoDes2, { opacity: 0 }, { opacity: 1, duration: 4 },">-2") // 이전 효과 진행 후 바로 실행
    .to(textDes2, { opacity: 1, duration: 3 }, "<") //동시 진행
    .fromTo(textDes2inner, { y: "30px", "mask-image": "radial-gradient(circle, black -30%, transparent 60%);"}, { "mask-image": "radial-gradient(circle, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행
    
    // (04) 두번째 비디오 서서히 사라짐. 두번째 텍스트 사라짐
    .to(videoDes2, { opacity: 0, duration: 4 })
    .to(textDes2inner, { "mask-image": "radial-gradient(circle, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2")
    .to(textDes2, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
    .to(textDes2, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행
    
    // (05) 세번째 비디오 서서히 나타남, 세번째 텍스트 나타남
    .fromTo(videoDes3, { opacity: 0 }, { opacity: 1, duration: 4 },">-2") // 이전 효과 진행 후 바로 실행
    .to(textDes3, { opacity: 1, duration: 3 }, "<") //동시 진행
    .fromTo(textDes3inner, { y: "30px", "mask-image": "linear-gradient(to right, black -30%, transparent 60%);"}, { "mask-image": "linear-gradient(to right, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행
    
    // (06) 세번째 비디오 서서히 사라짐, 세번째 텍스트 사라짐
    .to(videoDes3, { opacity: 0, duration: 4 })
    .to(textDes3inner, { "mask-image": "linear-gradient(to right, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2")
    .to(textDes3, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
    .to(textDes3, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

    // (07) 네번째 비디오 서서히 나타남, 네번째 텍스트 나타남
    .fromTo(videoDes4, { opacity: 0 }, { opacity: 1, duration: 4 },">-2") // 이전 효과 진행 후 바로 실행
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
    .fromTo(videoDes5, { opacity: 0 }, { opacity: 1, duration: 4 },">-2") // 이전 효과 진행 후 바로 실행
    .to(textDes5, { opacity: 1, duration: 3 }, "<") //동시 진행
    .fromTo(textDes5inner, { y: "30px", "mask-image": "radial-gradient(circle, black -30%, transparent 60%);"}, { "mask-image": "radial-gradient(circle, black 100%, transparent 100%)", y: "0px", duration: 2, ease:"power1.in"}, "<") // 동시 진행

    // (12) 다섯번째 비디오 서서히 사라짐. 다섯번째 텍스트 사라짐
    .to(videoDes5, { opacity: 0, duration: 4 })
    .to(textDes5inner, { "mask-image": "radial-gradient(circle, black -30%, transparent 60%);",y: "30px", duration: 1, ease:"ease"}, ">-2")
    .to(textDes5, { opacity: 0, duration: 1.5 }, ">-2") // 이전 효과 후 바로 실행
    .to(textDes5, { "visibility": "hidden"}, ">+0.01") // 이전 효과 후 바로 실행

    // (13) 여섯번째 비디오 서서히 나타남, 여섯번째 텍스트 나타남
    .fromTo(videoDes6, { opacity: 0 }, { opacity: 1, duration: 4 },">-2") // 이전 효과 진행 후 바로 실행
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
      scrub: 2,
      animation: desBgTimeline,
      // markers: true,
    })

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
    $ScrollTrigger.create({
      trigger: youtubeArea.value,
      start: 'top top',
      end: "+=" + youtubeTimeline.duration() * 200,
      scrub: 2,
      pin: youtubeArea.value,
      anticipatePin: 1,
      // markers: true,
    })

    // 애니메이션 재생 전담 - 타임라인 애니메이션만큼 end 지점 설정해서 애니메이션만큼 진행
    $ScrollTrigger.create({
      trigger: videoBox,
      start: 'top bottom',
      end: "+=" + youtubeTimeline.duration() * 100 + " top",
      // markers: true,
      scrub: true,
      animation: youtubeTimeline,
    })

    // 유튜브 영상 재생/일시정지 제어

    const iframe = youtubeArea.value.querySelector('.js-youtube');

    if (iframe) {
      const playSrc = iframe.dataset.srcPlay;
      const stopSrc = iframe.dataset.srcStop;

      $ScrollTrigger.create({
        trigger: videoBox,
        start: 'center center',   // 비디오 박스가 화면 중앙에 왔을 때
        end: 'bottom top',        // 화면 위로 빠져나갈 때까지
        onEnter: () => {
          iframe.src = playSrc;
        },
        onEnterBack: () => {
          iframe.src = playSrc;
        },
        onLeave: () => {
          iframe.src = stopSrc;   // 재생 중지 + 썸네일 상태로 초기화
        },
        onLeaveBack: () => {
          iframe.src = stopSrc;
        },
        // markers: true,
      });
    }




    // 유튜브 섹션 사라짐 효과
    $gsap.timeline({
      scrollTrigger: {
        trigger: youtubeArea.value,
        start: 'center-=500 top',
        end: "+=699",
        scrub: true,
        anticipatePin: 1,
        // markers: true,
      }
    }).to(youtubeArea.value, { opacity: 0, duration: 0.5, ease: "power3.out" })

    /*-----------------------*/
    // 07. 수사보드 섹션
    /*-----------------------*/
    const invDimmed = invBoard.value.querySelector(".inv-dimmed");
    const bgInvBoard = invBoard.value.querySelector(".bg");
    const box1 = invBoard.value.querySelector(".box1");
    const box2 = invBoard.value.querySelector(".box2");
    const box2_5 = invBoard.value.querySelector(".box2-5");
    const box3 = invBoard.value.querySelector(".box3");
    const box4 = invBoard.value.querySelector(".box4");
    const box4_5 = invBoard.value.querySelector(".box4-5");
    const box5 = invBoard.value.querySelector(".box5");
    const box6 = invBoard.value.querySelector(".box6");
    const box7 = invBoard.value.querySelector(".box7");
    const box8 = invBoard.value.querySelector(".box8");
    const box9 = invBoard.value.querySelector(".box9");
    const box10 = invBoard.value.querySelector(".box10");
    const box11 = invBoard.value.querySelector(".box11");
    const box12 = invBoard.value.querySelector(".box12");
    const box13 = invBoard.value.querySelector(".box13");

    // 수사보드 사진 타임라인
    const pic01 = $gsap.timeline()
    .fromTo(box1, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" })
    .fromTo(box2, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, ">-0.4")
    .fromTo(box2_5, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, ">+0.5")

    const parrall01 = $gsap.timeline()
    .fromTo(box1,
    { x: 0, y: 0 },
    { x: -40, y: -40, duration: 2, ease: "power3.out" },
    ">"
  )

  // 동시에 box2 이동 (3초지만 어차피 독립)
  .fromTo(box2,
    { x: 0, y: 0 },
    { x: 40, y: 0, duration: 2, ease: "power3.out" },
    ">"
  )


    const pic02 = $gsap.timeline()
    .fromTo(box3, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" })
    .fromTo(box4, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" })
    .fromTo(box4_5, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, "<")

    const pic03 = $gsap.timeline()
    .fromTo(box5, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, "<")

    const pic04 = $gsap.timeline()
    .fromTo(box6, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, "<")
    
    const pic05 = $gsap.timeline()
    .fromTo(box7, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" })
    .fromTo(box8, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, ">-0.9")

    const pic06 = $gsap.timeline()
    .fromTo(box9, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, "<")
    const pic07 = $gsap.timeline()
    .fromTo(box10, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" })
    .fromTo(box11, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, ">-0.9")

    const pic08 = $gsap.timeline()
    .fromTo(box12, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" })
    .fromTo(box13, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }, ">-0.9")
    
    const invBoardTimeline = $gsap.timeline()
    .to(invDimmed, {opacity: 0, duration: 0.3, ease: "none" }) // tntk
    .to(invDimmed, {visibility: "hidden", duration: 0.3, ease: "none" })
    .addLabel("startMove")
    .to(bgInvBoard, {x:-998, y:-513 , duration: 2, ease: "power3.out" }, "startMove+=1")

    .addLabel("movePoint_01")    
    .to(bgInvBoard, {x:-450, y:-799 , duration: 2, ease: "power3.out" }, ">+0.25")
    .addLabel("movePoint_02", ">-1")
    .to(bgInvBoard, {x:-2316, y:-1100 , duration: 2, ease: "power3.out" }, ">+0.25")
    .addLabel("movePoint_03", ">-1")
    .to(bgInvBoard, {x:-1437, y:-2466 , duration: 2, ease: "power3.out" }, ">+0.25")
    .addLabel("movePoint_04", ">-1")
    .to(bgInvBoard, {x:-2568, y:-2797 , duration: 2, ease: "power3.out" }, ">+0.25")
    .addLabel("movePoint_05", ">-1")
    .to(bgInvBoard, {x:-3432, y:-2951 , duration: 2, ease: "power3.out" }, ">+0.25")
    .addLabel("movePoint_06", ">-1")
    .to(bgInvBoard, {x:() => (window.innerWidth - bgInvBoard.offsetWidth) / 2, y: -3612, duration: 2, ease: "power3.out" }, ">+0.25")
    .addLabel("movePoint_07", ">-1")
    .to(bgInvBoard, {x:() => (window.innerWidth - bgInvBoard.offsetWidth) / 2, y: () => (-bgInvBoard.offsetHeight), duration: 2, ease: "power3.out" }, ">+0.25")


    // 수사보드 라인 시점에 사진 등장
    invBoardTimeline.add(pic01, "startMove");
    invBoardTimeline.add(parrall01, "startMove+=1");

    invBoardTimeline.add(pic02, "movePoint_01+=0.2");
    invBoardTimeline.add(pic03, "movePoint_02+=0.2");
    invBoardTimeline.add(pic04, "movePoint_03+=0.2");
    invBoardTimeline.add(pic05, "movePoint_04+=0.2");
    invBoardTimeline.add(pic06, "movePoint_05+=0.2");
    invBoardTimeline.add(pic07, "movePoint_06+=0.2");
    invBoardTimeline.add(pic08, "movePoint_07+=0.2");

    $ScrollTrigger.create({
      trigger: invBoard.value,
      start: 'top+=1 top',
      end: "+=" + invBoardTimeline.duration() * 2000,
      scrub: 1,
      pin: true,
      // markers: true,
      animation: invBoardTimeline,
      anticipatePin: 1
    })

     /*-----------------------*/
    // 08. 에필로그 섹션
    /*-----------------------*/
    $ScrollTrigger.create({
      trigger: lastScene.value,
      start: 'top top',
      end: "+=3000",
      scrub: true,
      // markers: true,
      pin: lastScene.value,
      anticipatePin: 1
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

  onUnmounted(() => {
  // 1) 모든 ScrollTrigger 정리
  $ScrollTrigger.getAll().forEach(st => st.kill());
  });

</script>

<style scoped>
  
</style>