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
                    Annuler
                </button>
                <button class="btn btn-primary">
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
                        <div class="file-upload" id="fileUploadArea">
                            <div class="file-upload-icon">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div class="file-upload-text">
                                <p>Glissez-déposez votre image ici</p>
                                <p class="file-upload-hint">ou cliquez pour parcourir vos fichiers</p>
                            </div>
                            <input type="file" id="imageUpload" accept="image/*">
                        </div>
                        <div class="preview-container" id="previewContainer">
                            <img id="previewImage" class="preview-image" src="" alt="Aperçu de l'image">
                            <div class="remove-image" id="removeImage">
                                <i class="fas fa-trash mr-1"></i> Supprimer l'image
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="photoTitle" class="form-label">Titre de la photo</label>
                        <input type="text" id="photoTitle" class="form-control" placeholder="Donnez un titre à votre photo">
                    </div>
                </div>

                <!-- Colonne droite - Album et description -->
                <div>
                    <div class="form-group">
                        <label class="form-label">Album</label>
                        <select class="form-control" id="albumSelect">
                            <option value="">Sélectionnez un album</option>
                            <option value="1">Vacances 2023</option>
                            <option value="2">Famille</option>
                            <option value="3">Nature</option>
                            <option value="4">Voyages</option>
                            <option value="5">Événements</option>
                        </select>
                        <div class="album-select" id="albumTags">
                            <!-- Les tags d'album seront ajoutés ici dynamiquement -->
                        </div>
                        <div class="mt-2">
                            <span class="add-album" id="addAlbumBtn">
                                <i class="fas fa-plus-circle mr-1"></i> Créer un nouvel album
                            </span>
                            <input type="text" class="form-control new-album-input" id="newAlbumInput" placeholder="Nom de l'album">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="photoDescription" class="form-label">Description</label>
                        <textarea id="photoDescription" class="form-control textarea" placeholder="Ajoutez une description à votre photo..."></textarea>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Visibilité</label>
                        <div class="flex flex-col space-y-2">
                            <label class="inline-flex items-center">
                                <input type="radio" name="visibility" class="form-radio text-indigo-600" checked>
                                <span class="ml-2">Public</span>
                            </label>
                            <label class="inline-flex items-center">
                                <input type="radio" name="visibility" class="form-radio text-indigo-600">
                                <span class="ml-2">Privé</span>
                            </label>
                            <label class="inline-flex items-center">
                                <input type="radio" name="visibility" class="form-radio text-indigo-600">
                                <span class="ml-2">Uniquement pour les amis</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})
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