<template>
  <div class="gnb lg:static">
    <div class="gnb-overlay lg:hidden max-lg:fixed inset-0 bg-black/50 z-40"></div>
    <nav class="menu absolute w-full right-0 top-0 h-full z-50 bg-black/90 lg:bg-transparent lg:static lg:h-auto lg:w-auto lg:flex lg:items-center lg:justify-center lg:py-0 py-10 px-6 lg:px-0">
      <ul class="menu-list depth1-menu-list flex lg:flex-row flex-col gap-x-5 max-lg:pt-14">
        <li v-for="item in menuItems" 
          :key="item.name" 
          :class="['relative', item.children && item.children.length ? 'group' : '']"
          class="h-[47px]"
          @mouseenter="item.children && item.children.length && openMenu($event)" 
          @mouseleave="item.children && item.children.length && closeMenu($event)" 
        >
          <NuxtLink 
            :to="item.path" 
            class="menu-link depth1-menu-link flex items-center gap-x-[10px] lg:justify-center justify-start text-white lg:py-3 py-4 px-5 xl:text-lg text-base lg:leading-[130%] leading-[130%] rounded-md group-hover:bg-[rgba(0,0,0,0.8)]">
              {{ item.name }}
          </NuxtLink>
          <div class="depth2-menu-wrapper pt-5 absolute top-full">
            <div v-show="isPcOpen" v-if="item.children && item.children.length" class="depth2-menu-list flex items-center gap-x-[21px] rounded-b-md py-[10px] opacity-0 border-t border-t-transparent lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-hover:border-solid group-hover:border-t-white/10">
              <div v-for="child in item.children" :key="child.name">
                <NuxtLink :to="child.path" class="menu-link depth2-menu-link flex flex-col gap-y-[10px] w-full text-[#07121D] py-[0.9rem] xl:px-5 px-4 text-[1.125rem] leading-[130%] text-left lg:hover:bg-[#E9EAEA] rounded-[5px] transition">
                  <span class="depth2-title flex items-center gap-x-[0.625rem] font-semibold">
                    {{ child.name }}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-0 invisible -translate-x-2 transition">
                      <path d="M4.16669 10H15.8334" stroke="#05060B" stroke-width="1.5"/>
                      <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="#05060B" stroke-width="1.5"/>
                    </svg>
                  </span>
                  <span class="block xl:w-[75%] w-[92%] text-sm font-medium text-[#666]">{{ child.detail }}</span>
                </NuxtLink>
              </div>
            </div>
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
        detail: string
      }> 
    }>;
  }>();

  const isPcOpen = ref(false);

  const openMenu = (e: MouseEvent) => {
    isPcOpen.value = true;

    const li = e.currentTarget as HTMLElement
    li.classList.add('menu-opened')
  }

  const closeMenu = (e: MouseEvent) => {
    isPcOpen.value = false;

    const li = e.currentTarget as HTMLElement
    li.classList.remove('menu-opened')
  }

</script>

<style scoped>
  /* .group:hover .depth1-menu-link {box-shadow: -1px 0 1px 0 rgba(255, 255, 255, 0.20) inset, 2px 2px 2px 0 rgba(255, 255, 255, 0.25) inset; border-bottom-left-radius: 0; border-bottom-right-radius: 0;}
  .depth1-menu-link:hover {box-shadow: -1px -1px 1px 0 rgba(255, 255, 255, 0.20) inset, 2px 2px 2px 0 rgba(255, 255, 255, 0.25) inset;}
  .group:hover .depth2-menu-list {background: rgba(255, 255, 255, 0.01); box-shadow: -1px -1px 1px 0 rgba(255, 255, 255, 0.20) inset, 2px -2px 2px 0px rgba(255, 255, 255, 0.20) inset;} */

.depth1-menu-link {
  position: relative;
  transition: color .2s ease, background .2s ease;
}
.depth1-menu-link:hover {
  color: #fff;
  background: rgba(0,0,0,0.8);
  border-radius: 5px;
  box-shadow: inset 0 0 0 0.5px solid rgba(0, 0, 0, 0.10);
}

.group .depth1-menu-link::after {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('/assets/images/main/icon-header-arrow.svg') no-repeat 50% 50% / contain;
  transform: rotate(180deg);
  transition: transform .3s ease;
}

.group.menu-opened .depth1-menu-link::after {
  transform: rotate(0deg);
}

.depth2-menu-wrapper {
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  transition: 
    opacity .25s ease,
    transform .25s ease;
}

.depth2-menu-list {
  background: #fff;
  border-top: 1px solid rgba(255,255,255,0.1);
  border-radius: 6px;
  padding: 10px;
  width: 520px;
  opacity: 0;
  pointer-events: none;
}

.depth2-menu-list > div {
  width: calc((100% - 21px) / 2);
  position: relative;
  text-align: left;
  
}

.depth2-menu-list > div:not(:last-child)::after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 66%;
  background: #EBEBEB;
  position: absolute;
  top: 50%;
  right: -11px;
  transform: translate(50%, -50%)
}

.depth2-menu-list .menu-link:hover .depth2-title svg {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.group:hover .depth2-menu-wrapper {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

/* -------------------------------------- */
/* LG : 1024 ~ 1279 */
/* -------------------------------------- */
@media (min-width: 1024px) and (max-width: 1279px) {
  .depth2-menu-list {
    width: 420px;
  }
}

</style>