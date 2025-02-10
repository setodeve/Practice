<template>
  <div class="card">
    <h2>Welcome</h2>
    <AtomsButton>Click Me</AtomsButton>
  </div>
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
.card {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
