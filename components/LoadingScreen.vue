<template>
  <Transition name="fade">
    <div v-if="isMainPage && !isLoaded" class="loading-screen">
      <div class="logo-container">
        <img ref="logoRef" src="~/assets/images/main/logoA-loader.png" alt="Loading Logo">
      </div>
    </div>
  </Transition>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const isLoaded = ref(false);
  const logoRef = ref(null);

  // 메인페이지인지 체크
  const isMainPage = computed(() => route.path === '/')

  const finishLoading = () => {
    requestAnimationFrame(() => {
      isLoaded.value = true 
    });
  }

  onMounted(() => {
    if (!isMainPage.value) return

    const minTimeout = new Promise((resolve) => setTimeout(resolve, 2000));

    const loadComplete = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve, { once: true });
      }
    });

    Promise.all([minTimeout, loadComplete]).then(() => {
      finishLoading();
    });
  })
</script>

<style>
  .loading-screen {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.85);
    z-index: 999;
    isolation: isolate;
  }

  .logo-container img {
    width: 300px;
    height: 300px;
    animation: pulse 1.6s infinite linear;
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000px;
    contain: strict;
  }

  @keyframes pulse {
    0%, 100%  { transform: translate3d(0, 0, 0) scale(1); }
    50% { transform: translate3d(0, 0, 0) scale(1.05); }
  }

  .fade-leave-active {
    will-change: opacity;
    transition: opacity 0.5s ease;
  }

  .fade-leave-to {
    opacity: 0;
  }

  @media (max-width: 1279px) {
    .logo-container img {width: 200px; height: 200px;}
  }

  @media (max-width: 768px) {
    .logo-container img {
      width: 110px;
      height: 110px;
    }
  }


</style>