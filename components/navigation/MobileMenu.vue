<template>
  <div class="gnb lg:static">
    <div class="gnb-overlay lg:hidden max-lg:fixed inset-0 bg-black/50 z-40"></div>
    <nav class="menu absolute w-full right-0 top-0 h-full z-50 bg-black/90 lg:bg-transparent lg:static lg:h-auto lg:w-auto lg:flex lg:items-center lg:justify-center lg:py-0 py-10 px-6 lg:px-0" data-lenis-prevent-wheel>
      <ul class="menu-list depth1-menu-list flex lg:flex-row flex-col 2xl:gap-x-12 xl:gap-x-8 max-lg:pt-14">
        <li v-for="item in menuItems" 
          :key="item.name" 
          :class="['relative', item.children && item.children.length ? 'group' : '']"
        >
          <button 
            v-if="item.children && item.children.length" 
            @click="subMenuOpen = !subMenuOpen" 
            :class="{ 'menu-opened': subMenuOpen }"
            class="menu-link depth1-menu-link w-full flex items-center lg:justify-center justify-start gap-x-[10px] text-white 2xl:py-4 lg:py-3 py-4 xl:px-7 px-5 lg:text-base text-2xl leading-[130%]">
            {{ item.name }}
          </button>
          <NuxtLink 
            v-else :to="item.path" 
            class="menu-link depth1-menu-link flex items-center lg:justify-center justify-start text-white 2xl:py-4 lg:py-3 py-4 xl:px-7 px-5 lg:text-base text-2xl leading-[130%] rounded-md after:absolute after:content-[''] after:w-full after:h-full after:bg-white/0 after:transition after:duration-300 after:ease-in-out ">
            {{ item.name }}
          </NuxtLink>
          <div v-accordion="subMenuOpen">
            <ul v-if="item.children && item.children.length" class="depth2-menu-list px-6">
              <li v-for="child in item.children" :key="child.name" class="text-white flex items-center gap-x-2 px-3 text-lg">
                <NuxtLink :to="child.path" class="menu-link depth2-menu-link inline-block w-full text-white py-2 leading-[130%] lg:hover:bg-black/10 transition text-left">{{ child.name }}</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    menuItems: Array<{ 
      name: string; 
      path: string; 
      children?: Array<{ 
        name: string; 
        path: string 
      }> 
    }>;
  }>();

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
