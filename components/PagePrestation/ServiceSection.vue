<template>
  <!-- Services Section -->
  <section id="services" class="py-20 bg-gray-100">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4 text-[#1a2026]">MES <span class="text-[#941e28]">SERVICES</span></h2>
            <p class="text-center text-[#1a2026] max-w-2xl mx-auto mb-12">Chaque projet est unique et mérite une approche sur mesure. Découvrez les différents services que je propose pour donner vie à vos idées.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="service-card bg-white rounded-lg p-8">
                    <div class="service-icon text-4xl mb-4 text-primary">
                        <i class="fas fa-home"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Immobilier</h3>
                    <p class="text-gray-600 mb-4">Production de clips vidéo artistiques qui mettent en valeur votre musique avec une esthétique unique et percutante.</p>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Concept original</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Tournage professionnel</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Montage dynamique</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Effets visuels</li>
                    </ul>
                </div>

                <!-- Service 2 -->
                <div class="service-card bg-white rounded-lg p-8">
                    <div class="service-icon text-4xl mb-4 text-primary">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Mariages & Événements</h3>
                    <p class="text-gray-600 mb-4">Captation des moments les plus précieux de votre journée avec sensibilité et discrétion pour un souvenir émouvant.</p>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Film court et long</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Prise de vue discrète</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Montage émotionnel</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Livraison premium</li>
                    </ul>
                </div>

                <!-- Service 3 -->
                <div class="service-card bg-white rounded-lg p-8">
                    <div class="service-icon text-4xl mb-4 text-primary">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Corporate</h3>
                    <p class="text-gray-600 mb-4">Création de contenus publicitaires impactants qui renforcent l'identité de votre marque et captivent votre audience.</p>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Stratégie de marque</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Scénarisation</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Production HD/4K</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Diffusion multi-plateforme</li>
                    </ul>
                </div>

                <!-- Service 4 -->
                <div class="service-card bg-white rounded-lg p-8">
                    <div class="service-icon text-4xl mb-4 text-primary">
                        <i class="fas fa-video"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Documentaires</h3>
                    <p class="text-gray-600 mb-4">Production de documentaires engagés qui racontent des histoires humaines avec profondeur et authenticité.</p>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Recherche approfondie</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Interviews captivantes</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Narration puissante</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Montage documentaire</li>
                    </ul>
                </div>

                <!-- Service 5 -->
                <div class="service-card bg-white rounded-lg p-8">
                    <div class="service-icon text-4xl mb-4 text-primary">
                        <i class="fas fa-plane"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Prestations drone</h3>
                    <p class="text-gray-600 mb-4">Vidéos institutionnelles et reportages d'entreprise pour communiquer efficacement vos valeurs et votre expertise.</p>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Vidéo institutionnelle</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Interview corporate</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Motion design</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Sous-titrage multilingue</li>
                    </ul>
                </div>

                <!-- Service 6 -->
                <div class="service-card bg-white rounded-lg p-8">
                    <div class="service-icon text-4xl mb-4 text-primary">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Contenu sur Mesure</h3>
                    <p class="text-gray-600 mb-4">Solutions vidéo personnalisées adaptées à vos besoins spécifiques, du concept au produit final.</p>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Conseil personnalisé</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Scénario sur mesure</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Tournage flexible</li>
                        <li class="flex items-center"><i class="fas fa-check text-[#941e28] mr-2"></i> Post-production avancée</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
    .service-card {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .service-icon {
        transition: all 0.3s ease;
    }
    
    .service-card:hover {
        transform: scale(1.05);
        color: #941E28;
    }
    
    .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(148,30,40,0.1) 0%, rgba(255,255,255,0) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .service-card:hover::before {
        opacity: 1;
    }
</style>