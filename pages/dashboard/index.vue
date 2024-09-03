<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()
const products = ref([
  { id: '1000', wallet: 'rocket', amount: 1, value: 135.88 },
  { id: '1001', wallet: 'main', amount: 1, value: 135.88 }
  // Add more sample data as needed
])

const editProduct = (product) => {
  // Implement edit functionality here
  console.log('Editing product:', product)
}

const addWallet = (type) => {
  // Implement add wallet functionality here
  console.log('Adding new wallet for:', type)
}

onMounted(() => {
  // Set the theme to dark
  nuxtApp.vueApp.config.globalProperties.$primevue.config.ripple = true
  nuxtApp.vueApp.config.globalProperties.$primevue.config.dark = true
})
</script>

<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-800 h-screen p-4">
      <h2 class="text-white text-xl font-bold mb-4">Dashboard</h2>
      <!-- Add sidebar content here -->
    </div>

    <!-- Main content -->
    <div class="flex-1 p-8">
      <div class="card mb-8">
        <h1 class="text-3xl font-bold mb-4">Solana Wallets</h1>
        <DataTable :value="products" tableStyle="min-width: 50rem" class="w-full">
          <Column field="wallet" header="Wallet"></Column>
          <Column field="amount" header="Amount"></Column>
          <Column field="value" header="Value"></Column>
          <Column bodyStyle="text-align:center">
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-text"
                @click="editProduct(slotProps.data)"
              >
                Edit
              </Button>
            </template>
          </Column>
        </DataTable>
        <div class="mt-4 text-right">
          <Button
            icon="pi pi-plus"
            class="p-button-rounded p-button-outlined"
            @click="addWallet('Solana')"
          >
            Add Wallet
          </Button>
        </div>
      </div>

      <div class="card">
        <h1 class="text-3xl font-bold mb-4">APTOS Wallets</h1>
        <DataTable :value="products" tableStyle="min-width: 50rem" class="w-full">
          <Column field="wallet" header="Wallet"></Column>
          <Column field="amount" header="Amount"></Column>
          <Column field="value" header="Value"></Column>
          <Column bodyStyle="text-align:center">
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-text"
                @click="editProduct(slotProps.data)"
              >
                Edit
              </Button>
            </template>
          </Column>
        </DataTable>
        <div class="mt-4 text-right">
          <Button
            icon="pi pi-plus"
            class="p-button-rounded p-button-outlined"
            @click="addWallet('APTOS')"
          >
            Add Wallet
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

/* Add these new styles */
:deep(.p-button) {
  background-color: transparent;
  border-color: #4b5563;
  color: #e2e8f0;
}

:deep(.p-button:hover) {
  background-color: #4b5563;
  border-color: #6b7280;
  color: #f3f4f6;
}

:deep(.p-button .p-button-icon) {
  font-size: 0.875rem;
}

:deep(.p-button .p-button-icon-left) {
  margin-right: 0.25rem;
}
</style>
