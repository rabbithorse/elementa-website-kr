<template>
  <div class="company-page">
    <section class="subSection relative" ref="subSection">
      <div class="intro-section h-screen flex items-center" ref="introSection">
        <Container>
          <div class="heading flex flex-col lg:gap-y-12 md:gap-y-6 gap-y-2 text-center">
            <h2 class="flex items-end lg:gap-x-4 md:gap-x-2 gap-x-1 leading-1 font-bold text-white relative justify-center">
              <TypographyPrimary>
                <svg xmlns="http://www.w3.org/2000/svg" width="92" height="131" viewBox="0 0 92 131" fill="none" class="aspect-[92/131] lg:h-[131px] md:h-[110px] sm:h-[90px] h-[50px] w-auto">
                  <path d="M20.0946 71.5054H85.196V53.4375H20.0946V18.004H90.2672V0H0V130.817H91.7886V112.685H20.0946V71.5054Z" fill="white"/>
                </svg>
              </TypographyPrimary>
              <TypographyPrimary>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="131" viewBox="0 0 20 131" fill="none" class="aspect-[20/131] lg:h-[131px] md:h-[110px] sm:h-[90px] h-[50px] w-auto">
                  <path d="M19.2705 0H0V130.817H19.2705V0Z" fill="white"/>
                </svg>
              </TypographyPrimary>
              <TypographyPrimary>
                <svg xmlns="http://www.w3.org/2000/svg" width="87" height="97" viewBox="0 0 87 97" fill="none" class="aspect-[87/97] lg:h-[97px] md:h-[76px] sm:h-[56px] h-[36px] w-auto">
                  <path d="M65.1648 5.04368C58.6357 1.72379 51.5994 0 43.9926 0C35.4984 0 27.955 1.97917 21.299 5.87366C14.7065 9.76814 9.44511 15.3226 5.7051 22.4731C1.90171 29.6237 0 37.9872 0 47.5C0 57.1404 1.83831 66.6532 5.51493 73.8038C9.19154 80.9543 14.3261 86.5087 20.9821 90.4032C27.5746 94.2977 35.3082 96.2769 44.1828 96.2769C54.2618 96.2769 62.756 93.8508 69.7289 89.1263C76.7018 84.338 81.7096 77.5706 84.7523 68.6962L85.8933 64.0995H67.954H66.5594C62.8194 74.8891 55.6563 79.9966 44.4363 79.9966C37.3367 79.9966 30.8075 77.8898 26.4336 73.293C21.9963 68.6324 19.2705 63.0141 18.7 54.5867H86.0835C86.4004 52.0968 86.5906 49.6069 86.5906 47.1169C86.5906 37.2211 84.6255 27.006 80.7587 20.2386C76.8286 13.4073 71.6306 8.36357 65.1648 5.04368ZM18.5732 39.7749C19.841 31.4751 23.8346 25.5376 27.8916 21.6431C31.9485 17.8125 37.2733 15.8333 43.8658 15.8333C50.5218 15.8333 55.8465 17.7487 59.8401 21.6431C63.7703 25.5376 67.954 31.7305 68.6513 39.7749H18.5732Z" fill="white"/>
                </svg>
              </TypographyPrimary>
              <TypographyPrimary>
                <svg xmlns="http://www.w3.org/2000/svg" width="133" height="96" viewBox="0 0 133 96" fill="none" class="aspect-[133/96] lg:h-[96px] md:h-[75px] sm:h-[55px] h-[35px] w-auto">
                  <path d="M94.451 0C83.231 0 73.0886 4.97984 66.1791 12.8327C59.2062 4.97984 49.1272 0 37.9072 0C12.9949 0 0 17.1102 0 38.1788V95.3831H19.9044V35.8165C19.9044 25.4738 27.638 17.1102 37.9072 17.1102C48.1763 17.1102 56.4804 25.5376 56.4804 35.8165V95.3831H56.5438H75.8143H75.8777V35.8165C75.8777 25.4738 84.2452 17.1102 94.451 17.1102C104.72 17.1102 112.454 25.5376 112.454 35.8165V95.3831H132.358V38.1788C132.422 17.1102 115.37 0 94.451 0Z" fill="white"/>
                </svg>
              </TypographyPrimary>
              <TypographyPrimary>
                <svg xmlns="http://www.w3.org/2000/svg" width="87" height="97" viewBox="0 0 87 97" fill="none" class="aspect-[87/97] lg:h-[97px] md:h-[76px] sm:h-[56px] h-[36px] w-auto" >
                  <path d="M65.1648 5.04368C58.6357 1.72379 51.5994 0 43.9926 0C35.4984 0 27.955 1.97917 21.299 5.87366C14.7065 9.76814 9.44511 15.3226 5.7051 22.4731C1.90171 29.6237 0 37.9872 0 47.5C0 57.1404 1.83831 66.6532 5.51493 73.8038C9.19154 80.9543 14.3261 86.5087 20.9821 90.4032C27.5746 94.2977 35.3082 96.2769 44.1828 96.2769C54.2618 96.2769 62.756 93.8508 69.7289 89.1263C76.7018 84.338 81.7096 77.5706 84.7523 68.6962L85.8933 64.0995H67.954H66.5594C62.8194 74.8891 55.6563 79.9966 44.4363 79.9966C37.3367 79.9966 30.8075 77.8898 26.4336 73.293C21.9963 68.6324 19.2705 63.0141 18.7 54.5867H86.0835C86.4004 52.0968 86.5906 49.6069 86.5906 47.1169C86.5906 37.2211 84.6255 27.006 80.7587 20.2386C76.8286 13.4073 71.6306 8.36357 65.1648 5.04368ZM18.5732 39.7749C19.841 31.4751 23.8346 25.5376 27.8916 21.6431C31.9485 17.8125 37.2733 15.8333 43.8658 15.8333C50.5218 15.8333 55.8465 17.7487 59.8401 21.6431C63.7703 25.5376 67.954 31.7305 68.6513 39.7749H18.5732Z" fill="white"/>
                </svg>
              </TypographyPrimary>
              <TypographyPrimary>
                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="96" viewBox="0 0 76 96" fill="none" class="aspect-[76/96] lg:h-[96px] md:h-[75px] sm:h-[55px] h-[35px] w-auto">
                  <path d="M37.9072 0C13.3753 0 0 17.1102 0 38.1788V95.3831H19.3339V35.8165C19.3339 25.4738 27.7014 17.1102 37.9072 17.1102C48.1764 17.1102 55.9099 25.5376 55.9099 35.8165V95.3831H75.8143V38.1788C75.8143 17.1102 58.8259 0 37.9072 0Z" fill="white"/>
                </svg>
              </TypographyPrimary>
              <TypographyPrimary>
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="122" viewBox="0 0 59 122" fill="none" class="aspect-[59/122] lg:h-[122px] md:h-[101px] sm:h-[81px] h-[41px] w-auto">
                  <path d="M38.1608 101.831C35.8153 101.831 33.9136 100.044 33.9136 97.8091V42.8394H56.6706V26.2399H33.9136V0H14.5797V26.2399H0V42.8394H14.5797V97.8091C14.5797 110.769 25.1658 121.304 38.0974 121.304H58.3187V101.831H38.1608Z" fill="white"/>
                </svg>
              </TypographyPrimary>
              <TypographyPrimary class="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="131" viewBox="0 0 128 131" fill="none" class="aspect-[128/131] lg:h-[131px] md:h-[110px] sm:h-[90px] h-[50px] w-auto">
                  <mask id="mask0_1935_891" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="34" y="63" width="46" height="68">
                  <path d="M34.2905 130.624H56.0333L79.8045 63.5234H57.9983L34.2905 130.624Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_1935_891)">
                  <path d="M5.448 113.833L45.6372 43.668L108.583 80.3145L68.3942 150.415L5.448 113.833Z" fill="url(#paint0_linear_1935_891)"/>
                  </g>
                  <path d="M80.1833 2.42578L69.4705 32.0494L105.286 130.625H127.472L80.1833 2.42578Z" fill="white"/>
                  <mask id="mask1_1935_891" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="69" height="131">
                  <path d="M46.3381 0L0 130.625H21.8061L68.0808 0H46.3381Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask1_1935_891)">
                  <path d="M-56.1636 97.9368L17.0518 -29.6875L124.244 32.6243L51.0922 160.312L-56.1636 97.9368Z" fill="url(#paint1_linear_1935_891)"/>
                  </g>
                  <defs>
                  <linearGradient id="paint0_linear_1935_891" x1="19.9376" y1="161.631" x2="94.5885" y2="33.2514" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00C8EB"/>
                  <stop offset="0.2088" stop-color="#00C8EB"/>
                  <stop offset="0.7372" stop-color="#734BD7"/>
                  <stop offset="1" stop-color="#734BD7"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_1935_891" x1="-6.91495" y1="136.797" x2="111.302" y2="-66.5039" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00C8EB"/>
                  <stop offset="0.042" stop-color="#00C8EB"/>
                  <stop offset="0.0484" stop-color="#02C6EB"/>
                  <stop offset="0.2631" stop-color="#3292E2"/>
                  <stop offset="0.4494" stop-color="#556BDC"/>
                  <stop offset="0.5981" stop-color="#6B54D8"/>
                  <stop offset="0.6907" stop-color="#734BD7"/>
                  <stop offset="1" stop-color="#734BD7"/>
                  </linearGradient>
                  </defs>
                </svg>
              </TypographyPrimary>
              
            </h2>
            <p class="text-white pt-[1.25rem] xl:text-[3.125rem] md:text-[2rem] sm:text-[1.75rem] text-[1rem] relative opacity-0 leading-[130%]" ref="introText">
              게임의 미래를 설계하고, <br class="lg:hidden block"/>세계가 함께 공감하는 문화를 만든다
            </p>
          </div>
        </Container>
      </div>
      <div class="h-screen flex items-center pt-[3.75rem] relative" ref="missionSection">
        <div class="absolute left-0 inset-y-0 h-full 2xl:w-[11.6rem] lg:w-[8rem] sm:w-14 w-9 z-20">
          <EffectGlass class="w-full h-full" />
        </div>
        <div class="absolute right-0 inset-y-0 h-full 2xl:w-[11.6rem] lg:w-[8rem] sm:w-14 w-9 z-20">
          <EffectGlass class="w-full h-full" />
        </div>
        <div class="section-heading absolute 2xl:left-[15.2rem] lg:left-[10.6rem] sm:left-20 left-14 6xl:top-[9.25rem] top-[3.75rem]">
          <div class="heading-text flex flex-col md:gap-y-10 gap-y-4">
            <span class="sectionTitle-eng text-white md:text-base text-sm relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-pulse before:bg-[#00C8EB] md:before:w-3 md:before:h-3 before:w-[0.625rem] before:h-[0.625rem] before:rounded-full pl-5">Our Mission</span>
          </div>
        </div>
        <Container class="flex items-center h-full">
          <div class="section-content">
            <div class="mission-wrap grid items-center grid-cols-12 gap-x-4 relative">
              <div class="bgtitle absolute left-1/2 -translate-x-1/2 w-full">
                <h2 class="text-[#9FAEB5] 2xl:text-[10rem] md:text-[8rem] sm:text-[7rem] text-[3.5rem] font-paperlogy font-extrabold text-center" ref="bgTitle">
                  <TypographyPrimary>
                    O
                  </TypographyPrimary>
                  <TypographyPrimary>
                    U
                  </TypographyPrimary>
                  <TypographyPrimary>
                    R
                  </TypographyPrimary>

                  <br>
                  <TypographyPrimary>
                    M
                  </TypographyPrimary>
                  <TypographyPrimary>
                    I
                  </TypographyPrimary>
                  <TypographyPrimary>
                    S
                  </TypographyPrimary>
                  <TypographyPrimary>
                    S
                  </TypographyPrimary>
                  <TypographyPrimary>
                    I
                  </TypographyPrimary>
                  <TypographyPrimary>
                    O
                  </TypographyPrimary>
                  <TypographyPrimary>
                    N
                  </TypographyPrimary>
                </h2>
              </div>
              <div class="mission-text-wrapper absolute">
                <div class="flex items-center flex-row-reverse gap-x-52" ref="missionTextWrap">
                  <div class="flex flex-col items-center">
                    <span class="text-[#7B728F] xl:text-[3.125rem] md:text-4xl text-xl whitespace-nowrap">게임의 미래를 재설계합니다.  게임의 미래를 재설계합니다 게임의 미래를 재설계합니다.  게임의 미래를 재설계합니다.</span>
                    <h2 class="text-[#7B728F] 3xl:text-[16.25rem] xl:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[5rem] font-paperlogy font-extrabold leading-[130%]">INNOVATION</h2>
                  </div>
                  <div class="flex flex-col items-center">
                    <span class="text-[#728D8F] xl:text-[3.125rem] md:text-4xl text-xl whitespace-nowrap">게임의 미래를 재설계합니다.  게임의 미래를 재설계합니다 게임의 미래를 재설계합니다.  게임의 미래를 재설계합니다.</span>
                    <h2 class="text-[#728D8F] 3xl:text-[16.25rem] xl:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[5rem] font-paperlogy font-extrabold leading-[130%]">Trust Trust</h2>
                  </div>
                  <div class="flex flex-col items-center">
                    <span class="text-[#728F7F] xl:text-[3.125rem] md:text-4xl text-xl whitespace-nowrap">게임의 미래를 재설계합니다.  게임의 미래를 재설계합니다 게임의 미래를 재설계합니다.  게임의 미래를 재설계합니다.</span>
                    <h2 class="text-[#728F7F] 3xl:text-[16.25rem] xl:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[5rem] font-paperlogy font-extrabold leading-[130%]">Culture</h2>
                  </div>
                  <div class="flex flex-col items-center">
                    <span class="text-[#8F8872] xl:text-[3.125rem] md:text-4xl text-xl whitespace-nowrap">게임의 미래를 재설계합니다.  게임의 미래를 재설계합니다 게임의 미래를 재설계합니다.  게임의 미래를 재설계합니다.</span>
                    <h2 class="text-[#8F8872] 3xl:text-[16.25rem] xl:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[5rem] font-paperlogy font-extrabold leading-[130%]">Experience</h2>
                  </div>
                </div>
              </div>
              <div class="mission-img-wrapper 2xl:col-start-5 2xl:col-end-9 lg:col-start-4 lg:col-end-10 sm:col-start-3 sm:col-end-11 col-start-2 col-end-12">
                <div class="flex relative" ref="missionImgWrap">
                  <div class="card z-[1]">
                    <img src="@/assets/images/sub/company-mission-card01.png" alt="">
                  </div>
                  <div class="card">
                    <img src="@/assets/images/sub/company-mission-card02.png" alt="">
                  </div>
                  <div class="card">
                    <img src="@/assets/images/sub/company-mission-card03.png" alt="">
                  </div>
                  <div class="card">
                    <img src="@/assets/images/sub/company-mission-card04.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div class="h-screen flex items-center justify-center overflow-hidden" ref="visionSection">
        <Container class="w-full">
          <div class="section-heading flex flex-col gap-y-8 text-center size-fit ml-auto mr-auto z-10 relative">
            <p class="text-white lg:text-2xl md:text-lg sm:text-base text-sm leading-[160%] break-keep" ref="visionText">혁신적 경험으로 게임의 기준을 새로 쓰고, <br>협력과 도전으로 문화를 확장하며, <br>전 세계가 공감할 지속 가능한 감동을 만드는 문화·패러다임의 선도자로 성장하겠습니다.</p>
            <h2 class="text-white font-paperlogy xl:text-[10rem] lg:text-[8.25rem] md:text-[7rem] sm:text-[5rem] text-6xl font-extrabold" ref="visionTitle">ELEMENTA</h2>

            <div class="figure-wrap absolute top-0 lg:-right-[18rem] md:-right-[10rem] -right-[-5.5rem] -z-[1] lg:w-auto md:w-[260px] sm:w-[200px]" ref="visionFigureWrap"> 
              <div class="figure ">
                <img src="@/assets/images/sub/company-vision-figure.png" alt="">
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div class="company-scroll md:mb-40 mb-20" ref="scrollSection">
        <div class="heading flex items-center justify-center w-full z-10" ref="scrollFixedHeading">
          <div class="heading-wrap w-fit h-screen flex justify-center items-center gap-x-7 xl:flex-row flex-col z-[1]" ref="scrollFixedHeadingInner">
            <h2 class="heading-title text-white xl:text-[6.25rem] md:text-[5rem] text-5xl font-black leading-[1em] -mt-3 font-paperlogy" ref="scrollTitle">WE</h2>
            <span class="inline-block w-[25px] xl:rotate-0 rotate-[84deg] xl:mt-0 xl:mb-0 md:-mt-5 md:-mb-5 -mt-6 -mb-6"><img src="@/assets/images/sub/company-scrollsection-slash.png" alt=""></span>
            <div class="heading-content xl:text-left text-center">
              <div class="line-mask">
                <p class="text-white md:text-base sm:text-sm text-xs leading-[160%] showText break-keep">우리는 플레이를 통해 세상을 새롭게 정의합니다.</p> 
              </div>
              <div class="line-mask">
                <p class="text-white md:text-base sm:text-sm text-xs leading-[160%] showText break-keep">게임을 넘어, 모두가 공유할 수 있는 문화와 경험을 만들어갑니다.</p>
              </div>
              <div class="line-mask">
                <p class="text-white md:text-base sm:text-sm text-xs leading-[160%] showText break-keep">끊임없는 도전과 창의적인 시도로 플레이의 미래를 디자인하고,</p>
              </div>
              <div class="line-mask">
                <p class="text-white md:text-base sm:text-sm text-xs leading-[160%] showText break-keep">그 여정을 전 세계 유저와 함께 나눕니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content-scroll-area flex flex-col gap-y-4" ref="contentScrollArea">
          <figure class="content-card w-fit">
            <div class="inner-img"><img src="@/assets/images/sub/company-scroll-card01.png" alt=""></div>
          </figure>
          <figure class="content-card w-fit">
            <div class="inner-img"><img src="@/assets/images/sub/company-scroll-card02.png" alt=""></div>
          </figure>
          <figure class="content-card w-fit">
            <div class="inner-img"><img src="@/assets/images/sub/company-scroll-card03.png" alt=""></div>
          </figure>
          <figure class="content-card w-fit">
            <div class="inner-img"><img src="@/assets/images/sub/company-scroll-card04.png" alt=""></div>
          </figure>
          <figure class="content-card w-fit">
            <div class="inner-img"><img src="@/assets/images/sub/company-scroll-card01.png" alt=""></div>
          </figure>
          <figure class="content-card w-fit">
            <div class="inner-img"><img src="@/assets/images/sub/company-scroll-card02.png" alt=""></div>
          </figure>
          <figure class="content-card w-fit">
            <div class="inner-img"><img src="@/assets/images/sub/company-scroll-card03.png" alt=""></div>
          </figure>
          <figure class="content-card w-fit">
            <div class="inner-img"><img src="@/assets/images/sub/company-scroll-card04.png" alt=""></div>
          </figure>
        </div>
        <div class="wide-image-container w-full overflow-hidden 2xl:mt-[228px] xl:mt-[148px] mt-[3.5rem]">
          <Container>
          <!-- wide image -->
          <div class="wide-image-area xl:h-[600px] lg:h-[400px] md:h-[350px] sm:h-[300px] h-[255px] relative " ref="wideImageArea"></div> 
          </Container>
        </div>
      </div>
      <div class="company-ci md:mb-40 mb-20 z-10 relative">
        <Container>
          <div class="cibox-wrap" ref="companyCiSection">
            <EffectGlass>
              <div class="glass-box flex flex-col xl:gap-y-12 md:gap-y-8 gap-y-6 xl:pt-24 xl:pb-[4.5rem] 2xl:px-[4.5rem] md:pt-[4.125rem] md:pb-[2.5rem] lg:px-[2.5rem] sm:px-5 sm:pt-[3.8rem] pt-10 pb-5 px-3">
                <div class="heading flex lg:flex-nowrap flex-wrap items-end gap-x-4 gap-y-2 xl:pl-[3.25rem] md:pl-[2.8rem] relative lg:pb-0 pb-12">
                  <h2 class="font-paperlogy xl:text-7xl md:text-5xl text-4xl font-bold text-white z-10 flex-shrink-0 sm:pl-0 pl-[1.5rem]">CI</h2>
                  <p class="text-white lg:text-[19px] md:text-[1rem] text-sm break-keep z-[1] w-full">로고는 일관된 커뮤니케이션을 위해 형태나 색상, 스타일의 변형, 타 그래픽 요소와의 결합 없이 그대로 사용해야 합니다.</p>
                  <ButtonsBasic href="/assets/images/sub/company-ci-download.zip" size="md-narrow" color="blue" outline class="download-btn ml-auto px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#734BD7" stroke-width="2"/>
                      <path d="M5.83325 8.33203L9.99992 12.4987L14.1666 8.33203" stroke="#734BD7" stroke-width="2"/>
                      <path d="M10 12.5V2.5" stroke="#734BD7" stroke-width="2"/>
                    </svg>
                  </ButtonsBasic>
                </div>
                <ul class="flex gap-x-5 sm:flex-row flex-col gap-y-2">
                  <li class="ci-box ci-box--black xl:py-20 md:py-14 py-8 flex items-center justify-center">
                    <div class="w-[66%]">
                      <img src="@/assets/images/sub/ci-white.png" alt="">
                    </div>
                  </li>
                  <li class="ci-box ci-box--white xl:py-20 md:py-14 py-8 flex items-center justify-center bg-white">
                    <div class="w-[66%]">
                      <img src="@/assets/images/sub/ci-black.png" alt="">
                    </div>
                  </li>
                </ul>
              </div>
            </EffectGlass>
          </div>
        </Container>
      </div>
      <div class="company-banner xl:py-36 md:py-28 py-12 relative overflow-hidden" ref="companyBanner">
        <Container class="flex md:flex-row flex-col items-center justify-between gap-x-8 gap-y-8">
          <div class="heading flex flex-col md:gap-y-[1.25rem] gap-y-2 z-[1] md:text-left text-center">
            <div class="line-mask">
              <h2 class="text-white xl:text-[3.125rem] md:text-[2.5rem] sm:text-[2rem] text-[1.6rem] font-semibold showText font-paperlogy">
                엘리멘타와 함께하고 싶다면
              </h2>
            </div>
            <div class="line-mask">
              <p class="text-white sm:text-base text-sm leading-[160%] showText">
                우리가 만드는 수많은 모험의 순간을 <br class="sm:hidden block" />당신과 함께 하고 싶습니다.
              </p>
            </div>
          </div>
          <div class="banner-figure-wrap absolute lg:right-[16rem] -right-[1rem] flex items-center xl:w-[586px] lg:w-[420px] sm:w-[320px] w-[65vw] md:bottom-auto bottom-1/2">
            <div class="bg-figure big absolute left-0 xl:w-auto w-[86%] xl:opacity-100 opacity-75" ref="bannerFigureBig">
              <svg xmlns="http://www.w3.org/2000/svg" width="509" height="731" viewBox="0 0 509 731" fill="none" class="aspect-[509/731] xl:w-[509px] w-[100%] h-auto">
                <path d="M253.082 0H508.542L255.46 730.274H0L253.082 0Z" fill="url(#paint0_linear_256_1595)"/>
                <defs>
                  <linearGradient id="paint0_linear_256_1595" x1="168.415" y1="0" x2="168.415" y2="711.076" gradientUnits="userSpaceOnUse">
                    <stop offset="0.225962" stop-color="#734BD7"/>
                    <stop offset="1" stop-color="#00C8EB" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="bg-figure small absolute right-0 top-1/2 xl:w-auto w-[51.5%]" ref="bannerFigureSmall">
              <svg xmlns="http://www.w3.org/2000/svg" width="302" height="376" viewBox="0 0 302 376" fill="none" class="aspect-[302/376] xl:w-[302px] w-[100%] h-auto">
                <path d="M130.375 0H301.397L171.022 375.504H0L130.375 0Z" fill="url(#paint0_linear_256_1596)"/>
                <defs>
                  <linearGradient id="paint0_linear_256_1596" x1="204.383" y1="-4.6857e-06" x2="204.383" y2="349.779" gradientUnits="userSpaceOnUse">
                    <stop offset="0.201923" stop-color="#734BD7"/>
                    <stop offset="1" stop-color="#00C8EB" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div class="banner-action md:w-auto w-full">
            <ButtonsBasic href="/join_us" size="lg" color="blue" class="md:w-auto w-full [&>*]:w-full">채용공고 보러가기</ButtonsBasic>
          </div>
        </Container>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';

  const { $gsap } = useNuxtApp();
  // Intro Section Refs
  const introSection = ref(null);
  const introText = ref(null);

  // Mission Section Refs
  const missionSection = ref(null);
  const bgTitle = ref(null);
  const missionImgWrap = ref(null);
  const missionTextWrap = ref(null);

  // Vision Section Refs
  const visionSection = ref(null);
  const visionText = ref(null);
  const visionTitle = ref(null);
  const visionFigureWrap = ref(null);

  // Scroll Section Refs
  const scrollSection = ref(null);
  const scrollFixedHeading = ref(null);
  const scrollFixedHeadingInner = ref(null);
  const scrollTitle = ref(null);
  const contentScrollArea = ref(null);
  const wideImageArea = ref(null);

  // Company CI Section Refs
  const companyCiSection = ref(null);

  // Company Banner Refs
  const companyBanner = ref(null);
  const bannerFigureBig = ref(null);
  const bannerFigureSmall = ref(null);

  onMounted(() => {
    $gsap.fromTo(introText.value, {
      opacity: 0,
      y: '30%'
    }, {
      opacity: 1,
      y: '0%',
      ease: 'none',
      duration: 0.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: introSection.value,
        start: 'top 80%',
      }
    })

    let cards = missionSection.value.querySelectorAll('.mission-img-wrapper .card');
    let cardsArray = Array.from(cards);
    
    const zDown = [
      [2, 0, 0, 0],   // 활성 1
      [1, 2, 0, 0],   // 활성 2
      [0, 1, 2, 0],    // 활성 3
      [0, 0, 1, 2]      // 활성 4
    ];

    // 스크롤 UP(-1)일 때 z-index 패턴
    const zUp = [
      [2, 1, 0, 0],   // 활성 1
      [0, 2, 1, 0],    // 활성 2
      [0, 0, 2, 1],     // 활성 3
      [0, 0, 1, 2]      // 활성 4
    ];

    const missionTl = $gsap.timeline({
      scrollTrigger: {
        pin: true,
        trigger: missionSection.value,
        start: 'top top',
        end: "+=1000%",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;   
          //console.log(self.progress);
          if (p < 0.2) return;    
          const local = p / 0.9;
          const idx = Math.min(
            3, Math.floor(local * 4)
          );  // 0~3 (1~4번)
          updateZIndex(idx, self.direction);

          const dir = self.direction;
          
          const pattern = dir === 1 ? zDown[idx] : zUp[idx];

          // 패턴을 곧바로 z-index에 대입
          pattern.forEach((z, i) => {
            cardsArray[i].style.zIndex = z;
          });
        }
      }
    })

    missionTl.fromTo(bgTitle.value, {
      x: '0%'
    }, {
      x: '-250%',
      duration: 0.08
    }, 0.005)
    .fromTo(missionImgWrap.value, {
      x: '300%'
    }, {
      x: '0',
      duration: 0.2
    }, 0)
    .fromTo(missionTextWrap.value, {
      x: '-103%'
    }, {
      x: '-2%',
      duration: 0.8
    }, ">-0.15");

    function updateZIndex(active, direction) {
      // 원하는 패턴에 맞춰 넣으면 됨
      //console.log("현재 카드:", active, "방향:", direction);
    }

    // vision section animation
    const visionTl = $gsap.timeline({
      scrollTrigger: {
        trigger: visionSection.value,
        start: 'top center',
        end: 'bottom center',
        //scrub: 1,
      }
    })

    visionTl.fromTo(visionText.value, {
      opacity: 0,
      y: '30%'
    }, {
      opacity: 1,
      y: '0%',
      ease: 'none',
      duration: 1,
    })
    .fromTo(visionTitle.value, {
      opacity: 0,
      y: '30%'
    }, {
      opacity: 1,
      y: '0%',
      ease: 'none',
      duration: 1,
    }, ">-0.8")
    .fromTo(visionFigureWrap.value, {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'none',
      duration: 1,
    }, ">-0.8");

    $gsap.timeline({
      scrollTrigger: {
        trigger: scrollSection.value,
        start: 'top top',
        end: () => "+=" + ( scrollSection.value.offsetHeight - window.innerHeight - (wideImageArea.value.offsetHeight / 2) + (scrollFixedHeadingInner.value.offsetHeight / 2) ),
        scrub: 2,
        // markers: true,
        pin: scrollFixedHeading.value,
        pinSpacing: false,
        onEnter: () => {
          scrollFixedHeading.value.classList.add('visible');
        },
      },
    })

    $gsap.fromTo(scrollTitle.value, {
      opacity: 0,
      y: '30%'
    }, {
      opacity: 1,
      y: '0%',
      ease: 'none',
      duration: 0.5,
      scrollTrigger: {
        trigger: scrollSection.value,
        start: 'top 40%',
        // end: 'bottom top',
        // scrub: true,
      }
    })
    

    const scrollTextItems = scrollSection.value.querySelectorAll('.showText');
    const scrollTextArray = Array.from(scrollTextItems);

    scrollTextArray.forEach((text, i) => {
      $gsap.to(text, {
        y: '0%',
        duration: 1.5,
        rotateX: 0,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: scrollSection.value,
          start: () => (i * 100) + 'px center',
          end: () => (i * 100) + 50 + 'px center',
          //scrub: true,
        }
      });
    });

    const item = document.querySelectorAll('.content-card')

    item.forEach((el, i) => {
      // $gsap.to(el, {
      //   scrollTrigger: {
      //     trigger: el,
      //     start: '40% bottom',
      //     end: '40% top',
      //     // markers: true,
      //     onEnter: () => el.classList.add('on'),
      //   }
      // })

      const cardTl = $gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          duration: 1,
          scrub: true,
          onEnter: () => el.classList.add('on'),
        }
      });      

      const isOdd = (i % 2 === 1);
      const defaultX = isOdd ? (((window.innerWidth) / 2) - (el.offsetWidth / 2)) : (((window.innerWidth) / 2) - (el.offsetWidth / 2));
      let xOffset = isOdd ? (((window.innerWidth) / 2) - (el.offsetWidth / 2) + ((scrollFixedHeadingInner.value.offsetWidth) / 1.2)) : (((window.innerWidth) / 2) - (el.offsetWidth / 2) - ((scrollFixedHeadingInner.value.offsetWidth) / 1.2));
      let midX = isOdd ? (((window.innerWidth) / 2) - (el.offsetWidth / 2) + ((scrollFixedHeadingInner.value.offsetWidth) / 1.5)) : (((window.innerWidth) / 2) - (el.offsetWidth / 2) - ((scrollFixedHeadingInner.value.offsetWidth) / 1.5));
      let mobileXOffset = isOdd ? (((window.innerWidth) / 2) - (el.offsetWidth / 2) + ((scrollFixedHeadingInner.value.offsetWidth) / 2.3)) : (((window.innerWidth) / 2) - (el.offsetWidth / 2) - ((scrollFixedHeadingInner.value.offsetWidth) / 2.3));
      let mobileMidX = isOdd ? (((window.innerWidth) / 2) - (el.offsetWidth / 2) + ((scrollFixedHeadingInner.value.offsetWidth) / 2.3)) : (((window.innerWidth) / 2) - (el.offsetWidth / 2) - ((scrollFixedHeadingInner.value.offsetWidth) / 2.3));

      const mmCompany = $gsap.matchMedia("");

      mmCompany.add({
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)",
      }, (context) => {
        let { isMobile } = context.conditions;

        if (isMobile) {
          xOffset = mobileXOffset;
          midX = mobileMidX;
        } else {
          xOffset = xOffset;
          midX = midX;
        }
      });
      cardTl.set(el,
        {
          x: defaultX,
          opacity: 0,
          
        })
      .to(el, 
        {
          x: xOffset,     // 좌우로 벌어지기
          opacity: 1,
          ease: "power2.out",
          duration: 1
        })
      .to(el, 
        {
          x: midX,        // 위로 상승
          ease: "none",
        }, 1)
    })

    $gsap.fromTo(companyCiSection.value, 
      { y: '20%', opacity: 0 }, 
      { y: '0%', opacity: 1, duration: 1.5, ease: 'ease',
        scrollTrigger: {
          trigger: companyCiSection.value,
          start: 'top 80%',
          end: 'top 80%',
      }
    });

    const bannerTextItems = companyBanner.value.querySelectorAll('.showText');
    const bannerTextArray = Array.from(bannerTextItems);

    const bannerTl = $gsap.timeline({
      scrollTrigger: {
        trigger: companyBanner.value,
        start: 'top 70%',
        end: 'bottom top',
        //scrub: true,
      }
    });

    bannerTextArray.forEach((text, i) => {
      bannerTl.to(text, {
        y: '0%',
        duration: 1.5,
        rotateX: 0,
        ease: 'power4.out',
      }, i * 0.1)
      .fromTo(bannerFigureBig.value, {
        y: "-100%",
        x: "50%"
      }, {
        y: "0%",
        x: "0%",
        duration: 1.5,
        ease: "power4.out",
      }, 0)
      .fromTo(bannerFigureSmall.value, {
        y: "100%",
        x: "-50%"
      }, {
        y: "0%",
        x: "0%",
        duration: 1.5,
        ease: "power4.out",
      }, 0);
    });

  })

</script>

<style scoped>
  .glass {
    padding: 0;
  }

  .intro-section .primary-char-wrap {
    margin-left: 0;
  }

  .bgtitle .primary-char-wrap {
    margin-left: -5px;
  }

  .mission-img-wrapper .card:not(:first-child) {
    position: absolute;
    left: 0; 
    top: 0;
  }

  .company-scroll .wide-image-area {
    background: url(assets/images/sub/company-scroll-bottom-bg.png) no-repeat 50% 50% / cover;
  }

  .company-scroll .content-card {
    clip-path: inset(50% 30% 20% 30% round 15%); 
    transition: clip-path 1s ease 0.2s;
  }

  .company-scroll .content-card img {
    transform: scale(1.4); 
    transition: transform 1.6s ease; 
    width: 100%;
  }

  .company-scroll .content-card.on {
    clip-path: inset(0% 0% 0% 0% round 0%);
  }

  .company-scroll .content-card.on img {
    transform: scale(1);
  }

  .company-ci .heading::before {
    content: ""; 
    display: inline-block; 
    width: 73px; 
    height: 152px; 
    position: absolute; 
    left: 0; 
    bottom: 8px; 
    background: url(assets/images/sub/ci-heading-figure.svg) no-repeat 50% 50% / contain; 
  }

  .ci-box {
    width: calc((100% - 20px) / 2);
  }

  .ci-box--black {
    box-shadow: inset 0 0 0 1px #333;
  }

  .company-banner {
    background: url(assets/images/sub/company-banner-bg.png) no-repeat 50% 50% / cover;
  }

  .line-mask {
    overflow: clip;
    clip-path: inset(0 0 .06em 0) !important;
    overflow: unset !important;
    
  }

  .line-mask > * {
    transform: translateY(-15%) rotateX(-500deg);
    clip-path: inset(0 0 .06em 0);
    transform-origin: center top;
    will-change: transform;
    perspective: 1000px;

  }

  @media (min-width: 1024px) and (max-width: 1535px) {
    .company-scroll .content-card .inner-img {
      transform: scale(0.85);
      overflow: hidden;
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    .company-ci .heading::before {
      width: 63px;
      height: 142px;
      bottom: 0;
    }
  }

  @media (max-width: 1279px) {
    
  }

  @media (max-width: 1023px) {
    .company-scroll .heading {
      position: relative;
    }

    .company-scroll .heading::after {
      content: "";
      display: block;
      background: linear-gradient(to bottom,#0000,#0003,#0006,#000000b3,#000000e6 45%,#000000e6 55%,#000000b3,#0004,#0002,#0000);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 87%;
      opacity: 0;
    }

    .company-scroll .heading.visible::after {
      opacity: 0.8;
    }

    .company-scroll .content-card .inner-img {
      transform: scale(0.7);
      overflow: hidden;
    }

    .company-ci .heading::before {
      bottom: 3rem;
    }

    .company-ci .download-btn {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  @media (max-width: 639px) {
    .bgtitle .primary-char-wrap {
      margin-left: -2px;
    }

    .company-scroll .content-card .inner-img {
      transform: scale(0.45);
    }

    .ci-box {
      width: 100%;
    }

    .company-ci .heading[data-v-8936dc8b]::before {
      bottom: 5rem;
      width: 35px;
      height: 115px;
    }
  }
  
  /* @media screen and (min-width: 1024px) and (max-width: 1535px) {
    .company-scroll .content-card.on img {
      transform: scale(0.9);
    }
  } */
</style>