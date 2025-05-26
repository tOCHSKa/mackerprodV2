<template>
  <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button class="filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer active" data-filter="all">Tous les projets</button>
                <button class="filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer" data-filter="clip">Clips musicaux</button>
                <button class="filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer" data-filter="wedding">Mariages</button>
                <button class="filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer" data-filter="corporate">Corporate</button>
                <button class="filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer" data-filter="ad">Publicités</button>
                <button class="filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer" data-filter="event">Événements</button>
            </div>

            <!-- Projects Grid -->
            <div id="all-projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Projet 1 - Clip -->
                <div class="project-card clip" data-category="clip">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="video-thumbnail relative h-64 overflow-hidden" style="background: url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') center/cover;">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">"Rêves Électriques" - DJ Kael</h3>
                                <span class="bg-accent text-white text-xs px-2 py-1 rounded">Clip musical</span>
                            </div>
                            <p class="text-gray-600 mb-4">Clip énergique tourné en boîte de nuit avec des effets lumineux synchronisés sur la musique électro.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">2023</span>
                                <button class="text-accent hover:underline view-details" data-project="1">Voir les détails</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 2 - Mariage -->
                <div class="project-card wedding" data-category="wedding">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="video-thumbnail relative h-64 overflow-hidden" style="background: url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80') center/cover;">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">Mariage - Sophie & Thomas</h3>
                                <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded">Mariage</span>
                            </div>
                            <p class="text-gray-600 mb-4">Film de mariage émouvant capturé au Château de Chambord, avec des moments intimes et naturels.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">2023</span>
                                <button class="text-accent hover:underline view-details" data-project="2">Voir les détails</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 3 - Corporate -->
                <div class="project-card corporate" data-category="corporate">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="video-thumbnail relative h-64 overflow-hidden" style="background: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') center/cover;">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">Innovatech Solutions</h3>
                                <span class="bg-green-500 text-white text-xs px-2 py-1 rounded">Corporate</span>
                            </div>
                            <p class="text-gray-600 mb-4">Vidéo institutionnelle présentant les innovations technologiques de cette entreprise leader.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">2023</span>
                                <button class="text-accent hover:underline view-details" data-project="3">Voir les détails</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 4 - Publicité -->
                <div class="project-card ad">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="relative h-64 overflow-hidden">
                            <iframe :src="videos[2].chemin_lien" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">{{ videos[2].titre }}</h3>
                                <span class="bg-purple-500 text-white text-xs px-2 py-1 rounded">{{ videos[2].theme }}</span>
                            </div>
                            <p class="text-gray-600 mb-4">{{ videos[2].description }}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">{{ videos[2].created_at.slice(0, 10) }}</span>
                                <button class="text-accent hover:underline view-details">Voir sur YouTube</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 5 - Événement -->
                <div class="project-card event">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="relative h-64 overflow-hidden">
                            <iframe :src="videos[0].chemin_lien" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">{{ videos[0].titre }}</h3>
                                <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded">{{ videos[0].theme }}</span>
                            </div>
                            <p class="text-gray-600 mb-4"> {{ videos[0].description }}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">{{ videos[0].created_at.slice(0, 10) }}</span>
                                <button class="text-accent hover:underline view-details">Voir sur YouTube</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 6 - Clip -->
                <div class="project-card clip">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="relative h-64 overflow-hidden">
                            <iframe :src="videos[1].chemin_lien" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">{{ videos[1].titre }}</h3>
                                <span class="bg-accent text-white text-xs px-2 py-1 rounded">{{ videos[1].theme }}</span>
                            </div>
                            <p class="text-gray-600 mb-4">{{ videos[1].description }}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">{{ videos[1].created_at.slice(0, 10) }}</span>
                                <button class="text-accent hover:underline view-details">Voir sur YouTube</button>
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

</script>

<style scoped>
    .project-card {
        transition: all 0.3s ease;
    }
    
    .video-thumbnail {
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
    .video-thumbnail::after {
            content: "▶";
            position: absolute;
            background: #941E28;
            width: 4rem;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 3rem;
            transition: all 0.3s ease;
    }
    .video-thumbnail:hover::after {
        transform: translate(-50%, -50%) scale(1.2);
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