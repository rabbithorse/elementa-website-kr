<template>
  <button
    @click="slidePrev"
    :class="['slide-arrow slide-arrow--prev flex items-center justify-center md:w-9 md:h-9 w-[1.875rem] h-[1.875rem] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 relative', isDisabled ? 'opacity-30 pointer-events-none' : 'opacity-100 pointer-events-auto']"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M24 7.5L12 18.75L24 30" stroke="white" stroke-width="2"/>
    </svg>
    <span class="sr-only">Slide to the previous slide</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  swiper: {
    type: Object,
    default: null
  },
  disabled: Boolean
})

const isDisabled = computed(() => {
  if (props.disabled) return true
  if (!props.swiper) return true
  return props.swiper.isBeginning
})

const slidePrev = () => {
  if (props.swiper && !isDisabled.value) {
    props.swiper.slidePrev()
  }
}
</script>

<style>
  .slide-arrow--prev::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 17px;
    background: rgba(255,255,255,0.2);
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translate(50%, -50%);
  }
</style>