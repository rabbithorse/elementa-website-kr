<template>
  <header id="header" class="fixed w-[100%] py-10 z-50">
    <Container class="px-14">
      <NuxtLink href="/" class="py-6 flex items-center">
        <Logo class="text-white" />
      </NuxtLink>
      <NavigationMenu />
    </Container>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
  #header .container {display: flex; align-items: center; border-radius: 5px; border: 1px solid rgba(255, 255, 255, 0.20); background: rgba(255, 255, 255, 0.08); box-shadow: 20px 20px 10px 0 rgba(0, 0, 0, 0.10); backdrop-filter: blur(40px);}
</style>