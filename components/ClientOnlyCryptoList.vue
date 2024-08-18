<template>
  <div>
    <h2>Client-Only Crypto List</h2>
    <ul v-if="coins && coins.length">
      <li v-for="coin in coins" :key="coin.symbol">
        {{ coin.name }} ({{ coin.symbol }}): ${{ coin.price }}
      </li>
    </ul>
    <p v-else-if="loading">Loading...</p>
    <p v-else>No coins available.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCryptoCoins } from '@/services/api'

const coins = ref<any[] | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    coins.value = await fetchCryptoCoins()
  } catch (error) {
    console.error('Failed to fetch coins:', error)
  } finally {
    loading.value = false
  }
})
</script>
