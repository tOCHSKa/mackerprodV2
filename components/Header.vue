<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">

    <!-- VIDEO DE FOND -->
    <video
      ref="videoRef"
      autoplay
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
      <source src="https://tochska.github.io/assets-mackerprod/intro2.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas les vidéos HTML5.
    </video>

    <!-- BOUTON SON -->
    <button
      @click="toggleMute"
      class="absolute cursor-pointer bottom-[75px] right-3 bg-white px-4 py-2 rounded z-10">
      <i v-if="isMuted === null" class="fas fa-spinner fa-spin"></i>
      <i v-else :class="isMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up'"></i>
    </button>

    <!-- OVERLAY -->
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-[-1]"></div>

    <!-- TITRE EN HAUT CENTRÉ -->
    <div class="absolute top-28 left-1/2 transform -translate-x-1/2 text-center z-10">
      <h1 class="text-5xl text-white md:text-6xl font-bold mb-6">
        MACKER <span class="texte-rouge">PROD</span>
      </h1>
    </div>

    <!-- CONTENU EN BAS CENTRÉ -->
    <div class="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center z-10 px-6">

      <!-- ✅ DESCRIPTION visible seulement sur desktop -->
      <p class=" md:block text-sm text-white mb-8 open max-w-xl mx-auto">
        Des images qui parlent, des vidéos qui marquent.<br>
        Vidéaste & télépilote de drone certifié — Macker Prod sublime vos projets : mariage, immobilier, entreprise.
      </p>

      <!-- ✅ BOUTONS DESKTOP -->
      <div class="hidden md:flex flex-row justify-center gap-4 mb-6">
        <NuxtLink to="#contact" class="bg-[#941e28] hover:bg-transparent hover:border-[2px] border-[2px] border-[#941e28] text-white px-8 py-3 rounded-full font-bold transition duration-300 ease-in-out">
          Discutons de votre projet
        </NuxtLink>
        <NuxtLink to="/realisation" class="border-2 text-white border-white bg-white-400 hover:bg-white hover:text-black px-8 py-3 rounded-full font-bold transition duration-300 ease-in-out">
          Voir mes réalisations
        </NuxtLink>
      </div>

      <!-- ✅ BOUTONS MOBILE -->
      <div class="flex md:hidden flex-row justify-center items-center gap-4 mb-6">
        <NuxtLink to="#contact" class="bg-[#941e28] hover:bg-transparent hover:border-[2px] border-[2px] border-[#941e28] text-white px-6 py-3 rounded-full font-bold transition duration-300 ease-in-out">
          Contact
        </NuxtLink>
        <NuxtLink to="/realisation" class="border-2 text-white border-white bg-white-400 hover:bg-white hover:text-black px-6 py-3 rounded-full font-bold transition duration-300 ease-in-out">
         Réalisations
        </NuxtLink>
      </div>

      <!-- RÉSEAUX SOCIAUX (seulement desktop/tablette) -->
      <div class="hidden md:flex justify-center gap-5 items-center">
        <NuxtLink to="https://www.youtube.com/@MackerPROD" target="_blank" rel="noopener noreferrer" class="text-white fa-xl hover:scale-125 transition-transform duration-300 ease-in-out">
          <i class="fab fa-youtube"></i>
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/mickael-descheemacker-986463166/" target="_blank" rel="noopener noreferrer" class="text-white fa-xl hover:scale-125 transition-transform duration-300 ease-in-out">
          <i class="fab fa-linkedin-in"></i>
        </NuxtLink>
        <NuxtLink to="https://www.facebook.com/Mackerprod" target="_blank" rel="noopener noreferrer" class="text-white fa-xl hover:scale-125 transition-transform duration-300 ease-in-out">
          <i class="fab fa-facebook"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const videoRef = ref(null)
const isMuted = ref(true) // ⚠️ ne pas laisser `null`

const toggleMute = () => {
  if (videoRef.value) {
    videoRef.value.muted = !videoRef.value.muted
    isMuted.value = videoRef.value.muted
    videoRef.value.play().catch(() => {}) // au cas où lecture auto échoue
  }
}

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.muted = true // ⚠️ initialisation nécessaire
    isMuted.value = true
    videoRef.value.play().catch((err) => {
      console.warn("Lecture automatique bloquée :", err)
    })
  }
})
</script>


<style scoped>
.texte-rouge {
  color: #941e20;
}

h1 {
  font-family: "Raleway", sans-serif;
}
</style>
