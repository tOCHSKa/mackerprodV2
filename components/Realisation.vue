<template>
  <section id="realisations" class="py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        MES <span class="text-[#941e28]">RÉALISATIONS</span>
      </h2>
      <p class="text-center max-w-2xl mx-auto mb-12 text-[#1a2026]">
        Découvrez une sélection de mes projets vidéo les plus marquants. Chaque
        réalisation est une histoire unique, capturée avec passion et professionnalisme.
      </p>

      <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(item, index) in project"
          :key="index"
          class="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div class="h-[300px]">
            <iframe
              class="w-full h-full"
              :src="item.embed"
              :title="item.title"
              frameborder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-6">
            <div class="slide" :class="item.class">
              <img :src="item.image" :alt="item.title" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 mb-4">{{ item.description }}</p>
            <div class="flex justify-between items-center text-sm">
              <span class="text-accent font-medium">{{ item.year }}</span>
              <a
                :href="item.link"
                target="_blank"
                rel="noopener"
                class="text-accent hover:underline"
              >
                Voir sur YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink
          to="/realisation"
          class="inline-block bg-[#941e20] hover:bg-white border-2 text-white hover:border-[#941e20] hover:text-[#941e20] px-6 py-3 rounded-full font-medium transition duration-300"
        >
          Voir tous les projets
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const project = [
  {
    title: 'Liu-jo Cambrai',
    description: 'L’élégance en mouvement – Découvrez l’univers Liu-jo Cambrai.',
    year: '2025',
    link: 'https://www.youtube.com/watch?v=XUr1a12Bk1g',
    embed: 'https://www.youtube.com/embed/XUr1a12Bk1g?controls=0&modestbranding=1&rel=0&showinfo=0',
    image: 'https://tochska.github.io/assets-mackerprod/liujo.svg',
    class: ''
  },
  {
    title: '4TECH+',
    description: 'Interview et présentation de l\'entreprise - Découvrez 4TECH+',
    year: '2025',
    link: 'https://www.youtube.com/watch?v=QIJaPO-Bu5I',
    embed: 'https://www.youtube.com/embed/QIJaPO-Bu5I?controls=0&mute=1&loop=1&playlist=QIJaPO-Bu5I&modestbranding=1&rel=0',
    image: 'https://tochska.github.io/assets-mackerprod/4tech.svg',
    class: ''
  },
  {
    title: 'Saint-Eloi Bapaume',
    description: 'Campagne publicitaire mettant en avant des produits bio locaux avec une esthétique naturelle et épurée.',
    year: '2025',
    link: 'https://www.youtube.com/watch?v=UsO7fR-v0S8',
    embed: 'https://www.youtube.com/embed/UsO7fR-v0S8?controls=0&mute=1&loop=1&playlist=UsO7fR-v0S8&modestbranding=1&rel=0',
    image: 'https://tochska.github.io/assets-mackerprod/steloi.svg',
    class: 'slide-steloi'
  }
]
</script>

<style scoped>
.text-accent {
  color: #941e28;
}

.slide,
.slide-steloi {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide img {
  max-height: 70px;
  max-width: 180px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.slide-steloi img {
  max-height: 100px;
  max-width: 100px;
  object-fit: cover;
  transition: all 0.3s ease;
}
</style>
