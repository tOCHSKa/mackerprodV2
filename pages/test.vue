<script setup>
import { ref } from 'vue'
import { useAdminStore } from '~/store/adminStore'

const users = ref([])
const error = ref(null)
const adminStore = useAdminStore()
adminStore.initializeStore()
async function fetchUsers () {
  try {
    const { data, error: fetchError } = await useFetch('/api/admin/all', {
      headers: {
        Authorization: `Bearer ${adminStore.token}` // ✅ IMPORTANT
      }
    })

    if (fetchError.value) {
      error.value = fetchError.value
    } else {
      users.value = data.value
    }
  } catch (err) {
    error.value = err
  }
}
</script>

<template>
  <div>
    <h1>Liste des utilisateurs</h1>
    <button @click="fetchUsers">Rafraîchir</button>
    <ul >
        <li v-for="(user, index) in users" :key="index">{{ user.email }}</li>
    </ul>
  </div>
</template>
