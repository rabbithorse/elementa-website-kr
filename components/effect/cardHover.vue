<template>
  <div>
    <div class="card-wrap relative" ref="card" @mouseenter="entered = true">
      <div class="card-moving">
        <div class="card">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  let moveForce = 10;
  let rotateForce = 5;
  let ease = 0.1;

  const card = ref<HTMLElement | null>(null);
  const entered = ref(false);

  function mouseEnter (e: Event) {
    let cardElement = card.value;

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

      (cardElement as HTMLElement).style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translate(${currentX}px, ${currentY}px)`;
      console.log(cardElement);
      requestAnimationFrame(animate);

    }

    
    (cardElement as HTMLElement).addEventListener('mousemove', (e: MouseEvent) => {
        let cardElement = card.value;
        const offset = (cardElement as HTMLElement).getBoundingClientRect();
        const width = offset.width;
        const height = offset.height;
        const relX = e.pageX - offset.left;
        const relY = e.pageY - offset.top;

        targetX = ((relX - width / 2) / (width / 2)) * - moveForce;
        targetY = ((relY - height / 2) / (height / 2)) * - moveForce;
        targetRotateY = ((relX / width) * rotateForce * 2) - rotateForce;
        targetRotateX = -(((relY / height) * rotateForce * 2) - rotateForce);
    
      });

      animate();
  }



  // function mouseLeave (e: Event) {
    
  // }

  onMounted(() => {
    
    window.addEventListener('mouseenter', mouseEnter);
    console.log(mouseEnter);
    //window.addEventListener('mouseleave', mouseLeave);
  });

  // var moveForce = 10;  
  // var rotateForce = 5;
  // var ease = 0.1; 
  // const cardWrap = document.querySelectorAll(".card-wrap");

  // const card = ref<HTMLElement | null>(null);

  // cardWrap.forEach((card) => {
  //   card.addEventListener("mouseenter", (e) => {
  //     let targetX = 0,
  //         targetY = 0;
  //     let targetRotateX = 0,
  //         targetRotateY = 0;
  //     let currentX = 0,
  //         currentY = 0;
  //     let currentRotateX = 0,
  //         currentRotateY = 0;

  //     let animation = true;

  //     function animate() {
  //       if(!animation) return;
  //       currentX += (targetX - currentX) * ease;
  //       currentY += (targetY - currentY) * ease;
  //       currentRotateX += (targetRotateX - currentRotateX) * ease;
  //       currentRotateY += (targetRotateY - currentRotateY) * ease;

  //       (card as HTMLElement).style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translate(${currentX}px, ${currentY}px)`;
  //     }

  //     requestAnimationFrame(animate);
  //   });
  // });

// $(document).on('mouseenter', '.popup', function() {

//     const $popup = $(this);
//     let targetX = 0, targetY = 0, targetRotX = 0, targetRotY = 0;
//     let currentX = 0, currentY = 0, currentRotX = 0, currentRotY = 0;
//     let animating = true;

//     function animate() {
//         if (!animating) return;
//         currentX += (targetX - currentX) * ease;
//         currentY += (targetY - currentY) * ease;
//         currentRotX += (targetRotX - currentRotX) * ease;
//         currentRotY += (targetRotY - currentRotY) * ease;

//         $popup.css({
//             transform: `rotateX(${currentRotX}deg) rotateY(${currentRotY}deg) translate(${currentX}px, ${currentY}px)`
//         });

//         requestAnimationFrame(animate);
//     }

//     $popup.on('mousemove.popupMove', function(e) {
//         const offset = $popup.offset();
//         const width = $popup.outerWidth();
//         const height = $popup.outerHeight();

//         const relX = e.pageX - offset.left;
//         const relY = e.pageY - offset.top;

//         targetX = ((relX - width / 2) / (width / 2)) * -moveForce;
//         targetY = ((relY - height / 2) / (height / 2)) * -moveForce;
//         targetRotY = ((relX / width) * rotateForce * 2) - rotateForce;
//         targetRotX = -(((relY / height) * rotateForce * 2) - rotateForce);
//     });

//     $popup.on('mouseleave.popupMove', function() {
//         animating = false;
//         $popup.off('.popupMove').css({
//             transition: 'transform 0.4s ease',
//             transform: 'rotateX(0deg) rotateY(0deg) translate(0, 0)'
//         });
//         setTimeout(() => $popup.css('transition', ''), 400);
//     });

//     animate();
// });
</script>

<style scoped>
  .card-wrap {
    width: 300px; height: 200px;
  }
  .card-moving {
    position: absolute;
    top:50%; left:50%;
    width:300px; height:120px;
    margin: -60px 0 0 -150px;
    perspective: 800px;
  }

  .card {
    position: absolute;
    width:300px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px 0 20px 0;
    cursor: pointer;
    transform-style: preserve-3d;
    background: -webkit-linear-gradient(top left, white 50%, coral 50%);
    background:    -moz-linear-gradient(top left, white 50%, coral 50%);
    background:     -ms-linear-gradient(top left, white 50%, coral 50%);
    background:      -o-linear-gradient(top left, white 50%, coral 50%);
    background:         linear-gradient(top left, white 50%, coral 50%);
  }
</style>