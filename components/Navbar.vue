<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold ">
          <span class="texte-rouge">MACKER</span>
          <span class="text-[#1a2026]">PROD</span>
        </div>

        <!-- Desktop Nav -->
        <nav class=" open flex gap-5 bg-white sticky top-0 z-50 hidden md:flex">
          <NuxtLink to="#" class="text-gray-700 hover:text-[#941e28] transition open">Réalisations</NuxtLink>
          <NuxtLink to="#" class="text-gray-700 hover:text-[#941e28] transition open">Prestations</NuxtLink>
          <NuxtLink to="#" class="text-gray-700 hover:text-[#941e28] transition open">Portfolio</NuxtLink>
          <NuxtLink to="#" class="text-gray-700 hover:text-[#941e28] transition open">Contact</NuxtLink>
        </nav>
        
        <!-- Mobile menu button -->
        <button
          class="md:hidden text-gray-700 focus:outline-none"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div
  class="open pl-6 pb-4 fixed top-[64px] left-0 w-full bg-white py-4 px-4 transition-transform duration-300 transform md:hidden"
  :class="[{ 'translate-x-0': isMobileMenuOpen, '-translate-x-full': !isMobileMenuOpen }]"
>
  <nav class="flex flex-col space-y-4">
    <NuxtLink to="/about" class="text-gray-700">Accueil</NuxtLink>
    <NuxtLink to="#" class="text-gray-700">À propos</NuxtLink>
    <NuxtLink to="#" class="text-gray-700">Contact</NuxtLink>
    <NuxtLink to="#" class="text-gray-700">Portfolio</NuxtLink>
  </nav>
</div>
</header>
</template>

<script setup>

const isMobileMenuOpen = ref(false)


</script>

<style scoped>

.texte-rouge {
  color: #941e20;

}

.open {
  font-family: "Open Sans", sans-serif;
}

.transitionleft {
  transform: translate(100%);
}

</style>