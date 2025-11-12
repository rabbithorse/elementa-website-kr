<template>
  <div>
    <section class="subSection pt-[130px] relative" ref="subSection">
      <div class="path-visual absolute" ref="pathVisual">
        <div class="inner relative">
          <div class="big shape" ref="shapeBig"></div>
          <div class="small shape absolute" ref="shapeSmall"></div>
        </div>
      </div>
      <Container>
        <h2 class="text-[11rem] leading-1 font-bold text-white subPageTitle relative">
          <TypographyPrimary>
            J
          </TypographyPrimary>
          <TypographyPrimary>
            o
          </TypographyPrimary>
          <TypographyPrimary>
            i
          </TypographyPrimary>
          <TypographyPrimary>
            n
          </TypographyPrimary>
          <TypographyPrimary>
            U
          </TypographyPrimary>
          <TypographyPrimary>
            s
          </TypographyPrimary>
        </h2>
        <h3 class="text-white pt-[200px] text-[2rem] font-semibold relative subPageTitle2">
          <TypographySecondary>우리가 만드는 오늘, 내일의 기록</TypographySecondary>
        </h3>
        <p class="text-white text-xl pt-[1.25rem] relative subPageTitle3">
          <TypographySecondary>게임 출시, 업데이트, 파트너십, 사회적 활동 등 다양한 소식을 투명하고 <br>생생하게 전달하며, 플레이어와 세계를 하나로 연결합니다.</TypographySecondary>
        </p>

          <!-- <ButtonsBasic size="sm" color="yellow">Button Text</ButtonsBasic> -->
          <!-- <ButtonsBasic @click="sayHi" color="blue">Button Text</ButtonsBasic>
          <ButtonsBasic target="_blank" href="https://google.com" size="lg">Button Text</ButtonsBasic> -->
          <!-- <ButtonsBasic href="https://google.com">바로가기</ButtonsBasic> -->

        <div class="filter-box text-white mt-[5.5rem] py-[3.13rem] px-[7.5rem] flex gap-10 items-end relative">
          <div class="filter-glass"></div>
          <div class="filter-shine"></div>
          <div class="filter-inner flex flex-col gap-[0.94rem] relative">
            <label class="text-lg">직군</label>
            <select class="text-lg">
              <option>전체</option>
              <option>직군1</option>
              <option>직군2</option>
            </select>
            <div class="custom-select relative">
              <div class="selected relative text-lg">전체</div>
            </div>
          </div>
          <div class="filter-inner flex flex-col gap-[0.94rem] relative">
            <label class="text-lg">고용형태</label>
            <select class="text-lg">
              <option>전체</option>
              <option>고용형태1</option>
              <option>고용형태2</option>
            </select>
            <div class="custom-select relative">
              <div class="selected relative text-lg">전체</div>
            </div>
          </div>
          <div class="filter-inner flex flex-col gap-[0.94rem] relative">
            <label class="text-lg">채용상태</label>
            <select class="text-lg">
              <option>전체</option>
              <option>채용상태1</option>
              <option>채용상태2</option>
            </select>
            <div class="custom-select relative">
              <div class="selected relative text-lg">전체</div>
            </div>
          </div>
          <div class="flex gap-[10px] grow sch-box relative">
            <input type="text" placeholder="검색어를 입력해주세요." class="input-basic relative text-lg">
            <button class="sch-btn relative" type="button" role="search"><i class="sch-icon"></i></button>
          </div>
        </div>
      </Container>

      <!-- 채용 리스트 -->
      <div class="list-recruit pt-[100px] pb-[190px] relative" ref="listRecruit">
        <div class="list-bg absolute" ref="listBg"></div>
        <Container>
          <p class="text-2xl list-header pb-[2.5rem] relative">100개의 검색결과</p>
          <ul class="grid grid-cols-4 gap-x-[1.25rem] gap-y-[5.63rem] list relative">
            <li v-for="(n, index) in 12" :key="index" class="relative">
              <EffectCardHover>
                <div class="filter-glass liquid"></div>
                <a class="cont relative" href="">
                  <figure>
                    <img src="~/assets/images/sub/join-us-img01.png" alt="대표 이미지">
                  </figure>
                  <div class="text-box">
                    <div class="info">
                      <div class="tit">
                        <p class="d-day text-[0.69rem]">D-10</p>
                        <h4 class="text-white text-xl">개발 PM 담당</h4>
                        <p class="text-white text-[0.88rem]">경력직 ㆍ 경력 2-4년</p>
                      </div>
                      <p class="text-white date text-[0.88rem]">25.10.01~25.10.30</p>
                    </div>
                    <div class="apply absolute">
                      <span class="text-xs">100명의 지원자가 보고갔어요!</span>
                      <ButtonsBasic size="sm" target="_blank">지원하러 가기</ButtonsBasic>
                    </div>
                  </div>
                </a>
                <div class="end-bg absolute" :class="{ on: index === 7 }">
                  <div class="inner-circle">
                    <p class="text-[2.5rem] text-white font-bold">채용 마감</p>
                  </div>
                </div>
              </EffectCardHover>
            </li>
          </ul>
        </Container>
      </div>
      <!-- 채용 리스트 -->
    </section>

    <svg style="display: none">
      <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.009 0.009" numOctaves="2" seed="92" result="noise" />
        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
        <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

    <svg style="display: none">
      <filter id="liquid" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" >
        <feTurbulence type="fractalNoise" baseFrequency="0.002 0.002" numOctaves="2" seed="9" result="turbulence" />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="5" result="softMap" />
        <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lighting-color="white" result="specLight" >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
        <feDisplacementMap in="SourceGraphic" in2="softMap" scale="110" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

        
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

  // 채용 리스트 배경 고정
  const listRecruit = ref(null);
  const listBg = ref(null);

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

    // 리스트 고정 배경
    $gsap.timeline({
      scrollTrigger: {
        trigger: listRecruit.value,
        start: 'top+=175 top',
        end: 'bottom-=190 bottom',
        scrub: 2,
        //markers: true,
        pin: listBg.value,
        pinspacing: false
      },
    })

    // Custom Select
    document.querySelectorAll('.filter-inner select').forEach(select => {

      const wrap = select.nextElementSibling;
      const selected = wrap.querySelector('.selected');
      selected.className = 'selected';
      selected.textContent = select.options[select.selectedIndex].text;

      const ul = document.createElement('ul');

      [...select.options].forEach(opt => {
        const li = document.createElement('li');
        li.textContent = opt.text;
        li.addEventListener('click', () => {
          selected.textContent = opt.text;
          select.value = opt.value;
          wrap.classList.remove('active');
        });
        ul.appendChild(li);
      });

      wrap.appendChild(selected);
      wrap.appendChild(ul);
      select.after(wrap);

      selected.addEventListener('click', () => wrap.classList.toggle('active'));

      document.addEventListener('click', e => {
        if (!wrap.contains(e.target)) wrap.classList.remove('active');
      });
    });

  })

  
</script>

<style scoped>
  .filter-glass {filter: url(#lg-dist); backdrop-filter: blur(12px); width: 100%; height:100%; position: absolute; left: 0;  bottom: 0; z-index: 1; background: url(~/assets/images/sub/otis-redding.png) repeat;}
  .filter-glass.liquid {filter: url(#liquid); background: none; backdrop-filter: blur(4px);}
  .filter-shine {box-shadow: -3px -3px 3px 0 rgba(255, 255, 255, 0.05) inset, 3px 3px 3px 0 rgba(255, 255, 255, 0.30) inset; filter: drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.10)); position: absolute; width: 100%; z-index: 1; height: 100%; left: 0; bottom: 0;}
  :deep(.filter-box .filter-inner .custom-select) {border-radius: 5px; background: rgba(255, 255, 255, 0.10);
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.25) inset, 0 0 4px 0 rgba(255, 255, 255, 0.60) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25); width:280px; border: 1px solid rgba(255, 255, 255, 0.2); height: 64px;}
  :deep(.filter-box .filter-inner .custom-select .selected) {padding: 15px 25px; cursor:pointer; height:100%; display:flex; align-items: center;}
  :deep(.filter-box .filter-inner .custom-select .selected)::before {content:''; display:block; width:14px; height:14px; background:url(~/assets/images/sub/select-arrow.svg) no-repeat center / cover; position:absolute; right:20px; top:50%; transform: translateY(-50%);}
  :deep(.filter-box .filter-inner .custom-select.active .selected::after) {content:''; display:block; width:100%; height:1px; background: #555; position:absolute; left:0; bottom:0;}
  :deep(.filter-box .filter-inner .custom-select ul) {padding: 10px 0; display: none; position:absolute; left:0; border-radius: 0  0 5px 5px; background: rgba(255, 255, 255, 0.10);
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0) inset, 0 0 4px 0 rgba(255, 255, 255, 0.60) inset, 0 4px 4px 0 rgba(0, 0, 0, 0); width:100%;}
  :deep(.filter-box .filter-inner .custom-select.active){border-radius:5px 5px 0 0;}
  :deep(.filter-box .filter-inner .custom-select.active ul) {display: block;}
  :deep(.filter-box .filter-inner .custom-select ul li) {cursor:pointer; padding: 8px 15px;}
  :deep(.filter-box .filter-inner .custom-select ul li:hover) {background:rgba(0,0,0,0.15)}
</style>