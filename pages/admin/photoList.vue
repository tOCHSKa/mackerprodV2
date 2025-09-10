<template>
  <div class="main-content">
        <div class="page-header">
            <div class="page-title">
                <h1>Mes Albums et Photos</h1>
                <p>Consultez et gérez votre collection de photos</p>
            </div>
            <div>
                <button class="btn btn-primary">
                    <i class="fas fa-plus mr-2"></i>
                    <NuxtLink to="/admin/addPhoto">Ajouter une photo</NuxtLink>
                </button>
            </div>
        </div>
        <div class="search-bar">
            <input type="text" class="search-input" placeholder="Rechercher des photos...">
            <button class="search-btn">
                <i class="fas fa-search"></i>
            </button>
            <div class="filter-dropdown">
                <button class="filter-btn" id="filterBtn">
                    <i class="fas fa-filter"></i>
                    Filtrer
                </button>
                <div class="filter-menu" id="filterMenu">
                    <div class="filter-option">Toutes</div>
                    <div class="filter-option">Récentes</div>
                    <div class="filter-option">Plus anciennes</div>
                    <div class="filter-option">Populaires</div>
                </div>
            </div>
            <div class="view-toggle">
                <button class="view-btn active" data-view="grid">
                    <i class="fas fa-th-large"></i>
                </button>
                <button class="view-btn" data-view="list">
                    <i class="fas fa-list"></i>
                </button>
            </div>
        </div>

        <!-- Vue Albums -->
        <div id="albumsView">
            <h2 class="text-xl font-semibold mb-4">Mes Albums</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <!-- Album 1 -->
                <div v-for="(album, index) in albums" :key="index">
                    <div class="album-card p-4">
                    <img src="https://source.unsplash.com/random/300x200/?nature" alt="Nature" class="album-cover">
                    <div class="album-info">
                        <h3 class="album-title">{{ album.titre }}</h3>
                        <p class="album-photo-count">Créé le {{ new Date(album.created_at).toLocaleDateString('fr-FR') }} </p>

                    </div>
                </div>
                </div>
                
                <!-- Bouton pour créer un nouvel album -->
                <!-- Bouton "Créer un album" -->
                <div 
                class="album-card flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                @click="showModal = true"
                >
                <div class="text-center p-4">
                    <i class="fas fa-plus-circle text-4xl text-gray-400 mb-2"></i>
                    <h3 class="text-gray-600 font-medium">Créer un album</h3>
                </div>
                </div>

                <!-- Modal Création Album -->
                <div v-if="showModal" class="fixed inset-0  flex items-center justify-center z-50">
                <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                    <h2 class="text-xl font-semibold mb-4">Créer un nouvel album</h2>

                    <!-- Champ titre -->
                    <label class="block text-gray-700">Titre</label>
                    <input v-model="newAlbum.titre" type="text" class="w-full p-2 border rounded mb-4" placeholder="Titre de l'album">

                    <!-- Champ description -->
                    <label class="block text-gray-700">Description</label>
                    <textarea v-model="newAlbum.description" class="w-full p-2 border rounded mb-4" placeholder="Description de l'album"></textarea>

                    <!-- Boutons -->
                    <div class="flex justify-end space-x-2">
                    <button @click="showModal = false" class="cursor-pointer px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Annuler</button>
                    <button @click="createAlbum" class="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Créer</button>
                    </div>
                </div>
                </div>


            </div>
        </div>

        <!-- Vue Photos -->
        <div id="photosView" class="mt-8">
            <h2 class="text-xl font-semibold mb-4">Toutes les photos</h2>
            
            <div class="photo-grid">


            </div>
        </div>

        <!-- Vue Liste (cachée par défaut) -->
        <div id="listView" class="hidden mt-8">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Album</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <!-- Photo 1 -->
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img class="h-10 w-10 rounded-full" src="https://source.unsplash.com/random/100x100/?mountain" alt="">
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">Montagnes enneigées</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-500">Nature</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-500">15 Jan 2023</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div class="flex space-x-2">
                                    <button class="text-indigo-600 hover:text-indigo-900">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-600 hover:text-red-900">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        
                        <!-- Photo 2 -->
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img class="h-10 w-10 rounded-full" src="https://source.unsplash.com/random/100x100/?beach" alt="">
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">Coucher de soleil</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-500">Vacances 2023</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-500">22 Juil 2023</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div class="flex space-x-2">
                                    <button class="text-indigo-600 hover:text-indigo-900">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="text-red-600 hover:text-red-900">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

import { useAdminStore } from '~/store/adminStore'
const albums = ref([])
const error = ref(null)
const adminStore = useAdminStore()
adminStore.initializeStore()

const { data: albumData, error: albumError } = await useAsyncData('albumData', () =>
$fetch('/api/album/getAll', {
    headers: {
    Authorization: `Bearer ${adminStore.token}`
    }
})
)
albums.value = albumData.value || []
error.value = albumError.value || null

const showModal = ref(false)
const newAlbum = reactive({
  titre: '',
  description: ''
})

const createAlbum = async () => {
  try {
    if (!newAlbum.titre.trim()) {
      alert("Le titre est obligatoire")
      return
    }

    const response = await $fetch('/api/album/add', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${adminStore.token}`,
        'Content-Type': 'application/json'
      },
      body: { titre: newAlbum.titre, description: newAlbum.description }
    })

    albums.value.push(response)

    // Reset + fermer modal
    newAlbum.titre = ''
    newAlbum.description = ''
    showModal.value = false

    alert("Album créé ✅")
  } catch (error) {
    console.error('Erreur création album:', error)
    alert("Erreur lors de la création ❌")
  }
}

</script>

<style scoped>
 .main-content {
            padding: var(--spacing-lg);
            background-color: var(--bg-color);
        }

        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-lg);
        }

        .page-title h1 {
            font-size: 1.75rem;
            font-weight: 600;
        }

        .page-title p {
            opacity: 0.7;
            font-size: 0.9rem;
        }

        .btn {
            padding: 0.5rem 1rem;
            border-radius: var(--border-radius);
            border: none;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: var(--spacing-sm);
        }

        .btn-primary {
            background-color: var(--primary-color);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--secondary-color);
        }

        .btn-outline {
            background-color: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-color);
        }

        .btn-outline:hover {
            background-color: var(--border-color);
        }

        .card {
            background-color: var(--card-bg);
            border-radius: var(--border-radius-lg);
            padding: var(--spacing-lg);
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            margin-bottom: var(--spacing-lg);
        }

        .album-card {
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .album-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .album-cover {
            height: 180px;
            width: 100%;
            object-fit: cover;
            border-radius: var(--border-radius);
        }

        .album-info {
            padding: var(--spacing-md) 0;
        }

        .album-title {
            font-weight: 600;
            margin-bottom: var(--spacing-sm);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .album-photo-count {
            color: #6b7280;
            font-size: 0.875rem;
        }

        .photo-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: var(--spacing-lg);
            margin-top: var(--spacing-lg);
        }

        .photo-card {
            border-radius: var(--border-radius);
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
        }

        .photo-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .photo-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .photo-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
            padding: var(--spacing-md);
            color: white;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .photo-card:hover .photo-overlay {
            opacity: 1;
        }

        .photo-title {
            font-weight: 500;
            margin-bottom: var(--spacing-sm);
        }

        .photo-date {
            font-size: 0.75rem;
            opacity: 0.8;
        }

        .photo-actions {
            position: absolute;
            top: var(--spacing-md);
            right: var(--spacing-md);
            display: flex;
            gap: var(--spacing-sm);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .photo-card:hover .photo-actions {
            opacity: 1;
        }

        .action-btn {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-color);
            transition: all 0.2s ease;
        }

        .action-btn:hover {
            background-color: white;
            transform: scale(1.1);
        }

        .tab-container {
            display: flex;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: var(--spacing-lg);
        }

        .tab {
            padding: var(--spacing-md) var(--spacing-lg);
            cursor: pointer;
            position: relative;
            font-weight: 500;
        }

        .tab.active {
            color: var(--primary-color);
        }

        .tab.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: var(--primary-color);
        }

        .empty-state {
            text-align: center;
            padding: var(--spacing-lg) 0;
            color: #6b7280;
        }

        .empty-state-icon {
            font-size: 3rem;
            margin-bottom: var(--spacing-md);
            color: #d1d5db;
        }

        .search-bar {
            display: flex;
            margin-bottom: var(--spacing-lg);
        }

        .search-input {
            flex-grow: 1;
            padding: 0.5rem 1rem;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius) 0 0 var(--border-radius);
            outline: none;
        }

        .search-btn {
            padding: 0.5rem 1rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
            cursor: pointer;
        }

        .filter-dropdown {
            position: relative;
            margin-left: var(--spacing-md);
        }

        .filter-btn {
            padding: 0.5rem 1rem;
            background-color: white;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
        }

        .filter-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background-color: white;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            padding: var(--spacing-md);
            width: 200px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            z-index: 10;
            display: none;
        }

        .filter-menu.show {
            display: block;
        }

        .filter-option {
            padding: var(--spacing-sm) 0;
            cursor: pointer;
        }

        .filter-option:hover {
            color: var(--primary-color);
        }

        .view-toggle {
            display: flex;
            margin-left: var(--spacing-md);
        }

        .view-btn {
            padding: 0.5rem;
            background-color: white;
            border: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .view-btn:first-child {
            border-radius: var(--border-radius) 0 0 var(--border-radius);
        }

        .view-btn:last-child {
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }

        .view-btn.active {
            background-color: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }
</style>