<template>
  <div class="main-content">
        <div class="page-header">
            <div class="page-title">
                <h1>Ajouter une vidéo</h1>
                <p>Remplissez les détails de votre nouvelle vidéo YouTube</p>
            </div>
            <div>
                <button class="btn btn-outline mr-2">
                    <i class="fas fa-arrow-left mr-2"></i>
                    <NuxtLink to="/admin/videoList">Retour</NuxtLink>
                </button>
                <button @click="submitForm" class="btn btn-primary" id="submit-btn">
                    <i class="fas fa-save mr-2"></i>
                    Enregistrer
                </button>
            </div>
        </div>

        <div class="card">
            <form id="video-form">
                <div class="grid-cols-2">
                    <div class="form-group">
                        <label for="title" class="form-label">Titre de la vidéo</label>
                        <input v-model="video.titre" type="text" id="title" class="form-control" placeholder="Entrez le titre de la vidéo" required>
                    </div>

                    <div class="form-group">
                        <label for="category" class="form-label">Thème</label>
                        <select v-model="video.theme" id="category" class="form-control" required>
                            <option value="">Sélectionnez un thème</option>
                            <option value="event">Événement</option>
                            <option value="duo">Duo</option>
                            <option value="immobilier">Immobilier</option>
                            <option value="corporate">Corporate</option>
                            <option value="drone">Drone</option>
                            <option value="montage">Montage</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="description" class="form-label">Description</label>
                    <textarea v-model="video.description" id="description" class="form-control form-textarea" placeholder="Décrivez le contenu de votre vidéo"></textarea>
                </div>

                <div class="form-group">
                    <label for="youtube-url" class="form-label">Lien YouTube</label>
                    <input v-model="video.chemin_lien" type="url" id="youtube-url" class="form-control" placeholder="https://www.youtube.com/watch?v=..." required>
                    <small class="text-gray-500">Collez l'URL complète de la vidéo YouTube</small>
                    <div id="youtube-preview-container" class="youtube-preview hidden"></div>
                </div>

                <div class="grid-cols-2">
                    <div class="form-group">
                        <label for="visibility" class="form-label">Visibilité</label>
                        <select v-model="video.isVisible" id="visibility" class="form-control" required>
                            <option value="public">Public</option>
                            <option value="private">Privé</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
})
import { useAdminStore } from '~/store/adminStore'
const adminStore = useAdminStore()
adminStore.initializeStore()
const video = reactive({
    titre: '',
    theme: '',
    description: '',
    chemin_lien: '',
    isVisible: 'public',
})

const formatedVideo = computed(() => {
    let isVisible = video.isVisible === 'public' ? true : false;
    let chemin_lien = video.chemin_lien.split('v=')[1];
    return {
        titre: video.titre,
        theme: video.theme,
        description: video.description,
        chemin_lien: `https://www.youtube.com/embed/${chemin_lien}`,
        isVisible: isVisible,
    }
})

const submitForm = async () => {
    const response = await $fetch('/api/video/add', {
        method: 'POST',
        body: formatedVideo.value,
        headers: {
            Authorization: `Bearer ${adminStore.token}`
        }
    })
    if(response.message === 'Vidéo créée') {
        await navigateTo('/admin/videoList')
    } else {
        video.value = {
            titre: '',
            theme: '',
            description: '',
            chemin_lien: '',
            isVisible: 'public',
        }
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
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: var(--spacing-lg);
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
        }

        .form-group {
            margin-bottom: var(--spacing-lg);
        }

        .form-label {
            display: block;
            margin-bottom: var(--spacing-sm);
            font-weight: 500;
        }

        .form-control {
            width: 100%;
            padding: 0.5rem 0.75rem;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            transition: border-color 0.2s ease;
        }

        .form-control:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .form-textarea {
            min-height: 120px;
            resize: vertical;
        }

        .youtube-preview {
            margin-top: var(--spacing-lg);
            border-radius: var(--border-radius);
            overflow: hidden;
            max-width: 560px;
            position: relative;
        }

        .youtube-preview iframe {
            width: 100%;
            height: 315px;
            border: none;
        }

        .youtube-preview .preview-remove {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
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

        .grid-cols-2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: var(--spacing-lg);
        }

        @media (max-width: 768px) {
            .grid-cols-2 {
                grid-template-columns: 1fr;
            }
        }
</style>