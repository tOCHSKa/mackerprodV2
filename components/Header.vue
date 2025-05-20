<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    
    <!-- VIDEO DE FOND -->
    <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
      <source src="https://videos.pexels.com/video-files/9665449/9665449-hd_1920_1080_25fps.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas les vidéos HTML5.
    </video>

    <!-- OVERLAY sombre -->
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]"></div>

    <!-- CONTENU -->
    <div class="container mx-auto px-6 text-center md:text-left relative z-10">
      <div class="md:w-1/2">
        <h1 class="text-4xl text-white md:text-6xl font-bold mb-6">
          VOTRE HISTOIRE
          <p class="texte-rouge">NOTRE PASSION</p>
        </h1>
        <p class="text-xl text-white mb-8 open">
          Je capture l'émotion et raconte votre histoire à travers l'objectif. Des vidéos qui marquent les esprits et créent l'impact.
        </p>
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <NuxtLink to="#contact" class="bg-[#941e28] hover:bg-transparent hover:border-[2px] border-[2px] border-[#941e28]  text-white px-8 py-3 rounded-full font-bold transition duration-300 ease-in-out">Discutons de votre projet</NuxtLink>
          <NuxtLink to="/realisation" class="border-2 text-white border-white bg-white-400 hover:bg-white hover:text-black px-8 py-3 rounded-full font-bold transition duration-300 ease-in-out">Voir mes réalisations</NuxtLink>
        </div>
        <div class="flex flex-row mt-8 px-2 gap-5 items-center">
          <NuxtLink to="#" class="text-white fa-xl hover:scale-125 transition-transform duration-300 ease-in-out">
            <i class="fab fa-youtube"></i>
          </NuxtLink>
          <NuxtLink to="#" class="text-white fa-xl hover:scale-125 transition-transform duration-300 ease-in-out">
            <i class="fab fa-linkedin-in"></i>
          </NuxtLink>
          <NuxtLink to="#" class="text-white fa-xl hover:scale-125 transition-transform duration-300 ease-in-out">
            <i class="fab fa-facebook"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const isMobileMenuOpen = ref(false)
</script>

<style scoped>
.texte-rouge {
  color: #941e20;
}

h1 {
  font-family: "Raleway", sans-serif;
}
</style>
