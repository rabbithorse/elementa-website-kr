<template>
  <div>
    <!-- top -->
    <section class="subSectionTop pt-[130px]">
      <div class="path-visual">
        <div class="big"></div>
        <div class="small"></div>
      </div>
      <Container>
        <h2 class="text-[11rem] leading-1 font-bold text-white">Join Us</h2>
        <h3 class="text-white pt-[200px] text-[2rem] font-semibold">우리가 만드는 오늘, 내일의 기록</h3>
        <p class="text-white text-xl pt-[1.25rem]">게임 출시, 업데이트, 파트너십, 사회적 활동 등 다양한 소식을 투명하고 <br>생생하게 전달하며, 플레이어와 세계를 하나로 연결합니다.</p>

        <div class="filter-box text-white mt-[88px] py-[50px] px-[120px] flex">
          <div class="filter">
            <label>직군</label>
            <ul>
              <li>전체</li>
              <li>카테고리1</li>
              <li>카테고리2</li>
            </ul>
          </div>
          <div class="filter">
            <label>고용형태</label>
            <ul>
              <li>전체</li>
              <li>카테고리1</li>
              <li>카테고리2</li>
            </ul>
          </div>
          <div class="filter">
            <label>채용상태</label>
            <ul>
              <li>전체</li>
              <li>카테고리1</li>
              <li>카테고리2</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
    <!-- top -->

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
  </div>
</template>

<script setup>
  import Container from '~/components/Container.vue';
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useNuxtApp } from '#app'

  const { $gsap, $ScrollTrigger } = useNuxtApp()
</script>

<style scoped>
h2 {
  font-family: "Oswald";
  letter-spacing: -0.04em;
  line-height: 1.3;
}

.filter-box {
  border:2px solid #fff;
}

.subSectionTop {position: relative; overflow: hidden;}
.subSectionTop .container {z-index: 2; position: relative;}
.path-visual {position: absolute; right: 200px; top: 0; z-index: 1;}
.path-visual .big {width: 570px; height: 1010px; background: blue; transform: skew(-20deg);}
</style>