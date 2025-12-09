<template>
  <button
    @click="slidePrev"
    :class="['slide-arrow slide-arrow--prev flex items-center justify-center w-9 h-9 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 relative', disabled ? 'opacity-30 pointer-events-none' : 'opacity-100 pointer-events-auto']"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M24 7.5L12 18.75L24 30" stroke="white" stroke-width="2"/>
    </svg>
    <span class="sr-only">Slide to the previous slide</span>
  </button>
</template>

<script setup>
const props = defineProps({
  swiper: {
    type: Object,
    required: true,
  },
  disabled: Boolean
})

const slidePrev = () => {
  if (props.swiper && !props.disabled) {
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