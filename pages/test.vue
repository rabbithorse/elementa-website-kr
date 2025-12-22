<template>
  <div class="swiper-container">
    <div 
      ref="swiperEl" 
      class="swiper"
      @click="handleClick"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseUp"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in items" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Swiper from 'swiper';
import 'swiper/css';

const swiperEl = ref(null);
let swiper = null;
let isAutoplayActive = ref(true);
let isDragging = ref(false);
let dragStartX = 0;
let dragCurrentX = 0;
let accumulatedDrag = 0;
const dragThreshold = 150;

const items = ref(['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5']);

onMounted(() => {
  swiper = new Swiper(swiperEl.value, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 800,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: {
      enabled: true,
      momentum: true,
    },
    loop: true,
    allowTouchMove: false,
  });
});

const handleClick = () => {
  if (isAutoplayActive.value) {
    swiper.autoplay.stop();
    swiper.allowTouchMove = true;
    isAutoplayActive.value = false;
  }
};

const handleMouseDown = (e) => {
  if (isAutoplayActive.value) return;
  
  isDragging.value = true;
  dragStartX = e.clientX;
  dragCurrentX = e.clientX;
  accumulatedDrag = 0;
};

const handleMouseMove = (e) => {
  if (!isDragging.value) return;
  
  dragCurrentX = e.clientX;
  const dragOffset = dragCurrentX - dragStartX;
  const dragDiff = dragOffset - accumulatedDrag;
  
  if (Math.abs(dragDiff) >= dragThreshold) {
    if (dragDiff > 0) {
      swiper.slidePrev();
      accumulatedDrag += dragThreshold;
    } else {
      swiper.slideNext();
      accumulatedDrag -= dragThreshold;
    }
  }
};

const handleMouseUp = () => {
  isDragging.value = false;
  dragStartX = 0;
  dragCurrentX = 0;
  accumulatedDrag = 0;
};

const handleTouchStart = (e) => {
  if (isAutoplayActive.value) {
    swiper.autoplay.stop();
    swiper.allowTouchMove = true;
    isAutoplayActive.value = false;
    return;
  }
  
  isDragging.value = true;
  dragStartX = e.touches[0].clientX;
  dragCurrentX = e.touches[0].clientX;
  accumulatedDrag = 0;
};

const handleTouchMove = (e) => {
  if (!isDragging.value) return;
  
  dragCurrentX = e.touches[0].clientX;
  const dragOffset = dragCurrentX - dragStartX;
  const dragDiff = dragOffset - accumulatedDrag;
  
  if (Math.abs(dragDiff) >= dragThreshold) {
    if (dragDiff > 0) {
      swiper.slidePrev();
      accumulatedDrag += dragThreshold;
    } else {
      swiper.slideNext();
      accumulatedDrag -= dragThreshold;
    }
  }
};

const handleTouchEnd = () => {
  isDragging.value = false;
  dragStartX = 0;
  dragCurrentX = 0;
  accumulatedDrag = 0;
};

onBeforeUnmount(() => {
  if (swiper) {
    swiper.destroy();
  }
});
</script>

<style scoped>
.swiper {
  cursor: grab;
}

.swiper:active {
  cursor: grabbing;
}
</style>