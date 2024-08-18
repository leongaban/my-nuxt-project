<template>
  <div>
    <h1>Crypto Coins</h1>

    <!-- SSR Component -->
    <SSRCryptoList />

    <!-- Client-Only Component -->
    <!-- <ClientOnly>
      <Suspense>
        <ClientOnlyCryptoList />
        <template #fallback>
          <p>Loading client-side component...</p>
        </template>
      </Suspense>
    </ClientOnly> -->
  </div>
</template>

<script setup lang="ts">
import SSRCryptoList from '@/components/SSRCryptoList.vue'
// import ClientOnlyCryptoList from '@/components/ClientOnlyCryptoList.vue'
const ClientOnlyCryptoList = defineAsyncComponent(
  () => import('@/components/ClientOnlyCryptoList.vue')
)
</script>
