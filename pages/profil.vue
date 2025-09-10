<template>
    <Navbar />
    <div class="max-w-5xl mx-auto py-10 px-4 space-y-10 mt-10">
      <!-- Header -->
      <div class="flex items-center justify-between border-b pb-4">
        <h1 class="text-3xl font-bold">Profil</h1>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Modifier</button>
      </div>
  
      <!-- User Info Section -->
      <div class="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h2 class="text-xl font-semibold">Informations Utilisateur</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="text-gray-500">Nom</p>
            <p>{{ user.name }}</p>
          </div>
          <div>
            <p class="text-gray-500">Email</p>
            <p>{{ user.email }}</p>
          </div>
          <div>
            <p class="text-gray-500">Téléphone</p>
            <p>{{ user.phone }}</p>
          </div>
          <div>
            <p class="text-gray-500">Entreprise</p>
            <p>{{ user.company }}</p>
          </div>
        </div>
      </div>
  
      <!-- Devis Section -->
      <!-- <div class="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h2 class="text-xl font-semibold">Mes Devis</h2>
        <ul class="divide-y">
          <li v-for="quote in quotes" :key="quote.id" class="py-2 flex justify-between items-center">
            <span>{{ quote.title }} ({{ quote.date }})</span>
            <a :href="quote.downloadUrl" class="text-blue-600 hover:underline">Télécharger</a>
          </li>
        </ul>
      </div> -->
  
      <!-- Téléchargement Final Section -->
      <div class="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h2 class="text-xl font-semibold">Lien de Téléchargement de la Vidéo Finale</h2>
        <div v-if="user.finalVideoUrl">
          <a :href="user.finalVideoUrl" class="text-green-600 hover:underline">Cliquez ici pour télécharger</a>
        </div>
        <div v-else class="text-gray-400">
          Aucun lien de téléchargement disponible pour l’instant.
        </div>
      </div>
  
      <!-- Autres infos / actions utiles -->
      <div class="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h2 class="text-xl font-semibold">Paramètres et Sécurité</h2>
        <button class="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
          Se déconnecter
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const user = ref({
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    phone: '+33 6 12 34 56 78',
    company: 'Studio JD Films',
    finalVideoUrl: '' // Remplir si dispo
  })
  
  const quotes = ref([
    {
      id: 1,
      title: 'Mariage Château de Loire',
      date: '12/06/2025',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Clip musical Paris',
      date: '01/07/2025',
      downloadUrl: '#'
    }
  ])
  </script>
  
  <style scoped>
  /* Ajoute ici des styles spécifiques si besoin */
  </style>
  