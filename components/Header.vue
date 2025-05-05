<template>

  <section class="hero-bg min-h-screen flex items-center">
  <div class="container mx-auto px-6 text-center md:text-left">
    <div class="md:w-1/2">
      <h1 class="text-4xl text-white md:text-6xl font-bold mb-6">VOTRE HISTOIRE
      <p class="texte-rouge">NOTRE PASSION</p>
      </h1>
      <p class="text-xl text-white mb-8 open ">
        Je capture l'émotion et raconte votre histoire à travers l'objectif. Des vidéos qui marquent les esprits et créent l'impact.
      </p>
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <a class="bg-[#941e28] hover:bg-transparent hover:border-[2px] border-[2px] border-[#941e28]  text-white px-8 py-3 rounded-full font-bold transition" href="#contact">Discutons de votre projet</a>
        <a class="border-2 text-white border-white bg-white-400 hover:bg-white hover:text-black px-8 py-3 rounded-full font-bold transition" href="#realisations">Voir mes réalisations</a>
    </div>
    <div class="flex flex-row mt-8 px-2 gap-5 flex-items-center">
    <a href="#"class="text-white fa-xl  hover:scale-125  transition-transform duration-300">
      <i class="fab fa-youtube"></i>
    </a>
    <a href="#" class="text-white fa-xl hover:scale-125  transition-transform duration-300">
      <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="#" class="text-white fa-xl hover:scale-125  transition-transform duration-300">
      <i class="fab fa-facebook"></i>
    </a>
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

.hero-bg {
            background: linear-gradient(rgba(26, 32, 38, 0.7), rgba(26, 32, 38, 0.7)), url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80');
            background-size: cover;
            background-position: center;
        }

h1 {
  font-family: "Raleway", sans-serif;
  
}

</style>
