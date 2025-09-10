<template>
  <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <div v-for="(button,index) in buttons" :key="index">
                <button class="filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer" @click="videoFilter = button.value">{{ button.title }}</button>
                </div>
            </div>
            <!-- Projects Grid -->
            <div id="all-projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(video,index) in videos.filter(video => videoFilter === 'all' || video.theme === videoFilter).slice(0, 6)">
                    <div class="project-card clip" data-category="clip">
                        <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div class="relative h-64 overflow-hidden">
                                <iframe :src="video.chemin_lien" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div class="p-6">
                                <div class="flex justify-between items-start mb-2">
                                    <h3 class="text-xl font-bold">{{  video.titre }}</h3>
                                    
                                </div>
                                <div class="min-h-[100px]">
                                    <p class="text-gray-600 mb-4">{{  video.description }}</p>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-accent font-medium">{{ video.created_at.slice(0, 10) }}</span>
                                    <button class="cursor-pointer text-accent hover:underline view-details" data-project="1">
                                        <NuxtLink :to="`https://www.youtube.com/watch?v=${video.miniature}`" target="_blank">Voir les détails</NuxtLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-12">
                <NuxtLink to="/#contact" class="inline-block border-2 border-[#941E28] text-[#941E28] hover:border-[#941E28] hover:bg-[#941E28] hover:text-white px-6 py-3
                 rounded-full font-medium transition duration-300 ease-in-out">Discuter d'un projet</NuxtLink>
            </div>
        </div>
    </section>
        <!-- Project Details Modal -->
        <div id="project-modal" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 hidden opacity-0 invisible">
        <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="relative">
                <button id="close-modal" class="absolute top-4 right-4 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center z-10">
                    <i class="fas fa-times"></i>
                </button>
                
                <!-- Modal content will be injected here by JavaScript -->
                <div id="modal-content" class="p-8">
                    <!-- Content loaded dynamically -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useAdminStore } from '~/store/adminStore'
const videos = ref([])
const videoFilter = ref('all')
const error = ref(null)
const adminStore = useAdminStore()
adminStore.initializeStore()

const { data: videosData, error: videosError } = await useAsyncData('videos', () =>
$fetch('/api/video/getAll', {
    headers: {
    Authorization: `Bearer ${adminStore.token}`
    }
})
)

videos.value = videosData.value || []
error.value = videosError.value || null

const buttons = [
    {
        title: 'Tous les projets',
        value: 'all'
    },
    {
        title: 'Corporate',
        value: 'corporate'
    },
    {
        title: 'Duo',
        value: 'duo'
    },
    {
        title: 'Événements',
        value: 'evenement'
    },
    {
        title: 'Immobilier',
        value: 'immobilier'
    }
]
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