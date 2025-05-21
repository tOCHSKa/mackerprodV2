<template>
<section id="services" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">MES <span class="text-[#941e28]">PRESTATIONS</span></h2>
            <p class="text-center max-w-2xl mx-auto mb-12">Je propose une gamme complète de services vidéo pour répondre
                à tous vos besoins, de la captation événementielle à la production cinématographique.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="service-card bg-gray-50 rounded-lg p-8 hover:shadow-lg transition">
                    <div class="service-icon text-[#941e28] text-4xl mb-4 text-primary">
                        <i class="fas fa-film"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Clips Musicaux</h3>
                    <p class="text-[#1a2026]">Production de clips vidéo artistiques qui mettent en valeur votre musique
                        avec une esthétique unique et percutante.</p>
                </div>

                <!-- Service 2 -->
                <div class="service-card bg-gray-50 rounded-lg p-8 hover:shadow-lg transition">
                    <div class="service-icon text-[#941e28] text-4xl mb-4 text-primary">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Mariages & Événements</h3>
                    <p class="text-[#1a2026]">Captation des moments les plus précieux de votre journée avec sensibilité
                        et discrétion pour un souvenir émouvant.</p>
                </div>

                <!-- Service 3 -->
                <div class="service-card bg-gray-50 rounded-lg p-8 hover:shadow-lg transition">
                    <div class="service-icon text-[#941e28] text-4xl mb-4 text-primary">
                        <i class="fas fa-ad"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Publicités & Marques</h3>
                    <p class="text-[#1a2026]">Création de contenus publicitaires impactants qui renforcent l'identité de
                        votre marque et captivent votre audience.</p>
                </div>

                <!-- Service 4 -->
                <div class="service-card bg-gray-50 rounded-lg p-8 hover:shadow-lg transition">
                    <div class="service-icon text-[#941e28] text-4xl mb-4 text-primary">
                        <i class="fas fa-video"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Documentaires</h3>
                    <p class="text-[#1a2026]">Production de documentaires engagés qui racontent des histoires humaines
                        avec profondeur et authenticité.</p>
                </div>

                <!-- Service 5 -->
                <div class="service-card bg-gray-50 rounded-lg p-8 hover:shadow-lg transition">
                    <div class="service-icon text-[#941e28] text-4xl mb-4 text-primary">
                        <i class="fas fa-bullhorn"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Corporate</h3>
                    <p class="text-[#1a2026]">Vidéos institutionnelles et reportages d'entreprise pour communiquer
                        efficacement vos valeurs et votre expertise.</p>
                </div>

                <!-- Service 6 -->
                <div class="service-card bg-gray-50 rounded-lg p-8 hover:shadow-lg transition">
                    <div class="service-icon text-[#941e28] text-4xl mb-4 text-primary">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Contenu sur Mesure</h3>
                    <p class="text-[#1a2026]">Solutions vidéo personnalisées adaptées à vos besoins spécifiques, du
                        concept au produit final.</p>
                </div>
            </div>
            <div class="text-center mt-12">
                <NuxtLink
                    to="/prestation"
                    class="inline-block bg-[#941e20] hover:bg-white border-2 text-white hover:border-[#941e20] hover:text-[#941e20] px-6 py-3 rounded-full font-medium transition duration-300"
                >
                    Voir toutes les prestations
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style>
  
</style>