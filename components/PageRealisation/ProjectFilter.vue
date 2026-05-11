```vue
<template>
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-6">
      
      <!-- Boutons de filtre -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          :class="[
            'filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer transition',
            { active: videoFilter === button.value }
          ]"
          @click="setFilter(button.value)"
        >
          {{ button.title }}
        </button>
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
      <div
        v-else
        id="all-projects"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(video, index) in filteredVideos"
          :key="index"
          class="project-card clip"
          data-category="clip"
        >
          <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="relative h-64 overflow-hidden bg-black">
              <!-- MINIATURE -->
              <div
                v-if="!video._play"
                class="absolute inset-0 cursor-pointer group"
                @click="video._play = true"
              >
                <img
                  :src="`https://img.youtube.com/vi/${video.miniature}/hqdefault.jpg`"
                  :alt="video.titre"
                  class="w-full h-full object-cover"
                />

                <!-- BOUTON PLAY -->
                <div
                  class="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      class="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center
                            group-hover:scale-105 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 3.993v8.014L11.5 8 6 3.993z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- IFRAME -->
                <iframe
                  v-else
                  :src="`${video.chemin_lien}?autoplay=1`"
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
                <span class="text-sm text-accent font-medium">
                  {{ video.created_at.slice(0, 10) }}
                </span>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// --- ROUTE & FILTRE ---
const route = useRoute()
const router = useRouter()
const videoFilter = ref('all')

// --- DONNÉES VIDÉOS ---
const { data: videos, pending, error } = await useAsyncData('videos', () =>
  $fetch('/api/video/getAll')
)

// --- ÉTAT LOCAL DES VIDÉOS (play / pause) ---
const videosWithState = ref([])

// Initialisation quand les vidéos arrivent
watch(
  videos,
  (newVideos) => {
    if (!newVideos) return

    videosWithState.value = newVideos.map(video => ({
      ...video,
      _play: false
    }))
  },
  { immediate: true }
)

// --- LISTE DES BOUTONS ---
const buttons = [
  { title: 'Tous les projets', value: 'all' },
  { title: 'Corporate', value: 'corporate' },
  { title: 'Mariage', value: 'duo' },
  { title: 'Immobilier', value: 'immobilier' }
]

// --- FILTRAGE ---
const filteredVideos = computed(() => {
  const filtered = videosWithState.value.filter(
    video => videoFilter.value === 'all' || video.theme === videoFilter.value
  )
  console.log("videos après filtre :", filtered.length)
  return filtered
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // tri du plus récent
})

// --- RESET DES VIDÉOS AU CHANGEMENT DE FILTRE ---
watch(videoFilter, () => {
  videosWithState.value.forEach(video => {
    video._play = false
  })
})

// --- INIT FILTRE VIA URL ---
onMounted(() => {
  const initialFilter = route.query.filter || 'all'
  if (buttons.some(btn => btn.value === initialFilter)) {
    videoFilter.value = initialFilter
  }
})

// --- CHANGEMENT DE FILTRE ---
function setFilter(value) {
  videoFilter.value = value
  router.push({
    query: { ...route.query, filter: value }
  })
}

// --- SYNC SI URL CHANGE MANUELLEMENT ---
watch(
  () => route.query.filter,
  (newVal) => {
    if (newVal && buttons.some(btn => btn.value === newVal)) {
      videoFilter.value = newVal
    }
  }
)
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
.text-accent {
  color: #941E28;
}
.bg-accent {
  background-color: #941E28;
}
</style>

