<template>
      <div class="container mx-auto px-4 py-8">
        <!-- Header with back button and title -->
        <div class="flex items-center justify-between mb-8">
            <div class="flex items-center space-x-4">
                <NuxtLink to="/admin/userList" class="text-gray-600 hover:text-gray-900">
                    <i class="fas fa-arrow-left text-xl"></i>
                </NuxtLink>
                <h1 class="text-2xl font-bold text-gray-800">Gestion Utilisateur</h1>
            </div>
            <div class="flex space-x-3">
                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                    <i class="fas fa-print mr-2"></i> Imprimer
                </button>
                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <i class="fas fa-save mr-2"></i> Enregistrer
                </button>
            </div>
        </div>

        <!-- User profile card -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div class="md:flex">
                <!-- User avatar and basic info -->
                <div class="md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray-200">
                    <div class="flex flex-col items-center">
                        <div class="relative mb-4">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" class="w-32 h-32 rounded-full object-cover border-4 border-blue-100">
                            <span class="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center">
                                <i class="fas fa-check text-md"></i>
                            </span>
                        </div>
                        <h2 class="text-xl font-bold text-gray-800">Jean Dupont</h2>
                        <p class="text-gray-600 mb-2">Administrateur</p>
                        <span class="status-badge status-active">Actif</span>
                    </div>
                </div>

                <!-- User details -->
                <div class="md:w-2/3 p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Informations Personnelles</h3>
                            <ul class="mt-3 space-y-2">
                                <li class="flex items-center">
                                    <i class="fas fa-envelope text-gray-400 mr-2 w-5"></i>
                                    <span>jean.dupont@example.com</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-phone text-gray-400 mr-2 w-5"></i>
                                    <span>+33 6 12 34 56 78</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-map-marker-alt text-gray-400 mr-2 w-5"></i>
                                    <span>12 Rue de la Paix, Paris</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Détails du Compte</h3>
                            <ul class="mt-3 space-y-2">
                                <li class="flex items-center">
                                    <i class="fas fa-id-card text-gray-400 mr-2 w-5"></i>
                                    <span>ID: #USR-4567</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-calendar-alt text-gray-400 mr-2 w-5"></i>
                                    <span>Créé le: 12/05/2023</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-clock text-gray-400 mr-2 w-5"></i>
                                    <span>Dernière connexion: Aujourd'hui, 09:24</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabs navigation -->
        <div class="border-b border-gray-200 mb-6">
            <nav class="flex space-x-8">
                <button data-tab="profile" class="tab-button py-4 px-1 border-b-2 font-medium text-sm border-blue-500 text-blue-600">
                    <i class="fas fa-user mr-2"></i> Profil
                </button>
                <button data-tab="settings" class="tab-button py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    <i class="fas fa-cog mr-2"></i> Paramètres
                </button>
                <button data-tab="activity" class="tab-button py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    <i class="fas fa-chart-line mr-2"></i> Activité
                </button>
                <button data-tab="security" class="tab-button py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    <i class="fas fa-shield-alt mr-2"></i> Sécurité
                </button>
            </nav>
        </div>

        <!-- Tab content -->
        <div id="profile" class="tab-content active">
            <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div class="p-6">
                    <h2 class="text-lg font-medium text-gray-900 mb-6">Modifier le profil</h2>
                    
                    <form>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="firstname" class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                                <input type="text" id="firstname" value="Jean" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div>
                                <label for="lastname" class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                                <input type="text" id="lastname" value="Dupont" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" value="jean.dupont@example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                                <input type="tel" id="phone" value="+33 6 12 34 56 78" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div class="md:col-span-2">
                                <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                                <input type="text" id="address" value="12 Rue de la Paix, Paris" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div class="md:col-span-2">
                                <label for="bio" class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                <textarea id="bio" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">Administrateur système avec 10 ans d'expérience dans la gestion des utilisateurs et des permissions.</textarea>
                            </div>
                        </div>
                        
                        <div class="mt-8 flex justify-end">
                            <button type="button" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition mr-3">
                                Annuler
                            </button>
                            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Enregistrer les modifications
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div id="settings" class="tab-content">
            <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div class="p-6">
                    <h2 class="text-lg font-medium text-gray-900 mb-6">Paramètres du compte</h2>
                    
                    <div class="space-y-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-base font-medium text-gray-900">Notifications par email</h3>
                                <p class="text-sm text-gray-500">Recevoir des notifications par email pour les activités importantes</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" checked>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-base font-medium text-gray-900">Notifications push</h3>
                                <p class="text-sm text-gray-500">Recevoir des notifications push sur votre appareil</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="text-base font-medium text-gray-900">Mode sombre</h3>
                                <p class="text-sm text-gray-500">Activer le mode sombre pour l'interface</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        
                        <div class="pt-6 border-t border-gray-200">
                            <h3 class="text-base font-medium text-gray-900 mb-3">Langue</h3>
                            <select class="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                <option selected>Français</option>
                                <option>Anglais</option>
                                <option>Espagnol</option>
                                <option>Allemand</option>
                            </select>
                        </div>
                        
                        <div class="pt-6 border-t border-gray-200">
                            <h3 class="text-base font-medium text-gray-900 mb-3">Fuseau horaire</h3>
                            <select class="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                <option selected>(UTC+01:00) Paris</option>
                                <option>(UTC+00:00) Londres</option>
                                <option>(UTC-05:00) New York</option>
                                <option>(UTC+08:00) Pékin</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="activity" class="tab-content">
            <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div class="p-6">
                    <h2 class="text-lg font-medium text-gray-900 mb-6">Activité récente</h2>
                    
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Détails</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Aujourd'hui, 09:24</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Connexion</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Connexion réussie</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.1</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Hier, 18:45</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Modification</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Changement de mot de passe</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.1</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12/05/2023, 14:30</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Création</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Nouvel utilisateur créé</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.2</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10/05/2023, 11:15</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Connexion</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tentative de connexion échouée</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div id="security" class="tab-content">
            <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div class="p-6">
                    <h2 class="text-lg font-medium text-gray-900 mb-6">Sécurité du compte</h2>
                    
                    <div class="space-y-6">
                        <div class="border border-gray-200 rounded-lg p-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-base font-medium text-gray-900">Authentification à deux facteurs</h3>
                                    <p class="text-sm text-gray-500">Ajoutez une couche de sécurité supplémentaire à votre compte</p>
                                </div>
                                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                                    Activer
                                </button>
                            </div>
                        </div>
                        
                        <div class="border border-gray-200 rounded-lg p-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-base font-medium text-gray-900">Sessions actives</h3>
                                    <p class="text-sm text-gray-500">Gérez les appareils connectés à votre compte</p>
                                </div>
                                <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm">
                                    Voir les sessions
                                </button>
                            </div>
                        </div>
                        
                        <div class="border border-gray-200 rounded-lg p-4">
                            <h3 class="text-base font-medium text-gray-900 mb-3">Changer le mot de passe</h3>
                            <form class="space-y-4">
                                <div>
                                    <label for="current-password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe actuel</label>
                                    <div class="relative">
                                        <input type="password" id="current-password" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 pr-10">
                                        <button type="button" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-500">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label for="new-password" class="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
                                    <div class="relative">
                                        <input type="password" id="new-password" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 pr-10">
                                        <button type="button" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-500">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-1">Confirmer le nouveau mot de passe</label>
                                    <div class="relative">
                                        <input type="password" id="confirm-password" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 pr-10">
                                        <button type="button" class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-500">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                        Changer le mot de passe
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                        <div class="border border-red-200 bg-red-50 rounded-lg p-4">
                            <h3 class="text-base font-medium text-red-800 mb-2">Zone dangereuse</h3>
                            <p class="text-sm text-red-700 mb-4">Ces actions sont irréversibles. Soyez certain de vouloir les effectuer.</p>
                            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <div class="mb-2 sm:mb-0">
                                    <h4 class="text-sm font-medium text-red-800">Désactiver le compte</h4>
                                    <p class="text-xs text-red-700">Le compte ne pourra plus être utilisé mais les données seront conservées.</p>
                                </div>
                                <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm whitespace-nowrap">
                                    Désactiver le compte
                                </button>
                            </div>
                            <div class="mt-4 pt-4 border-t border-red-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <div class="mb-2 sm:mb-0">
                                    <h4 class="text-sm font-medium text-red-800">Supprimer le compte</h4>
                                    <p class="text-xs text-red-700">Toutes les données seront définitivement supprimées.</p>
                                </div>
                                <button class="px-4 py-2 bg-white text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition text-sm whitespace-nowrap">
                                    Supprimer le compte
                                </button>
                            </div>
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

        .dropdown-menu {
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
        }
        .dropdown-menu.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .tab-content {
            display: none;
        }
        .tab-content.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
</style>