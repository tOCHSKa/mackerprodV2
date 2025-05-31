<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold ">
          <nuxt-link to="/">
            <span class="texte-rouge">MACKER</span>
            <span class="text-[#1a2026]">PROD</span>
          </nuxt-link>

        </div>

        <!-- Desktop Nav -->
        <nav class=" open flex gap-5 bg-white sticky top-0 z-50 hidden md:flex">
          
          <NuxtLink to="/realisation" class="group relative text-gray-700 hover:text-[#941e28] border-b-2 border-transparent  transition-all duration-300 open">Réalisations
            <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#941e28] transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink to="/prestation" class="group relative text-gray-700 hover:text-[#941e28] border-b-2 border-transparent  transition-all duration-300 open">Préstations
            <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#941e28] transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink to="/#contact" class="group relative text-gray-700 hover:text-[#941e28] border-b-2 border-transparent  transition-all duration-300 open">Contact
            <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#941e28] transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <div v-if="adminStore.role === 'user'">
            <NuxtLink to="/profil" class="group relative text-gray-700 hover:text-[#941e28] border-b-2 border-transparent  transition-all duration-300 open">Profil
            <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#941e28] transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          </div>
          <div v-else>
            <NuxtLink to="/loginuser" class="group relative text-gray-700 hover:text-[#941e28] border-b-2 border-transparent  transition-all duration-300 open">Se connecter
            <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#941e28] transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          </div>
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
  class="open pl-6 pb-4 fixed top-[64px] left-0 w-full bg-white py-4 px-4 transition-transform duration-300 transform md:hidden z-50"
  :class="[{ 'translate-x-0': isMobileMenuOpen, '-translate-x-full': !isMobileMenuOpen }]"
>
  <nav class="flex flex-col space-y-4">
    <NuxtLink to="/realisation" @click="handleClick" class="text-gray-700">Réalisations</NuxtLink>
    <NuxtLink to="/prestation" @click="handleClick" class="text-gray-700">Préstations</NuxtLink>
    <NuxtLink to="/#contact" @click="handleClick" class="text-gray-700">Contact</NuxtLink>
    <div v-if="adminStore.role === 'user'">
    <NuxtLink to="/profil" @click="handleClick" class="text-gray-700">Profil</NuxtLink>
    </div>
    <div v-else>
    <NuxtLink to="/loginuser" @click="handleClick" class="text-gray-700">Se connecter</NuxtLink>
    </div>
  </nav>
</div>
</header>
</template>

<script setup>
import { useAdminStore } from '~/store/adminStore'
const adminStore = useAdminStore()
adminStore.initializeStore()

const isMobileMenuOpen = ref(false)

const isClicked = ref(false)

function handleClick() {
  isClicked.value = !isClicked.value
}
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