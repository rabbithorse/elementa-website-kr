<template>
  <footer class="bg-[#141217] text-white">
    <Container>
      <div class="flex justify-between items-start">
        <div class="flex flex-col gap-y-12">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <LogoFooter class="text-white" />
          </NuxtLink>
          <!-- Footer Links + Info -->
          <nav class="footer-menu">
            <ul class="footer-menu-list flex gap-x-[3.125rem]">
              <li v-for="footerMenu in footerMenuItems" :key="footerMenu.name">
                <NuxtLink :to="footerMenu.path" class="footer-menu-link text-base font-semibold">{{ footerMenu.name }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="footer-info text-sm leading-[1.6em]">
              <p>주소 : (06134 ) 서울특별시 강남구 역삼동 819  /  대표전화 : 010-9473-4983  /  이메일 :</p>
              <p>All rights reserved©ELEMENTA KOREA 2025</p>
            </div>
        </div>

        <div>
          <!-- Family Site -->
          <div>
            <div class="familySite custom-select">
              <div class="selected">
                <span class="selected-text">Family site</span>
              </div>
              <ul class="options py-2.5">
                <li v-for="family in familySites" :key="family.name">
                  <span class="option-text text-4 leading-[1.4em] py-[0.7rem] px-8 block hover:bg-[#191919]">{{ family.name }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Terms + Socials -->
          <div class="flex items-center gap-x-[6.25rem]">
            <div class="flex items-center">
              <NuxtLink href="#" class="text-base font-bold">Privacy</NuxtLink>
              <NuxtLink href="#" class="text-base">Terms</NuxtLink>
            </div>
            <div class="flex">
              <div class="flex items-center justify-center gap-4 md:order-last md:mb-0">
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
  const footerMenuItems = [
    { name: "Company", path: "/company" },
    { name: "Games", path: "/games" },
    { name: "Join Us", path: "/join" },
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
  footer {
    padding: 4rem 0 2.5rem;

  }

  .custom-select {
    position: relative;
    width: 25rem;
    cursor: pointer;    
  }
  .selected {
    padding:  1.2rem 2rem;
    border: 1px solid rgba(236, 249, 255, 0.20);
  }
  .custom-select .options {
    border-left: 1px solid #383838;
    border-right: 1px solid #383838;
    border-bottom: 1px solid #383838;
  }
</style>
