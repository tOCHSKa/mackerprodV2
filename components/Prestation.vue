<template>
<section id="services" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">MES <span class="text-[#941e28]">PRESTATIONS</span></h2>
            <p class="text-center max-w-2xl mx-auto mb-12">Je propose une gamme complète de services vidéo : <strong>captation</strong>, <strong>montage</strong>, <strong>étalonnage</strong>, pour particuliers comme professionnels. Du reportage à la vidéo cinématographique, chaque projet est pensé pour marquer. </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="prestation in prestations" :key="prestation.title" class="service-card bg-gray-50 rounded-lg p-8 hover:shadow-lg transition">
                    <div class="service-icon text-[#941e28] text-4xl mb-4 text-primary">
                        <i :class="prestation.icon"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">{{ prestation.title }}</h3>
                    <p class="text-[#1a2026]">{{ prestation.description }}</p>
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

const prestations = [
    {
        title: 'Immobilier',
        description: 'Des images nettes et lumineuses qui mettent en valeur chaque détail de vos biens, pour séduire vos futurs acquéreurs. Plan aérien, drone FPV, caméra stabilisée, une qualité professionnelle pour un rendu unique et impactant. ',
        icon: 'fas fa-home'
    },
    {
        title: 'Mariages & Événements',
        description: 'Captation des moments les plus précieux de votre journée avec sensibilité et discrétion pour un souvenir émouvant.',
        icon: 'fas fa-heart'
    },
    {
        title: 'Corporate',
        description: 'Des photos et vidéos professionnelles qui reflètent l’identité et les valeurs de votre entreprise avec authenticité. ',
        icon: 'fas fa-briefcase'
    },
    {
        title: 'Mariage DUO',
        description: '1 photographe + 1 vidéaste ou 2 vidéastes - Deux regards complémentaires pour capturer l’émotion et la magie de votre jour unique, du matin jusqu’au soir.',
        icon: 'fas fa-video'
    },
    {
        title: 'Prestation drone',
        description: 'Des prises de vue aériennes pour sublimer vos projets sous un angle inédit et dynamique. Drone cinématique pour des plans époustouflants, drone FPV pour un rendu vif et spectaculaire.',
        icon: 'fas fa-plane'
    },
    {
        title: 'Contenu sur Mesure',
        description: 'Création personnalisée de visuels adaptés à vos besoins, pour raconter votre histoire avec impact et créativité.',
        icon: 'fas fa-lightbulb'
    }
]
</script>
<style>
  
</style>