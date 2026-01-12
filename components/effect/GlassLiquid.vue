<template>
  <div class="glassWrap absolute inset-0" :class="[glassBlurClass]">
    <div class="distortion-glass"></div>
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
  const props = defineProps({
    blur: { type: String, default: '' },
  })

  const glassBlurClass = computed(() => {
    switch (props.blur) {
      case 'blurred2': return 'blurred2'
      case 'blurred3': return 'blurred3'
      case 'blurred4': return 'blurred4'
      default: return 'blurred0'
    } 
  })
</script>

<style>
  .glassWrap::after {
    content: "";
    display: inline-block;
    position: absolute;
    inset: 0;
  }

  .glassWrap.blurred0::after {
    backdrop-filter: blur(0px);
  }

  .glassWrap.blurred2::after {
    backdrop-filter: blur(2px);
  }

  .glassWrap.blurred3::after {
    backdrop-filter: blur(3px);
  }

  .glassWrap.blurred4::after {
    backdrop-filter: blur(4px);
  }

  .distortion-glass {
    width: 100%; 
    height:100%; 
    position: absolute; 
    left: 0;  
    bottom: 0; 
    z-index: 0; 
    overflow: hidden; 
    isolation: isolate;
  }

  .distortion-glass::before {
    content: "";
    display: inline-block;
    position: absolute;
    inset: 0;
    z-index: 0;
    box-shadow: inset 0 0 0 0 0;
    background-color: rgba(255,255,255, 0.04);
  }

  .distortion-glass::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: url(#glass-distortion);
    backdrop-filter: url(#glass-distortion); 
    /* mask: url(#glass-distortion);
    -webkit-mask: url(#glass-distortion);*/
    isolation: isolate;
    /* -webkit-backdrop-filter: blur(4px);
    -webkit-filter: url(#glass-distortion); */
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