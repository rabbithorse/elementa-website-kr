<template>
  <header id="header" :scrollDirection="scrollDirection" :class="['fixed w-full lg:py-10 py-5 z-50', headerClass]">
    <Container class="2xl:px-14 xl:px-10 lg:px-6 px-4">
      <NuxtLink href="/" class="2xl:py-6 py-4 flex items-center max-lg:w-[88px]">
        <Logo class="text-white" />
      </NuxtLink>
      <Menu class="hidden lg:flex" :menuItems="menuItems" />
    </Container>
    <button
      :class="{
        'opened shadow-md bg-opacity-75 rounded-md': isOpen, '': !isOpen
      }"
      class="fixed z-[100] text-white transition duration-300 lg:hidden p-[0.95rem] rounded-md top-5 right-[5%] hamburger-open"
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
    <div :isOpen="isOpen" class="lg:hidden ">
      <Transition name="slide" class="fixed inset-0 z-40">
        <MobileMenu :menuItems="menuItems" v-if="isOpen" @close="closeMenu" class="fixed w-full right-0 top-0 h-full "/>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import Menu from './Menu.vue'
  import MobileMenu from './MobileMenu.vue'

  const isOpen = ref(false);
  const subMenuOpen = ref(false);

  const toggle = () => {
    isOpen.value = !isOpen.value;
    subMenuOpen.value = false;
  };

  const closeMenu = () => {
    isOpen.value = false
    console.log("메뉴 닫힘")
  }

  const menuItems = [
    { name: "Company", path: "/company" },
    { name: "Games", path: "/games" },
    { name: "Careers", path: "/join_us",
      children: [
        { name: "Join Us", path: "/join_us"},
        { name: "Culture", path: "/culture"}
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
  #header .container {display: flex; align-items: center; border-radius: 5px; border: 1px solid rgba(255, 255, 255, 0.20); background: rgba(255, 255, 255, 0.08); box-shadow: 20px 20px 10px 0 rgba(0, 0, 0, 0.10); backdrop-filter: blur(40px);}

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

  #header {
    transition: transform 0.3s ease-in-out;
  }

  #header.header-hide {
    transform: translateY(-100%);
  }

  #header.header-show {
    transform: translateY(0);
  }
</style>