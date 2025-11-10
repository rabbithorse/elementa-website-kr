<template>
  <div>
    <!-- top -->
    <section class="subSectionTop pt-[130px]" ref="subSectionTop">
      <div class="path-visual" ref="pathVisual">
        <div class="inner">
          <div class="big shape" ref="shapeBig"></div>
          <div class="small shape" ref="shapeSmall"></div>
        </div>
      </div>
      <Container>
        <h2 class="text-[11rem] leading-1 font-bold text-white subTitle">
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
        <h3 class="text-white pt-[200px] text-[2rem] font-semibold">
          <TypographySecondary>우리가 만드는 오늘, 내일의 기록</TypographySecondary>
          </h3>
        <p class="text-white text-xl pt-[1.25rem]">
          <TypographySecondary>게임 출시, 업데이트, 파트너십, 사회적 활동 등 다양한 소식을 투명하고 <br>생생하게 전달하며, 플레이어와 세계를 하나로 연결합니다.</TypographySecondary>
        </p>

          <div>
          <ButtonsBasic size="sm">Button Text</ButtonsBasic>
          <ButtonsBasic @click="sayHi">Button Text</ButtonsBasic>
          <ButtonsBasic target="_blank" href="https://google.com" size="lg">Button Text</ButtonsBasic>
          </div>
        <div class="filter-box text-white mt-[5.5rem] py-[3.13rem] px-[7.5rem] flex gap-10 items-base">
          <div class="filter-inner flex flex-col gap-[0.94rem]">
            <label>직군</label>
            <select>
              <option>전체</option>
              <option>카테고리1</option>
              <option>카테고리2</option>
            </select>
          </div>
          <div class="filter-inner flex flex-col gap-[0.94rem]">
            <label>고용형태</label>
            <select>
              <option>전체</option>
              <option>카테고리1</option>
              <option>카테고리2</option>
            </select>
          </div>
          <div class="filter-inner flex flex-col gap-[0.94rem]">
            <label>채용상태</label>
            <select>
              <option>전체</option>
              <option>카테고리1</option>
              <option>카테고리2</option>
            </select>
          </div>
          <input type="text" placeholder="검색어를 입력해주세요.">
          <ButtonsBasic>검색</ButtonsBasic>
        </div>
      </Container>

      <!-- 채용 리스트 -->
      <div class="list-recruit">
        <p class="list-header">100개의 검색결과</p>
        <ul>
          <li>
            <a href="">
              <figure>
                <img src="" alt="대표 이미지">
              </figure>
              <div class="text-box">
                <h4>개발 PM 담당</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src="" alt="대표 이미지">
              </figure>
              <div class="text-box">
                <h4>개발 PM 담당</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src="" alt="대표 이미지">
              </figure>
              <div class="text-box">
                <h4>개발 PM 담당</h4>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src="" alt="대표 이미지">
              </figure>
              <div class="text-box">
                <h4>개발 PM 담당</h4>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 채용 리스트 -->
    </section>
    <!-- top -->

        
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
    if (process.client) {
    // 큰 도형
    $gsap.to(shapeBig.value, {
      backgroundPositionY: '-120px',
      ease: 'none',
      scrollTrigger: {
        trigger: shapeBig.value,
        start: 'top top',
        end: 'center top',
        scrub: true, // 스크롤 위치에 따라 부드럽게 반응
        //markers: true
      },
    })

    // 작은 도형
    $gsap.to(shapeSmall.value, {
      backgroundPositionY: '-80px',
      ease: 'none',
      scrollTrigger: {
        trigger: shapeSmall.value,
        start: '10% 20%',
        end: '50%% top',
        scrub: true,
        //markers: true
      },
    })
  }

    // Custom Select
    document.querySelectorAll('.filter-inner select').forEach(select => {

      const wrap = document.createElement('div');
      wrap.className = 'custom-select';

      const selected = document.createElement('div');
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
/* main title */
.subTitle {
  font-family: "Oswald";
  line-height: 1.3;
  display: flex;
  gap: 12px;
  transform: translateX(15px);
}

/* sub top */
.subSectionTop {position: relative; overflow: hidden;}
.subSectionTop .container {z-index: 3; position: relative;}
.path-visual {position: absolute; right: 100px; top: 0; z-index: 1;  transition: all .5s;}
.path-visual .inner {position: relative}

/* selectbox */
.filter-box {border:2px solid #fff; background: rgba(0, 0, 0, 0.15);
box-shadow: -3px -3px 3px 0 rgba(255, 255, 255, 0.05) inset, 3px 3px 3px 0 rgba(255, 255, 255, 0.30) inset;
filter: drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.10)); border:1px solid rgba(255,255,255,0.15); backdrop-filter: blur(10px); position: relative; width: 100%;}
.filter-box::before {content:''; display:block; width:73px; height:220px; background: url(~/assets/images/sub/reflection.svg) no-repeat center / cover; position: absolute;  left:0; top:0;}
.filter-box .filter-inner select {display: none;}

:deep(.filter-box .filter-inner .custom-select) {border-radius: 5px; background: rgba(255, 255, 255, 0.10);
/* input box */
box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.25) inset, 0 0 4px 0 rgba(255, 255, 255, 0.60) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25); width:280px; position:relative;}
:deep(.filter-box .filter-inner .custom-select .selected) {padding: 15px 25px; cursor:pointer; position:relative;}
:deep(.filter-box .filter-inner .custom-select.active .selected::after) {content:''; display:block; width:100%; height:1px; background: #555; position:absolute; left:0; bottom:0;}
:deep(.filter-box .filter-inner .custom-select ul) {padding: 10px 0; display: none; position:absolute; left:0; border-radius: 0  0 5px 5px; background: rgba(255, 255, 255, 0.10);
/* input box */
box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0) inset, 0 0 4px 0 rgba(255, 255, 255, 0.60) inset, 0 4px 4px 0 rgba(0, 0, 0, 0); width:100%;}
:deep(.filter-box .filter-inner .custom-select.active){border-radius:5px 5px 0 0;}
:deep(.filter-box .filter-inner .custom-select.active ul) {display: block;}
:deep(.filter-box .filter-inner .custom-select ul li) {cursor:pointer; padding: 8px 15px;}
:deep(.filter-box .filter-inner .custom-select ul li:hover) {background:rgba(0,0,0,0.15)}

.hide-select {display: none;}

.shape {clip-path: polygon(36.6% 0, 100% 0%, 63.6% 100%, 0 100%); width: 896px; height: 1080px; transform: scale(1);}
.shape::before {content:''; display: block; width: 332px; height: 100%; background: url(~/assets/images/sub/line.svg) no-repeat center / cover; position: absolute; left: 0; top: 0;}
.shape::after {content:''; display: block; width: 332px; height: 100%; background: url(~/assets/images/sub/line.svg) no-repeat center / cover; position: absolute; right: 0; top: 0;}
.shape img {object-fit: cover; object-position: center; width:100%; height:100%;}
.shape.big {background:url(~/assets/images/sub/sub_bg01.png) no-repeat center / cover;}
.shape.small {background:url(~/assets/images/sub/sub_bg02.png) no-repeat top / cover;}
.shape.small {position: absolute; right: calc(-100% + 398px); top: 300px;}
.shape.small::before {top: 30px; left: -10px;}
.shape.small::after {width:404px; height:6px; background:url(~/assets/images/sub/line_vertical.svg) no-repeat center / cover; top: 0; right: 210px;}

.list-recruit {background: #05060B; z-index: 2; position: relative;}
</style>