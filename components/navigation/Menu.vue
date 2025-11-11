<template>
  <nav class="menu">
    <ul class="menu-list flex gap-x-12">
      <li v-for="item in menuItems" :key="item.name">
        <NuxtLink :to="item.path" class="menu-link text-white py-6 px-[1.25rem] text-base">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  const menuItems = [
    { name: "Company", path: "/company" },
    { name: "Games", path: "/games" },
    { name: "Careers", path: "/careers" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ]
</script>

<style scoped>

</style>