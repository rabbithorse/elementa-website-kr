<template>
  <div class="filter-glass liquid">
    <slot></slot>
    <svg style="display: none">
      <filter id="liquid" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" >
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" result="turbulence" />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="5" result="softMap" />
        <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lighting-color="white" result="specLight" >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
        <feDisplacementMap in="SourceGraphic" in2="softMap" scale="110" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  </div>
</template>

<style>
  .filter-glass {width: 100%; height:100%; position: absolute; left: 0;  bottom: 0; z-index: 0; box-shadow: 12px 10px 20px 0 rgba(0, 0, 0, 0.08), 1px 1px 3px 0 rgba(255, 255, 255, 0.25) inset; overflow: hidden;}

  .filter-glass.liquid {
    filter: url(#liquid) saturate(100%); 
    backdrop-filter: blur(12px);
  }

  .filter-glass.shimmer::after {
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