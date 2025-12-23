<template>
  <div>
    <section ref="visualSection" class="visual-section h-screen relative overflow-hidden">
      <EffectGlass class="glass-blur"/>
      <div class="bg-video">
        <video class="bg-video--content" autoplay playsinline muted loop preload="metadata">
          <source src="~/assets/videos/main-logo-ani.mp4" type="video/mp4" />
        </video>
      </div>
      <div ref="videoWrap" class="video-layer video-layer--main z-[1]">
        <span ref="videoWrapLayer" class="bg-video-layer"></span>
        <EffectGlass>
          <video autoplay playsinline muted loop ref="videoBigShape">
            <source src="~/assets/videos/main-fly.mp4" type="video/mp4" />
          </video>
        </EffectGlass>
      </div>
      <div ref="videoSubWrap" class="video-layer video-layer--sub z-[1]">
        <img src="~/assets/images/main/main-war.jpg" alt="" ref="videoSmallShape">
      </div>
      <div class="intro-section h-full" ref="introSection">
        <Container class="h-full">
          <!-- 첫번째 애니메이션 -->
          <div class="flex flex-col h-full pb-[6.25rem]" ref="visualTitle">
            <h2 class="3xl:text-[272px] 2xl:text-[240px] xl:text-[180px] md:text-[160px] text-[25.3vw] leading-1 font-bold text-white pt-[6.25rem] primary-text whitespace-nowrap" >
              <TypographyPrimary>
                E
              </TypographyPrimary>
              <TypographyPrimary>
                L
              </TypographyPrimary>
              <TypographyPrimary>
                E
              </TypographyPrimary>
              <TypographyPrimary>
                M
              </TypographyPrimary>
              <TypographyPrimary>
                E
              </TypographyPrimary>
              <TypographyPrimary>
                N
              </TypographyPrimary>
              <TypographyPrimary>
                T
              </TypographyPrimary>
              <TypographyPrimary>
                A
              </TypographyPrimary>
            </h2>
            <div class="flex flex-col mt-auto">
              <div class="text-white xl:text-[2.3rem] md:text-[1.8rem] text-[5vw] font-normal mb-8 flex flex-col">
                <TypographySecondary>Design the Future of Play,</TypographySecondary>
                <TypographySecondary>Create a Culture the World Shares</TypographySecondary>
              </div>
              <div class="w-fit polygon">
                <div class="inner">
                  <div class="text-list flex gap-x-7 md:py-[0.9rem] py-[0.7rem]">
                    <span class="md:text-lg text-base text-white">Innovation</span>
                    <span class="md:text-lg text-base text-white">Trust</span>
                    <span class="md:text-lg text-base text-white">Culture</span>
                    </div>
                </div>
              </div>
            </div>
          </div>      
        </Container>
      </div>
      <!-- 두번째 애니메이션 -->
      <div class="mission-section flex flex-col xl:gap-y-16 md:gap-y-10 gap-y-8 justify-center items-center relative" ref="missionSection">
        <div class="text-wrap w-full" ref="missionContentWrap">
          <h2 class="2xl:text-[13.75rem] xl:text-[185px] md:text-[150px] leading-1 font-bold text-white">
            <div class="top-line md:pb-0 pb-[6px]">
              <div ref="weCreate" class="leading-none text-[length:inherit]" >
                <span class="primary-text leading-none 2xl:text-[13.75rem] xl:text-[200px] md:text-[150px] text-[20vw]">
                  <div class="character-wrap inline-block 2xl:ml-[-17px] xl:ml-[-15px] md:ml-[-12px] ml-[-1.5vw] overflow-clip ">
                    <div class="primary-character">
                      W
                    </div>
                  </div>
                  <div class="character-wrap inline-block 2xl:ml-[-17px] xl:ml-[-15px] md:ml-[-12px] ml-[-1.5vw]">
                    <div class="primary-character ">
                    E
                    </div>
                  </div>
                </span>
                <span class="primary-text md:ml-8 ml-3 leading-none 2xl:text-[13.75rem] xl:text-[200px] md:text-[150px] text-[20vw]">
                  <div class="character-wrap inline-block 2xl:ml-[-17px] xl:ml-[-15px] md:ml-[-12px] ml-[-1.5vw]">
                    <div class="primary-character ">
                    C
                    </div>
                  </div>
                  <div class="character-wrap inline-block 2xl:ml-[-17px] xl:ml-[-15px] md:ml-[-12px] ml-[-1.5vw]">
                    <div class="primary-character ">
                    R
                    </div>
                  </div>
                  <div class="character-wrap inline-block 2xl:ml-[-17px] xl:ml-[-15px] md:ml-[-12px] ml-[-1.5vw]">
                    <div class="primary-character ">
                    E
                    </div>
                  </div>
                  <div class="character-wrap inline-block 2xl:ml-[-17px] xl:ml-[-15px] md:ml-[-12px] ml-[-1.5vw]">
                    <div class="primary-character ">
                    A
                    </div>
                  </div>
                  <div class="character-wrap inline-block 2xl:ml-[-17px] xl:ml-[-15px] md:ml-[-12px] ml-[-1.5vw]">
                    <div class="primary-character ">
                    T
                    </div>
                  </div>
                  <div class="character-wrap inline-block 2xl:ml-[-17px] xl:ml-[-15px] md:ml-[-12px] ml-[-1.5vw]">
                    <div class="primary-character ">
                    E
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div class="bottom-line relative">
              <div ref="newParadigm" class="leading-none gradient-text blue text-[length:inherit] md:flex-nowrap flex-wrap justify-center pt-1.5" >
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="97" height="179" viewBox="0 0 97 179" fill="none" class="aspect-[97/179]">
                        <foreignObject x="-40" y="-40" width="176.8" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1220_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H27.72L64.24 85.8V0H96.8V178.2H70.18L33.66 85.8V178.2H0Z" fill="url(#paint0_linear_24_1220)"/>
                        <defs>
                        <clipPath id="bgblur_0_24_1220_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H27.72L64.24 85.8V0H96.8V178.2H70.18L33.66 85.8V178.2H0Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1220" x1="0.223819" y1="178.2" x2="1924.72" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/new-n.svg" alt="" class="aspect-[97/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!--<svg xmlns="http://www.w3.org/2000/svg" width="81" height="179" viewBox="0 0 81 179" fill="none" class="aspect-[81/179]">
                        <foreignObject x="-40" y="-40" width="160.52" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1219_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H80.08V26.84H39.38V71.06H70.4V98.34H39.38V151.58H80.52V178.2H0Z" fill="url(#paint0_linear_24_1219)"/>
                        <defs>
                        <clipPath id="bgblur_0_24_1219_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H80.08V26.84H39.38V71.06H70.4V98.34H39.38V151.58H80.52V178.2H0Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1219" x1="-116.497" y1="178.2" x2="1808" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg>-->
                      <img src="~assets/images/main/gradient/new-e.svg" alt="" class="aspect-[81/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!--<svg xmlns="http://www.w3.org/2000/svg" width="142" height="179" viewBox="0 0 142 179" fill="none" class="aspect-[142/179]">
                        <foreignObject x="-40" y="-40" width="221.46" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1218_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M21.56 178.2L0 0H33.44L44 103.84L57.42 0.220011H83.6L97.68 103.18L108.46 0H141.46L120.12 178.2H85.8L70.62 70.62L56.32 178.2H21.56Z" fill="url(#paint0_linear_24_1218)"/>
                        <defs>
                          <clipPath id="bgblur_0_24_1218_clip_path" transform="translate(40 40)"><path d="M21.56 178.2L0 0H33.44L44 103.84L57.42 0.220011H83.6L97.68 103.18L108.46 0H141.46L120.12 178.2H85.8L70.62 70.62L56.32 178.2H21.56Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1218" x1="-201.035" y1="178.2" x2="1723.47" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg>-->
                      <img src="~assets/images/main/gradient/new-w.svg" alt="" class="aspect-[142/179]">
                    </div>
                  </div>
                  <span class="text-spacer p-5 max-lg:block max-lg:p-0 max-lg:w-full max-sm:p-[5px]"></span>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="107" height="179" viewBox="0 0 107 179" fill="none" class="aspect-[107/179]">
                        <foreignObject x="-40" y="-40" width="186.7" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1217_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H59.84C70.5467 0 79.3467 2.05333 86.24 6.16C93.1333 10.12 98.2666 15.9867 101.64 23.76C105.013 31.3867 106.7 40.7 106.7 51.7C106.7 65.4867 104.427 76.0467 99.88 83.38C95.3333 90.5667 89.1733 95.5533 81.4 98.34C73.6267 101.127 64.9 102.52 55.22 102.52H39.38V178.2H0ZM39.38 75.02H52.58C57.42 75.02 61.0867 74.14 63.58 72.38C66.0733 70.62 67.6867 67.98 68.42 64.46C69.3 60.94 69.74 56.4667 69.74 51.04C69.74 46.4933 69.3733 42.5333 68.64 39.16C68.0533 35.64 66.5133 32.8533 64.02 30.8C61.5267 28.7467 57.64 27.72 52.36 27.72H39.38V75.02Z" fill="url(#paint0_linear_24_1217)"/>
                        <defs>
                          <clipPath id="bgblur_0_24_1217_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H59.84C70.5467 0 79.3467 2.05333 86.24 6.16C93.1333 10.12 98.2666 15.9867 101.64 23.76C105.013 31.3867 106.7 40.7 106.7 51.7C106.7 65.4867 104.427 76.0467 99.88 83.38C95.3333 90.5667 89.1733 95.5533 81.4 98.34C73.6267 101.127 64.9 102.52 55.22 102.52H39.38V178.2H0ZM39.38 75.02H52.58C57.42 75.02 61.0867 74.14 63.58 72.38C66.0733 70.62 67.6867 67.98 68.42 64.46C69.3 60.94 69.74 56.4667 69.74 51.04C69.74 46.4933 69.3733 42.5333 68.64 39.16C68.0533 35.64 66.5133 32.8533 64.02 30.8C61.5267 28.7467 57.64 27.72 52.36 27.72H39.38V75.02Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1217" x1="-389.382" y1="178.2" x2="1535.12" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/paradigm-p.svg" alt="" class="aspect-[107/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="112" height="179" viewBox="0 0 112 179" fill="none" class="aspect-[112/179]">
                        <foreignObject x="-40" y="-40" width="191.76" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1216_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z" fill="url(#paint0_linear_24_1216)"/>
                        <defs>
                        <clipPath id="bgblur_0_24_1216_clip_path" transform="translate(40 40)"><path d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1216" x1="-489.359" y1="178.2" x2="1435.14" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/paradigm-a.svg" alt="" class="aspect-[112/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="111" height="179" viewBox="0 0 111 179" fill="none" class="aspect-[111/179]">
                        <foreignObject x="-40" y="-40" width="190.88" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1215_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H49.06C61.0867 0 71.5 1.32 80.3 3.96C89.1 6.6 95.92 11.3667 100.76 18.26C105.747 25.0067 108.24 34.6133 108.24 47.08C108.24 54.4133 107.653 60.94 106.48 66.66C105.307 72.38 103.107 77.3667 99.88 81.62C96.8 85.7267 92.3266 89.1733 86.46 91.96L110.88 178.2H70.18L50.6 98.34H39.38V178.2H0ZM39.38 75.68H50.38C55.9533 75.68 60.28 74.7267 63.36 72.82C66.44 70.7667 68.5667 67.9067 69.74 64.24C71.06 60.4267 71.72 55.88 71.72 50.6C71.72 42.9733 70.3266 37.0333 67.54 32.78C64.7533 28.5267 59.62 26.4 52.14 26.4H39.38V75.68Z" fill="url(#paint0_linear_24_1215)"/>
                        <defs>
                          <clipPath id="bgblur_0_24_1215_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H49.06C61.0867 0 71.5 1.32 80.3 3.96C89.1 6.6 95.92 11.3667 100.76 18.26C105.747 25.0067 108.24 34.6133 108.24 47.08C108.24 54.4133 107.653 60.94 106.48 66.66C105.307 72.38 103.107 77.3667 99.88 81.62C96.8 85.7267 92.3266 89.1733 86.46 91.96L110.88 178.2H70.18L50.6 98.34H39.38V178.2H0ZM39.38 75.68H50.38C55.9533 75.68 60.28 74.7267 63.36 72.82C66.44 70.7667 68.5667 67.9067 69.74 64.24C71.06 60.4267 71.72 55.88 71.72 50.6C71.72 42.9733 70.3266 37.0333 67.54 32.78C64.7533 28.5267 59.62 26.4 52.14 26.4H39.38V75.68Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1215" x1="-612.511" y1="178.2" x2="1311.99" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/paradigm-r.svg" alt="" class="aspect-[111/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="112" height="179" viewBox="0 0 112 179" fill="none" class="aspect-[112/179]">
                        <foreignObject x="-40" y="-40" width="191.76" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1214_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z" fill="url(#paint0_linear_24_1214)"/>
                        <defs>
                          <clipPath id="bgblur_0_24_1214_clip_path" transform="translate(40 40)"><path d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1214" x1="-729.245" y1="178.2" x2="1195.26" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/paradigm-a2.svg" alt="" class="aspect-[112/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="105" height="179" viewBox="0 0 105 179" fill="none" class="aspect-[105/179]">
                        <foreignObject x="-40" y="-40" width="184.94" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1213_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H45.1C60.6466 0 72.7466 1.98 81.4 5.94C90.0533 9.75334 96.14 15.84 99.66 24.2C103.18 32.4133 104.94 43.12 104.94 56.32V121C104.94 134.347 103.18 145.273 99.66 153.78C96.14 162.14 90.0533 168.3 81.4 172.26C72.8933 176.22 60.94 178.2 45.54 178.2H0ZM39.38 150.92H45.54C51.5533 150.92 55.88 150.04 58.52 148.28C61.16 146.52 62.7733 143.88 63.36 140.36C64.0933 136.84 64.46 132.44 64.46 127.16V49.5C64.46 44.22 64.02 39.9667 63.14 36.74C62.4067 33.5133 60.72 31.1667 58.08 29.7C55.44 28.2333 51.1867 27.5 45.32 27.5H39.38V150.92Z" fill="url(#paint0_linear_24_1213)"/>
                        <defs>
                        <clipPath id="bgblur_0_24_1213_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H45.1C60.6466 0 72.7466 1.98 81.4 5.94C90.0533 9.75334 96.14 15.84 99.66 24.2C103.18 32.4133 104.94 43.12 104.94 56.32V121C104.94 134.347 103.18 145.273 99.66 153.78C96.14 162.14 90.0533 168.3 81.4 172.26C72.8933 176.22 60.94 178.2 45.54 178.2H0ZM39.38 150.92H45.54C51.5533 150.92 55.88 150.04 58.52 148.28C61.16 146.52 62.7733 143.88 63.36 140.36C64.0933 136.84 64.46 132.44 64.46 127.16V49.5C64.46 44.22 64.02 39.9667 63.14 36.74C62.4067 33.5133 60.72 31.1667 58.08 29.7C55.44 28.2333 51.1867 27.5 45.32 27.5H39.38V150.92Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1213" x1="-852.396" y1="178.2" x2="1072.1" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/paradigm-d.svg" alt="" class="aspect-[105/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="40" height="179" viewBox="0 0 40 179" fill="none" class="aspect-[40/179]">
                        <foreignObject x="-40" y="-40" width="119.38" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1212_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H39.38V178.2H0Z" fill="url(#paint0_linear_24_1212)"/>
                        <defs>
                          <clipPath id="bgblur_0_24_1212_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H39.38V178.2H0Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1212" x1="-974.923" y1="178.2" x2="949.577" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/paradigm-i.svg" alt="" class="aspect-[40/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="106" height="184" viewBox="0 0 106 184" fill="none" class="aspect-[106/179]">
                        <foreignObject x="-40" y="-40" width="185.82" height="263.26"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1211_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M48.84 183.26C36.52 183.26 26.7666 180.693 19.58 175.56C12.54 170.427 7.48002 163.24 4.40002 154C1.46669 144.613 0 133.833 0 121.66V61.82C0 49.2067 1.6133 38.28 4.83997 29.04C8.06663 19.8 13.5666 12.6867 21.34 7.70001C29.26 2.56667 39.9666 0 53.46 0C66.66 0 77 2.2 84.48 6.60001C92.1066 11 97.5333 17.0867 100.76 24.86C103.987 32.6333 105.6 41.7267 105.6 52.14V63.58H67.1V49.06C67.1 45.2467 66.8066 41.7267 66.22 38.5C65.78 35.2733 64.6066 32.7067 62.7 30.8C60.94 28.7467 58.0067 27.72 53.9 27.72C49.6467 27.72 46.5666 28.8933 44.6599 31.24C42.7532 33.44 41.5066 36.2267 40.9199 39.6C40.4799 42.9733 40.26 46.4933 40.26 50.16V132.66C40.26 136.62 40.6267 140.36 41.36 143.88C42.24 147.253 43.7067 150.04 45.76 152.24C47.96 154.293 51.04 155.32 55 155.32C59.1067 155.32 62.26 154.22 64.46 152.02C66.66 149.82 68.2 146.96 69.08 143.44C69.96 139.92 70.4 136.18 70.4 132.22V111.32H54.34V88.22H105.82V180.62H79.86L77.6599 165.88C75.3132 170.867 71.8666 175.047 67.3199 178.42C62.7733 181.647 56.6133 183.26 48.84 183.26Z" fill="url(#paint0_linear_24_1211)"/>
                        <defs>
                          <clipPath id="bgblur_0_24_1211_clip_path" transform="translate(40 40)"><path d="M48.84 183.26C36.52 183.26 26.7666 180.693 19.58 175.56C12.54 170.427 7.48002 163.24 4.40002 154C1.46669 144.613 0 133.833 0 121.66V61.82C0 49.2067 1.6133 38.28 4.83997 29.04C8.06663 19.8 13.5666 12.6867 21.34 7.70001C29.26 2.56667 39.9666 0 53.46 0C66.66 0 77 2.2 84.48 6.60001C92.1066 11 97.5333 17.0867 100.76 24.86C103.987 32.6333 105.6 41.7267 105.6 52.14V63.58H67.1V49.06C67.1 45.2467 66.8066 41.7267 66.22 38.5C65.78 35.2733 64.6066 32.7067 62.7 30.8C60.94 28.7467 58.0067 27.72 53.9 27.72C49.6467 27.72 46.5666 28.8933 44.6599 31.24C42.7532 33.44 41.5066 36.2267 40.9199 39.6C40.4799 42.9733 40.26 46.4933 40.26 50.16V132.66C40.26 136.62 40.6267 140.36 41.36 143.88C42.24 147.253 43.7067 150.04 45.76 152.24C47.96 154.293 51.04 155.32 55 155.32C59.1067 155.32 62.26 154.22 64.46 152.02C66.66 149.82 68.2 146.96 69.08 143.44C69.96 139.92 70.4 136.18 70.4 132.22V111.32H54.34V88.22H105.82V180.62H79.86L77.6599 165.88C75.3132 170.867 71.8666 175.047 67.3199 178.42C62.7733 181.647 56.6133 183.26 48.84 183.26Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1211" x1="-1031.85" y1="180.62" x2="892.645" y2="180.62" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/paradigm-g.svg" alt="" class="aspect-[106/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character primary-character--disappear">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="130" height="179" viewBox="0 0 130 179" fill="none" class="aspect-[130/179]">
                        <foreignObject x="-40" y="-40" width="209.8" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1210_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2L3.07996 0H45.3199L64.9 103.62L86.02 0H126.72L129.8 178.2H101.86L98.5599 59.62L77.88 178.2H53.02L31.02 58.74L28.38 178.2H0Z" fill="url(#paint0_linear_24_1210)"/>
                        <defs>
                        <clipPath id="bgblur_0_24_1210_clip_path" transform="translate(40 40)"><path d="M0 178.2L3.07996 0H45.3199L64.9 103.62L86.02 0H126.72L129.8 178.2H101.86L98.5599 59.62L77.88 178.2H53.02L31.02 58.74L28.38 178.2H0Z"/>
                        </clipPath><linearGradient id="paint0_linear_24_1210" x1="-1155.06" y1="178.2" x2="769.438" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/paradigm-m.svg" alt="" class="aspect-[130/179]">
                    </div>
                  </div>
                
              </div>
              <div ref="lastingImpact" class="leading-none gradient-text text-absolute inset-0 text-center" >
                <span class="primary-text">
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="81" height="179" viewBox="0 0 81 179" fill="none" class="aspect-[81/179]">
                        <foreignObject x="-40" y="-40" width="160.3" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_304_2920_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H39.38V151.58H80.3V178.2H0Z" fill="url(#paint0_linear_304_2920)"/>
                        <defs>
                          <clipPath id="bgblur_0_304_2920_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H39.38V151.58H80.3V178.2H0Z"/>
                          </clipPath><linearGradient id="paint0_linear_304_2920" x1="0.914282" y1="178.2" x2="2045.79" y2="178.2" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#0AD9FE"/>
                          <stop offset="1" stop-color="#7D4FF0"/>
                          </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/lasting-l.svg" alt="" class="aspect-[81/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="112" height="179" viewBox="0 0 112 179" fill="none" class="aspect-[112/179]">
                        <foreignObject x="-40" y="-40" width="191.76" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2052_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z" fill="url(#paint0_linear_39_2052)"/>
                        <defs>
                        <clipPath id="bgblur_0_39_2052_clip_path" transform="translate(40 40)"><path d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2052" x1="-81.4448" y1="178.2" x2="1963.43" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/lasting-a.svg" alt="" class="aspect-[112/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="98" height="184" viewBox="0 0 98 184" fill="none" class="aspect-[98/179]">
                        <foreignObject x="-40" y="-40" width="177.9" height="263.26"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2051_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M51.26 183.26C40.1133 183.26 30.8 181.28 23.32 177.32C15.84 173.36 10.1933 167.273 6.37999 159.06C2.56666 150.7 0.44 139.92 0 126.72L33.66 121.66C33.8067 129.287 34.4667 135.447 35.64 140.14C36.96 144.833 38.72 148.207 40.92 150.26C43.2667 152.313 46.0533 153.34 49.28 153.34C53.3867 153.34 56.0267 151.947 57.2 149.16C58.52 146.373 59.18 143.44 59.18 140.36C59.18 133.027 57.42 126.867 53.9 121.88C50.38 116.747 45.6133 111.613 39.6 106.48L24.2 93.06C17.4533 87.34 11.7333 80.8867 7.03999 73.7C2.49333 66.3667 0.220001 57.3467 0.220001 46.64C0.220001 31.5333 4.69333 20.02 13.64 12.1C22.5867 4.03333 34.76 0 50.16 0C59.6933 0 67.32 1.61333 73.04 4.84C78.9067 8.06667 83.3067 12.32 86.24 17.6C89.32 22.7333 91.3733 28.2333 92.4 34.1C93.5733 39.82 94.2333 45.32 94.38 50.6L60.5 54.78C60.3533 49.5 59.9867 44.9533 59.4 41.14C58.96 37.18 57.9333 34.1733 56.32 32.12C54.7067 29.92 52.2133 28.82 48.84 28.82C45.1733 28.82 42.46 30.36 40.7 33.44C39.0867 36.52 38.28 39.6 38.28 42.68C38.28 49.28 39.82 54.7067 42.9 58.96C46.1267 63.0667 50.3067 67.3933 55.44 71.94L70.18 84.92C77.9533 91.52 84.48 99 89.76 107.36C95.1867 115.72 97.9 126.06 97.9 138.38C97.9 146.74 95.9933 154.367 92.18 161.26C88.3667 168.007 82.94 173.36 75.9 177.32C69.0067 181.28 60.7933 183.26 51.26 183.26Z" fill="url(#paint0_linear_39_2051)"/>
                        <defs>
                        <clipPath id="bgblur_0_39_2051_clip_path" transform="translate(40 40)"><path d="M51.26 183.26C40.1133 183.26 30.8 181.28 23.32 177.32C15.84 173.36 10.1933 167.273 6.37999 159.06C2.56666 150.7 0.44 139.92 0 126.72L33.66 121.66C33.8067 129.287 34.4667 135.447 35.64 140.14C36.96 144.833 38.72 148.207 40.92 150.26C43.2667 152.313 46.0533 153.34 49.28 153.34C53.3867 153.34 56.0267 151.947 57.2 149.16C58.52 146.373 59.18 143.44 59.18 140.36C59.18 133.027 57.42 126.867 53.9 121.88C50.38 116.747 45.6133 111.613 39.6 106.48L24.2 93.06C17.4533 87.34 11.7333 80.8867 7.03999 73.7C2.49333 66.3667 0.220001 57.3467 0.220001 46.64C0.220001 31.5333 4.69333 20.02 13.64 12.1C22.5867 4.03333 34.76 0 50.16 0C59.6933 0 67.32 1.61333 73.04 4.84C78.9067 8.06667 83.3067 12.32 86.24 17.6C89.32 22.7333 91.3733 28.2333 92.4 34.1C93.5733 39.82 94.2333 45.32 94.38 50.6L60.5 54.78C60.3533 49.5 59.9867 44.9533 59.4 41.14C58.96 37.18 57.9333 34.1733 56.32 32.12C54.7067 29.92 52.2133 28.82 48.84 28.82C45.1733 28.82 42.46 30.36 40.7 33.44C39.0867 36.52 38.28 39.6 38.28 42.68C38.28 49.28 39.82 54.7067 42.9 58.96C46.1267 63.0667 50.3067 67.3933 55.44 71.94L70.18 84.92C77.9533 91.52 84.48 99 89.76 107.36C95.1867 115.72 97.9 126.06 97.9 138.38C97.9 146.74 95.9933 154.367 92.18 161.26C88.3667 168.007 82.94 173.36 75.9 177.32C69.0067 181.28 60.7933 183.26 51.26 183.26Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2051" x1="-198.918" y1="180.62" x2="1845.96" y2="180.62" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/lasting-s.svg" alt="" class="aspect-[98/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="94" height="179" viewBox="0 0 94 179" fill="none" class="aspect-[94/179]">
                        <foreignObject x="-40" y="-40" width="173.06" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2050_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M26.84 178.2V29.26H0V0H93.06V29.26H66.44V178.2H26.84Z" fill="url(#paint0_linear_39_2050)"/>
                        <defs>
                        <clipPath id="bgblur_0_39_2050_clip_path" transform="translate(40 40)"><path d="M26.84 178.2V29.26H0V0H93.06V29.26H66.44V178.2H26.84Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2050" x1="-298.506" y1="178.2" x2="1746.37" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/lasting-t.svg" alt="" class="aspect-[94/179]"></img>
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="40" height="179" viewBox="0 0 40 179" fill="none" class="aspect-[40/179]">
                        <foreignObject x="-40" y="-40" width="119.38" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2049_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H39.38V178.2H0Z" fill="url(#paint0_linear_39_2049)"/>
                        <defs>
                        <clipPath id="bgblur_0_39_2049_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H39.38V178.2H0Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2049" x1="-400.874" y1="178.2" x2="1644" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/lasting-i.svg" alt="" class="aspect-[40/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="97" height="179" viewBox="0 0 97 179" fill="none" class="aspect-[97/179]">
                        <foreignObject x="-40" y="-40" width="176.8" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2048_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H27.72L64.24 85.8V0H96.8V178.2H70.18L33.66 85.8V178.2H0Z" fill="url(#paint0_linear_39_2048)"/>
                        <defs>
                        <clipPath id="bgblur_0_39_2048_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H27.72L64.24 85.8V0H96.8V178.2H70.18L33.66 85.8V178.2H0Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2048" x1="-460.226" y1="178.2" x2="1584.65" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/lasting-n.svg" alt="" class="aspect-[97/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="106" height="184" viewBox="0 0 106 184" fill="none" class="aspect-[106/179]">
                        <foreignObject x="-40" y="-40" width="185.82" height="263.26"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2047_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M48.84 183.26C36.52 183.26 26.7666 180.693 19.58 175.56C12.54 170.427 7.47996 163.24 4.39996 154C1.46663 144.613 0 133.833 0 121.66V61.82C0 49.2067 1.6133 38.28 4.83997 29.04C8.06663 19.8 13.5666 12.6867 21.34 7.70001C29.26 2.56667 39.9666 0 53.46 0C66.66 0 77 2.2 84.48 6.60001C92.1066 11 97.5333 17.0867 100.76 24.86C103.987 32.6333 105.6 41.7267 105.6 52.14V63.58H67.1V49.06C67.1 45.2467 66.8066 41.7267 66.22 38.5C65.78 35.2733 64.6066 32.7067 62.7 30.8C60.94 28.7467 58.0066 27.72 53.9 27.72C49.6466 27.72 46.5666 28.8933 44.66 31.24C42.7533 33.44 41.5066 36.2267 40.92 39.6C40.48 42.9733 40.2599 46.4933 40.2599 50.16V132.66C40.2599 136.62 40.6267 140.36 41.36 143.88C42.24 147.253 43.7066 150.04 45.7599 152.24C47.96 154.293 51.04 155.32 55 155.32C59.1067 155.32 62.26 154.22 64.46 152.02C66.66 149.82 68.2 146.96 69.08 143.44C69.96 139.92 70.4 136.18 70.4 132.22V111.32H54.34V88.22H105.82V180.62H79.86L77.66 165.88C75.3133 170.867 71.8666 175.047 67.3199 178.42C62.7733 181.647 56.6133 183.26 48.84 183.26Z" fill="url(#paint0_linear_39_2047)"/>
                        <defs>
                        <clipPath id="bgblur_0_39_2047_clip_path" transform="translate(40 40)"><path d="M48.84 183.26C36.52 183.26 26.7666 180.693 19.58 175.56C12.54 170.427 7.47996 163.24 4.39996 154C1.46663 144.613 0 133.833 0 121.66V61.82C0 49.2067 1.6133 38.28 4.83997 29.04C8.06663 19.8 13.5666 12.6867 21.34 7.70001C29.26 2.56667 39.9666 0 53.46 0C66.66 0 77 2.2 84.48 6.60001C92.1066 11 97.5333 17.0867 100.76 24.86C103.987 32.6333 105.6 41.7267 105.6 52.14V63.58H67.1V49.06C67.1 45.2467 66.8066 41.7267 66.22 38.5C65.78 35.2733 64.6066 32.7067 62.7 30.8C60.94 28.7467 58.0066 27.72 53.9 27.72C49.6466 27.72 46.5666 28.8933 44.66 31.24C42.7533 33.44 41.5066 36.2267 40.92 39.6C40.48 42.9733 40.2599 46.4933 40.2599 50.16V132.66C40.2599 136.62 40.6267 140.36 41.36 143.88C42.24 147.253 43.7066 150.04 45.7599 152.24C47.96 154.293 51.04 155.32 55 155.32C59.1067 155.32 62.26 154.22 64.46 152.02C66.66 149.82 68.2 146.96 69.08 143.44C69.96 139.92 70.4 136.18 70.4 132.22V111.32H54.34V88.22H105.82V180.62H79.86L77.66 165.88C75.3133 170.867 71.8666 175.047 67.3199 178.42C62.7733 181.647 56.6133 183.26 48.84 183.26Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2047" x1="-574.527" y1="180.62" x2="1470.35" y2="180.62" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/lasting-g.svg" alt="" class="aspect-[106/179]">
                    </div>
                  </div>
                </span>
                <span class="text-spacer p-5 max-lg:block max-lg:p-0 max-lg:w-full max-sm:p-[5px]"></span>
                <span class="primary-text">
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="40" height="179" viewBox="0 0 40 179" fill="none" class="aspect-[40/179]">
                        <foreignObject x="-40" y="-40" width="119.38" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2046_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H39.38V178.2H0Z" fill="url(#paint0_linear_39_2046)"/>
                        <defs>
                          <clipPath id="bgblur_0_39_2046_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H39.38V178.2H0Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2046" x1="-748.303" y1="178.2" x2="1296.57" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/impact-i.svg" alt="" class="aspect-[40/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="130" height="179" viewBox="0 0 130 179" fill="none" class="aspect-[130/179]">
                        <foreignObject x="-40" y="-40" width="209.8" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2045_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2L3.08002 0H45.32L64.9 103.62L86.02 0H126.72L129.8 178.2H101.86L98.56 59.62L77.88 178.2H53.02L31.02 58.74L28.38 178.2H0Z" fill="url(#paint0_linear_39_2045)"/>
                        <defs>
                        <clipPath id="bgblur_0_39_2045_clip_path" transform="translate(40 40)"><path d="M0 178.2L3.08002 0H45.32L64.9 103.62L86.02 0H126.72L129.8 178.2H101.86L98.56 59.62L77.88 178.2H53.02L31.02 58.74L28.38 178.2H0Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2045" x1="-806.994" y1="178.2" x2="1237.88" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                        </linearGradient>
                        </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/impact-m.svg" alt="" class="aspect-[130/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="107" height="179" viewBox="0 0 107 179" fill="none" class="aspect-[107/179]">
                        <foreignObject x="-40" y="-40" width="186.7" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2044_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H59.84C70.5467 0 79.3467 2.05333 86.2401 6.16C93.1334 10.12 98.2666 15.9867 101.64 23.76C105.013 31.3867 106.7 40.7 106.7 51.7C106.7 65.4867 104.427 76.0467 99.8799 83.38C95.3333 90.5667 89.1733 95.5533 81.4 98.34C73.6266 101.127 64.9 102.52 55.22 102.52H39.38V178.2H0ZM39.38 75.02H52.58C57.42 75.02 61.0867 74.14 63.58 72.38C66.0734 70.62 67.6867 67.98 68.42 64.46C69.3 60.94 69.7399 56.4667 69.7399 51.04C69.7399 46.4933 69.3733 42.5333 68.64 39.16C68.0533 35.64 66.5133 32.8533 64.02 30.8C61.5266 28.7467 57.64 27.72 52.36 27.72H39.38V75.02Z" fill="url(#paint0_linear_39_2044)"/>
                        <defs>
                          <clipPath id="bgblur_0_39_2044_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H59.84C70.5467 0 79.3467 2.05333 86.2401 6.16C93.1334 10.12 98.2666 15.9867 101.64 23.76C105.013 31.3867 106.7 40.7 106.7 51.7C106.7 65.4867 104.427 76.0467 99.8799 83.38C95.3333 90.5667 89.1733 95.5533 81.4 98.34C73.6266 101.127 64.9 102.52 55.22 102.52H39.38V178.2H0ZM39.38 75.02H52.58C57.42 75.02 61.0867 74.14 63.58 72.38C66.0734 70.62 67.6867 67.98 68.42 64.46C69.3 60.94 69.7399 56.4667 69.7399 51.04C69.7399 46.4933 69.3733 42.5333 68.64 39.16C68.0533 35.64 66.5133 32.8533 64.02 30.8C61.5266 28.7467 57.64 27.72 52.36 27.72H39.38V75.02Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2044" x1="-955.957" y1="178.2" x2="1088.92" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/impact-p.svg" alt="" class="aspect-[107/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="112" height="179" viewBox="0 0 112 179" fill="none" class="aspect-[112/179]">
                        <foreignObject x="-40" y="-40" width="191.76" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2043_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.1801 178.2H0ZM46.86 117.04H65.78L56.3199 47.52L46.86 117.04Z" fill="url(#paint0_linear_39_2043)"/>
                        <defs>
                          <clipPath id="bgblur_0_39_2043_clip_path" transform="translate(40 40)"><path d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.1801 178.2H0ZM46.86 117.04H65.78L56.3199 47.52L46.86 117.04Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2043" x1="-1055.93" y1="178.2" x2="988.94" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/impact-a.svg" alt="" class="aspect-[112/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="105" height="184" viewBox="0 0 105 184" fill="none" class="aspect-[105/179]">
                        <foreignObject x="-40" y="-40" width="184.72" height="263.26"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2042_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M53.46 183.26C39.9666 183.26 29.26 180.84 21.34 176C13.5666 171.013 8.06663 164.12 4.83997 155.32C1.6133 146.373 0 135.887 0 123.86V59.62C0 47.3 1.6133 36.74 4.83997 27.94C8.06663 18.9933 13.5666 12.1 21.34 7.26C29.26 2.42 39.9666 0 53.46 0C66.66 0 76.9267 2.2 84.26 6.60001C91.74 10.8533 97.02 16.8667 100.1 24.64C103.18 32.4133 104.72 41.36 104.72 51.48V66.88H66.22V49.06C66.22 45.54 65.9999 42.1667 65.5599 38.94C65.2666 35.7133 64.24 33.0733 62.48 31.02C60.72 28.82 57.7133 27.72 53.46 27.72C49.3533 27.72 46.2733 28.82 44.22 31.02C42.3133 33.22 41.0666 36.0067 40.48 39.38C40.04 42.6067 39.8199 46.0533 39.8199 49.72V133.54C39.8199 137.5 40.1133 141.167 40.7 144.54C41.4333 147.767 42.7532 150.407 44.6599 152.46C46.7132 154.367 49.6466 155.32 53.46 155.32C57.5666 155.32 60.5 154.293 62.26 152.24C64.02 150.04 65.1199 147.253 65.5599 143.88C65.9999 140.507 66.22 137.06 66.22 133.54V114.84H104.72V130.24C104.72 140.36 103.18 149.453 100.1 157.52C97.1666 165.44 91.96 171.747 84.48 176.44C77.1466 180.987 66.8066 183.26 53.46 183.26Z" fill="url(#paint0_linear_39_2042)"/>
                        <defs>
                          <clipPath id="bgblur_0_39_2042_clip_path" transform="translate(40 40)"><path d="M53.46 183.26C39.9666 183.26 29.26 180.84 21.34 176C13.5666 171.013 8.06663 164.12 4.83997 155.32C1.6133 146.373 0 135.887 0 123.86V59.62C0 47.3 1.6133 36.74 4.83997 27.94C8.06663 18.9933 13.5666 12.1 21.34 7.26C29.26 2.42 39.9666 0 53.46 0C66.66 0 76.9267 2.2 84.26 6.60001C91.74 10.8533 97.02 16.8667 100.1 24.64C103.18 32.4133 104.72 41.36 104.72 51.48V66.88H66.22V49.06C66.22 45.54 65.9999 42.1667 65.5599 38.94C65.2666 35.7133 64.24 33.0733 62.48 31.02C60.72 28.82 57.7133 27.72 53.46 27.72C49.3533 27.72 46.2733 28.82 44.22 31.02C42.3133 33.22 41.0666 36.0067 40.48 39.38C40.04 42.6067 39.8199 46.0533 39.8199 49.72V133.54C39.8199 137.5 40.1133 141.167 40.7 144.54C41.4333 147.767 42.7532 150.407 44.6599 152.46C46.7132 154.367 49.6466 155.32 53.46 155.32C57.5666 155.32 60.5 154.293 62.26 152.24C64.02 150.04 65.1199 147.253 65.5599 143.88C65.9999 140.507 66.22 137.06 66.22 133.54V114.84H104.72V130.24C104.72 140.36 103.18 149.453 100.1 157.52C97.1666 165.44 91.96 171.747 84.48 176.44C77.1466 180.987 66.8066 183.26 53.46 183.26Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2042" x1="-1173.87" y1="180.62" x2="871.001" y2="180.62" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/impact-c.svg" alt="" class="aspect-[105/179]">
                    </div>
                  </div>
                  <div class="character-wrap inline-block overflow-clip ">
                    <div class="primary-character--delay">
                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="94" height="179" viewBox="0 0 94 179" fill="none" class="aspect-[94/179]">
                        <foreignObject x="-40" y="-40" width="173.06" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_39_2041_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M26.84 178.2V29.26H0V0H93.0599V29.26H66.4399V178.2H26.84Z" fill="url(#paint0_linear_39_2041)"/>
                        <defs>
                          <clipPath id="bgblur_0_39_2041_clip_path" transform="translate(40 40)"><path d="M26.84 178.2V29.26H0V0H93.0599V29.26H66.4399V178.2H26.84Z"/>
                        </clipPath><linearGradient id="paint0_linear_39_2041" x1="-1282.88" y1="178.2" x2="761.996" y2="178.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0AD9FE"/>
                        <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                      </svg> -->
                      <img src="~assets/images/main/gradient/impact-t.svg" alt="" class="aspect-[94/179]">
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </h2>
        </div>
        <div class="box-wrap max-w-[61rem] mx-auto w-[90%] md:pt-[2.15rem] pt-7 md:pb-[2.5rem] pb-8 px-5 overflow-hidden relative" ref="missionBox">
          <EffectGlassLiquid />
            <span class="sectionTitle-eng text-white text-base relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-pulse before:bg-[#00C8EB] md:before:w-3 md:before:h-3 before:w-[0.625rem] before:h-[0.625rem] before:rounded-full pl-5">Our Mission</span>
            <div class="text-content gap-x-7 py-[0.9rem] z-[1] relative">
              <p class="text-white md:text-[1.5rem] text-[4.1vw] leading-[150%] break-keep">혁신적 경험으로 게임의 기준을 새롭게 쓰고, 협력과 도전으로 문화를 확장하며, <br>전 세계가 공감할 지속 가능한 감동을 만드는 문화·패러다임의 선도자로 성장하겠습니다.</p>
            </div>
            <ButtonsBasic href="/company" size="sm" color="white" class="max-md:w-full [&>*]:w-full">View more</ButtonsBasic>
        </div>
      </div>
       
    </section>
    <section class="accordion-section h-dvh" ref="accordionSection">
      <div class="accordion-list flex xl:flex-row flex-col h-full w-full">
        <BlocksAccordion ref="accordionItem">
        </BlocksAccordion>
      </div>
    </section>
    <section class="h-auto" ref="elementaKoreaSection">
      <div class="slider-wrap">
        <div class="slider-text">
          <h2 class="flex max-xl:flex-wrap items-center justify-center 3xl:gap-x-8 lg:gap-x-4 gap-x-0 2xl:text-[272px] xl:text-[220px] lg:text-[180px] text-[25.3vw] leading-1 font-bold text-white pt-[6.25rem]" ref="elementaKorea">
            <span class="leading-[100%] text-[#9FAEB5] 3xl:text-[15rem] 2xl:text-[12rem] lg:text-[10rem] text-[6.25rem] tracking-[-0.3rem] max-xl:w-full max-xl:text-center">
              ELEMENTA
            </span>
            <div class="slider-img flex items-center justify-center mt-3 md:rounded-[10px] rounded-md" ref="sliderImg">
              <!-- <img src="~assets/images/main/elementakorea-center-img.png" alt="" class="block 3xl:w-auto xl:w-[17vw] lg:w-[22vw] w-[28vw]"> -->
              <video autoplay playsinline muted loop class="block 3xl:w-auto xl:w-[17vw] lg:w-[22vw] w-[28vw] max-w-none">
                <source src="~assets/videos/main-face.mp4" type="video/mp4" >
              </video>
            </div>
            <span class="leading-[100%] text-[#9FAEB5] 3xl:text-[15rem] 2xl:text-[12rem] lg:text-[10rem] text-[6.25rem] tracking-[-0.3rem]">
              KOREA
            </span>
          </h2>
        </div>
        
      </div>
    </section>
    <section class="wetheworld-section flex items-center justify-center overflow-hidden h-svh" ref="wetheworldSection">
      <div class="wetheworldbg-video01 opacity-0 invisible absolute inset-0 z-0" ref="wetheworldbg1">
        <video class="bg-video--content w-full h-full object-cover" autoplay playsinline muted loop preload="metadata">
          <source src="~/assets/videos/main-wetheworld-inspire.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="wetheworldbg-video02 opacity-0 invisible absolute inset-0 z-0" ref="wetheworldbg2">
        <video class="bg-video--content w-full h-full object-cover" autoplay playsinline muted loop preload="metadata">
          <source src="~/assets/videos/main-wetheworld-connect.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="wetheworldbg-video03 opacity-0 invisible absolute inset-0 z-0" ref="wetheworldbg3">
        <video class="bg-video--content w-full h-full object-cover" autoplay playsinline muted loop preload="metadata">
          <source src="~/assets/videos/main-wetheworld-change.mp4" type="video/mp4" />
        </video>
      </div>
      <h2 class="2xl:text-[272px] xl:text-[220px] md:text-[180px] text-[25.3vw] leading-1 font-bold text-white text-center z-10 ">
        <span ref="weText" class="block leading-[100%]">
          <TypographyPrimary>
            W
          </TypographyPrimary>
          <TypographyPrimary>
            E
          </TypographyPrimary>
        </span>
        <div class="text-spacer md:py-5"></div>
        <span ref="theworldText" class="block leading-[100%]">
          <TypographyPrimary>
              T
            </TypographyPrimary>
            <TypographyPrimary>
              H
            </TypographyPrimary>
            <TypographyPrimary>
              E
            </TypographyPrimary>
            <span class="text-spacer md:pl-8 pl-0 md:inline-block block"></span>
            <TypographyPrimary >
              W
            </TypographyPrimary>
            <TypographyPrimary>
              O
            </TypographyPrimary>
            <TypographyPrimary>
              R
            </TypographyPrimary>
            <TypographyPrimary>
              L
            </TypographyPrimary>
            <TypographyPrimary>
              D
            </TypographyPrimary>
        </span>
      </h2>

      <div class="gotopCurtain curtains">
        <div class="curtain-item absolute w-full h-[50svh] top-0 left-0" ref="gotopCurtain"></div>
        <div class="curtain-item absolute w-full h-[50svh] top-0 left-0" ref="gotopCurtain"></div>
        <div class="curtain-item absolute w-full h-[50svh] top-0 left-0" ref="gotopCurtain"></div>
      </div>
      <div class="godownCurtain curtains">
        <div class="curtain-item absolute w-full h-[50svh] bottom-0 left-0" ref="godownCurtain"></div>
        <div class="curtain-item absolute w-full h-[50svh] bottom-0 left-0" ref="godownCurtain"></div>
        <div class="curtain-item absolute w-full h-[50svh] bottom-0 left-0" ref="godownCurtain"></div>
      </div>
      <h2 class="flex items-center justify-center 2xl:text-[272px] xl:text-[220px] md:text-[180px] text-[25.3vw] leading-1 font-bold text-white text-center h-0 w-full overflow-clip absolute" ref="wetheworldSlogan">
        <span class="flex items-center justify-center leading-[100%]" ref="inspireText">
          INSPIRE
        </span>
        <span class="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[100%] opacity-0 blur-xl" ref="connectText">
          CONNECT
        </span>
        <span class="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[100%] opacity-0 blur-xl" ref="changeText">
          CHANGE
        </span>
      </h2>
    </section>
    <section class="newsroom-section relative md:pt-[6.25rem] pt-[3.25rem] pb-[6rem] min-h-dvh" ref="newsroomSection">
      <div class="bg-text flex xl:flex-col flex-col-reverse absolute xl:bottom-0 bottom-[3.75rem] left-0 ">
        <span class="text-[#403B4E] md:text-[5rem] text-[2.5rem] font-bold font-oswald">NEW PARADIGM, LASTING IMPACT. ELEMENTA KOREA</span>
        <h2 class="md:text-[28rem] text-[12.5rem] gradient-text grey font-bold">ELEMENTA ELEMENTA</h2>
      </div>
      <Container class="flex flex-col md:gap-y-[5rem] gap-y-10">
        <div class="section-heading relative" ref="newsroomHeading">
          <div class="heading-text flex flex-col md:gap-y-10 gap-y-4">
            <span class="sectionTitle-eng text-white md:text-base text-[3.4vw] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-pulse before:bg-[#00C8EB] before:w-3 before:h-3 before:rounded-full pl-5 ">NEWSROOM</span>
            <h6 class="text-white xl:text-[2.3rem] md:text-[2rem] text-[4.3vw] font-normal">
              <TypographySecondary>ELEMENTA의 가장 최신 뉴스를 알아보세요. </TypographySecondary> <br />
              <TypographySecondary>New Paradigm, Lasting Impact</TypographySecondary>
            </h6>
          </div> 
          <div class="heading-button absolute right-0 bottom-0 md:block hidden">
            <ButtonsBasic href="/newsroom" color="blue">View more</ButtonsBasic>
          </div>
        </div>
        <div class="section-content md:flex">
          <div class="content-text pt-[5.375rem] max-xl:hidden">
            <p class="text-white relative pr-20 break-keep">
              New Paradigm, <br>
              Lasting Impact
            </p>
          </div>
          <div class="card-grid flex flex-col gap-y-18">
            <EffectGlass class="card-glass glass-blur relative after:absolute after:inset-y-0 after:right-0 after:w-80 max-md:ml-[-5.5%] lg:pt-20 lg:pb-44 pt-[52px] pb-[42px] lg:w-[81.77vw] w-[101vw]">
              <BlocksScrollSlider />
            </EffectGlass>
          </div>
          <div class="content-button md:hidden flex justify-center mt-5">
            <ButtonsBasic color="blue" class="max-md:w-full [&>*]:w-full">View more</ButtonsBasic>
          </div>
        </div>
        
      </Container>
    </section>
    <section class="careers-section md:pt-[17rem] pt-[3.125rem] md:pb-64 pb-24 flex flex-col md:gap-y-[5rem] gap-y-10">
      <div class="section-heading">
        <Container>
          <div class="heading-text flex flex-col md:gap-y-10 gap-y-4">
            <span class="sectionTitle-eng text-white md:text-base text-[3.4vw] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-pulse before:bg-[#00C8EB] md:before:w-3 md:before:h-3 before:w-[0.625rem] before:h-[0.625rem] before:rounded-full pl-5 ">CAREERS</span>
            <h6 class="text-white xl:text-[2.3rem] md:text-[2rem] text-[4.3vw] font-normal">
              ELEMENTA와 함께 성장할 동료를 기다립니다. <br>
              Design the Future of Play, Create a Culture the World Shares 
            </h6>
          </div>
          <div class="heading-button absolute right-0 bottom-0 xl:flex items-center gap-5 hidden">
            <div class="controls flex gap-3 items-center">
              <PrevButton :swiper="swiperInstance" />
              <NextButton :swiper="swiperInstance" />
            </div>
            <ButtonsBasic href="/join_us" color="blue">View more</ButtonsBasic>
          </div>
        </Container>
      </div>
      <div class="section-content">
        <div class="content-glass py-[108px]">
          <EffectGlass class="glass-blur absolute left-0 top-0 w-full h-full" />
          <div class="lg:px-8"> 
            <div class="controls xl:hidden flex gap-3 items-center justify-end pr-6">
              <PrevButton :swiper="swiperInstance" />
              <NextButton :swiper="swiperInstance" />
            </div>
            <div class="slide-wrapper" ref="careerSliderRef">
              <swiper
                :slidesPerView="1.15"
                :spaceBetween="15"
                :allowTouchMove="true"
                :simulateTouch="true"
                :passiveListeners="false"
                @swiper="onSwiper"
                :breakpoints="{
                  480: {
                    slidesPerView: 1.4,
                  },
                  768: {
                    slidesPerView: 1.8,
                  },
                  1024: {
                    slidesPerView: 2.4,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  2000: {
                    slidesPerView: 4,
                  },
                  2600: {
                    slidesPerView: 5,
                  },
                  3000: {
                    slidesPerView: 6,
                  }
                }"
                class="no-lenis career-section"
              >
                <swiper-slide>
                  <BlocksJoinCard />
                </swiper-slide>
                <swiper-slide>
                  <BlocksJoinCard />
                </swiper-slide>
                <swiper-slide>
                  <BlocksJoinCard />
                </swiper-slide>
                <swiper-slide>
                  <BlocksJoinCard />
                </swiper-slide>
                <swiper-slide>
                  <BlocksJoinCard />
                </swiper-slide>
                <swiper-slide>
                  <BlocksJoinCard />
                </swiper-slide>
                <swiper-slide>
                  <BlocksJoinCard />
                </swiper-slide>
              </swiper>
            </div>
          </div>  
        </div>

        <div class="content-button xl:hidden md:mt-10 mt-5">
          <Container class="flex justify-center">
            <ButtonsBasic href="/join_us" color="blue" class="md:w-1/2 w-full [&>*]:w-[100%]">View more</ButtonsBasic>
          </Container>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { EffectGlass } from '#components';
import Container from '~/components/Container.vue';

const { $gsap, $ScrollTrigger, $lenis } = useNuxtApp()
const introSection = ref(null)
const videoWrap = ref(null)
const videoWrapLayer = ref(null)
const videoBigShape = ref(null)
const videoSmallShape = ref(null)
const visualSection = ref(null)
const videoSubWrap = ref(null)
const visualTitle = ref(null)
const missionSection = ref(null)
const missionBox = ref(null)
const weCreate = ref(null)
const newParadigm = ref(null)
const lastingImpact = ref(null)
const elementaKoreaSection = ref(null)
const sliderImg = ref(null)

const accordionSection = ref(null)
const accordionItem = ref([])

// We The World
const wetheworldSection = ref(null)
const wetheworldbg1 = ref(null)
const wetheworldbg2 = ref(null)
const wetheworldbg3 = ref(null)
const weText = ref(null)
const theworldText = ref(null)
const gotopCurtain = ref([])
const godownCurtain = ref([])
const wetheworldSlogan = ref(null)
const inspireText = ref(null)
const connectText = ref(null)
const changeText = ref(null)

// Newsroom
const newsroomSection = ref(null)
const newsroomHeading = ref(null)

// Careers
const careerSliderRef = ref(null)



// Newsroom

/* [OSJ : 2025-12-03] Gsap 초기화 안됨 대응. */
let ctx
let resizeTimeout;
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

onMounted(async () => {
  normalizeInstance = $ScrollTrigger.normalizeScroll({
    momentum: 0.08,
    allowNestedScroll: true,
    lockAxis: true,
  })

  const initAnimation = () => {
    ctx?.revert();
    const characterRevealItems = missionSection.value.querySelectorAll('.primary-character');
    const characterRevealArray = Array.from(characterRevealItems);
    const characterDisappearItems = missionSection.value.querySelectorAll('.primary-character--disappear');
    const characterDisappearArray = Array.from(characterDisappearItems);
    const characterDelayItems = missionSection.value.querySelectorAll('.primary-character--delay');
    const characterDelayArray = Array.from(characterDelayItems);

    ctx = $gsap.context(() => {
      const introTl = $gsap.timeline({
        scrollTrigger: {
          trigger: visualSection.value,
          start: "top 80%",
          fastScrollEnd: false
        }
      })

      introTl.fromTo(videoWrap.value, {
        x: '3%',
        opacity: 0,
      }, {
        x: '0%',
        opacity: 1,
        duration: 2,
        ease: 'none',
      }, 0)
      .fromTo(videoBigShape.value, {
        x: '8%',
      }, {
        x: '0%',
        duration: 2,
        ease: 'none',
      },0)
      .fromTo(videoSubWrap.value, {
        x: '3%',
        opacity: 0,
      }, {
        x: '0%',
        opacity: 1,
        duration: 2,
        ease: 'none',
      }, 0)
      .fromTo(videoSmallShape.value, {
        x: '5%',
      }, {
        x: '0%',
        duration: 2,
        ease: 'none',
      }, "<")
      

      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: visualSection.value,
          start: "top top",
          pin: true, 
          scrub: 1,
          //pinSpacing: true,
          markers: true,
          end: () => "+=800%",
          fastScrollEnd: false
        }
      });
      tl.to(videoWrap.value,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          scale: 1.4,
          
          scrollTrigger: {
            end: () => "+=100%",
            scrub: 1,
            ease: 'none',
            pin: true,
          },
        }, 0)
      .to(visualTitle.value, 
      {
        xPercent: -150,
        scrollTrigger: {
          end: () => "+=100%",
          scrub: 1,
        }
      }, 0)
      .to(videoSubWrap.value, 
      {
        xPercent: 100,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        scrollTrigger: {
          end: () => "+=100%",
          scrub: 1,
        }
      }, 0)
      .fromTo(videoWrapLayer.value, {
        opacity: 0,
        zIndex: 5,
        visibility: 'hidden',
      },
      {
        opacity: 0.5,
        zIndex: 5,
        visibility: 'visible',
        ease: 'none',
        scrollTrigger: {
          //trigger: videoWrapLayer.value,
          end: () => "+=100%",
          //end: () => "+=" + (visualSection.value.offsetHeight * 0.1),
          scrub: 1,
        }
      })
      .to(missionSection.value, {
        yPercent: -100,
        ease: "none",
        scrub: 1,
        scrollTrigger: {
          //trigger: missionSection.value,
          start: () => "+=" + (visualSection.value.offsetHeight * 0.3),
          end: () => "+=100%",
          scrub: 1,
        }
      }, ">1")
      


      
      

      let currentStep = -1
      const animations = []

      // 각 애니메이션을 개별 타임라인으로 생성 (paused 상태)
      const anim1 = $gsap.timeline({ paused: true })
        .to(characterRevealArray, {
          x: 0,
          opacity: 1,
          duration: 0.2, // 실제 애니메이션 시간
          ease: "none"
        })
        .fromTo(missionBox.value, 
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, ">"
        )

      const anim2 = $gsap.timeline({ paused: true })
        .to(characterDisappearArray, {
          x: 0,
          opacity: 1,
          duration: 0.2, // 실제 애니메이션 시간
          ease: "none"
        })
        .to(characterDisappearArray, {
          x: 150,
          duration: 0.6,
          ease: "none",
        })

      const anim3 = $gsap.timeline({ paused: true })
        .to(characterDelayArray, {
          x: 0,
          opacity: 1,
          visibility: 'visible',
          ease: "none",
          duration: 0.2,
        })

        //const anim4 =  $gsap.timeline({ paused: true })
        

      animations.push(anim1, anim2, anim3);


      $ScrollTrigger.create({
        trigger: missionSection.value,
        //pin: true,
        start: "top top",
        end: "+=600%",
        scrub: 2.5,
        anticipatePin: 1,
        fastScrollEnd: false,
        onEnter: () => {
          // pin이 시작될 때 y 위치 초기화
          // $gsap.set(missionSection.value, { 
          //   yPercent: 0,
          //   clearProps: 'transform' // 기존 transform 제거
          // })
        },
        onUpdate: (self) => {
          const margin = 0.3; 
          if (self.progress < margin) return;

          // progress를 (margin ~ 1) 사이에서 (0 ~ 1)로 재계산
          const adjustedProgress = (self.progress - margin) / (1 - margin);
          const newStep = Math.floor(adjustedProgress * 3);

          if (newStep !== currentStep && newStep > currentStep) {
            for (let i = currentStep + 1; i <= newStep; i++) {
              if (i >= 0 && i < animations.length) {
                animations[i].play();
              }
            }
            currentStep = newStep;
          }
        },
        
      })

      

      

      // 아코디언 섹션
      const accordionItems = accordionSection.value.querySelectorAll('.accordion-list > *');
      const accordionArray = Array.from(accordionItems);

      $gsap.timeline({
        scrollTrigger: {
          trigger: accordionSection.value,
          start: 'top top',
          pin: true,
          pinSpacing: true,
          end: () => "+=" + (accordionSection.value.offsetHeight * 1.5),
          fastScrollEnd: false,
          //scrub: 1,
        }
      })
    
      accordionArray.forEach((item, i) => {
        $gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 50%',
            duration: 0.15,
            fastScrollEnd: false,
            //scrub: 1,
          },
          x: 100,
          y: 50,
          opacity: 0,
          stagger: 0.2,
        })
      });

      const wetheworldTl = $gsap.timeline({
        scrollTrigger: {
          trigger: wetheworldSection.value,
          pin: true,
          pinSpacing: true,
          end: () => "+=" + (wetheworldSection.value.offsetHeight * 11),
          scrub: 1.5,
          fastScrollEnd: false,
          //markers: true
        }
      })

      // WE THE WORLD 섹션
      const gotopCurtainItems = wetheworldSection.value.querySelectorAll('.gotopCurtain .curtain-item');
      const godownCurtainItems = wetheworldSection.value.querySelectorAll('.godownCurtain .curtain-item');
      const gotopCurtainItemArray = Array.from(gotopCurtainItems);
      const godownCurtainItemArray = Array.from(godownCurtainItems);
      const blurValues = [150, 80, 25];
      const opacityValues = [0.42, 0.41, 0.4];
      const goYValues = ['84%', '78%', '72.5%'];

      wetheworldTl.to(wetheworldbg1.value, {
        opacity: 1,
        visibility: 'visible',
        start: 'top top',
        end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
      }, 0)
      .to(weText.value, {
        color: 'black',
        start: 'top top',
        end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
      }, 0)
      .to(theworldText.value, {
        color: 'black',
        start: 'top top',
        end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
      }, 0)
      .to(gotopCurtainItemArray,
      {
        start: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
        duration: 0.05,
        opacity: (i) => `${opacityValues[i]}`,
        backdropFilter: (i) => `blur(${blurValues[i]}px)`,
      })
      .to(godownCurtainItemArray, 
      {
        start: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
        duration: 0.05,
        opacity: (i) => `${opacityValues[i]}`,
        backdropFilter: (i) => `blur(${blurValues[i]}px)`,
      }, "<")
      .to(weText.value, {
        y: '-80vh',
        start: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
        end: () => "+=" + (wetheworldSection.value.offsetHeight * 2.5),
        scrub: 8,
      })
      .to(theworldText.value, {
        y: '80vh',
        start: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
        end: () => "+=" + (wetheworldSection.value.offsetHeight * 2.5),
        scrub: 8,
      }, "<")
      .to(gotopCurtainItemArray, {
        y: (i) => `-${goYValues[i]}`,
        stagger: 0.03,
      }, "<")
      .to(godownCurtainItemArray, {
        y: (i) => `${goYValues[i]}`,
        stagger: 0.03,
      }, "<")
      .to(wetheworldSlogan.value, {
        height: '100%',
      }, "-=0.5")
      .to(inspireText.value, {
        opacity: 0,
      }, ">")
      .to(connectText.value, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
      })
      .to(wetheworldbg2.value, {
        opacity: 1,
        visibility: 'visible',
      }, "<")
      .to(connectText.value, {
        opacity: 0,
      }, ">0.5")
      .to(changeText.value, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
      })
      .to(wetheworldbg3.value, {
        opacity: 1,
        visibility: 'visible',
        duration: 1,
      }, "<")

      // 뉴스룸 섹션

      // const glass = glassRef.value
      // const slider1 = flowLeft.value
      // const slider2 = flowRight.value

      // 초기 위치 설정 (시작할 때 여백)
      // $gsap.set(slider1, { x: 50 }) // 왼쪽 50px 여백에서 시작
      // $gsap.set(slider2, { x: -(slider2.scrollWidth - glass.clientWidth) -50 }) // 오른쪽 50px 여백에서 시작

      // 스크롤 트리거 설정 - 초기에는 pin 비활성화
      // scrollTrigger = $ScrollTrigger.create({
      //   trigger: glass,
      //   start: 'top top',
      //   end: '+=300%',
      //   pin: false,
      //   pinSpacing: true,
      //   anticipatePin: 1
      // })

    // 휠 이벤트 리스너 추가
    //glass.addEventListener('wheel', handleWheel, { passive: false })
    
    $ScrollTrigger.matchMedia({
      "(min-width: 1024px)": function() {
        const elementaKoreaTl = $gsap.timeline({
          scrollTrigger: {
            trigger: elementaKoreaSection.value,
            start: 'top 80%',
            scrub: 1,
            fastScrollEnd: false
          }
        })

        elementaKoreaTl.to(sliderImg.value, {
          maxWidth: '30rem',
          ease: 'power2.out',
          duration: 5,
        })
      },

      "(max-width: 1024px)": function() {
        const elementaKoreaTl = $gsap.timeline({
          scrollTrigger: {
            trigger: sliderImg.value,
            start: 'top 80%',
            //end: () => "+=" + (elementaKoreaSection.value.offsetHeight * 1.5),
            scrub: 1.5,
            fastScrollEnd: false
          }
        })

        elementaKoreaTl.to(sliderImg.value, {
          maxWidth: '38%',
          ease: 'power2.out',
          duration: 5,
        })
      },

    })
      /*"(min-width: 2560px)": function() {
        const newsroomTl = $gsap.timeline({
          scrollTrigger: {
            trigger: newsroomSection.value,
            start: 'top 0%',
            pin: true,
            end: () => "+=" + (newsroomSection.value.offsetHeight * 2),
            scrub: 1,
          }
        })

        newsroomTl.fromTo(flowLeft.value, {
          x: "10%",
        }, {
          x: "-43%",
          ease: 'power2.out',
          duration: 2,
        }, 0.2)

        newsroomTl.fromTo(flowRight.value, {
          x: "-47%",
        }, {
          x: "3%",
          ease: 'power2.out',
          duration: 2,
        }, 0.2)
      },

      "(min-width: 1920px) and (max-width: 2559px)": function() {
          const newsroomTl = $gsap.timeline({
          scrollTrigger: {
            trigger: newsroomSection.value,
            start: 'top -35%',
            pin: true,
            end: () => "+=" + (newsroomSection.value.offsetHeight * 2),
            scrub: 1,
          }
        })

        newsroomTl.fromTo(flowLeft.value, {
          x: "10%",
        }, {
          x: "-43%",
          ease: 'power2.out',
          duration: 2,
        }, 0.2)

        newsroomTl.fromTo(flowRight.value, {
          x: "-47%",
        }, {
          x: "3%",
          ease: 'power2.out',
          duration: 2,
        }, 0.2)
      },

      "(min-width: 1024px)": function() {
        const elementaKoreaTl = $gsap.timeline({
          scrollTrigger: {
            trigger: elementaKoreaSection.value,
            start: 'top 80%',
            scrub: 1,
          }
        })

        elementaKoreaTl.to(sliderImg.value, {
          maxWidth: '30rem',
          ease: 'power2.out',
          duration: 5,
        })
      },

      "(max-width: 1024px)": function() {
        const elementaKoreaTl = $gsap.timeline({
          scrollTrigger: {
            trigger: sliderImg.value,
            start: 'top 80%',
            //end: () => "+=" + (elementaKoreaSection.value.offsetHeight * 1.5),
            scrub: 1,
          }
        })

        elementaKoreaTl.to(sliderImg.value, {
          maxWidth: '38%',
          ease: 'power2.out',
          duration: 5,
        })
      },

      "(min-width: 768px) and (max-width: 1023px)": function() {
        const newsroomTl = $gsap.timeline({
          scrollTrigger: {
            trigger: newsroomSection.value,
            start: 'top -20%',
            pin: true,
            end: () => "+=" + (newsroomSection.value.offsetHeight * 2),
            scrub: 1,
          }
        })

        newsroomTl.fromTo(flowLeft.value, {
          x: "3%",
        }, {
          x: "-78%",
          ease: 'power2.out',
          duration: 2,
        }, 0.2)

        newsroomTl.fromTo(flowRight.value, {
          x: "-78%",
        }, {
          x: "0%",
          ease: 'power2.out',
          duration: 2,
        }, 0.2)
      },

      "(max-width: 767px)": function() {
        const newsroomTl = $gsap.timeline({
          scrollTrigger: {
            trigger: newsroomSection.value,
            start: 'top 10%',
            pin: true,
            end: () => "+=" + (newsroomSection.value.offsetHeight * 2.5),
            scrub: 1,
          }
        })

        newsroomTl.fromTo(flowLeft.value, {
          x: "1%",
        }, {
          x: "-84%",
          ease: 'power2.out',
          duration: 2,
        }, 0.2)
      }
      });*/

      // 카드 스크롤 애니메이션
      const cardList = document.querySelector('.careers-section .slide-wrapper');

      // 카드 스크롤 애니메이션
      $gsap.timeline({
        scrollTrigger: {
          trigger: cardList,
          start: 'top 90%',
          end: 'top 90%',
          fastScrollEnd: false
          // markers: true
      }
      }).fromTo(cardList, 
        { y: '30%', opacity: 0 }, 
        { y: '0%', opacity: 1, duration: 1.5, ease: 'ease'   
      })

      if (careerSliderRef.value) {
        careerSliderRef.value.style.touchAction = 'pan-x pan-y'
        careerSliderRef.value.setAttribute('data-lenis-prevent', '')
      }

      // Swiper 초기화 전에 이벤트 캡처 설정
      const swiperEl = careerSliderRef.value?.querySelector('.swiper')
      
      if (swiperEl) {
        const preventLenis = (e) => {
          e.stopImmediatePropagation()
        }
        
        swiperEl.addEventListener('touchstart', preventLenis, { 
          capture: true, 
          passive: false 
        })
        swiperEl.addEventListener('touchmove', preventLenis, { 
          capture: true, 
          passive: false 
        })
      }
    });

    // 초기 로드 시에만 refresh (깜빡임 방지)
    if (isFirstLoad) {
      isFirstLoad = false;
      setTimeout(() => $ScrollTrigger.refresh(), 50);
    }
  }

 // 초기 실행
    initAnimation();

    // 이후 리사이즈 감지
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initAnimation();
      }, 200); // 조금 더 여유있게
    });

    resizeObserver.observe(introSection.value);
    resizeObserver.observe(missionSection.value);
    resizeObserver.observe(newsroomSection.value);

    $lenis.scrollTo(0, { immediate: true });

    onUnmounted(() => {
      clearTimeout(resizeTimeout);
      resizeObserver.disconnect();
      
      ctx?.revert();
    });
})


const nodeVersion = process.version
</script>

<script>
  // Set career swiper
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'

  import NextButton from '@/components/buttons/nextButton.vue'
  import PrevButton from '@/components/buttons/prevButton.vue'

  const modules = [Navigation]

  const swiperInstance = ref({})
  const onSwiper = (swiper) => {
    swiperInstance.value = swiper
  }

  export default {
    components: {
      Swiper,
      SwiperSlide,
      PrevButton,
      NextButton
    },
    data() {
      return {
        modules: modules,
        swiperInstance: {},
      };
    },
    methods: {
      onSwiper(swiper) {
        this.swiperInstance = swiper
      }
    }
    
  }

</script>

<style scoped>
#nuxt-devtools-container {
    display: none !important;
  }
.page {
  text-align: center;
  margin-top: 60px;
  font-family: system-ui, sans-serif;
}

.character-wrap {
  overflow: clip;
  clip-path: inset(0 0 -.086em 0) !important;
  overflow: unset !important;
}

.character-wrap:not(:last-child) {
    margin-right: 0.4rem;
}


.primary-character, .primary-character--delay {
  transform: translateX(-102%);
  clip-path: inset(0 0 -.086em 0);
  will-change: transform;
  perspective: 1000px;
}

@media (max-width: 767px) {
  .character-wrap:not(:last-child) {
    margin-right: 0.2rem;
  }
}

</style>
