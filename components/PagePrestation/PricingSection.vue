<template>
   <!-- Pricing Section -->
   <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-[#1a2026] text-center mb-4">TARIFS <span class="text-[#941e28]">INDICATIFS</span></h2>
            <p class="text-center max-w-2xl mx-auto mb-12">Des forfaits adaptés à chaque type de projet. Contactez-moi pour un devis personnalisé.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <!-- Forfait Basic -->
                <div class="pricing-card bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-[#1a2026] p-6">
                        <h3 class="text-xl font-bold text-center text-white">BASIC</h3>
                        <p class="text-white text-center text-sm">Pour les petits projets simples</p>
                    </div>
                    <div class="p-6">
                        <div class="text-4xl font-bold text-center mb-4">500€ <span class="text-sm font-normal text-gray-500">/jour</span></div>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> 1 journée de tournage</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> Montage simple</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> 1 version finale</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-times text-gray-300 mr-2"></i> Pas de motion design</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-times text-gray-300 mr-2"></i> Pas d'étalonnage avancé</li>
                        </ul>
                        <NuxtLink to="#contact" class="block text-center border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full font-medium transition">Demander un devis</NuxtLink>
                    </div>
                </div>

                <!-- Forfait Pro (Populaire) -->
                <div class="pricing-card pricing-popular bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-accent p-6">
                        <h3 class="text-xl font-bold text-center text-white">PRO</h3>
                        <p class="text-white text-center text-sm">Solution la plus choisie</p>
                    </div>
                    <div class="p-6">
                        <div class="text-4xl font-bold text-center mb-4">900€ <span class="text-sm font-normal text-gray-500">/jour</span></div>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> 1-2 jours de tournage</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> Montage professionnel</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> 2 versions finales</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> Motion design simple</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> Étalonnage de base</li>
                        </ul>
                        <NuxtLink to="#contact" class="block text-center bg-accent hover:bg-red-800 text-white px-6 py-3 rounded-full font-medium transition">Demander un devis</NuxtLink>
                    </div>
                </div>

                <!-- Forfait Premium -->
                <div class="pricing-card bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-[#1a2026] p-6">
                        <h3 class="text-xl font-bold text-center text-white">PREMIUM</h3>
                        <p class="text-white text-center text-sm">Pour les projets exigeants</p>
                    </div>
                    <div class="p-6">
                        <div class="text-4xl font-bold text-center mb-4 text-[#1a2026]">1 500€ <span class="text-sm font-normal text-gray-500">/jour</span></div>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> Tournage sur mesure</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> Montage avancé</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> Nombreuses versions</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> Motion design complet</li>
                            <li class="flex items-center text-[#1a2026]"><i class="fas fa-check text-green-500 mr-2"></i> Étalonnage professionnel</li>
                        </ul>
                        <NuxtLink to="/#contact" class="block text-center border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full font-medium transition">Demander un devis</NuxtLink>
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <p class="text-gray-600 mb-4">Vous avez un projet spécifique ? Parlons-en !</p>
                <NuxtLink to="/#contact" class="inline-block bg-accent hover:bg-red-800 text-white px-6 py-3 rounded-full font-medium transition">Contactez-moi</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
 .pricing-card {
            transition: all 0.3s ease;
        }
        
        .pricing-card:hover {
            transform: scale(1.03);
        }
        
        .pricing-popular {
            border: 2px solid #941E28;
            position: relative;
        }
        
        .pricing-popular::after {
            content: 'Populaire';
            position: absolute;
            top: 10px;
            right: 10px;
            background: #1a2026;
            color: white;
            padding: 2px 10px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: bold;
        }

        .text-accent {
            color: #941E28;
        }
        .bg-accent {
            background-color: #941E28;
        }
</style>