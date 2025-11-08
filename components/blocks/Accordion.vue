<template>
  <div class="accordion-item flex">
    <div class="accordion-trigger">
      <button @click="accordionItem.isOpen = !accordionItem.isOpen">
        <slot name="accordionTitle"></slot>
      </button>
    </div>
    <div class="accordion-content">
      <slot name="accordionContent"></slot>
    </div>
  </div>
</template>

<script setup>
  

</script>