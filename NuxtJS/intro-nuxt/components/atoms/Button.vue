<template>
  <button :class="className">
    <slot></slot>
  </button>
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
button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
