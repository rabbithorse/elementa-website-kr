<template>
  <div>
    <NavigationHeader />

    <main>
      <slot></slot>
    </main>

    <NavigationFooter />
  </div>
</template>

<script setup>
  import '@/assets/css/main.css';
</script>