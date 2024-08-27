<script setup>
const config = useRuntimeConfig()
const { data:questions } = await useFetch('questions/',{method: 'GET',baseURL: config.public.apiUrl,})
</script>

<template>
  <div>
    <h1 text-4xl>質問一覧</h1>
    <ul>
      <li v-for="(question, key) in questions" :key="key">{{ question }}</li>
    </ul>
  </div>
</template>