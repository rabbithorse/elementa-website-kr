<template>
  <footer class="bg-[#141217] text-white lg:pt-16 lg:pb-10 pt-9 pb-8">
    <Container>
      <div class="flex lg:flex-row flex-col gap-y-12 justify-between">
        <div class="flex flex-col lg:gap-y-12 gap-y-5">
          <!-- Logo -->
          <button class="flex items-center">
            <LogoFooter class="text-white lg:w-auto w-48" />
          </button>
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
            <div class="familySite custom-select relative lg:w-[15.6rem] w-full cursor-pointer" ref="selectRef">
              <div 
                class="selected lg:py-3 py-2 px-5 relative" 
                @click="toggleDropdown" 
                :class="{ 'opened': isOpen }"
              >
                <span class="selected-text text-[0.875rem]">Family site</span>
              </div>
              <transition :name="openDirection === 'up' ? 'slide-up' : 'slide-down'" >
                <ul 
                  v-if="isOpen"
                  ref="dropdownRef"
                  class="options dropdown-list"
                  :class="{ 'dropdown-up': openDirection === 'up' }"
                >
                  <li v-for="family in familySites" :key="family.name">
                    <a :href="family.link" target="_blank" class="option-text text-[13px] leading-[1.4em] py-[0.7rem] px-5 block hover:bg-[#323033]">{{ family.name }}</a>
                  </li>
                </ul>
              </transition>
            </div>
          </div>

          <!-- Terms + Socials -->
          <div class="flex gap-x-[6.25rem] mt-auto max-lg:w-full justify-between">
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

<script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue';

  const isOpen = ref(false)
  const openDirection = ref('down')
  const selectRef = ref(null)
  const dropdownRef = ref(null)
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
    { name: "Family Site 1", link: "https://www.google.com/" },
    { name: "Family Site 2", link: "https://chatgpt.com/" },
    { name: "Family Site 3", link: "https://cursor.com/" },
  ]

  const footerSocials = [
    { name: "youtube", link: "", src: "/icons/footerYoutubeIcon.svg", alt: "YouTube Link"},
    { name: "instagram", link: "", src: "/icons/footerInstaIcon.svg", alt: "Instagram Link"},
    { name: "x", link: "", src: "/icons/footerXIcon.svg", alt: "X Link"},
  ]

  const checkDropdownDirection = async () => {
    if (selectRef.value) {
      const selectRect = selectRef.value.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      const estimatedDropdownHeight = familySites.length * 42 + 8
      
      const spaceBelow = viewportHeight - selectRect.bottom
      
      if (spaceBelow < estimatedDropdownHeight + 20) {
        openDirection.value = 'up'
      } else {
        openDirection.value = 'down'
      }
    }
  }

  const toggleDropdown = () => {
    if (!isOpen.value) {
      checkDropdownDirection()
    }
    isOpen.value = !isOpen.value
  }

  const selectOption = (option) => {
    selectedValue.value = option
    isOpen.value = false
  }

  // 외부 클릭 감지
  const handleClickOutside = (event) => {
    if (selectRef.value && !selectRef.value.contains(event.target)) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })
</script>

<style scoped>
  .selected {
    border: 1px solid rgba(236, 249, 255, 0.20);
  }

  .selected::after {
    content: "";
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    background: url('~/assets/images/main/icon-select.svg') no-repeat center;
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%) rotate(0deg);
    transition: transform 0.17s ease;
  }

  .selected.opened::after {
    transform: translateY(-50%) rotate(180deg);
  }

  .custom-select .dropdown-list {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
    max-height: 280px;
    border-left: 1px solid #35383A;
    border-right: 1px solid #35383A;
    border-bottom: 1px solid #35383A;
    border-top: 1px solid #35383A;
    background: #141217;
  }

  .dropdown-list:not(.dropdown-up) {
    top: calc(100% - 1px);
  }

  .dropdown-list.dropdown-up {
    bottom: calc(100% - 1px);
  }

  .custom-select .option-text {
    backdrop-filter: blur(10px);
  }


  /* dropdown open animation */
  /* going down */
  .slide-down-enter-active {
    animation: slideDown 0.2s ease-out;
  }

  .slide-down-leave-active {
    animation: slideDown 0.15s ease-in reverse;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* going up */
  .slide-up-enter-active {
    animation: slideUp 0.2s ease-out;
  }

  .slide-up-leave-active {
    animation: slideUp 0.15s ease-in reverse;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
