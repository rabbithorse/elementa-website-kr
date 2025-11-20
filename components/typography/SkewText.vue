<template>
  <div class="overflow-hidden">
    <div ref="skewText" class="perspective-[50px] opacity-0">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  time: {
    type: [String, Number],
    default: 0
  }
})

const { $gsap, $ScrollTrigger } = useNuxtApp()
const skewText = ref(null)

onMounted(() => {

  $gsap.fromTo(
    skewText.value,
    {
      transform: "skewX(15deg) rotateX(25deg) translateY(100%)",
      opacity: 0,
    },
    {
      transform: "skewX(0deg) rotateX(0deg) translateY(0%)",
      opacity: 1,
      duration: 0.8,
      delay: Number(props.time),
      ease: "power3.out",

      scrollTrigger: {
        trigger: skewText.value,
        start: "top 90%",        // 화면 아래에서 10% 남겨두고 시작
        //markers: true,
      }
    }
  )
})
</script>
