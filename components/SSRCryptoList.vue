<template>
  <div>
    <h1 class="text-4xl text-green-400">SSR Crypto List</h1>
    <ul v-if="coins">
      <li v-for="coin in coins" :key="coin.symbol">
        {{ coin.name }} ({{ coin.symbol }}): ${{ coin.price }}
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { fetchCryptoCoins } from '@/services/api'

const { data: coins } = await useAsyncData('ssrCryptoCoins', () => fetchCryptoCoins())
</script>
