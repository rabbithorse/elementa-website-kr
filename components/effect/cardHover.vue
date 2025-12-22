<template>
  <div class="card-wrap relative" :class="[filterClass]">
    <div class="card-moving">
      <div class="animatedCard" ref="card" @mouseenter="cardHover">
        <slot></slot>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute; overflow:hidden">
      <defs>
        <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.004 0.004" numOctaves="2" seed="1000" result="noise"></feTurbulence>
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred"></feGaussianBlur>
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="81" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup>
  let moveForce = 8;
  let rotateForce = 6;
  let ease = 0.05;
  const card = ref(null);

    function cardHover() {
      
      let targetX = 0,
          targetY = 0;
      let targetRotateX = 0,
          targetRotateY = 0;
      let currentX = 0,
          currentY = 0;
      let currentRotateX = 0,
          currentRotateY = 0;

      let animation = true;

      function animate() {
        if(!animation) return;
        currentX += (targetX - currentX) * ease;
        currentY += (targetY - currentY) * ease;
        currentRotateX += (targetRotateX - currentRotateX) * ease;
        currentRotateY += (targetRotateY - currentRotateY) * ease;

        card.value.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translate(${currentX}px, ${currentY}px)`;
        
        
        requestAnimationFrame(animate);

      }

      

      card.value.addEventListener("mousemove", function(e){
        const offset = card.value.getBoundingClientRect();
        const width = offset.width;
        const height = offset.height;
        const relX = e.clientX - offset.left;
        const relY = e.clientY - offset.top;

        targetX = ((relX - width / 2) / (width / 2)) * -moveForce;
        targetY = ((relY - height / 2) / (height / 2)) * -moveForce;
        targetRotateY = ((relX / width) * rotateForce * 2) - rotateForce;
        targetRotateX = (((relY / height) * rotateForce * 2) - rotateForce);
      })

      

      card.value.addEventListener("mouseleave", function(){
        animation = false;
        function removeStyle(){
          card.value.style.transition = 'transform 0.4s ease';
          card.value.style.transform = 'rotateX(0deg) rotateY(0deg) translate(0, 0)';

          setTimeout(() => card.value.style.transition = '', 300);
        }
        card.value.addEventListener("mouseleave", removeStyle);
        card.value.removeEventListener("mousemove", removeStyle);
        
        
        //console.log(card.value.style.transform);
      });
      
      animate();
    }
    
  const props = defineProps({
    filter: { type: String, default: '' },
  })

  const filterClass = computed(() => {
    switch (props.filter) {
      case 'distort': return 'absolute w-full h-full box-border transform-3d cursor-pointer distort'
      default: return 'absolute w-full h-full box-border transform-3d cursor-pointer'
    } 
  })



  
</script>

<style scoped>
  .card-wrap {
    width: 100%;
    height: 100%;
  }
  .card-moving {
    position: absolute;
    top:50%; 
    left:50%;
    width: 100%;
    height: 100%;
    /* margin: -60px 0 0 -150px; */
    perspective: 800px;
  }

  .distort .animatedCard {
    -webkit-backdrop-filter: url(#glass-distortion) blur(6px);
    backdrop-filter: url(#glass-distortion) blur(6px);
    
  } 

  .distort .animatedCard::after {
    content: "";
    position: absolute;
    inset: 0;
    /* OSJ : 그림자 윤곽 추가 */
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px 0px;
    backdrop-filter: blur(4px);
    
  }
</style>