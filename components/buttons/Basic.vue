<template>
  <button
    v-if="!href"
    class="btn"
    @click="$emit('click')"
    :class="[colorClass]"
  >
    <span class="inner" :class="[sizeClass]">
      <slot />
    </span>
    <span class="hover_shadow"></span>
    <span class="hover_shadow2"></span>
  </button>

  <a
    v-else
    class="btn"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :class="[colorClass]"
  >

    <span class="inner" :class="[sizeClass]">
      <slot />
    </span>
    <span class="hover_shadow"></span>
    <span class="hover_shadow2"></span>
  </a>
</template>

<style scoped>
  .btn {position:relative; display: inline-block;}

  .btn .inner {
    background: linear-gradient(78deg, rgba(255,255,255,0.20) -4.53%, rgba(255,255,255,0.25) 113.59%);
    box-shadow: -1.5px -1.5px 1.5px 0 rgba(255,255,255,0.20) inset,
                2px 2px 2px 0 rgba(255,255,255,0.40) inset;
    backdrop-filter: blur(10px);
    color:#fff;
    transition: all 0.3s ease;
    clip-path: polygon(100% 0,100% 33px, calc(100% - 20px) 100%,0 100%,0 0);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    position: relative;
    z-index: 2;
  }

  .btn .inner::before {
    content: '';
    position: absolute;
    right: 4px;
    bottom: -5px;
    width: 2px;
    height: 38px;
    background: rgba(255,255,255,0.2);
    transform: rotate(48deg);
  }

  .btn .lg.inner {
    clip-path: polygon(100% 0,100% 35px, calc(100% - 20px) 100%,0 100%,0 0);
  }

  .btn .lg.inner::before {
    right: 9px;
    transform: rotate(38deg);
  }

  .btn .sm.inner {
    clip-path: polygon(100% 0,100% 28px, calc(100% - 16px) 100%,0 100%,0 0);
  }

  .btn .sm.inner::before {
    right: 0;
    top: 9px;
    transform: rotate(53deg);
  }

  .btn.yellow .inner {
    background: linear-gradient(78deg, rgba(250,250,68,0.20), rgba(255,174,104,0.25));
  }
  .btn.blue .inner {
    background: linear-gradient(78deg, rgba(0,200,235,0.20), rgba(115,75,215,0.25));
  }

  .btn .inner::after {content:''; display: block; width:100%; height: 100%; background: #fff;}

  .btn:hover .inner {
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
  .btn:hover .inner::before {
    display:none;
  }

  .btn .hover_shadow {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
  }
  .btn .hover_shadow::before {
    content: '';
    display: block;
    width: calc(100% - 20px);
    height: 4px;
    background: #5aadbc;
    position: absolute;
    left: 0px;
    bottom: -3px;
    filter: blur(2.5px);
    box-shadow: 2px 1px 0px 0px #239db4;
  }

  .btn .hover_shadow::after {
    content: '';
    display: block;
    width: 2px;
    height: calc(100% - 17px);
    background: #5aadbc;
    position: absolute;
    right: 0;
    top: 0;
    filter: blur(2.5px);
    box-shadow: 2px 1px 0px 0px #239db4;
  }

  .btn:hover .hover_shadow {
    opacity: 1;
  }

  .btn .hover_shadow2 {
    content: '';
    display: block;
    width: 4px;
    height: 29px;
    background: #5aadbc;
    position: absolute;
    right: 8px;
    bottom: -7px;
    filter: blur(2.5px);
    box-shadow: 1px 1px 0px 0px #239db4;
    transform: rotate(52deg);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .btn:hover .hover_shadow2 {
    opacity: 1;
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
