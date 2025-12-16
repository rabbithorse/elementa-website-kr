<template>
  <!-- 부모가 relative + height를 가져야 함 -->
  <span class="absolute inset-0 block pointer-events-none max-w-[100%] mx-auto">
    <canvas ref="canvasRef"></canvas>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/* ===============================
   refs & vars
================================ */
const canvasRef = ref(null)

let ctx
let w = 0
let h = 0
let rafId = null
let fireflies = []

const MAX_COUNT = 260          // 전체 밀도
const SPAWN_PER_FRAME = 12     // 생성 속도
const DARK_RATIO = 0.25        // 어두운 입자 비율 (25%)

/* ===============================
   Firefly class
================================ */
class Firefly {
  constructor() {
    this.reset()
  }

  reset() {
    this.x = Math.random() * w
    this.y = Math.random() * h

    // 75% 금빛 / 25% 어두운 입자
    this.type = Math.random() < (1 - DARK_RATIO) ? 'gold' : 'dark'

    // 👇 네가 줄인 크기 반영
    this.s = Math.random() * 0.9 + 0.3   // 0.3 ~ 1.2
    this.ang = Math.random() * Math.PI * 2
    this.v = this.s * 0.18
    this.seed = Math.random() * 1000
  }

  move() {
    this.x += this.v * Math.cos(this.ang)
    this.y += this.v * Math.sin(this.ang)
    this.ang += Math.random() * Math.PI / 18 - Math.PI / 36

    if (
      this.x < -50 || this.x > w + 50 ||
      this.y < -50 || this.y > h + 50
    ) {
      this.reset()
    }
  }

  draw(time) {
    if (this.type === 'gold') {
      this.drawGold(time)
    } else {
      this.drawDark()
    }
  }

  /* ===== 금빛 입자 ===== */
  drawGold(time) {
    const pulse = Math.sin(time * 0.002 + this.seed) * 0.4 + 1
    const r = this.s * 4 * pulse

    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, r
    )

    gradient.addColorStop(0, 'rgba(255, 230, 150, 1)')
    gradient.addColorStop(0.4, 'rgba(255, 200, 100, 0.8)')
    gradient.addColorStop(1, 'rgba(255, 160, 60, 0)')

    ctx.globalCompositeOperation = 'lighter'
    ctx.beginPath()
    ctx.fillStyle = gradient
    ctx.arc(this.x, this.y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  /* ===== 어두운 입자 (깊이감용) ===== */
  drawDark() {
    ctx.globalCompositeOperation = 'source-over'
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)'
    ctx.arc(this.x, this.y, this.s * 1.3, 0, Math.PI * 2)
    ctx.fill()
  }
}

/* ===============================
   helpers
================================ */
function resize() {
  const canvas = canvasRef.value
  if (!canvas) return

  const rect = canvas.parentElement.getBoundingClientRect()
  w = canvas.width = rect.width
  h = canvas.height = rect.height
}

function draw(time) {
  if (fireflies.length < MAX_COUNT) {
    for (let i = 0; i < SPAWN_PER_FRAME; i++) {
      fireflies.push(new Firefly())
    }
  }

  ctx.clearRect(0, 0, w, h)

  for (let i = 0; i < fireflies.length; i++) {
    fireflies[i].move()
    fireflies[i].draw(time)
  }

  ctx.globalCompositeOperation = 'source-over'
}

function loop(time) {
  draw(time)
  rafId = requestAnimationFrame(loop)
}

/* ===============================
   lifecycle
================================ */
onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  ctx = canvas.getContext('2d')
  resize()
  loop(0)

  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', resize)
  fireflies = []
})
</script>

<style scoped>
  .description .text-area .text-box .title span {background: url('~/assets/images/sub/text-light.png') no-repeat center / cover; z-index: -1; height: 70px; mask-image: radial-gradient(black 50%, transparent 70%); -webkit-mask-image: radial-gradient(black 50%, transparent 70%)}
  .description .text-area .text-box .sub-text .title span {transform: translateY(-18px);}
canvas {
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
  opacity: 0.9;
}

/* -------------------------------------- */
/* MD : 768 ~ 1023  
/* -------------------------------------- */
@media (min-width: 768px) and (max-width: 1023px) {
  .description .text-area .text-box .title span {height: 50px;}
  .description .text-area .text-box .sub-text .title span {transform: translateY(0px);}
}
  


/* -------------------------------------- */
/* MOBILE : 0 ~ 767 */
/* -------------------------------------- */
@media (max-width: 767px) {
  .description .text-area .text-box .title span {height: 50px;}
  .description .text-area .text-box .sub-text .title span {transform: translateY(0px);}
}
</style>