<script setup>
const {data:questions} = await useFetch('http://localhost:8000/questions',{method: 'GET'})
</script>

<template>
  <div>
    <h1 text-4xl>質問一覧</h1>
    <ul v-if="questions">
      <li v-for="(question, key) in questions" :key="key">{{ question }}</li>
    </ul>
  </div>
</template>