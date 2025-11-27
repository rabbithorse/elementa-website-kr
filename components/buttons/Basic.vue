<template>
  <button
    v-if="!href"
    class="btn"
    @click="$emit('click')"
    :class="[colorClass]"
  >
    <span class="inner" :class="[sizeClass, widthClass]">
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

    <span class="inner" :class="[sizeClass, widthClass]">
      <slot />
    </span>
    <span class="hover_shadow"></span>
    <span class="hover_shadow2"></span>
  </a>
</template>

<style scoped>
  /* -------------------------------------- */
  /* 기본값 (1536px 이상) — PC 디자인 원본 */
  /* -------------------------------------- */

  .btn {position:relative; display: inline-block;}

  .btn .inner {
    background: linear-gradient(78deg, rgba(255,255,255,0.20) -4.53%, rgba(255,255,255,0.25) 113.59%);
    box-shadow: -1.5px -1.5px 1.5px 0 rgba(255,255,255,0.20) inset,
                2px 2px 2px 0 rgba(255,255,255,0.40) inset;
    /* backdrop-filter: blur(10px); */
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
  .btn.sch .inner {
    background: linear-gradient(256deg, rgba(115, 75, 215, 0.25) -244.38%, rgba(0, 200, 235, 0.15) 100%);
    padding: 0; clip-path: polygon(100% 0,100% 33px, calc(100% - 19px) 100%,0 100%,0 0); width: 50px; height:50px;
  }
  .btn.sch .lg.inner {width: 64px; height: 64px; clip-path: polygon(100% 0,100% 40px, calc(100% - 20px) 100%,0 100%,0 0);}

  /* .btn .inner::after {content:''; display: block; width:100%; height: 100%; background: #fff;} */

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
    filter: blur(3.5px);
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
    filter: blur(3.5px);
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
    filter: blur(3.5px);
    box-shadow: 1px 1px 0px 0px #239db4;
    transform: rotate(52deg);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .btn.yellow .hover_shadow::before {background: rgba(226, 187, 0, 1); box-shadow: 2px 1px 0px 0px rgba(191, 191, 127);}
  .btn.yellow .hover_shadow::after {background: rgba(226, 187, 0, 1); box-shadow: 2px 1px 0px 0px rgba(191, 191, 127);}
  .btn.yellow .hover_shadow2 {background: rgba(226, 187, 0, 1); box-shadow: 1px 1px 0px 0px rgba(191, 191, 127);}

  .btn .lg.inner ~ .hover_shadow2 {
    height: 27px;
    right: 8px;
    bottom: -5px;
    transform: rotate(40deg);
  }

  .btn .sm.inner ~ .hover_shadow2 {
    height: 27px;
    right: 6px;
    bottom: -8px;
    transform: rotate(54deg);
  }

  .btn:hover .hover_shadow2 {
    opacity: 1;
  }

  /***** responsive, 순서 변경 금지*****/

  /* pc에서 레이아웃 깨지는 것만 */
  @media (max-width: 1919px) {

  }

  /* -------------------------------------- */
  /* XL : 1280 ~ 1535 */
  /* -------------------------------------- */
  @media (min-width: 1280px) and (max-width: 1535px) {

  }

  /* -------------------------------------- */
  /* LG : 1024 ~ 1279 */
  /* -------------------------------------- */
  @media (min-width: 1024px) and (max-width: 1279px) {
  }

  /* -------------------------------------- */
  /* MD : 768 ~ 1023  
  /* -------------------------------------- */
  @media (min-width: 768px) and (max-width: 1023px) {
    .btn .md.inner {clip-path: polygon(100% 0,100% 28px, calc(100% - 13px) 100%,0 100%,0 0);}
    .btn .md.inner::before {right: -2px; transform: rotate(47deg);}
    .btn .sm.inner {clip-path: polygon(100% 0,100% 23px, calc(100% - 13px) 100%,0 100%,0 0);}
    .btn .sm.inner::before {right: 5px; transform: rotate(45deg);}
    .btn .lg.inner {clip-path: polygon(100% 0,100% 33px, calc(100% - 20px) 100%,0 100%,0 0)}
    .btn .lg.inner::before {right: 4px; bottom:-4px; transform: rotate(47deg);}

    .btn.sch .lg.inner {width:50px; height:50px; clip-path: polygon(100% 0,100% 32px, calc(100% - 15px) 100%,0 100%,0 0);}
    .btn.sch .lg.inner::before {right:4px; transform: rotate(40deg);}
    .btn.sch .lg.inner .ico {width:20px; height:20px;}
    .btn.sch .md.inner {clip-path: polygon(100% 0,100% 32px, calc(100% - 15px) 100%,0 100%,0 0);}
    .btn.sch .md.inner::before {right:2px; transform: rotate(40deg);}
  }

  /* -------------------------------------- */
  /* MOBILE : 0 ~ 767 */
  /* -------------------------------------- */
  @media (max-width: 767px) {
    .btn .md.inner {clip-path: polygon(100% 0,100% 28px, calc(100% - 13px) 100%,0 100%,0 0);}
    .btn .md.inner::before {right: -2px; transform: rotate(47deg);}
    .btn .sm.inner {clip-path: polygon(100% 0,100% 23px, calc(100% - 13px) 100%,0 100%,0 0);}
    .btn .sm.inner::before {right: 5px; transform: rotate(45deg);}
    .btn .lg.inner {clip-path: polygon(100% 0,100% 33px, calc(100% - 20px) 100%,0 100%,0 0);}
    .btn .lg.inner::before {right: 4px; bottom:-4px; transform: rotate(47deg);}

    .btn.sch .lg.inner {width:50px; height:50px; clip-path: polygon(100% 0,100% 32px, calc(100% - 15px) 100%,0 100%,0 0);}
    .btn.sch .lg.inner::before {right:4px; transform: rotate(40deg);}
    .btn.sch .lg.inner .ico {width:20px; height:20px;}
    .btn.sch .md.inner {clip-path: polygon(100% 0,100% 32px, calc(100% - 15px) 100%,0 100%,0 0);}
    .btn.sch .md.inner::before {right:2px; transform: rotate(40deg);}

  }
</style>

<script setup>
const props = defineProps({
  href: { type: String, default: '' },
  target: { type: String, default: '' },
  size: { type: String, default: 'md' },
  color: { type: String, default: 'gray' },
  width: { type: String, default: '' },
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'sm text-sm px-[1.56rem] font-semibold lg:h-10 h-[2.19rem]'
    case 'lg': return 'lg lg:text-[1.38rem] text-base px-[1.88rem] font-semibold lg:h-[3.75rem] h-[3.25rem]'
    case 'lg-wide': return 'lg wide lg:text-[1.38rem] text-base px-20 font-semibold lg:h-[3.75rem] h-[3.25rem]'
    default: return 'md lg:text-base text-[0.88rem] px-[1.88rem] px-[1.25rem] font-semibold lg:h-[3.13rem] h-[2.5rem]'
  }
})

const colorClass = computed(() => {
  switch (props.color) {
    case 'yellow': return 'yellow'
    case 'blue': return 'blue'
    case 'sch': return 'sch'
    default: return 'gray'
  }
})

const widthClass = computed(() => {
  if (props.width === 'full') {
    return 'w-full'
  } else {
    return ''
  }
})
</script>
