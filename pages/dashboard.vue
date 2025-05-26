<script setup>
import { onMounted } from 'vue'
import { useDevisStore } from '~/store/devisStore'

const devisStore = useDevisStore()

onMounted(() => {
  devisStore.fetchCount()
})
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <div class="bg-white shadow p-4 rounded-xl">
      <h2 class="text-lg font-semibold">Nombre de devis</h2>
      <p class="text-3xl mt-2 text-blue-600">
        <span v-if="devisStore.loading">Chargement...</span>
        <span v-else>{{ devisStore.count }}</span>
      </p>
      <p v-if="devisStore.error" class="text-red-500">{{ devisStore.error }}</p>
    </div>
  </div>
</template>