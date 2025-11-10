<template>
  <button
    v-if="!href"
    class="btn"
    :class="[sizeClass, colorClass]"
    @click="$emit('click')"
  >
    <slot />
  </button>

  <a
    v-else
    class="btn"
    :class="[sizeClass, colorClass]"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>

<style scoped>
.btn {
  background: linear-gradient(78deg, rgba(255,255,255,0.20) -4.53%, rgba(255,255,255,0.25) 113.59%);
  box-shadow: -1.5px -1.5px 1.5px 0 rgba(255,255,255,0.20) inset,
              2px 2px 2px 0 rgba(255,255,255,0.40) inset;
  backdrop-filter: blur(10px);
  color:#fff;
  transition: all 0.3s ease;
  clip-path: polygon(100% 0,100% 59%,87% 100%,0 100%,0 0);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  position: relative;
}

.btn::before {
  content: '';
  position: absolute;
  right: 12px;
  bottom: -5px;
  width: 2px;
  height: 40px;
  background: rgba(255,255,255,0.2);
  transform: rotate(39deg);
}

.btn.yellow {
  background: linear-gradient(78deg, rgba(250,250,68,0.20), rgba(255,174,104,0.25));
}
.btn.blue {
  background: linear-gradient(78deg, rgba(0,200,235,0.20), rgba(115,75,215,0.25));
}

/* hover에 :deep() 추가 */
.btn:hover {
  box-shadow:
    -10px -5px 20px rgba(143,104,255,0.20),
    1.5px 1.5px 1.5px rgba(255,255,255,0.40) inset,
    -1.5px -1.5px 1.5px rgba(0,0,0,0.40) inset,
    0 0 20px rgba(0,0,0,0.70) inset,
    10px 10px 20px rgba(68,223,250,0.20),
    5px 5px 10px rgba(68,223,250,0.20),
    1px 1px 5px rgba(68,223,250,0.40),
    0 4px 4px rgba(0,0,0,0.25),
    0 0 10px rgba(68,223,250,0.20);
}
.btn:hover::before {
  display:none;
}
</style>

<script setup>
const props = defineProps({
  href: { type: String, default: '' },
  target: { type: String, default: '' },
  size: { type: String, default: 'md' },
  color: { type: String, default: 'gray' }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'sm text-sm px-[1.56rem] font-semibold h-10'
    case 'lg': return 'lg text-[1.38rem] px-[1.88rem] font-semibold h-[3.75rem]'
    default: return 'md text-base px-[1.88rem] font-semibold h-[3.13rem]'
  }
})

const colorClass = computed(() => {
  switch (props.color) {
    case 'yellow': return 'yellow'
    case 'blue': return 'blue'
    default: return 'gray'
  }
})
</script>
