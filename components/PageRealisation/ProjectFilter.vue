<template>
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-6">
        
        <!-- Boutons de filtre -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <div v-for="(button,index) in buttons" :key="index">
            <button 
              class="filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer" 
              @click="videoFilter = button.value"
            >
              {{ button.title }}
            </button>
          </div>
        </div>
  
        <!-- Loader -->
        <div v-if="pending" class="text-center py-12">
          <p class="text-gray-500">Chargement des vidéos...</p>
        </div>
  
        <!-- Erreur -->
        <div v-else-if="error" class="text-center py-12 text-red-500">
          Erreur : {{ error.message }}
        </div>
  
        <!-- Grille des vidéos -->
        <div v-else id="all-projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(video,index) in (videos || []).filter(video => videoFilter === 'all' || video.theme === videoFilter).slice(0, 6)" 
            :key="index"
          >
            <div class="project-card clip" data-category="clip">
              <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <div class="relative h-64 overflow-hidden">
                  <iframe 
                    :src="video.chemin_lien" 
                    class="absolute inset-0 w-full h-full" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="p-6">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold">{{ video.titre }}</h3>
                  </div>
                  <div class="min-h-[100px]">
                    <p class="text-gray-600 mb-4">{{ video.description }}</p>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-accent font-medium">{{ video.created_at.slice(0, 10) }}</span>
                    <NuxtLink 
                      :to="`https://www.youtube.com/watch?v=${video.miniature}`" 
                      target="_blank" 
                      class="cursor-pointer text-accent hover:underline"
                    >
                      Voir les détails
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Bouton contact -->
        <div class="text-center mt-12">
          <NuxtLink 
            to="/#contact" 
            class="inline-block border-2 border-[#941E28] text-[#941E28] hover:border-[#941E28] hover:bg-[#941E28] hover:text-white px-6 py-3
                   rounded-full font-medium transition duration-300 ease-in-out"
          >
            Discuter d'un projet
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useAdminStore } from '~/store/adminStore'
  
  const adminStore = useAdminStore()
  adminStore.initializeStore()
  
  const videoFilter = ref('all')
  
  const { data: videos, pending, error } = await useAsyncData('videos', () =>
    $fetch('/api/video/getAll', {
      headers: { Authorization: `Bearer ${adminStore.token}` }
    })
  )
  
  const buttons = [ { title: 'Tous les projets', value: 'all' }, { title: 'Corporate', value: 'corporate' }, { title: 'Duo', value: 'duo' }, { title: 'Événements', value: 'evenement' }, { title: 'Immobilier', value: 'immobilier' } ]
  </script>
  

<style scoped>
    .project-card {
        transition: all 0.3s ease;
    }
    .filter-btn {
        transition: all 0.3s ease;
    }
    
    .filter-btn.active {
        background-color: #941E28;
        color: white;
    }

    .modal {
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
    .text-accent {
        color: #941E28;
    }
    .bg-accent {
        background-color: #941E28;
    }
</style>