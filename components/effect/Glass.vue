<template>
  <div>
    <div class="glass-container">
      <div class="glass-filter"></div>
      <div class="glass-tint"></div>
      <div class="glass-content">
        <slot></slot>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute; overflow:hidden">
        <defs>
            <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="1.008 1.008" numOctaves="1" seed="9000" result="noise" />
                <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
                <feDisplacementMap in="SourceGraphic" in2="blurred" scale="77" xChannelSelector="R" yChannelSelector="G" />
            </filter>
        </defs>
    </svg>
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
  /* z-index: 3;/ */
}
</style>