<template>
  <div class="slider-container relative">
    <div class="controls flex gap-3 items-center absolute top-0 right-0 -translate-y-full">
      <!-- 이전 버튼 -->
      <button class="slider-btn prev flex items-center justify-center w-9 h-9 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" @click="prevSlide">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M24 7.5L12 18.75L24 30" stroke="white" stroke-width="2"/>
        </svg>
        <span class="sr-only">Slide to the previous slide</span>
      </button>
      <!-- 다음 버튼 -->
      <button class="slider-btn next" @click="nextSlide">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M12 30L24 18.75L12 7.5" stroke="white" stroke-width="2"/>
        </svg>
        <span class="sr-only">Slide to the next slide</span>
      </button>
    </div>
    <div class="slider-wrapper" :style="{ perspective: '2000px' }">

      <!-- 슬라이드 트랙 -->
      <div 
        class="slider-track"
        :style="{ transform: isDragging ? `translateX(${dragOffset * 0.3}px)` : '' }"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="card"
          :class="{ active: index === currentIndex }"
          :style="getCardStyle(index)"
        >
          <div class="card-inner">
            <!-- 카드 앞면 -->
            <div class="card-front flex flex-col ">
              <div class="card-heading z-10">
                <span class="text-[1.5rem] font-semibold">{{ card.titleEn }}</span>
                <h3 class="text-[2.5rem] font-semibold">{{ card.title }}</h3>
              </div>
              <div class="card-content mt-auto flex flex-col gap-y-5 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none">
                  <path d="M19.7786 28V17.9808C19.7786 13.508 21.0243 9.6017 23.5156 6.26198C26.0069 2.86262 29.8351 0.77529 35 0V6.53035C32.0226 6.88818 30.0477 7.84239 29.0755 9.39297C28.1033 10.9436 27.6172 13.0011 27.6172 15.5655L22.2396 14.492H34.8177V28H19.7786ZM0 28V17.9808C0 13.508 1.24566 9.6017 3.73698 6.26198C6.2283 2.86262 10.0564 0.77529 15.2214 0V6.53035C12.2439 6.88818 10.2691 7.84239 9.29687 9.39297C8.32465 10.9436 7.83854 13.0011 7.83854 15.5655L2.46094 14.492H15.0391V28H0Z" fill="white"/>
                </svg>
                <p class="text-[1.125rem] leading-[160%] font-normal">{{ card.description }}</p>
              </div>
              <div class="card-figures">
                <div class="polygon-big polygon"></div>
                <div class="polygon-small polygon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      isAnimating: false,
      touchStartX: 0,
      touchEndX: 0,
      touchStartTime: 0,
      isDragging: false,
      dragOffset: 0,
      cards: [
        {
          title: '비즈니스',
          titleEn: 'Business',
          description: '안정적인 서버는 게임의 기본이자 유저 신뢰의 시작이라고 생각합니다. 늘 보이지 않는 곳에서 최고의 환경을 유지하는 데 집중하고 있습니다.'
        },
        {
          title: '클라이언트 프로그래머',
          titleEn: 'Tech',
          description: '유저가 직접 만나는 화면과 기능을 구현합니다. 제 코드 한 줄이 플레이의 몰입감을 좌우한다고 생각하면 늘 긴장되면서도 즐겁습니다.'
        },
        {
          title: '디자인',
          titleEn: 'Design',
          description: '안정적인 서버는 게임의 기본이자 유저 신뢰의 시작이라고 생각합니다. 늘 보이지 않는 곳에서 최고의 환경을 유지하는 데 집중하고 있습니다.'
        },
        {
          title: '마케팅',
          titleEn: 'Marketing',
          description: '유저가 직접 만나는 화면과 기능을 구현합니다. 제 코드 한 줄이 플레이의 몰입감을 좌우한다고 생각하면 늘 긴장되면서도 즐겁습니다.'
        },
        {
          title: '비즈니스',
          titleEn: 'Business',
          description: '안정적인 서버는 게임의 기본이자 유저 신뢰의 시작이라고 생각합니다. 늘 보이지 않는 곳에서 최고의 환경을 유지하는 데 집중하고 있습니다.'
        },
        {
          title: '클라이언트 프로그래머',
          titleEn: 'Tech',
          description: '유저가 직접 만나는 화면과 기능을 구현합니다. 제 코드 한 줄이 플레이의 몰입감을 좌우한다고 생각하면 늘 긴장되면서도 즐겁습니다.'
        },
        {
          title: '디자인',
          titleEn: 'Design',
          description: '안정적인 서버는 게임의 기본이자 유저 신뢰의 시작이라고 생각합니다. 늘 보이지 않는 곳에서 최고의 환경을 유지하는 데 집중하고 있습니다.'
        },
        {
          title: '마케팅',
          titleEn: 'Marketing',
          description: '유저가 직접 만나는 화면과 기능을 구현합니다. 제 코드 한 줄이 플레이의 몰입감을 좌우한다고 생각하면 늘 긴장되면서도 즐겁습니다.'
        }
      ]
    };
  },

  methods: {
    getCardStyle(index) {
      const diff = index - this.currentIndex;
      const totalCards = this.cards.length;
      
      // 순환 구조를 위한 조정
      let adjustedDiff = diff;
      if (Math.abs(diff) > totalCards / 2) {
        adjustedDiff = diff > 0 ? diff - totalCards : diff + totalCards;
      }

      // 양 끝 카드 숨기기 (보이는 범위: -2 ~ +2)
      const visibleRange = 2;
      let opacity = 1;
      let pointerEvents = 'auto';
      
      if (Math.abs(adjustedDiff) > visibleRange) {
        opacity = 0;
        pointerEvents = 'none';
      }

      // 무지개 곡선 계산 (더 넓고 큰 곡선)
      const angle = adjustedDiff * 25; // 각 카드당 25도씩
      const radius = 1100; // 더 큰 반지름으로 화면 꽉 채우기
      const arcHeight = 600; // 더 높은 아치
      
      // 무지개 곡선상의 위치 계산
      const radian = (angle * Math.PI) / 180;
      const x = Math.sin(radian) * radius;
      const y = -Math.cos(radian) * arcHeight + arcHeight;
      
      // 깊이감 - 멀리 있을수록 뒤로
      const z = -Math.abs(adjustedDiff) * 300 - Math.cos(radian) * 250;
      
      // Y축 회전 (정면 기준 양옆 70도)
      let rotateY = 0;
      if (adjustedDiff === 0) {
        rotateY = 0; // 정면
      } else if (adjustedDiff === -1) {
        rotateY = -60; // 왼쪽 카드
      } else if (adjustedDiff === 1) {
        rotateY = 60; // 오른쪽 카드
      } else if (adjustedDiff < -1) {
        rotateY = -120; // 더 왼쪽은 더 회전
      } else if (adjustedDiff > 1) {
        rotateY = 120; // 더 오른쪽은 더 회전
      }
      
      // 중앙 카드만 약간 크게
      const scale = adjustedDiff === 0 ? 1 : 0.9;
      
      let transform = `
        translateX(${x}px) 
        translateY(${y}px) 
        translateZ(${z}px) 
        rotateY(${rotateY}deg) 
        scale(${scale})
      `;
      
      // z-index를 거리에 따라 설정 (멀수록 낮게)
      let zIndex = Math.round(100 - Math.abs(adjustedDiff) * 10 - Math.abs(z) / 10);

      return {
        transform,
        opacity,
        zIndex,
        filter: 'none',
        pointerEvents
      };
    },

    getPrevIndex() {
      return this.currentIndex === 0 
        ? this.cards.length - 1 
        : this.currentIndex - 1;
    },

    getNextIndex() {
      return this.currentIndex === this.cards.length - 1 
        ? 0 
        : this.currentIndex + 1;
    },

    prevSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      
      this.currentIndex = this.getPrevIndex();
      
      setTimeout(() => {
        this.isAnimating = false;
      }, 600);
    },

    nextSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      
      this.currentIndex = this.getNextIndex();
      
      setTimeout(() => {
        this.isAnimating = false;
      }, 600);
    },

    goToSlide(index) {
      if (this.isAnimating || index === this.currentIndex) return;
      this.isAnimating = true;
      
      this.currentIndex = index;
      
      setTimeout(() => {
        this.isAnimating = false;
      }, 600);
    },

    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
      this.touchEndX = e.touches[0].clientX;
      this.touchStartTime = Date.now();
      this.dragOffset = 0;
    },

    handleTouchMove(e) {
      this.touchEndX = e.touches[0].clientX;
      this.dragOffset = this.touchEndX - this.touchStartX;
    },

    handleTouchEnd() {
      if (this.isAnimating) return;
      
      const swipeDistance = this.touchStartX - this.touchEndX;
      const swipeTime = Date.now() - this.touchStartTime;
      const minSwipeDistance = 80;
      const maxClickTime = 200;
      
      // 드래그 오프셋 리셋
      this.dragOffset = 0;
      
      if (swipeTime < maxClickTime && Math.abs(swipeDistance) < 10) {
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.touchStartTime = 0;
        return;
      }
      
      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
      
      this.touchStartX = 0;
      this.touchEndX = 0;
      this.touchStartTime = 0;
    },

    handleMouseDown(e) {
      this.touchStartX = e.clientX;
      this.touchEndX = e.clientX;
      this.touchStartTime = Date.now();
      this.isDragging = true;
      this.dragOffset = 0;
    },

    handleMouseMove(e) {
      if (!this.isDragging) return;
      this.touchEndX = e.clientX;
      this.dragOffset = this.touchEndX - this.touchStartX;
    },

    handleMouseUp() {
      if (!this.isDragging) return;
      this.isDragging = false;
      
      if (this.isAnimating) return;
      
      const swipeDistance = this.touchStartX - this.touchEndX;
      const swipeTime = Date.now() - this.touchStartTime;
      const minSwipeDistance = 80;
      const maxClickTime = 200;
      
      // 드래그 오프셋 리셋
      this.dragOffset = 0;
      
      if (swipeTime < maxClickTime && Math.abs(swipeDistance) < 10) {
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.touchStartTime = 0;
        return;
      }
      
      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
      
      this.touchStartX = 0;
      this.touchEndX = 0;
      this.touchStartTime = 0;
    }
  }
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 60px 0;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2500px;
  perspective-origin: center center;
  overflow: hidden;
}

.slider-track {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  cursor: grab;
  user-select: none;
  transition: transform 0.1s ease-out;
}

.slider-track:active {
  cursor: grabbing;
}

.card {
  position: absolute;
  width: 510px;
  height: 632px;
  transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
  /* transform-style: preserve-3d; */
  perspective: 150rem;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  box-shadow: 2px 2px 3px 0 rgba(255, 255, 255, 0.40) inset;
  padding: 45px 50px;
  backface-visibility: hidden;
  color: white;
  overflow: hidden;
}

/* 각 카드별 색상 */
.card:nth-child(1) .card-front, .card:nth-child(5) .card-front {
  background: linear-gradient(147deg, rgba(47, 37, 72, 0.90) 0.81%, rgba(25, 16, 49, 0.90) 101.54%);
}

.card:nth-child(2) .card-front, .card:nth-child(6) .card-front {
  background: linear-gradient(147deg, rgba(11, 63, 72, 0.90) 0.81%, rgba(2, 37, 43, 0.90) 101.54%);
}

.card:nth-child(3) .card-front, .card:nth-child(7) .card-front {
  background: linear-gradient(147deg, rgba(31, 63, 45, 0.90) 0.81%, rgba(18, 47, 30, 0.90) 101.54%);
}

.card:nth-child(4) .card-front, .card:nth-child(8) .card-front {
  background: linear-gradient(147deg, rgba(63, 57, 31, 0.90) 0.81%, rgba(40, 36, 15, 0.90) 101.54%);
}

.card-figures {
  position: absolute;
  top: 0;
  right: -2.5rem;
  width: 91%;
  height: 92%;
}

.card .polygon {
  position: absolute;
  bottom: 0;
  opacity: 0.7;
}

.card .polygon-big {
  width: 86%;
  height: 100%;
  left: 0;
  z-index: 0;
  clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%);
}

.card .polygon-small {
  width: 50%;
  height: 50%;
  left: 48%;
  bottom: 0;
  z-index: 0;
  clip-path: polygon(45% 0%, 100% 0%, 55% 100%, 0% 100%);
}

.card:nth-child(1) .card-front .polygon, .card:nth-child(5) .card-front .polygon {
  background: linear-gradient(180deg, #734BD7 22%, rgba(0, 200, 235, 0.00) 97.37%);
}

.card:nth-child(2) .card-front .polygon, .card:nth-child(6) .card-front .polygon {
  background: linear-gradient(180deg, #00C8EB 22%, rgba(0, 189, 95, 0.4) 60%, rgba(0, 189, 95, 0.00) );
}

.card:nth-child(3) .card-front .polygon, .card:nth-child(7) .card-front .polygon {
  background: linear-gradient(180deg, #2B9D5D 22%, rgba(0, 200, 235, 0.00) 97.37%);
}

.card:nth-child(4) .card-front .polygon, .card:nth-child(8) .card-front .polygon {
  background: linear-gradient(180deg, #9D892B 22%, rgba(189, 116, 0, 0.00) 97.37%);
}

/* 버튼 스타일 */
.slider-btn {
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
}

.slider-btn span {
  font-size: 32px;
  color: #333;
  line-height: 1;
}

/* 반응형 */
@media (max-width: 768px) {
  .slider-wrapper {
    height: 500px;
  }

  .card {
    width: 280px;
    height: 360px;
  }

  .card-front {
    padding: 30px;
  }

  .card-front h3 {
    font-size: 24px;
  }

  .card-front p {
    font-size: 16px;
  }

  .slider-btn {
    width: 50px;
    height: 50px;
  }

  .slider-btn span {
    font-size: 28px;
  }
}
</style>