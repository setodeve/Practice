<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script setup>
const props = defineProps({
  className: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.header {
  padding: 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ccc;
}
</style>
