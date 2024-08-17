<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getCurrentLocalTime } from '../utils/time'

const currentTime = ref(getCurrentLocalTime())

onMounted(() => {
  const interval = setInterval(() => {
    currentTime.value = getCurrentLocalTime()
  }, 1000)

  onBeforeUnmount(() => {
    clearInterval(interval)
  })
})
</script>

<template>
  <header class="mb-10">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/events">Events</NuxtLink>
      </li>
      <li>
        <span>{{ currentTime }}</span>
      </li>
    </ul>
  </header>
</template>
