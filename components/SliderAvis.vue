<template>
    <div class="relative py-4">
      <!-- Bouton gauche -->
      <button
        @click="scrollLeft" aria-label="Scroll left"
        class="mt-6 cursor-pointer absolute left-0 top-85 lg:left-[45%] lg:top-85 -translate-y-1/2 z-10 bg-white shadow-lg px-[1rem] py-[0.5rem] rounded-full hover:bg-gray-100 transition"
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
          class="min-w-[300px] max-w-[300px] bg-white p-6 rounded-lg
           shadow hover:shadow-md transition duration-300 flex-shrink-0  flex flex-col justify-between"
        >
          <div class="flex items-center mb-4">

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
          <p class="text-gray-600 text-sm mb-4 text-justify">{{ r.texte }}</p>
        </div>
      </div>
  
      <!-- Bouton droite -->
      <button
        @click="scrollRight" aria-label="Scroll right"
        class="mt-6 cursor-pointer absolute right-0 top-85 lg:right-[45%] lg:top-85 -translate-y-1/2 z-10 bg-white shadow-lg px-[1rem] py-[0.5rem] rounded-full hover:bg-gray-100 transition"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const container = ref(null)
  const scrollAmount = 340
  onMounted(() => {
})

  const scrollLeft = () => {
  if (container.value) {
    container.value.scrollBy({ left: -340, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (container.value) {
    container.value.scrollBy({ left: 340, behavior: 'smooth' })
  }
}
  
  const reviews = [
    {
      nom: "Jean-Baptiste Poulain",
      image:
        "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-1/486094925_3849494558601164_7042117494380945027_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=N4fAERgWa1kQ7kNvwH0Gn2C&_nc_oc=Adl0y_ORkZpPhJYpOb0Up9aErXq_0QHTDUil0yaWRp2mFlAqRObU6dC2bXV56NjIkXg&_nc_zt=24&_nc_ht=scontent-cdg4-1.xx&_nc_gid=OvMrvaq9C51axSz8SCK9xg&oh=00_AfNYkPUUe6YyaKBqjqXcQ8W4AH40VXg3cPEBLBPd-Omvdw&oe=6855CA1C",
      texte:
        "Première expérience avec Macker PROD, je suis pleinement satisfait des prestations proposées. Entre les qualités techniques et humaines je ne peux que vous conseiller ce professionnel. À très vite!",
      date: "19/05/2025",
      source: "Google",
      rating: 5,
    },
    {
      nom: "Auré Lie Wavelet",
      image: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-1/460494615_3022392834568128_8688199165892501953_n.jpg?stp=c171.0.1024.1024a_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=cJ7JlCmBVGoQ7kNvwFmTeoO&_nc_oc=Adk8ZTudrVo8fDYR4JsmFFHydEU7iRnx6IJgYWffTLPUEc6TNEcatvXLOtexG3llx_g&_nc_zt=24&_nc_ht=scontent-cdg4-2.xx&_nc_gid=eN6j8zFx5fnaD0Bhaale-w&oh=00_AfN_u6AObs0ozYXNMsf39bXwguhzpMqiFP2uCGcO1UNnmA&oe=6855F27D",
      texte:
        "Foncez sans hésiter ! Des souvenirs en or de notre mariage ! Le montage : parfait tout y est, c’est revivre le mariage à chaque visualisation ! Avec la mention spéciale émotions ++++.",
      date: "02/03/2025",
      source: "Google",
      rating: 5,
    },
    {
      nom: "Mallory Carpentier",
      image: "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-1/456304269_10233241070078089_5923125198711854567_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=cLTHtw3gOogQ7kNvwESDuyz&_nc_oc=AdmhGjyUqNF5aL6h0Mjh1YCoIDBB-Y3brZY9JpiIkmjsH24FVOuKY5y15x-CtsDni7g&_nc_zt=24&_nc_ht=scontent-cdg4-1.xx&_nc_gid=PNO60sQ-zrORIvqcxhP4Bw&oh=00_AfNFYFmcD1OEyeAg5XLx4QDU4brCzOkfRYLaMtv3hF3POw&oe=6855ED4F",
      texte:
        "Vidéo réalisée afin de présenter ma nouvelle activité artisanale lors d'un marché de Noël. Professionnel et prend son temps pour vraiment capter chaque détail. Montage rapide. Je recommande",
      date: "27/03/2025",
      source: "Google",
      rating: 5,
    },
    {
      nom: "Mary Delfosse",
      image: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-1/447046329_10161273042744696_1100846737656978401_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=tZZPZAjTXO8Q7kNvwEAcleK&_nc_oc=AdlT5Q2vlP2b3cwrEpN6VVtu2yPg8P7Tevot7jn7CxHD3M0XxG_FhQYQUyJIIQDyeSM&_nc_zt=24&_nc_ht=scontent-cdg4-2.xx&_nc_gid=Q-4uAFhLtOKaY-sVa94w5A&oh=00_AfMi1byMPwVYu4EjgjWanqGUP3ngCUD4v-IJ8BYqwlvjNg&oe=6855B027",
      texte:
        "Mike a réalisé une vidéo afin de présenter ma boutique, à l’affût du détail et sachant capturer l’atmosphère de celle ci il a su la mettre en valeur.Mike a été à la hauteur de mes attentes. Hâte de retravailler avec lui sur un nouveau projet .",
      date: "26/03/2025",
      source: "Google",
      rating: 5,
    },
    {
      nom: "Alexandre Dupont",
      image: "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-1/470200104_1643362913236490_1487952554218117433_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_ohc=MlRJZizB3o4Q7kNvwH9iizq&_nc_oc=AdmBJa41EM8aQjCoymIZiii51cRN97nvbVCQwmcR8L8puThbMJiNClKvkt2H2pcdHRg&_nc_zt=24&_nc_ht=scontent-cdg4-1.xx&_nc_gid=Q-4uAFhLtOKaY-sVa94w5A&oh=00_AfMcilaE3uypMyeHCZZKHP6HzwGi5Iof9gxGVOadiaBDqg&oe=6855C000",
      texte:
        "il réalise des vidéos de drone tout simplement excellentes. La qualité de son travail est remarquable, avec des images nettes et fluides. Il maîtrise son drone à la perfection et offre des prises de vue impressionnantes. ",
      date: "25/03/2025",
      source: "Google",
      rating: 5,
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
  