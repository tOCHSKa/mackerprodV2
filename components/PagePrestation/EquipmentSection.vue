<template>
    <!-- Equipment Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-4">
          MON <span class="text-accent">ÉQUIPEMENT</span>
        </h2>
        <p class="text-center max-w-2xl mx-auto mb-12">
          Je travaille avec du matériel professionnel pour garantir une qualité d'image et de son irréprochable.
        </p>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(item, index) in equipement"
            :key="index"
            class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition"
          >
            <div class="text-4xl mb-4 text-accent">
              <i :class="item.icon"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
            <ul class="text-[#1a2026] space-y-1">
              <li v-for="(line, idx) in item.description" :key="idx">
                {{ line }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const equipement = [
    {
      title: 'Caméras',
      description: [
        '2X panasonic Lumix S5II',
        '1X Osmo 3',
      ],
      icon: 'fas fa-video',
    },
    {
      title: 'Post-production',
      description: [
        'DaVinci Resolve - STUDIO',
      ],
      icon: 'fas fa-laptop',
    },
    {
      title: 'Drone',
      description: [
        'Drone DJI Mini 3 Pro',
        'Neo FPV',
        'Avata 2 FPV'
      ],
      icon: 'fas fa-plane',
    },
    {
      title: 'Équipements',
      description: [
        'Système de captation sonore',
        'Stabilisateur DJI RS3',
        'Eclairage professionnel',
        'Parc d`objectifs polyvalents de 24 à 150mm',
      ],
      icon: 'fas fa-toolbox',
    },
  ]
  </script>
  
  <style scoped>
  .text-accent {
    color: #941E28;
  }
  .bg-accent {
    background-color: #941E28;
  }
  </style>
  