<template>
  <div class="gnb lg:static">
    <div class="gnb-overlay lg:hidden max-lg:fixed inset-0 bg-black/50 z-40"></div>
    <nav class="menu absolute w-full right-0 top-0 h-full z-50 bg-black/90 lg:bg-transparent lg:static lg:h-auto lg:w-auto lg:flex lg:items-center lg:justify-center lg:py-0 py-10 px-6 lg:px-0">
      <ul class="menu-list depth1-menu-list flex lg:flex-row flex-col 2xl:gap-x-12 xl:gap-x-8 max-lg:pt-14">
        <li v-for="item in menuItems" 
          :key="item.name" 
          :class="['relative', item.children && item.children.length ? 'group' : '']"
        >
          <NuxtLink :to="item.path" class="menu-link depth1-menu-link flex items-center lg:justify-center justify-start text-white 2xl:py-4 lg:py-3 py-4 xl:px-7 px-5 lg:text-base text-[1.2rem] leading-[130%] rounded-md after:absolute after:content-[''] after:w-full after:h-full after:bg-white/0 after:transition after:duration-300 after:ease-in-out lg:hover:after:bg-white/[0.01] lg:group-hover:after:bg-white/[0.01]">{{ item.name }}</NuxtLink>
          <ul v-if="item.children && item.children.length" class="depth2-menu-list absolute top-full inset-x-0 rounded-b-md py-[10px] opacity-0 border-t border-t-transparent lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-hover:border-solid group-hover:border-t-white/10">
            <li v-for="child in item.children" :key="child.name">
              <NuxtLink :to="child.path" class="menu-link depth2-menu-link inline-block w-full text-white py-2 px-5 text-base leading-[130%] text-center lg:hover:bg-black/10 transition">{{ child.name }}</NuxtLink>
            </li>
          </ul>
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
  .group:hover .depth1-menu-link {box-shadow: -1px 0 1px 0 rgba(255, 255, 255, 0.20) inset, 2px 2px 2px 0 rgba(255, 255, 255, 0.25) inset; border-bottom-left-radius: 0; border-bottom-right-radius: 0;}
  .depth1-menu-link:hover {box-shadow: -1px -1px 1px 0 rgba(255, 255, 255, 0.20) inset, 2px 2px 2px 0 rgba(255, 255, 255, 0.25) inset;}
  .group:hover .depth2-menu-list {background: rgba(255, 255, 255, 0.01); box-shadow: -1px -1px 1px 0 rgba(255, 255, 255, 0.20) inset, 2px -2px 2px 0px rgba(255, 255, 255, 0.20) inset;}
</style>