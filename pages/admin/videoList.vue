<template>
  <div class="main-content">
        <div class="page-header">
            <div class="page-title">
                <h1>Liste des vidéos</h1>
                <p>Gérez toutes vos vidéos YouTube en un seul endroit</p>
            </div>
            <div>
                <button class="btn btn-primary">
                    <i class="fas fa-plus mr-2"></i>
                    <NuxtLink to="/admin/addVideo">Ajouter une vidéo</NuxtLink>
                </button>
            </div>
        </div>

        <div class="card">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div class="relative w-full md:w-96">
                    <input type="text" placeholder="Rechercher des vidéos..." class="form-control search-input">
                </div>
                
                <div class="flex flex-col sm:flex-row gap-3">
                    <select class="form-control w-full sm:w-auto">
                        <option>Toutes les catégories</option>
                        <option>Éducation</option>
                        <option>Divertissement</option>
                        <option>Musique</option>
                        <option>Sports</option>
                        <option>Technologie</option>
                    </select>
                    
                    <select class="form-control w-full sm:w-auto">
                        <option>Tous les statuts</option>
                        <option>Publié</option>
                        <option>Brouillon</option>
                        <option>Archivé</option>
                    </select>
                    
                    <select class="form-control w-full sm:w-auto">
                        <option>Trier par: Date récente</option>
                        <option>Trier par: Date ancienne</option>
                        <option>Trier par: Vues</option>
                        <option>Trier par: Durée</option>
                    </select>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vidéo</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visibilité</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vues</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(video, index) in videos" :key="video.id_video">
                            <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 w-32">
                                    <div class="video-thumbnail">
                                        <img :src="`https://img.youtube.com/vi/${video.miniature}/default.jpg`" alt="Miniature vidéo">
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">{{ video.titre }}</div>
                                    <div class="text-sm text-gray-500">{{ video.theme }}</div>
                                </div>
                            </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span v-if="video.isVisible" class="status active">Publié</span>
                                <span v-else class="status inactive">Privé</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="text-sm text-gray-900">124,568</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="text-sm text-gray-900">{{ video.created_at.slice(0, 10) }}</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="dropdown">
                                    <button class="text-gray-400 hover:text-gray-600">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-content">
                                        <a href="#" class="dropdown-item"><i class="fas fa-eye mr-2"></i>Voir</a>
                                        <a href="#" class="dropdown-item"><i class="fas fa-edit mr-2"></i>Modifier</a>
                                        <a href="#" class="dropdown-item"><i class="fas fa-chart-bar mr-2"></i>Statistiques</a>
                                        <a href="#" class="dropdown-item text-red-500"><i class="fas fa-trash mr-2"></i>Supprimer</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="pagination">
                <button class="pagination-btn">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="pagination-btn active">1</button>
                <button class="pagination-btn">2</button>
                <button class="pagination-btn">3</button>
                <button class="pagination-btn">4</button>
                <button class="pagination-btn">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>
definePageMeta({
  layout: 'admin'
})
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
            box-shadow: var(--shadow-sm);
            margin-bottom: var(--spacing-lg);
        }

        .video-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid var(--border-color);
        }

        .video-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .video-thumbnail {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            background-color: #000;
            border-radius: var(--border-radius);
            overflow: hidden;
        }

        .video-thumbnail img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .video-duration {
            position: absolute;
            bottom: 0.5rem;
            right: 0.5rem;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: var(--border-radius);
            font-size: 0.75rem;
        }

        .video-views {
            font-size: 0.875rem;
            color: #6b7280;
        }

        .video-date {
            font-size: 0.75rem;
            color: #9ca3af;
        }

        .status {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 500;
        }

        .status.active {
            background-color: rgba(16, 185, 129, 0.1);
            color: var(--success-color);
        }

        .status.inactive {
            background-color: rgba(239, 68, 68, 0.1);
            color: var(--danger-color);
        }

        .status.pending {
            background-color: rgba(245, 158, 11, 0.1);
            color: var(--warning-color);
        }

        .pagination {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: var(--spacing-lg);
        }

        .pagination-btn {
            width: 2.5rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background-color: white;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .pagination-btn:hover {
            background-color: var(--border-color);
        }

        .pagination-btn.active {
            background-color: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            right: 0;
            background-color: white;
            min-width: 160px;
            box-shadow: var(--shadow-md);
            z-index: 1;
            border-radius: var(--border-radius);
            overflow: hidden;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown-item {
            padding: 0.5rem 1rem;
            display: block;
            color: var(--text-color);
            text-decoration: none;
            transition: background-color 0.2s ease;
        }

        .dropdown-item:hover {
            background-color: var(--border-color);
        }

        .search-input {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='%239CA3AF'%3E%3Cpath fill-rule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clip-rule='evenodd' /%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: 0.75rem center;
            background-size: 1rem;
            padding-left: 2.5rem;
        }
</style>