<template>
  <div class="badge relative" :class="[categoryClass, colorClass, sizeClass, fontColorClass]">
    <slot />
  </div>
</template>

<style scope>
/* -------------------------------------- */
/* 기본값 (1536px 이상) — PC 디자인 원본 */
/* -------------------------------------- */

  /* Badge */
.badge {color: #734BD7; font-weight: 700; display: inline-flex; padding: 2px 10px; justify-content: center; align-items: center; gap: 10px; border-radius: 50px; background: linear-gradient(100deg, rgba(115, 75, 215, 0.25) 8.3%, rgba(60, 39, 113, 0.25) 98.05%);}
.badge::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;

  background: linear-gradient(
    to right,
    rgba(147, 96, 255, 1) 0%,      /* ← 왼쪽 진한 라인 */
    rgba(147, 96, 255, 0.8) 15%,   /* 부드럽게 시작 */
    rgba(147, 96, 255, 0.4) 40%,   /* 점점 흐림 */
    rgba(147, 96, 255, 0.2) 100%     /* 오른쪽 완전 투명 */
  );

  /* border처럼 보이도록 */
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;

  padding: 1px; /* 테두리 두께 */
}

.badge.cyan {color: var(--main-color); background: linear-gradient(100deg, rgba(0, 152, 179, 0.25) 8.3%, rgba(39, 93, 113, 0.25) 98.05%);}
.badge.cyan::before {
  background: linear-gradient(
    to right,
    rgba(0, 152, 179, 1) 0%,      
    rgba(0, 152, 179, 1) 15%,   
    rgba(0, 152, 179, 0.4) 40%,   
    rgba(0, 152, 179, 0.2) 100%
  );
}

.badge.green {color: #1EAD5D; background: linear-gradient(100deg, rgba(30, 173, 93, 0.25) 8.3%, rgba(13, 86, 45, 0.25) 98.05%);}
.badge.green::before {
  background: linear-gradient(
    to right,
    rgba(30, 173, 93, 1) 0%,      
    rgba(30, 173, 93, 1) 15%,   
    rgba(30, 173, 93, 0.4) 40%,   
    rgba(30, 173, 93, 0.2) 100%
  );
}

.badge.yellow {color: rgba(226, 187, 0, 1); background: linear-gradient(100deg, rgba(226, 187, 0, 0.25) 8.3%, rgba(135, 112, 0, 0.25) 98.05%);}
.badge.yellow::before {
  background: linear-gradient(
    to right,
    rgba(226, 187, 0, 1) 0%,      
    rgba(226, 187, 0, 1) 15%,   
    rgba(226, 187, 0, 0.4) 40%,   
    rgba(226, 187, 0, 0.2) 100%
  );
}

.badge.category {padding: 8px 15px; border-radius: 5px;}
.badge.md {padding: 5px 15px; border-radius:50px;}

.badge.text-white {color: #FFFFFF;}

/***** responsive, 순서 변경 금지*****/

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
  .badge.category {padding: 6px 12px;}
}

/* -------------------------------------- */
/* MOBILE : 0 ~ 767 */
/* -------------------------------------- */
@media (max-width: 767px) {
  .badge.category {padding: 6px 12px;}
}

/* 모바일 세부조정 */
@media (max-width: 375px) {}
</style>

<script setup>
const props = defineProps({
  category: { type: String, default: '' },
  color: { type: String, default: '' },
  size: { type: String, default: '' },
  fontColor: { type: String, default: '' },
})

const categoryClass = computed(() => {
  if (props.category === 'y') {
    return 'category lg:text-[1rem] text-[0.69rem]'
  } else {
    return 'normal lg:text-[0.69rem] text-[0.63rem]'
  }
})

const colorClass = computed(() => {
  switch (props.color) {
    case 'cyan': return 'cyan'
    case 'green': return 'green'
    case 'yellow': return 'yellow'
    default: return ''
  }
})

const sizeClass = computed(() => {
  if (props.size === 'md') {
    return 'md text-sm'
  } else {
    return ''
  }
})

const fontColorClass = computed(() => {
  if (props.fontColor) {
    return `text-${props.fontColor}`
  } else {
    return ''
  }
})
</script>
  