<template>
   <!-- Process Section -->
   <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4 text-[#1a2026]">MON <span class="text-[#941e28]">PROCESSUS</span> DE CRÉATION</h2>
            <p class="text-center max-w-2xl mx-auto mb-12 text-[#1a2026]">Chaque projet suit une méthodologie rigoureuse pour garantir un résultat à la hauteur de vos attentes.</p>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div v-for="(process, key) in process" :key="process.title">
                    <div class="text-center">
                        <div class="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-2xl font-bold text-[#941e28]">{{ key + 1 }}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">{{ process.title }}</h3>
                        <p class="text-[#1a2026]">{{ process.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const process = [
    {
        title: 'Analyse',
        description: 'Nous discutons de votre projet, vos attentes et vos objectifs pour définir ensemble le cadre de travail.',
        icon: 'fas fa-home'
    },
    {
        title: 'Préparation',
        description: 'Script, storyboard, repérages et planification pour que tout soit parfait le jour du tournage.',
        icon: 'fas fa-heart'
    },
    {
        title: 'Tournage',
        description: 'Captation des images et du son avec un matériel professionnel et une équipe expérimentée.',
        icon: 'fas fa-briefcase'
    },
    {
        title: 'Post-production',
        description: 'Montage, étalonnage, sound design et finalisation pour un rendu professionnel et impactant.',
        icon: 'fas fa-video'
    }
]
</script>

<style scoped>
.text-accent{
  color: #941E28;
}
</style>