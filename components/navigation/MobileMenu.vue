<template>
  <div class="gnb xl:static">
    <div class="gnb-overlay xl:hidden max-xl:fixed inset-0 bg-black/50 z-40"></div>
    <nav class="menu absolute w-full right-0 top-0 h-full z-50 bg-black/90 xl:bg-transparent xl:static xl:h-auto xl:w-auto xl:flex xl:items-center xl:justify-center xl:py-0 py-10 px-6 xl:px-0" data-lenis-prevent-wheel>
      <ul class="menu-list depth1-menu-list flex xl:flex-row flex-col 2xl:gap-x-12 xl:gap-x-8 max-xl:pt-14">
        <li v-for="item in menuItems" 
          :key="item.name" 
          :class="['relative', item.children && item.children.length ? 'group' : '']"
        >
          <button 
            v-if="item.children && item.children.length" 
            @click="subMenuOpen = !subMenuOpen" 
            :class="{ 'menu-opened': subMenuOpen }"
            class="menu-link depth1-menu-link w-full flex items-center xl:justify-center justify-start gap-x-[10px] text-white 2xl:py-4 xl:py-3 py-4 xl:px-7 px-5 xl:text-base text-2xl leading-[130%]">
            {{ item.name }}
          </button>
          <NuxtLink 
            v-else :to="item.path" 
            @click.prevent="goToLink(item.path)"
            :isOpen="!isOpen"
            class="menu-link depth1-menu-link flex items-center xl:justify-center justify-start text-white 2xl:py-4 xl:py-3 py-4 xl:px-7 px-5 xl:text-base text-2xl leading-[130%] rounded-md after:absolute after:content-[''] after:w-full after:h-full after:bg-white/0 after:transition after:duration-300 after:ease-in-out ">
            {{ item.name }}
          </NuxtLink>
          <div v-accordion="subMenuOpen">
            <ul v-if="item.children && item.children.length" class="depth2-menu-list px-6">
              <li v-for="child in item.children" :key="child.name" class="text-white flex items-center gap-x-2 px-3 text-lg">
                <NuxtLink 
                  :to="child.path" 
                  @click.prevent="goToLink(child.path)"
                  :isOpen="!isOpen"
                  class="menu-link depth2-menu-link inline-block w-full text-white py-2 leading-[130%] xl:hover:bg-black/10 transition text-left"
                  >
                  {{ child.name }}  
                </NuxtLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
  const props =defineProps<{
    closeMenu: Function,
    menuItems: Array<{ 
      name: string; 
      path: string; 
      children?: Array<{ 
        name: string; 
        path: string 
      }> 
    }>
  }>();

  const goToLink = (url: string) => {
    props.closeMenu()
    navigateTo(url)
  }

  const isOpen = ref(false);
  const subMenuOpen = ref(false);
</script>

<style scoped>
  .group .depth1-menu-link::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('/assets/images/main/icon-header-arrow.svg') no-repeat 50% 50% / contain;
    transform: rotate(180deg);
    transition: transform .3s ease;
  }

  .group .depth1-menu-link.menu-opened::after {
    transform: rotate(0deg);
  }

  .depth2-menu-list li {
    padding-left: 13px;
    position: relative;
  }

  .depth2-menu-list li::before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 3px;
    background: #fff;
    border-radius: 999px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
