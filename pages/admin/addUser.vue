<template>

    <!-- Main Form -->
    <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto">
                <div class="bg-white rounded-lg shadow-md p-8">
                    <h2 class="text-2xl font-bold mb-6 text-center">Informations de l'utilisateur</h2>
                    
                    <form>
                        <!-- Personal Info -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label for="nom" class="block mb-2 font-medium">Nom</label>
                                <input type="text" id="nom" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                            </div>
                            
                            <div>
                                <label for="prenom" class="block mb-2 font-medium">Prénom</label>
                                <input type="text" id="prenom" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                            </div>
                            
                            <div>
                                <label for="email" class="block mb-2 font-medium">Email *</label>
                                <input type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                            </div>
                            
                            <div>
                                <label for="telephone" class="block mb-2 font-medium">Téléphone *</label>
                                <input type="tel" id="telephone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                            </div>
                        </div>
                        
                        <!-- Account Info -->
                        <div class="mb-8">
                            <h3 class="text-xl font-bold mb-4">Informations de compte</h3>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="password" class="block mb-2 font-medium">Mot de passe *</label>
                                    <div class="relative">
                                        <input type="password" id="password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                                        <button type="button" class="absolute right-3 top-3 text-gray-500 hover:text-accent">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <div>
                                    <label for="confirm-password" class="block mb-2 font-medium">Confirmer le mot de passe *</label>
                                    <div class="relative">
                                        <input type="password" id="confirm-password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                                        <button type="button" class="absolute right-3 top-3 text-gray-500 hover:text-accent">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mt-6">
                                <label for="role" class="block mb-2 font-medium">Rôle *</label>
                                <select id="role" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                                    <option value="">Sélectionnez un rôle</option>
                                    <option value="admin">Administrateur</option>
                                    <option value="client">Client</option>
                                </select>
                            </div>
                        </div>
                        
                        <!-- Devis Status -->
                        <div class="mb-8">
                            <h3 class="text-xl font-bold mb-4">État du devis</h3>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="devis-id" class="block mb-2 font-medium">Numéro de devis</label>
                                    <input type="text" id="devis-id" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                                </div>
                                
                                <div>
                                    <label for="devis-status" class="block mb-2 font-medium">Statut du devis *</label>
                                    <select id="devis-status" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                                        <option value="">Sélectionnez un statut</option>
                                        <option value="pending" class="status-pending">En attente</option>
                                        <option value="approved" class="status-approved">Approuvé</option>
                                        <option value="rejected" class="status-rejected">Rejeté</option>
                                        <option value="completed" class="status-completed">Terminé</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="mt-6">
                                <label for="devis-comment" class="block mb-2 font-medium">Commentaire (optionnel)</label>
                                <textarea id="devis-comment" rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                            </div>
                        </div>
                        
                        <!-- Form Actions -->
                        <div class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
                            <button type="reset" class="cursor-pointer w-full md:w-auto border-2 border-accent text-accent hover:bg-gray-100 px-8 py-3 rounded font-medium transition hover:scale-105">
                                Réinitialiser
                            </button>
                            <button type="submit" class="cursor-pointer w-full md:w-auto bg-accent hover:bg-red-800 text-white px-8 py-3 rounded font-medium transition hover:scale-105">
                                <i class="fas fa-user-plus mr-2"></i> Créer l'utilisateur
                            </button>
                        </div>
                    </form>
                </div>
                
                <!-- Help Section -->
                <div class="mt-8 bg-white rounded-lg shadow-md p-6">
                    <h3 class="text-xl font-bold mb-4 flex items-center">
                        <i class="fas fa-info-circle text-accent mr-3"></i> Informations importantes
                    </h3>
                    <ul class="space-y-3 text-gray-700">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span>Tous les champs marqués d'un astérisque (*) sont obligatoires</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span>Le mot de passe doit contenir au moins 8 caractères, dont une majuscule et un chiffre</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span>L'état du devis peut être modifié ultérieurement si nécessaire</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
definePageMeta({
  layout: 'admin'
})
</script>

<style scoped>
.form-bg {
            background: linear-gradient(rgba(26, 32, 38, 0.9), rgba(26, 32, 38, 0.9)), url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80');
            background-size: cover;
            background-position: center;
        }
        
        .status-pending {
            background-color: #FEF3C7;
            color: #92400E;
        }
        
        .status-approved {
            background-color: #D1FAE5;
            color: #065F46;
        }
        
        .status-rejected {
            background-color: #FEE2E2;
            color: #92400E;
        }
        
        .status-completed {
            background-color: #DBEAFE;
            color: #1E40AF;
        }
        .text-accent {
        color: #1E40AF;
    }
    .bg-accent {
        background-color: #1E40AF;
    }
</style>