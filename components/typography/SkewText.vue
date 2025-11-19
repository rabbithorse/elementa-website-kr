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
    $gsap.fromTo(skewText.value, {
      'transform': 'skewX(15deg) rotateX(25deg) translateY(100%)',
      opacity: 0,
    }, {
      ease: 'expoScale(0.5,7,none)',
      'transform': 'skewX(0deg) rotateX(0deg) translateY(0%)',
      opacity: 1,
      duration: 0.6,
      delay: Number(props.time),
    })
  })
</script>