<template>
    <div class="main-content">
      <div class="page-header">
        <div class="page-title">
          <h1>Ajouter une photo</h1>
          <p>Remplissez les détails de votre nouvelle photo</p>
        </div>
        <div>
          <button class="btn btn-outline mr-2">
            <i class="fas fa-times mr-2"></i>
            <NuxtLink to="/admin/photoList">Annuler</NuxtLink>
          </button>
          <button class="btn btn-primary" @click="enregistrerPhoto">
            <i class="fas fa-save mr-2"></i>
            Enregistrer
          </button>
        </div>
      </div>
  
      <div class="card">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Colonne gauche - Upload de l'image -->
          <div>
            <div class="form-group">
              <label class="form-label">Image</label>
  
              <div 
                class="file-upload relative cursor-pointer overflow-hidden rounded-lg border border-dashed border-gray-400 h-48 flex items-center justify-center"
                @click="triggerFileInput"
              >
                <!-- Preview si image choisie -->
                <img 
                  v-if="previewImage" 
                  :src="previewImage" 
                  alt="Aperçu" 
                  class="object-cover w-full h-full absolute inset-0"
                />
  
                <!-- Overlay hover pour changer l’image -->
                <div 
                  v-if="previewImage" 
                  class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition"
                >
                  <span>Changer l'image</span>
                </div>
  
                <!-- Icône si pas d’image -->
                <div v-else class="text-center">
                  <i class="fas fa-cloud-upload-alt text-3xl mb-2"></i>
                  <p>Glissez-déposez votre image ici</p>
                  <p class="file-upload-hint text-gray-500 text-sm">ou cliquez pour parcourir vos fichiers</p>
                </div>
  
                <!-- Input caché -->
                <input 
                  type="file" 
                  ref="fileInput" 
                  accept="image/*" 
                  class="hidden" 
                  @change="handleFileUpload"
                />
              </div>
  
              <!-- Bouton supprimer -->
              <div 
                v-if="previewImage" 
                class="remove-image mt-2 text-red-500 cursor-pointer flex items-center"
                @click.stop="removeImage"
              >
                <i class="fas fa-trash mr-1"></i> Supprimer l'image
              </div>
            </div>
  
            <div class="form-group">
              <label for="photoTitle" class="form-label">Titre de la photo</label>
              <input 
                type="text" 
                v-model="photoTitle" 
                id="photoTitle" 
                class="form-control" 
                placeholder="Donnez un titre à votre photo"
              >
            </div>
          </div>
  
          <!-- Colonne droite - Album et description -->
          <div>
            <div class="form-group">
              <label class="form-label">Album</label>
              <select 
                v-model="selectedAlbum" 
                class="form-control" 
                id="albumSelect"
              >
                <option value="">Sélectionnez un album</option>
                <option 
                  v-for="album in albums" 
                  :key="album.id_albums" 
                  :value="album.id_albums"
                >
                {{ album.titre }} - {{ album.id_albums }}
                </option>
              </select>
            </div>
  
            <div class="form-group">
              <label for="photoDescription" class="form-label">Description</label>
              <textarea 
                v-model="photoDescription" 
                id="photoDescription" 
                class="form-control textarea" 
                placeholder="Ajoutez une description à votre photo..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAdminStore } from '~/store/adminStore'
  
  definePageMeta({
    layout: 'admin'
  })
  
  const fileInput = ref(null)
  const previewImage = ref(null)
  const photoFile = ref(null)
  const photoTitle = ref('')
  const photoDescription = ref('')
  const selectedAlbum = ref('')
  const albums = ref([])
  const adminStore = useAdminStore()
  
  adminStore.initializeStore()
  
  // Chargement dynamique des albums
  const { data: albumData, error: albumError } = await useAsyncData('albumData', () =>
    $fetch('/api/album/getAll', {
      headers: {
        Authorization: `Bearer ${adminStore.token}`
      }
    })
  )
  
  albums.value = albumData.value || []
  
  const triggerFileInput = () => {
    fileInput.value.click()
  }
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      photoFile.value = file
      previewImage.value = URL.createObjectURL(file)
    }
  }
  
  const removeImage = () => {
    previewImage.value = null
    photoFile.value = null
    fileInput.value.value = ''
  }
  
  const enregistrerPhoto = async () => {
  if (!photoFile.value || !selectedAlbum.value) {
    alert('Veuillez sélectionner une image et un album.')
    return
  }

  const formData = new FormData()
  formData.append('photo', photoFile.value)
  formData.append('titre', photoTitle.value)
  formData.append('id_albums', Number(selectedAlbum.value))

  try {
    await $fetch('/api/photo/add', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${adminStore.token}`
      }
    })
    alert('Photo ajoutée avec succès !')
    setTimeout(() => {
      // Par exemple avec Vue Router
      navigateTo('/admin/photoList')
    }, 3000) // 3000 ms = 3 secondes

  } catch (error) {
    console.error(error)
    alert('Erreur lors de l’ajout de la photo.')
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

        .form-group {
            margin-bottom: var(--spacing-lg);
        }

        .form-label {
            display: block;
            margin-bottom: var(--spacing-sm);
            font-weight: 500;
        }

        .form-control {
            display: block;
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

        .textarea {
            min-height: 120px;
            resize: vertical;
        }

        .file-upload {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: var(--spacing-lg);
            border: 2px dashed var(--border-color);
            border-radius: var(--border-radius);
            background-color: #f8fafc;
            transition: all 0.3s ease;
        }

        .file-upload:hover {
            border-color: var(--primary-color);
            background-color: rgba(79, 70, 229, 0.05);
        }

        .file-upload.active {
            border-color: var(--primary-color);
            background-color: rgba(79, 70, 229, 0.05);
        }

        .file-upload input[type="file"] {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }

        .file-upload-icon {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: var(--spacing-md);
        }

        .file-upload-text {
            text-align: center;
            margin-bottom: var(--spacing-sm);
        }

        .file-upload-hint {
            font-size: 0.875rem;
            color: #6b7280;
        }

        .preview-container {
            display: none;
            margin-top: var(--spacing-md);
            text-align: center;
        }

        .preview-image {
            max-width: 100%;
            max-height: 300px;
            border-radius: var(--border-radius);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .remove-image {
            margin-top: var(--spacing-sm);
            color: #ef4444;
            cursor: pointer;
            font-size: 0.875rem;
        }

        .album-select {
            display: flex;
            flex-wrap: wrap;
            gap: var(--spacing-sm);
            margin-top: var(--spacing-sm);
        }

        .album-tag {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            background-color: #e0e7ff;
            color: var(--primary-color);
            border-radius: 20px;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .album-tag:hover {
            background-color: #c7d2fe;
        }

        .album-tag.selected {
            background-color: var(--primary-color);
            color: white;
        }

        .album-tag .remove-tag {
            margin-left: 0.5rem;
            font-size: 0.75rem;
        }

        .add-album {
            display: inline-flex;
            align-items: center;
            color: var(--primary-color);
            font-size: 0.875rem;
            cursor: pointer;
        }

        .new-album-input {
            display: none;
            width: 150px;
        }
</style>