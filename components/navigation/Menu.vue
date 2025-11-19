<template>
  <nav class="menu">
    <ul class="menu-list depth1-menu-list flex gap-x-12">
      <li v-for="item in menuItems" :key="item.name" :class="['relative', item.children && item.children.length ? 'group/has-children' : '']">
        <NuxtLink :to="item.path" class="menu-link depth1-menu-link flex items-center justify-center text-white py-4 px-5 text-base leading-[130%] rounded-md after:absolute after:content-[''] after:w-full after:h-full after:bg-white/0 after:transition after:duration-300 after:ease-in-out hover:after:bg-white/[0.01] group-hover/has-children:after:bg-white/[0.01]">{{ item.name }}</NuxtLink>
        <ul v-if="item.children && item.children.length" class="depth2-menu-list absolute top-full inset-x-0 rounded-b-md py-[10px] opacity-0 group-hover/has-children:opacity-100 group-hover/has-children:pointer-events-auto transition">
          <li v-for="child in item.children" :key="child.name">
            <NuxtLink :to="child.path" class="menu-link depth2-menu-link inline-block w-full text-white py-2 px-5 text-base leading-[130%] text-center hover:bg-black/10 transition">{{ child.name }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
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
</script>

<style scoped>
  .group:hover .depth1-menu-link, 
  .depth1-menu-link:hover {box-shadow: -1px -1px 1px 0 rgba(255, 255, 255, 0.20) inset, 2px 2px 2px 0 rgba(255, 255, 255, 0.25) inset;}
  .group:hover .depth2-menu-list {background: rgba(255, 255, 255, 0.01); box-shadow: -1px -1px 1px 0 rgba(255, 255, 255, 0.20) inset, 2px 2px 2px 0 rgba(255, 255, 255, 0.25) inset;}
</style>