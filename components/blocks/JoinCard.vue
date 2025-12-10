<template>
  <!-- <div v-for="(n, index) in 12" :key="index" class="relative"> -->
  <div class="relative h-full">
    <EffectCardHover>
      <div class="filter-glass liquid"></div>
      <a class="flex flex-col cont relative" href="">
        <figure>
          <img src="~/assets/images/sub/join-us-img01.png" alt="대표 이미지">
        </figure>
        <div class="text-box">
          <div class="info">
            <div class="tit">
              <ButtonsBadge class="mb-[10px]">D-10</ButtonsBadge>
              <h4 class="text-white md:text-xl text-base">개발 PM 담당</h4>
              <p class="text-white md:text-[0.88rem] text-xs">경력직 ㆍ 경력 2-4년</p>
            </div>
            <p class="text-white date md:text-[0.88rem] text-xs">25.10.01~25.10.30</p>
          </div>
          <div class="apply absolute">
            <span class="text-xs text-[#00C8EB]">100명의 지원자가 보고갔어요!</span>
            <ButtonsBasic size="sm" target="_blank">지원하러 가기</ButtonsBasic>
          </div>
        </div>
      </a>
    </EffectCardHover>
  </div>

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
</template>

<script setup lang="ts">

</script>

<style scoped>
  .filter-glass {filter: url(#lg-dist); backdrop-filter: blur(12px); width: 100%; height:100%; position: absolute; left: 0;  bottom: 0; z-index: 1; background: url(~/assets/images/sub/otis-redding.png) repeat;}
  .filter-glass.liquid {filter: url(#liquid); background: none; backdrop-filter: blur(4px);}
  .filter-shine {box-shadow: -3px -3px 3px 0 rgba(255, 255, 255, 0.05) inset, 3px 3px 3px 0 rgba(255, 255, 255, 0.30) inset; filter: drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.10)); position: absolute; width: 100%; z-index: 1; height: 100%; left: 0; bottom: 0;}
</style>