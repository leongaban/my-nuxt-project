<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getCurrentLocalTime } from '../utils/time'

const currentTime = ref('')

let interval

onMounted(() => {
  currentTime.value = getCurrentLocalTime()
  interval = setInterval(() => {
    currentTime.value = getCurrentLocalTime()
  }, 1000)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <header class="mb-10">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </li>
      <li>
        <ClientOnly>
          <span>{{ currentTime }}</span>
        </ClientOnly>
      </li>
    </ul>
  </header>
</template>
