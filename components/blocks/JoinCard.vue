<template>
  <div class="relative h-full">
    <EffectCardHover filter="distort">
      <!-- <EffectGlassLiquid /> -->
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
</template>

<script setup lang="ts">

</script>