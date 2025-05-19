<template>
   <!-- Equipment Section -->
   <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">MON <span class="text-accent">ÉQUIPEMENT</span></h2>
            <p class="text-center max-w-2xl mx-auto mb-12">Je travaille avec du matériel professionnel pour garantir une qualité d'image et de son irréprochable.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <!-- Caméra -->
                <div class="text-center p-6 bg-gray-50 rounded-lg">
                    <div class="text-4xl mb-4 text-accent">
                        <i class="fas fa-video"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Caméras</h3>
                    <p class="text-gray-600">Sony FX6 & FX3<br>4K HDR 10-bit<br>Objectifs haut de gamme</p>
                </div>

                <!-- Son -->
                <div class="text-center p-6 bg-gray-50 rounded-lg">
                    <div class="text-4xl mb-4 text-accent">
                        <i class="fas fa-microphone"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Son</h3>
                    <p class="text-gray-600">Micros shotgun & cravate<br>Enregistreurs Zoom<br>Mixette portable</p>
                </div>

                <!-- Lumière -->
                <div class="text-center p-6 bg-gray-50 rounded-lg">
                    <div class="text-4xl mb-4 text-accent">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Lumière</h3>
                    <p class="text-gray-600">Kits LED professionnels<br>Diffuseurs & réflecteurs<br>Éclairage continu</p>
                </div>

                <!-- Post-prod -->
                <div class="text-center p-6 bg-gray-50 rounded-lg">
                    <div class="text-4xl mb-4 text-accent">
                        <i class="fas fa-laptop"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Post-production</h3>
                    <p class="text-gray-600">Adobe Premiere Pro<br>DaVinci Resolve<br>After Effects</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
    .text-accent {
        color: #941E28;
    }
    .bg-accent {
        background-color: #941E28;
    }
</style>