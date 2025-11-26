<template>
  <footer class="bg-[#141217] text-white lg:pt-16 lg:pb-10 pt-9 pb-8">
    <Container>
      <div class="flex lg:flex-row flex-col gap-y-12 justify-between">
        <div class="flex flex-col lg:gap-y-12 gap-y-5">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <LogoFooter class="text-white lg:w-auto w-48" />
          </NuxtLink>
          <!-- Footer Links + Info -->
          <nav class="footer-menu">
            <ul class="footer-menu-list flex xl:gap-x-[3.125rem] lg:gap-x-8 gap-x-5 max-lg:flex-wrap">
              <li v-for="footerMenu in footerMenuItems" :key="footerMenu.name">
                <NuxtLink :to="footerMenu.path" class="inline-block footer-menu-link lg:text-base text-[0.875rem] leading-[214%] font-semibold">{{ footerMenu.name }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="footer-info lg:text-sm leading-[1.6em] text-xs">
              <p>주소 : (06134 ) 서울특별시 강남구 역삼동 819  <span class="lg:inline-block hidden">/</span><br class="lg:hidden block"> 대표전화 : 010-9473-4983  /  이메일 :</p>
              <p>All rights reserved©ELEMENTA KOREA 2025</p>
            </div>
        </div>

        <div class="flex flex-col lg:items-end items-start gap-y-5">
          <!-- Family Site -->
          <div class="max-lg:w-full">
            <div class="familySite custom-select relative lg:w-[15.6rem] w-full cursor-pointer">
              <div class="selected lg:py-3 py-2 px-5 relative after:content-[''] after:absolute after:right-5 after:top-1/2 after:-translate-y-1/2 after:bg-(image: url('/images/main/icon-select.svg')) bg-no-repeat bg-contain" @click="familySiteOpen = !familySiteOpen">
                <span class="selected-text text-[0.875rem]">Family site</span>
              </div>
              <div v-accordion="familySiteOpen" class="absolute w-full left-0 top-full z-10">
                <ul class="options py-2.5 transition-all duration-300 ">
                  <li v-for="family in familySites" :key="family.name">
                    <a :href="family.link" class="option-text text-4 leading-[1.4em] py-[0.7rem] px-8 block hover:bg-[#191919]">{{ family.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Terms + Socials -->
          <div class="flex gap-x-[6.25rem] mt-auto max-lg:w-full justify-between">
            <div class="flex items-center gap-x-12">
              <NuxtLink href="#" class="text-base font-bold relative after:content-['⁄'] after:absolute after:-right-6 after:top-1/2 after:translate-x-1/2 after:-translate-y-1/2 after:text-[10px] after:text-[#404D58]">Privacy</NuxtLink>
              <NuxtLink href="#" class="text-base">Terms</NuxtLink>
            </div>
            <div class="flex">
              <div class="flex items-center justify-center gap-4 lg:order-last lg:mb-0">
				        <NuxtLink href="" v-for="social in footerSocials" :key="social.name">
                  <span class="sr-only">{{ social.alt }}</span>
                  <span class="icon">
                    <img :src="social.src" :alt="social.alt">
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
  const familySiteOpen = ref(false);

  const footerMenuItems = [
    { name: "Company", path: "/company" },
    { name: "Games", path: "/games" },
    { name: "Join Us", path: "/join_us" },
    { name: "Media", path: "/media" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Contact", path: "/contact" },
  ]

  const familySites = [
    { name: "패밀리사이트 1", link: "#" },
    { name: "패밀리사이트 2", link: "#" },
    { name: "패밀리사이트 3", link: "#" },
  ]

  const footerSocials = [
    { name: "youtube", link: "", src: "/icons/footerYoutubeIcon.svg", alt: "YouTube Link"},
    { name: "instagram", link: "", src: "/icons/footerInstaIcon.svg", alt: "Instagram Link"},
    { name: "x", link: "", src: "/icons/footerXIcon.svg", alt: "X Link"},
  ]
</script>

<style scoped>
  .selected {
    border: 1px solid rgba(236, 249, 255, 0.20);
  }
  .custom-select .options {
    border-left: 1px solid #383838;
    border-right: 1px solid #383838;
    border-bottom: 1px solid #383838;
  }
</style>
