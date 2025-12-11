<template>
  <header id="header" :scrollDirection="scrollDirection" :class="['fixed w-full lg:py-[1.55rem] py-5 z-50', headerClass]">
    <Container class="2xl:px-8 lg:px-6 px-4 py-[12px]">
      <NuxtLink href="/" class="flex items-center 2xl:w-auto md:w-32 w-[88px]">
        <Logo class="text-white" />
      </NuxtLink>
      <Menu class="xl:flex hidden" :menuItems="menuItems" />
    </Container>
    <button
      :class="{
        'opened shadow-md bg-opacity-75 rounded-md': isOpen, '': !isOpen
      }"
      class="fixed z-[100] text-white transition duration-300 xl:hidden lg:p-[1.1rem] md:p-[1rem] p-3 rounded-md lg:top-[1.55rem] top-5 lg:right-[2%] right-[5%] hamburger-open"
      @click="toggle"
      :isOpen="isOpen"
    >
      <div>
        <span class="sr-only">Close</span>
        <div class="hamburger-wrap flex flex-col items-center justify-center gap-y-1 w-6 h-6 py-1.5 px-[3px]">
          <span class="block w-[18px] h-0.5 bg-white transition-transform duration-300 flex-shrink-0" :class="{'translate-y-1.5 rotate-45': isOpen, '': !isOpen}"></span>
          <span class="block w-[18px] h-0.5 bg-white transition-opacity duration-300 flex-shrink-0" :class="{'opacity-0': isOpen}"></span>
          <span class="block w-[18px] h-0.5 bg-white transition-transform duration-300 flex-shrink-0" :class="{'-translate-y-1.5 -rotate-45': isOpen}"></span>
        </div>
      </div>
    </button>
    <div :isOpen="isOpen" class="xl:hidden ">
      <Transition name="slide" class="fixed inset-0 z-40">
        <MobileMenu :menuItems="menuItems" :closeMenu="closeMenu" v-if="isOpen" class="fixed w-full right-0 top-0 h-screen "/>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import Menu from './Menu.vue'
  import MobileMenu from './MobileMenu.vue'
  
  const { $lenis } = useNuxtApp()

  const isOpen = ref(false);
  const subMenuOpen = ref(false);

  const toggle = () => {
    isOpen.value = !isOpen.value;
    subMenuOpen.value = false;
    
    if (isOpen.value) {
      $lenis.stop();
      document.body.classList.add('gnb-open');
    } else {
      $lenis.start();
      document.body.classList.remove('gnb-open');
    }
  };

  const closeMenu = () => {
    isOpen.value = false;
    console.log("메뉴 닫힘");
    $lenis.start();
    document.body.classList.remove('gnb-open');
  }

  const menuItems = [
    { name: "Company", path: "/company" },
    { name: "Games", path: "/games" },
    { name: "Careers", path: "/join_us",
      children: [
        { name: "Join Us", path: "/join_us", detail: "Looking for Talent to Grow Together"},
        { name: "Culture", path: "/culture", detail: "Introducing our team culture."}
      ]
    },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ]

  // header on scroll direction
  const scrollDirection = ref(0)   // 1: up, -1: down
  const lastScroll = ref(0)
  const waiting = ref(false)

  function handleScroll() {
    if (waiting.value) return
    waiting.value = true

    const current = window.scrollY

    if (current > lastScroll.value) {
      scrollDirection.value = -1   // down
    } else if (current < lastScroll.value) {
      scrollDirection.value = 1    // up
    }

    lastScroll.value = current

    setTimeout(() => {
      waiting.value = false
    }, 100)
  }

  // mount
  onMounted(() => {
    lastScroll.value = window.scrollY
    window.addEventListener('scroll', handleScroll)
  })

  // unmount
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  // header class
  const headerClass = computed(() => {
    if (scrollDirection.value === -1) return 'header-hide'
    if (scrollDirection.value === 1) return 'header-show'
    return ''
  })
</script>

<style scoped>
  #header {
    transition: transform 0.3s ease-in-out;
  }

  #header.header-hide {
    transform: translateY(-100%);
  }

  #header.header-show {
    transform: translateY(0);
  }

  #header .container {
    display: flex; 
    align-items: center; 
    border-radius: 5px; 
    border: 0.5px solid rgba(255, 255, 255, 0.20); 
    background: rgba(0, 0, 0, 0.60); 
    box-shadow: 20px 20px 10px 0 rgba(0, 0, 0, 0.10); 
    backdrop-filter: blur(40px);
  }

  .slide-enter-from {
    transform: translateX(100%);
  }
  .slide-enter-to {
    transform: translateX(0);
  }
  .slide-leave-from {
    transform: translateX(0);
  }
  .slide-leave-to {
    transform: translateX(100%);
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform .3s;
  }

  .hamburger-open.opened {
    background: linear-gradient(78deg, rgba(255, 255, 255, 0.20) -4.53%, rgba(255, 255, 255, 0.15) 113.59%);
    box-shadow: -1.5px -1.5px 1.5px 0 rgba(255, 255, 255, 0.20) inset, 1px 1px 1px 0 rgba(255, 255, 255, 0.20) inset;
  }
</style>