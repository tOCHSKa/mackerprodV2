<template>
  <!-- Services Section -->
  <section id="services" class="py-20 bg-gray-100">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4 text-[#1a2026]">MES <span class="text-[#941e28]">SERVICES</span></h2>
            <p class="text-center text-[#1a2026] max-w-2xl mx-auto mb-12">Chaque projet est unique et mérite une approche sur mesure. Découvrez les différents services que je propose pour donner vie à vos idées.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="prestation in prestations" :key="prestation.title" class="service-card bg-white rounded-lg p-8 hover:shadow-lg transition">
                    <div class="service-icon text-[#941e28] text-4xl mb-4 text-primary">
                        <i :class="prestation.icon"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">{{ prestation.title }}</h3>
                    <p class="text-gray-600 mb-4">{{ prestation.description }}</p>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        <li class="flex items-center" v-for="item in prestation.list" :key="item"><i class="fas fa-check text-[#941e28] mr-2"></i> {{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const prestations = [
  {
    title: 'Immobilier',
    description: 'Clips immobiliers percutants pour valoriser vos biens avec esthétisme et efficacité.',
    icon: 'fas fa-home',
    list: [
      'Mise en valeur visuelle du bien',
      'Prises de vues aériennes (drone)',
      'Montage rythmé et attractif',
      'Habillage graphique sobre'
    ]
  },
  {
    title: 'Formule DUO',
    description: 'Une formule complète avec un photographe et un vidéaste, pour des souvenirs riches, vivants et parfaitement coordonnés.',
    icon: 'fas fa-heart',
    list: [
      'Captation discrète et naturelle',
      'Émotion au cœur du montage',
      'Séquences drone & slow motion',
      'Livraison sur clé USB personnalisée'
    ]
  },
  {
    title: 'Corporate',
    description: 'Vidéos professionnelles pour valoriser votre activité et renforcer votre image de marque.',
    icon: 'fas fa-briefcase',
    list: [
      'Pitch entreprise dynamique',
      'Interviews dirigées & scriptées',
      'Motion design & sous-titrage',
      'Livraison multi-format web'
    ]
  },
  {
    title: 'Événements',
    description: 'Réalisation de formats longs racontant vos histoires avec authenticité et profondeur.',
    icon: 'fas fa-video',
    list: [
      'Écriture & narration soignée',
      'Interviews immersives',
      'Tournage multi-caméras',
      'Montage narratif fluide'
    ]
  },
  {
    title: 'Prestation drone',
    description: 'Vue aérienne spectaculaire pour enrichir vos contenus visuels professionnels.',
    icon: 'fas fa-plane',
    list: [
      'Prises de vues 4K stabilisées',
      'Plans cinématiques personnalisés',
      'Drone homologué & assuré',
      'Pilote certifié DGAC'
    ]
  },
  {
    title: 'Contenu sur Mesure',
    description: 'Solutions créatives adaptées à vos besoins spécifiques et à votre budget.',
    icon: 'fas fa-lightbulb',
    list: [
      'Accompagnement sur-mesure',
      'Création de script original',
      'Adaptation à votre cible',
      'Production clé en main'
    ]
  }
]

</script>

<style scoped>
    .service-card {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .service-icon {
        transition: all 0.3s ease;
    }
    
    .service-card:hover {
        transform: scale(1.05);
        color: #941E28;
    }
    
    .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(148,30,40,0.1) 0%, rgba(255,255,255,0) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .service-card:hover::before {
        opacity: 1;
    }
</style>