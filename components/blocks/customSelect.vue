<template>
  <div class="filter-inner flex flex-col lg:gap-[0.94rem] gap-[8px] lg:w-auto w-full relative" ref="root">
    <label class="lg:text-lg text-[0.94rem]">{{ label }}</label>

    <select class="lg:text-lg text-[0.94rem]">
      <option v-for="item in options" :key="item">{{ item }}</option>
    </select>

    <div class="custom-select relative">
      <div class="selected relative lg:text-lg text-[0.88rem]">전체</div>
    </div>
  </div>
</template>

<script setup>
// filter-box 전용 커스텀 셀렉트 컴포넌트입니다.
// 컴포넌트 내부 DOM만 조작하도록 구현되어 있으며,
// 다른 레이아웃에서 사용할 경우 스타일 구조에 맞게 커스터마이징이 필요할 수 있습니다.

import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  label: { type: String, default: "직군" },
  options: { type: Array, default: () => ["전체", "직군1", "직군2"] }
})

const root = ref(null)

onMounted(async () => {
  await nextTick()

  // 이 컴포넌트 내부 DOM만 찾기
  const select = root.value.querySelector('select')
  const wrap = root.value.querySelector('.custom-select')
  const selected = wrap.querySelector('.selected')

  selected.textContent = select.options[select.selectedIndex].text

  const ul = document.createElement('ul')

  ;[...select.options].forEach(opt => {
    const li = document.createElement('li')
    li.textContent = opt.text

    li.addEventListener('click', () => {
      selected.textContent = opt.text
      select.value = opt.value
      wrap.classList.remove('active')
    })

    ul.appendChild(li)
  })

  wrap.appendChild(ul)

  selected.addEventListener('click', () => wrap.classList.toggle('active'))

  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) {
      wrap.classList.remove('active')
    }
  })
})
</script>
