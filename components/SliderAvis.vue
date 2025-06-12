<template>
    <div class="relative py-4">
      <!-- Bouton gauche -->
      <button
        @click="scrollLeft" aria-label="Scroll left"
        class="cursor-pointer absolute left-0 top-85 lg:left-[45%] lg:top-85 -translate-y-1/2 z-10 bg-white shadow-lg px-[1rem] py-[0.5rem] rounded-full hover:bg-gray-100 transition"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
  
      <!-- Conteneur scrollable -->
      <div
        ref="container"
        class="flex gap-8 overflow-x-auto scroll-smooth px-14 scroll-container"
      >
        <div
          v-for="(r, i) in reviews"
          :key="i"
          class="min-w-[300px] max-w-[300px] bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300 flex-shrink-0"
        >
          <div class="flex items-center mb-4">
            <img
              :src="r.image"
              alt="Client"
              class="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <h4 class="font-bold text-lg">{{ r.nom }}</h4>
              <div class="text-yellow-400 text-sm">
                <i
                  v-for="n in Math.floor(r.rating)"
                  :key="n"
                  class="fas fa-star"
                ></i>
                <i
                  v-if="r.rating % 1 !== 0"
                  class="fas fa-star-half-alt"
                ></i>
              </div>
            </div>
          </div>
          <p class="text-gray-600 text-sm mb-4">{{ r.texte }}</p>
          <div class="text-xs text-gray-500 flex items-center">
            <i class="fab fa-google mr-2"></i>
            {{ r.source }} - {{ r.date }}
          </div>
        </div>
      </div>
  
      <!-- Bouton droite -->
      <button
        @click="scrollRight" aria-label="Scroll right"
        class="cursor-pointer absolute right-0 top-85 lg:right-[45%] lg:top-85 -translate-y-1/2 z-10 bg-white shadow-lg px-[1rem] py-[0.5rem] rounded-full hover:bg-gray-100 transition"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const container = ref(null)
  const scrollAmount = 340
  
  const scrollLeft = () => {
    container.value?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
  
  const scrollRight = () => {
    container.value?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
  
  const reviews = [
    {
      nom: "Sophie Martin",
      image:
        "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-1/486094925_3849494558601164_7042117494380945027_n.jpg?...",
      texte:
        "Le film de notre mariage est tout simplement magnifique. MackerProd a su capturer l'émotion de chaque instant avec une sensibilité rare. Nous revivons notre journée à chaque visionnage.",
      date: "15/06/2023",
      source: "Google",
      rating: 5,
    },
    {
      nom: "Thomas Leroy",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      texte:
        "Pour le lancement de notre nouvelle collection, nous avons fait appel à MackerProd. Le résultat dépasse nos attentes ! Une esthétique parfaite qui met en valeur nos produits. Professionnalisme et créativité au rendez-vous.",
      date: "02/03/2023",
      source: "Google",
      rating: 5,
    },
    {
      nom: "Émilie Dubois",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      texte:
        "Le documentaire réalisé sur notre association est une véritable réussite. MackerProd a su comprendre nos valeurs et les retranscrire avec justesse. Un travail d'une grande qualité qui nous aide dans notre communication.",
      date: "22/11/2022",
      source: "Google",
      rating: 4.5,
    },
    {
      nom: "Émilie Dubois",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      texte:
        "Le documentaire réalisé sur notre association est une véritable réussite. MackerProd a su comprendre nos valeurs et les retranscrire avec justesse. Un travail d'une grande qualité qui nous aide dans notre communication.",
      date: "22/11/2022",
      source: "Google",
      rating: 4.5,
    },
    {
      nom: "Émilie Dubois",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      texte:
        "Le documentaire réalisé sur notre association est une véritable réussite. MackerProd a su comprendre nos valeurs et les retranscrire avec justesse. Un travail d'une grande qualité qui nous aide dans notre communication.",
      date: "22/11/2022",
      source: "Google",
      rating: 4.5,
    },
  ]
  </script>
  
  <style scoped>
.scroll-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

  </style>
  