<template>
  <div>
    <div class="temporary-overlay">
      <span>{{ displayText }}</span>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    type: {
      type: String,
      required: true
    }
  })

  const displayText = computed(() => {
    switch (props.type) {
      case 'image':
        return '임시 이미지'
      case 'video':
        return '임시 동영상'
      default:
        return ''
    }
  })
</script>

<style>
  .temporary-overlay {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0,0.4);
  }

  .temporary-overlay span {
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
  }

  .newsroom-section .card-img {
    position: relative;
  }
</style>