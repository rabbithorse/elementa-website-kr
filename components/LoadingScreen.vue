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

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading)
    }
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
    width: 150px;
    height: 150px;
    animation: pulse 1.5s infinite linear;
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000px;
    transform: translateZ(0);
    contain: strict;
  }

  @keyframes pulse {
    0%, 100%  { transform: scale(0.95); }
    50% { transform: scale(1); }
  }

  .fade-leave-active {
    will-change: opacity;
    transition: opacity 0.5s ease;
  }

  .fade-leave-to {
    opacity: 0;
  }

  @media (max-width: 768px) {
    .logo-container img {
      width: 90px;
      height: 90px;
    }
  }


</style>