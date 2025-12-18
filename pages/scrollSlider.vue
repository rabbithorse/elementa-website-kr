<template>
  <div>
    <!-- 상단 여백 -->
    <div class="section bg-yellowgreen-200">
      <h1 class="title">섹션1</h1>
    </div>

    <!-- 유리 영역 -->
    <div 
      ref="glassRef"
      class="glass-container"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @wheel="handleWheel"
    >
      <!-- 안내 텍스트 -->
      <div class="info-text">
        {{ isHovered ? '마우스올림' : '마우스 올리세요' }}
      </div>

      <!-- 첫 번째 슬라이더 (우 -> 좌) -->
      <div class="slider-wrapper">
        <div ref="slider1Ref" class="slider">
          <div 
            v-for="img in images1" 
            :key="img.id"
            class="slider-item"
            :style="{ backgroundColor: img.color }"
          >
            #{{ img.id + 1 }}
          </div>
        </div>
      </div>

      <!-- 두 번째 슬라이더 (좌 -> 우) -->
      <div class="slider-wrapper">
        <div ref="slider2Ref" class="slider">
          <div 
            v-for="img in images2" 
            :key="img.id"
            class="slider-item"
            :style="{ backgroundColor: img.color }"
          >
            #{{ img.id + 1 }}
          </div>
        </div>
      </div>
    </div>

    <!-- 하단 여백 -->
    <div class="section bg-pink-200">
      <div class="title">섹션1</div>
    </div>
  </div>
</template>

<style>
  .section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

.glass-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255,255,255,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.2);
  overflow: hidden;
  max-width: 1920px;
}

.info-text {
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  background: rgba(0,0,0,0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
}

.slider-wrapper {
  width: 100%;
  overflow: hidden;
}

.slider {
  display: flex;
  gap: 1.5rem;
  width: fit-content;
}

.slider-item {
  flex-shrink: 0;
  width: 16rem;
  height: 10rem;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
  </style>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  const { $gsap, $ScrollTrigger } = useNuxtApp()

const glassRef = ref(null)
const slider1Ref = ref(null)
const slider2Ref = ref(null)
const isHovered = ref(false)
let scrollTrigger = null
let scrollAmount = 0

// 샘플 이미지 데이터
const images1 = Array(10).fill(null).map((_, i) => ({
  id: i,
  color: `hsl(${i * 36}, 70%, 60%)`
}))

const images2 = Array(10).fill(null).map((_, i) => ({
  id: i,
  color: `hsl(${i * 36 + 180}, 70%, 60%)`
}))

// 마우스 휠 이벤트 핸들러
const handleWheel = (e) => {
  if (!isHovered.value) return

  e.preventDefault()
  e.stopPropagation()
  
  const slider1 = slider1Ref.value
  const slider2 = slider2Ref.value
  const delta = e.deltaY
  const speed = 1.5

  // 스크롤 양 누적
  scrollAmount += delta * speed

  // 슬라이더의 전체 너비와 보이는 영역 계산
  const slider1Width = slider1.scrollWidth
  const viewportWidth = glassRef.value.clientWidth
  const padding = 50
  
  // 최대 스크롤 거리: 전체 너비 - 화면 너비 + 시작 여백
  const maxScroll = slider1Width - viewportWidth + padding + 40

  // 스크롤 범위 제한
  scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll))

  // 첫 번째 슬라이더: 우 -> 좌 (시작: 왼쪽 50px 여백)
  $gsap.to(slider1, {
    x: padding - scrollAmount,
    duration: 0.5,
    ease: 'power2.out'
  })

  // 두 번째 슬라이더: 좌 -> 우 (시작: 오른쪽 50px 여백)
  $gsap.to(slider2, {
    x: -maxScroll + scrollAmount + 40,
    duration: 0.5,
    ease: 'power2.out'
  })
}

// 마우스 업 핸들러
const handleMouseUp = () => {
  if (!isHovered.value) return
  
  const slider1 = slider1Ref.value
  const slider2 = slider2Ref.value
  
  // 초기 위치로 복귀
  $gsap.to(slider1, {
    x: 50,
    duration: 0.8,
    ease: 'power2.out'
  })
  
  $gsap.to(slider2, {
    x: -50,
    duration: 0.8,
    ease: 'power2.out'
  })
  
  // 스크롤 양도 초기화
  scrollAmount = 0
}

// 마우스 진입/이탈 핸들러
const handleMouseEnter = () => {
  isHovered.value = true
  if (scrollTrigger) {
    scrollTrigger.pin(true)
  }
}

const handleMouseLeave = () => {
  isHovered.value = false
  if (scrollTrigger) {
    scrollTrigger.pin(false)
  }
}

onMounted(() => {
  const glass = glassRef.value
  const slider1 = slider1Ref.value
  const slider2 = slider2Ref.value

  // 초기 위치 설정 (시작할 때 여백)
  $gsap.set(slider1, { x: 50 }) // 왼쪽 50px 여백에서 시작
  $gsap.set(slider2, { x: -(slider2.scrollWidth - glassRef.value.clientWidth) -50 }) // 오른쪽 50px 여백에서 시작

  // 스크롤 트리거 설정 - 초기에는 pin 비활성화
  scrollTrigger = $ScrollTrigger.create({
    trigger: glass,
    start: 'top top',
    end: '+=300%',
    pin: false,
    pinSpacing: true,
    anticipatePin: 1
  })

  // 휠 이벤트 리스너 추가
  glass.addEventListener('wheel', handleWheel, { passive: false })
})

onUnmounted(() => {
  const glass = glassRef.value
  
  if (scrollTrigger) {
    scrollTrigger.kill()
  }
  
  if (glass) {
    glass.removeEventListener('wheel', handleWheel)
  }
})
  </script>