<template>
  <div>
    <NavigationHeader />

    <main class="sub">
      <slot ></slot>
    </main>

    <NavigationFooter />
  </div>
</template>

<script setup>
  import '@/assets/css/sub.css';
</script>

<style scoped>

</style>