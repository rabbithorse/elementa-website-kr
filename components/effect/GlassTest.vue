<template>
  <div class="distortion-glass">
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute; overflow:hidden">
        <defs>
            <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.004 0.004" numOctaves="2" seed="92" result="noise"></feTurbulence>
                <feGaussianBlur in="noise" stdDeviation="2" result="blurred"></feGaussianBlur>
                <feDisplacementMap in="SourceGraphic" in2="blurred" scale="105" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
            </filter>
        </defs>
    </svg>
  </div>
</template>

<style>
  .distortion-glass {
    width: 140%; 
    height:140%; 
    position: absolute; 
    left: -20%;  
    bottom: -20%; 
    z-index: 0; 
    overflow: hidden; 
    filter: url(#glass-distortion);
    backdrop-filter: blur(4px);
  }

  .distortion-glass {
    
    /* box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
    box-shadow: 12px 10px 20px 0 rgba(0, 0, 0, 0.08), 1px 1px 3px 0 rgba(255, 255, 255, 0.25) inset; */
  }

  .distortion-glass.shimmer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%);
    animation: shimmer 7s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>

<script>

</script>