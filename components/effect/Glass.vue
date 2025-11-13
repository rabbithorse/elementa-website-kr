<template>
  <div>
    <div class="glass-container">
      <div class="glass-filter"></div>
      <div class="glass-tint"></div>
      <div class="glass-content">
        <slot></slot>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
      <g filter="url(#glass-distortion)">
        <rect x="-40" width="100%" height="100%" rx="5" fill="black" fill-opacity="0.15" shape-rendering="crispEdges"/>
      </g>
      <defs>
        <filter id="glass-distortion" x="-43" y="-3" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="20" dy="20"/>
          <feGaussianBlur stdDeviation="10"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_406_2570"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3" dy="3"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
          <feBlend mode="plus-lighter" in2="shape" result="effect2_innerShadow_406_2570"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-3" dy="-3"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
          <feBlend mode="plus-lighter" in2="effect2_innerShadow_406_2570" result="effect3_innerShadow_406_2570"/>
          <feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="6569"/>
          <feComponentTransfer in="noise" result="coloredNoise1">
            <feFuncR type="linear" slope="2" intercept="-0.5"/>
            <feFuncG type="linear" slope="2" intercept="-0.5"/>
            <feFuncB type="linear" slope="2" intercept="-0.5"/>
            <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
          </feComponentTransfer>
          <feComposite operator="in" in2="effect3_innerShadow_406_2570" in="coloredNoise1" result="noise1Clipped"/>
          <feComponentTransfer in="noise1Clipped" result="color1">
            <feFuncA type="table" tableValues="0 0.4"/>
          </feComponentTransfer>
          <feMerge result="effect4_noise_406_2570">
            <feMergeNode in="effect3_innerShadow_406_2570"/>
            <feMergeNode in="color1"/>
          </feMerge>
          <feBlend mode="normal" in="effect4_noise_406_2570" in2="effect1_dropShadow_406_2570" result="effect4_noise_406_2570"/>
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
</style>