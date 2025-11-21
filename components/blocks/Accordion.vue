<template>
  <div class="accordion-item flex lg:flex-row flex-col">
    <div class="accordion-trigger">
      <button @click="accordionItem.isOpen = !accordionItem.isOpen">
        <slot name="accordionTitle"></slot>
      </button>
    </div>
    <div class="accordion-content max-lg:flex max-lg:h-full">
      <slot name="accordionContent"></slot>
    </div>
  </div>
</template>

<script setup>
  

</script>