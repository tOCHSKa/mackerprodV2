<script setup>
const { data, pending, error } = await useFetch('/api/video/add')
</script>

<template>
  <div>
    <h1>About</h1>

    <div v-if="pending">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error.message }}</div>
    <div v-else>
      <h2>Données reçues :</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
