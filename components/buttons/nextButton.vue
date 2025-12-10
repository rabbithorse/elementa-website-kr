<template>
  <button
    @click="slideNext"
    :class="['slide-arrow slide-arrow--next flex items-center justify-center md:w-9 md:h-9 w-[1.875rem] h-[1.875rem] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110', disabled ? 'opacity-30 pointer-events-none' : 'opacity-100 pointer-events-auto']"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M12 30L24 18.75L12 7.5" stroke="white" stroke-width="2"/>
    </svg>
    <span class="sr-only">Slide to the next slide</span>
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

const slideNext = () => {
  if (props.swiper && !props.disabled) {
    props.swiper.slideNext()
  }
}
</script>