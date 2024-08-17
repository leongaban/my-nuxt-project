<script setup>
const nuxt = useNuxtApp();
const route = useRoute();
console.log(nuxt);
</script>

<template>
  <h1>Event id: {{  $route.params.id }}</h1>
</template>
