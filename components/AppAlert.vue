<template>
  <span class="alert rounded">
    <slot />
  </span>
</template>

<style scoped>
.alert {
  background-color: #f44336;
  color: white;
  padding: 15px;
  margin-bottom: 20px;
}
</style>