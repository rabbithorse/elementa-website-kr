<template>
  <div class="card-wrap relative">
    <div class="card-moving">
      <div class="animatedCard" ref="card" @mouseenter="cardHover">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  let moveForce = 8;
  let rotateForce = 8;
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
        
        
        console.log(card.value.style.transform);
      });
      
      animate();
    }
    




  
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
    height: 80%;
    /* margin: -60px 0 0 -150px; */
    perspective: 800px;
  }

  .animatedCard {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transform-style: preserve-3d;
  }
</style>