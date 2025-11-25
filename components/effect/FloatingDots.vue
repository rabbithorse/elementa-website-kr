<template>
  <div class="floating-dots-container absolute">
    <!-- 그라데이션 배경 -->
    <div class="gradient-bg"></div>
    
    <!-- 떠다니는 점들을 그릴 캔버스 -->
    <canvas ref="canvas" class="dots-canvas"></canvas>
    
    <!-- 빛라인 이미지 -->
    <div class="content">
      <img src="@/assets/images/main/shinning-line.png" alt="Shinning Line" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingDotsEffect',
  
  mounted() {
    this.initCanvas();
  },
  
  beforeUnmount() {
    // 애니메이션 정리
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.resizeCanvas);
  },
  
  methods: {
    initCanvas() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext('2d');
      
      // 색상 배열
      this.colors = ['#EAAA5E', '#F3B967', '#FBD298', '#F9DAA2', '#F6F0E8'];
      
      // 점 배열
      this.dots = [];
      this.numDots = 80;
      
      // 캔버스 크기 설정
      this.resizeCanvas();
      window.addEventListener('resize', this.resizeCanvas);
      
      // 점들 생성
      for (let i = 0; i < this.numDots; i++) {
        this.dots.push(this.createDot());
      }
      
      // 애니메이션 시작
      this.animate();
    },
    
    resizeCanvas() {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    },
    
    createDot() {
      return {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3
      };
    },
    
    updateDot(dot) {
      dot.x += dot.speedX;
      dot.y += dot.speedY;
      
      // 화면 밖으로 나가면 반대편에서 나타남
      if (dot.x < 0) dot.x = this.canvas.width;
      if (dot.x > this.canvas.width) dot.x = 0;
      if (dot.y < 0) dot.y = this.canvas.height;
      if (dot.y > this.canvas.height) dot.y = 0;
    },
    
    drawDot(dot) {
      this.ctx.beginPath();
      this.ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      const alpha = Math.floor(dot.opacity * 255).toString(16).padStart(2, '0');
      this.ctx.fillStyle = dot.color + alpha;
      this.ctx.fill();
    },
    
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      this.dots.forEach(dot => {
        this.updateDot(dot);
        this.drawDot(dot);
      });
      
      this.animationId = requestAnimationFrame(() => this.animate());
    }
  }
};
</script>

<style scoped>
.floating-dots-container {
  width: 200%;
  height: 250%;
  left: 50%;
  top: 2rem;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: -1;
}

.gradient-bg {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%; 
  height: 100%;
  background: url('~/assets/images/main/shinning-gradient-bg.png') no-repeat center center / cover;
  z-index: 1;
}

.dots-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  top: 24%;
}

.content img {width: 100%; height: 100%;}

.content h1 {
  font-size: 2rem;
  color: #333;
  font-weight: bold;
}
</style>