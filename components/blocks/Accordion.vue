<template>
  <div 
    class="accordion-item flex xl:flex-row flex-col relative"
    v-for="(accordionItem, index) in accordionItems" :key="index"
    :class="{'opened': accordionItem.isOpen, 'locked': accordionItem.locked }"
  >
    <EffectGlass class="accordion-glass"></EffectGlass>
    <div v-if="!accordionItem.locked" class="accordion-trigger">
      <button @click="accordionItem.isOpen = !accordionItem.isOpen">
        <span class="text-white z-[1]">0{{ index + 1 }}</span>
        <h3 class="text-white">{{ accordionItem.title }}</h3>
      </button>
    </div>
    <button v-else class="accordion-trigger">
      <span class="locked-title-icon z-[1]"></span>
      <span class="locked-title-text z-[1]"></span>
    </button>
    <div 
      class="accordion-content xl:flex xl:mt-0 mt-auto"
      :class="{'w-0 max-xl:h-0 hidden': accordionItem.locked }"
    >
      <div class="content-bg absolute left-0 top-0 w-[100vw] h-full overflow-hidden">
        <video autoplay muted loop class="w-full h-full object-cover">
          <source :src="`${accordionItem.videoSrc}`" type="video/mp4">
        </video>
      </div>

      <div class="content-text xl:w-fit xl:h-full xl:ml-auto xl:mt-0 mt-auto w-full h-auto ml-0">
        <EffectGlass class="xl:h-full ">
          <div class="flex flex-col justify-end xl:gap-y-[3.125rem] gap-y-5 xl:pb-[5.625rem] pt-4 pb-9 xl:px-8 px-7 h-full">
            <div class="content-title relative title-img xl:w-[52%] w-56 aspect-229/75">
              <EffectFloatingDots />
              <img src="~/assets/images/main/text-game-silverpalace.png" alt="icon" />
            </div>
            <div class="content-detail flex flex-col xl:gap-y-6">
              <p class="subtitle text-[1.625rem] font-semibold leading-[2rem] max-xl:pb-6" v-html="accordionItem.subtitle"></p>
              <p class="xl:text-[1.125rem] text-[0.8rem] xl:leading-6 leading-4 tracking-[-0.26px]" v-html="accordionItem.content1"></p>
              <p class="xl:text-[1.125rem] text-[0.8rem] xl:leading-6 leading-4 tracking-[-0.26px]" v-html="accordionItem.content2"></p>
            </div>
            <div class="content-button">
              <ButtonsBasic size="sm" color="yellow" :href="`${accordionItem.href}`">View more</ButtonsBasic>
            </div>
          </div>
        </EffectGlass>
      </div>
    </div>
  </div>
</template>

<script setup>
import silverpalace from '@/assets/videos/main-game-silverpalace_enc.mp4';

  const accordionItems = [
    { 
      title: "SILVER PALACE", 
      videoSrc: silverpalace, 
      subtitle: "사건의 진위, <br class='max-lg:hidden'> 무대의 서막", 
      content1: "펠리아나 3년, 다시 실버니아로 돌아온 탐정. <br>그리고 현실과 우화가 뒤섞이고, 번영과 몰락의 경계에 <br class='max-lg:hidden'>서 있는 실버니아.",
      content2: "사교와 조사, 판단 그리고 전투, 당신이 그 총알 한 발의 <br class='max-lg:hidden'>진실을 찾아낸다면, <br class='lg:hidden'>자신은 물론, 모든 이들의 운명까지 <br class='max-lg:hidden'>결정짓게 될 것이다.",
      href: "/games",
      isOpen: true, 
      locked: false},
    { title: "", videoSrc: "", subtitle: "", content1: "", content2: "", isOpen: false, locked: true },
    { title: "", videoSrc: "", subtitle: "", content1: "", content2: "", isOpen: false, locked: true },
    { title: "", videoSrc: "", subtitle: "", content1: "", content2: "", isOpen: false, locked: true },
  ]

</script>

<style>
  .accordion-glass {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    padding: 0 !important;
  }

  .opened .accordion-glass {
    opacity: 0;
  }
</style>