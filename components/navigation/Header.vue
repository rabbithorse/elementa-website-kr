<template>
  <header id="header" class="fixed w-screen lg:py-10 py-5 z-50">
    <Container class="2xl:px-14 xl:px-10 lg:px-6 px-4">
      <NuxtLink href="/" class="2xl:py-6 py-4 flex items-center max-lg:w-[88px]">
        <Logo class="text-white" />
      </NuxtLink>
      <NavigationMenu class="hidden lg:flex"/>
    </Container>
    <button
      :class="{
        'opened shadow-md bg-opacity-75 rounded-md': isOpen, '': !isOpen
      }"
      class="fixed z-[100] text-white transition duration-300 lg:hidden p-[0.95rem] rounded-md top-5 left-[calc(100vw-4.8rem)] hamburger-open "
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
        <NavigationMenu v-if="isOpen" @close="closeMenu" class="fixed w-screen right-0 top-0 h-full "/>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
  import NavigationMenu from './Menu.vue'
  import { ref } from 'vue'

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

  // Watch route changes and close the menu
  // watch(isOpen, () => {
  //   if(isOpen.value) {
  //     alert("열림")
  //     document.body.style.overflow = 'hidden';
  //     document.documentElement.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //     document.documentElement.style.overflow = 'auto';
  //   }
  // }
    
  // );

  
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
</style>