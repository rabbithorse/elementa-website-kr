<template>
  <div>
    <section ref="visualSection" class="visualSection h-[100vh] relative overflow-hidden">
      <div ref="videoWrap" class="video-layer video-layer--main">
        <span ref="videoWrapLayer" class="bg-video-layer"></span>
        <EffectGlass>
          <video autoplay muted loop>
            <source src="~/assets/videos/main-fly.mp4" type="video/mp4" />
          </video>
        </EffectGlass>
      </div>
      <div ref="videoSubWrap" class="video-layer video-layer--sub">
        <video autoplay muted loop>
          <source src="~/assets/videos/main-war.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="bg-video">
        <video class="bg-video--content" autoplay muted loop>
          <source src="~/assets/videos/main-logo-ani.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="intro-section h-full" ref="introSection">
        <Container class="h-full">
          <!-- 첫번째 애니메이션 -->
          <div class="flex flex-col h-full pb-[6.25rem]" ref="visualTitle">
            <h2 class="text-[17rem] leading-1 font-bold text-white pt-[6.25rem] primary-text" >
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
              <p class="text-white text-[2.3rem] font-normal mb-8 flex flex-col">
                <TypographySecondary>Design the Future of Play,</TypographySecondary>
                <TypographySecondary>Create a Culture the World Shares</TypographySecondary>
              </p>
              <div class="w-fit">
                <EffectGlass>
                  <div class="text-list flex gap-x-7 py-[0.9rem]">
                    <span class="text-lg text-white">Innovation</span>
                    <span class="text-lg text-white">Trust</span>
                    <span class="text-lg text-white">Culture</span>
                  </div>
                </EffectGlass>
              </div>
            </div>
          </div>
          <!-- 두번째 애니메이션 -->
          

        </Container>
      </div>
      <div class="mission-section flex flex-col justify-center items-center relative" ref="missionSection">
        <div class="text-wrap">
          <h2 class="text-[13.75rem] leading-1 font-bold text-white pt-[6.25rem]">
            <div class="top-line">
              <div ref="weCreate" class="leading-none" >
                <span class="primary-text text-[13.75rem] leading-none">
                  <TypographyPrimary>
                  W
                  </TypographyPrimary>
                  <TypographyPrimary>
                  E
                  </TypographyPrimary>
                </span>
                <span class="primary-text ml-8 text-[13.75rem] leading-none">
                  <TypographyPrimary>
                  C
                  </TypographyPrimary>
                  <TypographyPrimary>
                  R
                  </TypographyPrimary>
                  <TypographyPrimary>
                  E
                  </TypographyPrimary>
                  <TypographyPrimary>
                  A
                  </TypographyPrimary>
                  <TypographyPrimary>
                  T
                  </TypographyPrimary>
                  <TypographyPrimary>
                  E
                  </TypographyPrimary>
                </span>
              </div>
            </div>
            <div class="bottom-line relative">
              <div ref="newParadigm" class="leading-none gradient-text blue" >
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="97" height="179" viewBox="0 0 97 179" fill="none">
                      <foreignObject x="-40" y="-40" width="176.8" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1220_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H27.72L64.24 85.8V0H96.8V178.2H70.18L33.66 85.8V178.2H0Z" fill="url(#paint0_linear_24_1220)"/>
                      <defs>
                      <clipPath id="bgblur_0_24_1220_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H27.72L64.24 85.8V0H96.8V178.2H70.18L33.66 85.8V178.2H0Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1220" x1="0.223819" y1="178.2" x2="1924.72" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </TypographyPrimary>
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="179" viewBox="0 0 81 179" fill="none">
                      <foreignObject x="-40" y="-40" width="160.52" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1219_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H80.08V26.84H39.38V71.06H70.4V98.34H39.38V151.58H80.52V178.2H0Z" fill="url(#paint0_linear_24_1219)"/>
                      <defs>
                      <clipPath id="bgblur_0_24_1219_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H80.08V26.84H39.38V71.06H70.4V98.34H39.38V151.58H80.52V178.2H0Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1219" x1="-116.497" y1="178.2" x2="1808" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </TypographyPrimary>
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="142" height="179" viewBox="0 0 142 179" fill="none">
                      <foreignObject x="-40" y="-40" width="221.46" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1218_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M21.56 178.2L0 0H33.44L44 103.84L57.42 0.220011H83.6L97.68 103.18L108.46 0H141.46L120.12 178.2H85.8L70.62 70.62L56.32 178.2H21.56Z" fill="url(#paint0_linear_24_1218)"/>
                      <defs>
                        <clipPath id="bgblur_0_24_1218_clip_path" transform="translate(40 40)"><path d="M21.56 178.2L0 0H33.44L44 103.84L57.42 0.220011H83.6L97.68 103.18L108.46 0H141.46L120.12 178.2H85.8L70.62 70.62L56.32 178.2H21.56Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1218" x1="-201.035" y1="178.2" x2="1723.47" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </TypographyPrimary>
                
                  <TypographyPrimary class="ml-5" ref="primaryText">
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="179" viewBox="0 0 107 179" fill="none">
                      <foreignObject x="-40" y="-40" width="186.7" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1217_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H59.84C70.5467 0 79.3467 2.05333 86.24 6.16C93.1333 10.12 98.2666 15.9867 101.64 23.76C105.013 31.3867 106.7 40.7 106.7 51.7C106.7 65.4867 104.427 76.0467 99.88 83.38C95.3333 90.5667 89.1733 95.5533 81.4 98.34C73.6267 101.127 64.9 102.52 55.22 102.52H39.38V178.2H0ZM39.38 75.02H52.58C57.42 75.02 61.0867 74.14 63.58 72.38C66.0733 70.62 67.6867 67.98 68.42 64.46C69.3 60.94 69.74 56.4667 69.74 51.04C69.74 46.4933 69.3733 42.5333 68.64 39.16C68.0533 35.64 66.5133 32.8533 64.02 30.8C61.5267 28.7467 57.64 27.72 52.36 27.72H39.38V75.02Z" fill="url(#paint0_linear_24_1217)"/>
                      <defs>
                        <clipPath id="bgblur_0_24_1217_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H59.84C70.5467 0 79.3467 2.05333 86.24 6.16C93.1333 10.12 98.2666 15.9867 101.64 23.76C105.013 31.3867 106.7 40.7 106.7 51.7C106.7 65.4867 104.427 76.0467 99.88 83.38C95.3333 90.5667 89.1733 95.5533 81.4 98.34C73.6267 101.127 64.9 102.52 55.22 102.52H39.38V178.2H0ZM39.38 75.02H52.58C57.42 75.02 61.0867 74.14 63.58 72.38C66.0733 70.62 67.6867 67.98 68.42 64.46C69.3 60.94 69.74 56.4667 69.74 51.04C69.74 46.4933 69.3733 42.5333 68.64 39.16C68.0533 35.64 66.5133 32.8533 64.02 30.8C61.5267 28.7467 57.64 27.72 52.36 27.72H39.38V75.02Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1217" x1="-389.382" y1="178.2" x2="1535.12" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  </TypographyPrimary>
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="112" height="179" viewBox="0 0 112 179" fill="none">
                      <foreignObject x="-40" y="-40" width="191.76" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1216_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z" fill="url(#paint0_linear_24_1216)"/>
                      <defs>
                      <clipPath id="bgblur_0_24_1216_clip_path" transform="translate(40 40)"><path d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1216" x1="-489.359" y1="178.2" x2="1435.14" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </TypographyPrimary>
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="111" height="179" viewBox="0 0 111 179" fill="none">
                      <foreignObject x="-40" y="-40" width="190.88" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1215_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H49.06C61.0867 0 71.5 1.32 80.3 3.96C89.1 6.6 95.92 11.3667 100.76 18.26C105.747 25.0067 108.24 34.6133 108.24 47.08C108.24 54.4133 107.653 60.94 106.48 66.66C105.307 72.38 103.107 77.3667 99.88 81.62C96.8 85.7267 92.3266 89.1733 86.46 91.96L110.88 178.2H70.18L50.6 98.34H39.38V178.2H0ZM39.38 75.68H50.38C55.9533 75.68 60.28 74.7267 63.36 72.82C66.44 70.7667 68.5667 67.9067 69.74 64.24C71.06 60.4267 71.72 55.88 71.72 50.6C71.72 42.9733 70.3266 37.0333 67.54 32.78C64.7533 28.5267 59.62 26.4 52.14 26.4H39.38V75.68Z" fill="url(#paint0_linear_24_1215)"/>
                      <defs>
                        <clipPath id="bgblur_0_24_1215_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H49.06C61.0867 0 71.5 1.32 80.3 3.96C89.1 6.6 95.92 11.3667 100.76 18.26C105.747 25.0067 108.24 34.6133 108.24 47.08C108.24 54.4133 107.653 60.94 106.48 66.66C105.307 72.38 103.107 77.3667 99.88 81.62C96.8 85.7267 92.3266 89.1733 86.46 91.96L110.88 178.2H70.18L50.6 98.34H39.38V178.2H0ZM39.38 75.68H50.38C55.9533 75.68 60.28 74.7267 63.36 72.82C66.44 70.7667 68.5667 67.9067 69.74 64.24C71.06 60.4267 71.72 55.88 71.72 50.6C71.72 42.9733 70.3266 37.0333 67.54 32.78C64.7533 28.5267 59.62 26.4 52.14 26.4H39.38V75.68Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1215" x1="-612.511" y1="178.2" x2="1311.99" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  </TypographyPrimary>
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="112" height="179" viewBox="0 0 112 179" fill="none">
                      <foreignObject x="-40" y="-40" width="191.76" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1214_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z" fill="url(#paint0_linear_24_1214)"/>
                      <defs>
                        <clipPath id="bgblur_0_24_1214_clip_path" transform="translate(40 40)"><path d="M0 178.2L33.66 0H78.54L111.76 178.2H75.46L69.52 140.58H43.34L37.18 178.2H0ZM46.86 117.04H65.78L56.32 47.52L46.86 117.04Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1214" x1="-729.245" y1="178.2" x2="1195.26" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  </TypographyPrimary>
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="105" height="179" viewBox="0 0 105 179" fill="none">
                      <foreignObject x="-40" y="-40" width="184.94" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1213_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H45.1C60.6466 0 72.7466 1.98 81.4 5.94C90.0533 9.75334 96.14 15.84 99.66 24.2C103.18 32.4133 104.94 43.12 104.94 56.32V121C104.94 134.347 103.18 145.273 99.66 153.78C96.14 162.14 90.0533 168.3 81.4 172.26C72.8933 176.22 60.94 178.2 45.54 178.2H0ZM39.38 150.92H45.54C51.5533 150.92 55.88 150.04 58.52 148.28C61.16 146.52 62.7733 143.88 63.36 140.36C64.0933 136.84 64.46 132.44 64.46 127.16V49.5C64.46 44.22 64.02 39.9667 63.14 36.74C62.4067 33.5133 60.72 31.1667 58.08 29.7C55.44 28.2333 51.1867 27.5 45.32 27.5H39.38V150.92Z" fill="url(#paint0_linear_24_1213)"/>
                      <defs>
                      <clipPath id="bgblur_0_24_1213_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H45.1C60.6466 0 72.7466 1.98 81.4 5.94C90.0533 9.75334 96.14 15.84 99.66 24.2C103.18 32.4133 104.94 43.12 104.94 56.32V121C104.94 134.347 103.18 145.273 99.66 153.78C96.14 162.14 90.0533 168.3 81.4 172.26C72.8933 176.22 60.94 178.2 45.54 178.2H0ZM39.38 150.92H45.54C51.5533 150.92 55.88 150.04 58.52 148.28C61.16 146.52 62.7733 143.88 63.36 140.36C64.0933 136.84 64.46 132.44 64.46 127.16V49.5C64.46 44.22 64.02 39.9667 63.14 36.74C62.4067 33.5133 60.72 31.1667 58.08 29.7C55.44 28.2333 51.1867 27.5 45.32 27.5H39.38V150.92Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1213" x1="-852.396" y1="178.2" x2="1072.1" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </TypographyPrimary>
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="179" viewBox="0 0 40 179" fill="none">
                      <foreignObject x="-40" y="-40" width="119.38" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1212_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2V0H39.38V178.2H0Z" fill="url(#paint0_linear_24_1212)"/>
                      <defs>
                        <clipPath id="bgblur_0_24_1212_clip_path" transform="translate(40 40)"><path d="M0 178.2V0H39.38V178.2H0Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1212" x1="-974.923" y1="178.2" x2="949.577" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  </TypographyPrimary>
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="106" height="184" viewBox="0 0 106 184" fill="none">
                      <foreignObject x="-40" y="-40" width="185.82" height="263.26"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1211_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M48.84 183.26C36.52 183.26 26.7666 180.693 19.58 175.56C12.54 170.427 7.48002 163.24 4.40002 154C1.46669 144.613 0 133.833 0 121.66V61.82C0 49.2067 1.6133 38.28 4.83997 29.04C8.06663 19.8 13.5666 12.6867 21.34 7.70001C29.26 2.56667 39.9666 0 53.46 0C66.66 0 77 2.2 84.48 6.60001C92.1066 11 97.5333 17.0867 100.76 24.86C103.987 32.6333 105.6 41.7267 105.6 52.14V63.58H67.1V49.06C67.1 45.2467 66.8066 41.7267 66.22 38.5C65.78 35.2733 64.6066 32.7067 62.7 30.8C60.94 28.7467 58.0067 27.72 53.9 27.72C49.6467 27.72 46.5666 28.8933 44.6599 31.24C42.7532 33.44 41.5066 36.2267 40.9199 39.6C40.4799 42.9733 40.26 46.4933 40.26 50.16V132.66C40.26 136.62 40.6267 140.36 41.36 143.88C42.24 147.253 43.7067 150.04 45.76 152.24C47.96 154.293 51.04 155.32 55 155.32C59.1067 155.32 62.26 154.22 64.46 152.02C66.66 149.82 68.2 146.96 69.08 143.44C69.96 139.92 70.4 136.18 70.4 132.22V111.32H54.34V88.22H105.82V180.62H79.86L77.6599 165.88C75.3132 170.867 71.8666 175.047 67.3199 178.42C62.7733 181.647 56.6133 183.26 48.84 183.26Z" fill="url(#paint0_linear_24_1211)"/>
                      <defs>
                        <clipPath id="bgblur_0_24_1211_clip_path" transform="translate(40 40)"><path d="M48.84 183.26C36.52 183.26 26.7666 180.693 19.58 175.56C12.54 170.427 7.48002 163.24 4.40002 154C1.46669 144.613 0 133.833 0 121.66V61.82C0 49.2067 1.6133 38.28 4.83997 29.04C8.06663 19.8 13.5666 12.6867 21.34 7.70001C29.26 2.56667 39.9666 0 53.46 0C66.66 0 77 2.2 84.48 6.60001C92.1066 11 97.5333 17.0867 100.76 24.86C103.987 32.6333 105.6 41.7267 105.6 52.14V63.58H67.1V49.06C67.1 45.2467 66.8066 41.7267 66.22 38.5C65.78 35.2733 64.6066 32.7067 62.7 30.8C60.94 28.7467 58.0067 27.72 53.9 27.72C49.6467 27.72 46.5666 28.8933 44.6599 31.24C42.7532 33.44 41.5066 36.2267 40.9199 39.6C40.4799 42.9733 40.26 46.4933 40.26 50.16V132.66C40.26 136.62 40.6267 140.36 41.36 143.88C42.24 147.253 43.7067 150.04 45.76 152.24C47.96 154.293 51.04 155.32 55 155.32C59.1067 155.32 62.26 154.22 64.46 152.02C66.66 149.82 68.2 146.96 69.08 143.44C69.96 139.92 70.4 136.18 70.4 132.22V111.32H54.34V88.22H105.82V180.62H79.86L77.6599 165.88C75.3132 170.867 71.8666 175.047 67.3199 178.42C62.7733 181.647 56.6133 183.26 48.84 183.26Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1211" x1="-1031.85" y1="180.62" x2="892.645" y2="180.62" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  </TypographyPrimary>
                  <TypographyPrimary>
                    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="179" viewBox="0 0 130 179" fill="none">
                      <foreignObject x="-40" y="-40" width="209.8" height="258.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(20px);clip-path:url(#bgblur_0_24_1210_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="40" d="M0 178.2L3.07996 0H45.3199L64.9 103.62L86.02 0H126.72L129.8 178.2H101.86L98.5599 59.62L77.88 178.2H53.02L31.02 58.74L28.38 178.2H0Z" fill="url(#paint0_linear_24_1210)"/>
                      <defs>
                      <clipPath id="bgblur_0_24_1210_clip_path" transform="translate(40 40)"><path d="M0 178.2L3.07996 0H45.3199L64.9 103.62L86.02 0H126.72L129.8 178.2H101.86L98.5599 59.62L77.88 178.2H53.02L31.02 58.74L28.38 178.2H0Z"/>
                      </clipPath><linearGradient id="paint0_linear_24_1210" x1="-1155.06" y1="178.2" x2="769.438" y2="178.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0AD9FE"/>
                      <stop offset="1" stop-color="#7D4FF0"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </TypographyPrimary>
                
              </div>
              <div ref="lastingImpact" class="text-absolute absolute inset-0 text-center opacity-0 invisible leading-none" >
                <span class="primary-text">
                  <TypographyPrimary>
                  L
                  </TypographyPrimary>
                  <TypographyPrimary>
                  A
                  </TypographyPrimary>
                  <TypographyPrimary>
                  S
                  </TypographyPrimary>
                  <TypographyPrimary>
                  T
                  </TypographyPrimary>
                  <TypographyPrimary>
                  I
                  </TypographyPrimary>
                  <TypographyPrimary>
                  N
                  </TypographyPrimary>
                  <TypographyPrimary>
                  G
                  </TypographyPrimary>
                </span>
                <span class="primary-text ml-8">
                  <TypographyPrimary>
                  I
                  </TypographyPrimary>
                  <TypographyPrimary>
                  M
                  </TypographyPrimary>
                  <TypographyPrimary>
                  P
                  </TypographyPrimary>
                  <TypographyPrimary>
                  A
                  </TypographyPrimary>
                  <TypographyPrimary>
                  C
                  </TypographyPrimary>
                  <TypographyPrimary>
                  T
                  </TypographyPrimary>
                </span>
              </div>
            </div>
          </h2>
        </div>
        <div class="box-wrap max-w-[61rem] mx-auto">
          <EffectGlass>
            <span class="sectionTitle-eng text-white text-base relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-pulse before:bg-[#00C8EB] before:w-3 before:h-3 before:rounded-full pl-5">Our Mission</span>
            <div class="text-content gap-x-7 py-[0.9rem]">
              <p class="text-white text-2xl">혁신적 경험으로 게임의 기준을 새롭게 쓰고, 협력과 도전으로 문화를 확장하며, <br>전 세계가 공감할 지속 가능한 감동을 만드는 문화·패러다임의 선도자로 성장하겠습니다.</p>
            </div>
            <ButtonsBasic size="sm" color="white">View more</ButtonsBasic>
          </EffectGlass>
        </div>
      </div>
       
    </section>
    <section class="accordion-section" ref="accordionSection">
      <div class="accordion-list flex h-full w-full">
        <BlocksAccordion class="silver-palace opened" background ref="accordionItem">
          <template #accordionTitle class="accordion-title">
            <span class="text-white">01</span>
            <h3 class="text-white">SILVER PALACE</h3>
          </template>
          <template #accordionContent>
            <div class="content-bg absolute left-0 top-0 w-[100vw] h-full overflow-hidden">
              <video autoplay muted loop class="w-full h-full object-cover">
                <source src="~/assets/videos/main-game-silverpalace.mp4" type="video/mp4">
              </video>
            </div>

            <div class="content-text w-fit h-full ml-auto ">
              <EffectGlass class="h-full">
                <div class="flex flex-col justify-end gap-y-[3.125rem] pb-[5.625rem] px-8 h-full">
                  <div class="content-title title-img">
                    <img src="~assets/images/main/text-game-silverpalace.svg" alt="icon" />
                  </div>
                  <div class="content-detail flex flex-col gap-y-6 ">
                    <p class="subtitle text-[1.625rem] font-semibold leading-[2rem]">
                      사건의 진위, <br>
                      무대의 서막
                    </p>
                    <p class="text-[1.125rem] leading-7">
                      펠리아나 3년, 다시 실버니아로 돌아온 탐정. <br>
                      그리고 현실과 우화가 뒤섞이고, 번영과 몰락의 경계에 <br>
                      서 있는 실버니아.
                    </p>
                    <p>
                      사교와 조사, 판단 그리고 전투, 당신이 그 총알 한 발의 <br>
                      진실을 찾아낸다면, 자신은 물론, 모든 이들의 운명까지 <br>
                      결정짓게 될 것이다.
                    </p>
                  </div>
                  <div class="content-button">
                    <ButtonsBasic size="sm" color="yellow ">View more</ButtonsBasic>
                  </div>
                </div>
              </EffectGlass>
            </div>
          </template>
        </BlocksAccordion>
        <BlocksAccordion class="locked" ref="accordionItem">
          <template #accordionTitle >
            <span class="locked-title-icon">
            </span>
            <span class="locked-title-text">
              
            </span>
          </template>
          <template #accordionContent></template>
        </BlocksAccordion>
        <BlocksAccordion class="locked" ref="accordionItem">
          <template #accordionTitle >
            <span class="locked-title-icon"></span>
            <span class="locked-title-text"></span>
          </template>
          <template #accordionContent></template>
        </BlocksAccordion>
        <BlocksAccordion class="locked" ref="accordionItem">
          <template #accordionTitle>
            <span class="locked-title-icon"></span>
            <span class="locked-title-text"></span>
          </template>
          <template #accordionContent></template>
        </BlocksAccordion>
      </div>
    </section>
    <section class="h-auto" ref="elementaKoreaSection">
      <div class="slider-wrap">
        <div class="slider-text">
          <h2 class="flex items-center justify-center gap-x-8 text-[17rem] leading-1 font-bold text-white pt-[6.25rem]" ref="elementaKorea">
            <span class="leading-[100%] text-[#9FAEB5] font-[15rem] tracking-[-0.3rem]">
              ELEMENTA
            </span>
            <div class="slider-img flex items-center justify-center mt-3" ref="sliderImg">
              <img src="~assets/images/main/elementakorea-center-img.png" alt="" class="block">
            </div>
            <span class="leading-[100%] text-[#9FAEB5] font-[15rem] tracking-[-0.3rem]">
              KOREA
            </span>
          </h2>
        </div>
        
      </div>
    </section>
    <section class="wetheworld-section flex items-center justify-center" ref="wetheworldSection">
      <div class="wetheworldbg-video01 opacity-0 invisible absolute inset-0 z-0" ref="wetheworldbg1">
        <video class="bg-video--content w-full h-full object-cover" autoplay muted loop>
          <source src="~/assets/videos/main-wetheworld.mp4" type="video/mp4" />
        </video>
      </div>
      <h2 class="text-[17rem] leading-1 font-bold text-white pt-[6.25rem] text-center">
        <span ref="weText" class="block leading-[100%]">
          <TypographyPrimary>
            W
          </TypographyPrimary>
          <TypographyPrimary>
            E
          </TypographyPrimary>
        </span>
        <div class="text-spacer"></div>
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
            <TypographyPrimary>
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
      <div class="gotopCurtain">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="godownCurtain">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
    <section class="newsroom-section relative pt-[6.25rem] pb-[6rem]" ref="newsroomSection">
      <div class="bg-text absolute bottom-0 left-0 ">
        <span class="text-[#403B4E] text-[5rem] font-bold">NEW PARADIGM, LASTING IMPACT. ELEMENTA KOREA</span>
        <h2 class="text-[28rem] gradient-text grey font-bold">ELEMENTA ELEMENTA</h2>
      </div>
      <Container>
        <div class="section-heading relative">
          <div class="heading-text flex flex-col gap-y-10">
            <span class="sectionTitle-eng text-white text-base relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:animate-pulse before:bg-[#00C8EB] before:w-3 before:h-3 before:rounded-full pl-5 ">NEWSROOM</span>
            <h6 class="text-white text-[2.3rem] font-normal">
              <TypographySecondary>ELEMENTA의 가장 최신 뉴스를 알아보세요. </TypographySecondary> <br />
              <TypographySecondary>New Paradigm, Lasting Impact</TypographySecondary>
            </h6>
          </div> 
          <div class="heading-button absolute right-0 bottom-0">
            <ButtonsBasic size="lg" color="blue">View more</ButtonsBasic>
          </div>
        </div>
        <div class="section-content flex">
          <div class="content-text">
            <p class="text-white ">
              New Paradigm, <br>
              Lasting Impact
            </p>
          </div>
          <div class="card-grid flex flex-col gap-y-18">
            <EffectGlass class="card-glass pt-[5rem] relative after:absolute after:inset-y-0 after:right-0 after:w-80">
              <div class="card-list flex gap-[3.75rem] justify-center flow-left mb-[4.375rem]" ref="flowLeft">
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb01.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb02.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          UE5로 만든 싱가포르 서브컬처 기대작, 실버 팰리스 공개
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb03.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 게임...
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb04.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 신작 실버 팰리스 첫 공개
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb05.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 공개…글로벌 시장 공략
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb06.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
              </div>
              <div class="card-list flex gap-[3.75rem] justify-center flow-left rows-reverse" ref="flowRight">
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb01.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep ">
                          '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb02.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          UE5로 만든 싱가포르 서브컬처 기대작, 실버 팰리스 공개
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb03.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 게임...
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb04.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 신작 실버 팰리스 첫 공개
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb05.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          엘리멘타, 언리얼 엔진 5 기반 신작 ‘실버 팰리스’ 공개…글로벌 시장 공략
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
                <div class="card w-[28rem]" >
                  <EffectCardHover>
                    <div class="flex flex-col gap-y-4 w-full h-full justify-start">
                      <div class="card-img">
                        <img src="~assets/images/main/newsroom-thumb06.png" alt="">
                      </div>
                      <div class="card-content">
                        <div class="card-title text-white break-keep">
                          '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차' '실버 팰리스' 엘리멘타, 한국 지사 세우고 국내 공략 '박차'
                        </div>
                      </div>
                    </div>
                  </EffectCardHover>
                </div>
              </div>
            </EffectGlass>
          </div>
        </div>
        
      </Container>
    </section>
    <section class="careers-section">
      <Container>
        <div class="section-heading">
          <div class="heading-text">
            <span class="sectionTitle-eng">CAREERS</span>
            <h6>
              ELEMENTA와 함께 성장할 동료를 기다립니다. <br>
              Design the Future of Play, Create a Culture the World Shares 
            </h6>
          </div>
          <div class="heading-button">
            <a href="">View more</a>
          </div>
        </div>
        <div class="section-content">
          <div class="card-grid">
            <div class="card-list flex flex-wrap gap-8 justify-center py-20 flow-left">
              
            </div>
          </div>
        </div>
        
      </Container>
    </section>
  </div>
</template>

<script setup>
import { EffectGlass } from '#components';
import Container from '~/components/Container.vue';

const { $gsap, $ScrollTrigger } = useNuxtApp()
const introSection = ref(null)
const videoWrap = ref(null)
const videoWrapLayer = ref(null)
const visualSection = ref(null)
const videoSubWrap = ref(null)
const visualTitle = ref(null)
const missionSection = ref(null)
const primaryText = ref([])
const weCreate = ref(null)
const newParadigm = ref(null)
const lastingImpact = ref(null)
const elementaKoreaSection = ref(null)
const sliderImg = ref(null)
const newsroomSection = ref(null)
const flowLeft = ref(null)
const flowRight = ref(null)
const accordionSection = ref(null)
const accordionItem = ref([])
const wetheworldSection = ref(null)
const wetheworldbg1 = ref(null)
const weText = ref(null)
const theworldText = ref(null)

onMounted(() => {
  let primaryTexts = missionSection.value.querySelectorAll('.primary-char');
  let primaryArray = Array.from(primaryTexts);

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: visualSection.value,
      start: "top top",
      pin: true, 
      //pinSpacing: true,
      //markers: true,
      end: () => "+=" + (visualSection.value.offsetHeight * 6),
    }
  });
  tl.to(videoWrap.value,
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      scale: 1.4,
      
      scrollTrigger: {
        end: () => "+=" + visualSection.value.offsetHeight,
        scrub: 1,
        ease: 'none',
        pin: true,
      },
    }, 0)
  .to(visualTitle.value, 
  {
    xPercent: -150,
    scrollTrigger: {
      end: () => "+=" + visualSection.value.offsetHeight,
      scrub: 1,
    }
  }, 0)
  .to(videoSubWrap.value, 
  {
    xPercent: 100,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    scrollTrigger: {
      end: () => "+=" + visualSection.value.offsetHeight,
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
      start: () => "+=" + visualSection.value.offsetHeight,
      end: () => "+=" + visualSection.value.offsetHeight,
      scrub: 1,
    }
  })
  .to(missionSection.value, 
  {
    pin: true,
    yPercent: -100,
    ease: 'none',
    scrollTrigger: {
      start: () => "+=" + (visualSection.value.offsetHeight * 2),
      end: () => "+=" + visualSection.value.offsetHeight,
      scrub: 1,
    }
  })
  .to(primaryArray, {
    xPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: missionSection.value,
      start: 'top center',
      markers: true,
    }
  }, "+=8")

  

  
  const accordionItems = accordionSection.value.querySelectorAll('.accordion-list > *');
  const accordionArray = Array.from(accordionItems);
  
  const accordionTl = $gsap.timeline({
    scrollTrigger: {
      trigger: accordionSection.value,
      start: 'top 80%',
      end: () => "+=" + (accordionSection.value.offsetHeight * 0.6),
      scrub: 1,
    }
  })
  accordionTl.from(accordionArray, {
    x: 100,
    y: 50,
    opacity: 0,
    stagger: 0.1,
  })

  const wetheworldTl = $gsap.timeline({
    scrollTrigger: {
      trigger: wetheworldSection.value,
      pin: true,
      pinSpacing: true,
      end: () => "+=" + (wetheworldSection.value.offsetHeight * 5),
      scrub: 1,
      //markers: true
    }
  })

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
  .to(weText.value, {
    y: '-80vh',
    start: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
    end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.2),
    scrub: 1,
  })
  .to(theworldText.value, {
    y: '80vh',
    start: () => "+=" + (wetheworldSection.value.offsetHeight * 1.5),
    end: () => "+=" + (wetheworldSection.value.offsetHeight * 1.2),
    scrub: 1,
  }, "<")
  
  

  const elementaKoreaTl = $gsap.timeline({
    scrollTrigger: {
      trigger: elementaKoreaSection.value,
      start: 'top 80%',
      end: () => "+=" + (elementaKoreaSection.value.offsetHeight * 1.5),
      scrub: 1,
    }
  })

  elementaKoreaTl.to(sliderImg.value, {
    maxWidth: '30rem',
    ease: 'power2.out',
    duration: 5,
  })

  const newsroomTl = $gsap.timeline({
    scrollTrigger: {
      trigger: newsroomSection.value,
      start: 'top -20%',
      pin: true,
      end: () => "+=" + (newsroomSection.value.offsetHeight * 3),
      scrub: 1,
    }
  })

  newsroomTl.fromTo(flowLeft.value, {
    x: calcTransform("x", "calc(100% - 100vw)"),
  }, {
    x: calcTransform("x", "calc(100% - 150vw)"),
    ease: 'power2.out',
    duration: 3,
  }, 0.2)

  newsroomTl.fromTo(flowRight.value, {
    x: calcTransform("x", "calc(-80% + 100vw)"),
  }, {
    x: calcTransform("x", "calc(-100% + 150vw)"),
    ease: 'power2.out',
    duration: 3,
  }, 0.2)

  function calcTransform(property, value) {
    let alias = { y: "translateY", x: "translateX", z: "translateZ", rotation: "rotate" };
    return function (i, target) {
      let transform = target.style.transform;
      target.style.transform = (alias[property] || property) + "(" + value + ")";
      let computed = parseFloat($gsap.getProperty(target, property, property.substr(0, 3) === "rot" ? "deg" : "px", true));
      target.style.transform = transform;
      $gsap.getProperty(target, property, "px", true);
      return computed; 
    };
  }

  
  // .fromTo(weCreate.value, {
  //   opacity: 0,
  //   visibility: 'hidden',
  // },{
  //   opacity: 1,
  //   visibility: 'visible',
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: videoWrapLayer.value,
  //     start: () => "+=" + (window.innerHeight * 2.5),
  //     end: () => "+=" + (window.innerHeight / 2),
  //     scrub: 1,
  //   }
  // })
  // .fromTo(newParadigm.value, {
  //   opacity: 0,
  //   visibility: 'hidden',
  // },{
  //   opacity: 1,
  //   visibility: 'visible',
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: videoWrapLayer.value,
  //     start: () => "+=" + (window.innerHeight * 2.5),
  //     end: () => "+=" + (window.innerHeight / 2),
  //     scrub: 1,
  //   }
  // })
  // .fromTo(lastingImpact.value, {
  //   opacity: 0,
  //   visibility: 'hidden',
  // },{
  //   opacity: 1,
  //   visibility: 'visible',
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: videoWrapLayer.value,
  //     start: () => "+=" + (window.innerHeight * 3),
  //     end: () => "+=" + (window.innerHeight / 2),
  //     scrub: 1,
  //   }
  // })
  

  
  //const primaryAni = $gsap.timeline();
  
  // const starsContainer = document.querySelector(".stars-container");

  // function createStar() {
  //     const star = document.createElement("div");
  //     star.classList.add("star");

  //     // Random position
  //     star.style.left = Math.random() * window.innerWidth + "px";
  //     star.style.animationDuration = (Math.random() * 5 + 2) + "s";
      
  //     starsContainer.appendChild(star);

  //     // Remove the star after animation ends
  //     setTimeout(() => {
  //         star.remove();
  //     }, 7000);
  // }

  // // Generate stars at intervals
  // setInterval(createStar, 200);

  
})

const nodeVersion = process.version
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


  
</style>
