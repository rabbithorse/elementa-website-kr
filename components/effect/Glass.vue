<template>
  <!-- OSJ : 글라스모피즘 UI 변경(임시) -->
  <div class="glass">
    <slot />
    <svg width="0" height="0">
      <filter id="glass-blurred" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" >
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

<style scoped>
.glass {
  position: relative;
  border-radius: 0;
  /*background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15); */
  /* box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25), inset 0 0 1px rgba(255, 255, 255, 0.22); */
  overflow: hidden;
  /* transition: all 0.25s ease; */
  filter: url(#glass-blurred);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

}

.glass.glass-blurred {
  backdrop-filter: blur(8px) saturate(120%);
  -webkit-backdrop-filter: blur(8px) saturate(120%);
}

.glass:hover {
  background: rgba(255, 255, 255, 0.10);
  /*box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.28),
    inset 0 0 2px rgba(255, 255, 255, 0.35);
   transform: translateY(-2px); */
}

.glass-deep::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;

  background: linear-gradient(
    120deg,
    rgba(255,255,255,0.16) 0%,
    rgba(255,255,255,0.05) 30%,
    rgba(0, 132, 255, 0.03) 60%,
    transparent 90%
  );

  mix-blend-mode: screen;
  pointer-events: none;
}

.glass-deep::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;

  background:
    linear-gradient(180deg, rgba(255,255,255,0.18), transparent 70%),
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGD4DwABBAEAqf0XWQAAAABJRU5ErkJggg==");

  background-repeat: repeat;
  opacity: 0.08;

  mix-blend-mode: overlay;
  pointer-events: none;
} 

.glass > * {
  position: relative;
  z-index: 2;
}
</style>
<!-- 
<template>
  <div>
    <div class="glass-container">
      <div class="glass-filter"></div>
      <div class="glass-tint"></div>
      <div class="glass-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-container {
  background: transparent;
  overflow: hidden;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
  position: relative;
  height: 100%;
}

.glass-filter,
.glass-overlay,
.glass-specular {
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.glass-filter {
  z-index: 0;
  inset: 0;
  backdrop-filter: blur(6px);
  filter: url(#glass-distortion) saturate(120%) brightness(1.1);
  isolation: isolate;
  fill: rgba(0, 0, 0, 0.15);
  box-shadow: -3px -3px 3px 0 rgba(255, 255, 255, 0.05) inset, 3px 3px 3px 0 rgba(255, 255, 255, 0.30) inset;
  filter: drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.10));
}

.glass-tint {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5);
}

.glass-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5),
    inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5);
}

.glass-content {
  position: relative;
  height: 100%;
  z-index: 3;
}
</style> -->