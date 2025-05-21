<template>
   <!-- Section Preuves Sociales - Avis Clients -->
   <section id="avis" class="py-20 bg-gray-100">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">ILS M'ONT FAIT <span class="text-accent">CONFIANCE</span></h2>
            <p class="text-center max-w-2xl mx-auto mb-12">Découvrez ce que mes clients disent de leur expérience avec MackerProd.</p>

            <!-- Bannière de logos clients -->
            <div class="mb-16 rounded-lg overflow-hidden">
                <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <img src="/assets/svg/4tech.svg" alt="Google">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/dimmobilier.svg" alt="Apple">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/foxhabitat.svg" alt="Amazon">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/liujo.svg" alt="Microsoft">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/4tech.svg" alt="Google">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/dimmobilier.svg" alt="Apple">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/foxhabitat.svg" alt="Amazon">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/liujo.svg" alt="Microsoft">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/4tech.svg" alt="Google">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/dimmobilier.svg" alt="Apple">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/foxhabitat.svg" alt="Amazon">
                        </div>
                        <div class="slide">
                            <img src="/assets/svg/liujo.svg" alt="Microsoft">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Avis Clients -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Avis 1 -->
                <div class="review-card p-6">
                    <div class="flex items-center mb-4">
                        <div class="mr-4">
                            <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/43.jpg" alt="Client">
                        </div>
                        <div>
                            <h4 class="font-bold">Sophie Martin</h4>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"Le film de notre mariage est tout simplement magnifique. MackerProd a su capturer l'émotion de chaque instant avec une sensibilité rare. Nous revivons notre journée à chaque visionnage."</p>
                    <div class="flex items-center text-sm text-gray-500">
                        <i class="fab fa-google mr-2"></i>
                        <span>Google - 15/06/2023</span>
                    </div>
                </div>

                <!-- Avis 2 -->
                <div class="review-card p-6">
                    <div class="flex items-center mb-4">
                        <div class="mr-4">
                            <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client">
                        </div>
                        <div>
                            <h4 class="font-bold">Thomas Leroy</h4>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"Pour le lancement de notre nouvelle collection, nous avons fait appel à MackerProd. Le résultat dépasse nos attentes ! Une esthétique parfaite qui met en valeur nos produits. Professionnalisme et créativité au rendez-vous."</p>
                    <div class="flex items-center text-sm text-gray-500">
                        <i class="fab fa-google mr-2"></i>
                        <span>Google - 02/03/2023</span>
                    </div>
                </div>

                <!-- Avis 3 -->
                <div class="review-card p-6">
                    <div class="flex items-center mb-4">
                        <div class="mr-4">
                            <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/65.jpg" alt="Client">
                        </div>
                        <div>
                            <h4 class="font-bold">Émilie Dubois</h4>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"Le documentaire réalisé sur notre association est une véritable réussite. MackerProd a su comprendre nos valeurs et les retranscrire avec justesse. Un travail d'une grande qualité qui nous aide dans notre communication."</p>
                    <div class="flex items-center text-sm text-gray-500">
                        <i class="fab fa-google mr-2"></i>
                        <span>Google - 22/11/2022</span>
                    </div>
                </div>
            </div>

            <!-- <div class="text-center mt-12">
                <a href="#"
                    class="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full font-medium transition">Lire tous les avis</a>
            </div> -->
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
    /* Animation pour la bannière de logos */
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-250px * 7))}
    }

    .slider {
        background: white;
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
        height: 100px;
        margin: auto;
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    .slider::before,
    .slider::after {
        content: "";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
    }

    .slider::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
    }

    .slider::before {
        left: 0;
        top: 0;
    }

    .slide-track {
        animation: scroll 40s linear infinite;
        display: flex;
        width: calc(250px * 14);
    }

    .slide {
        height: 100px;
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slide img {
        max-height: 70px;
        max-width: 180px;
        filter: grayscale(100%);
        opacity: 0.6;
        transition: all 0.3s ease;
    }

    .slide:hover img {
        filter: grayscale(0%);
        opacity: 1;
    }

    /* Style pour les avis */
    .review-card {
        transition: all 0.3s ease;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .review-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }

    .stars {
        color: #FFD700;
    }
    
    .text-accent {
    color: #941E28;
        }
    .bg-accent {
    background-color: #941E28;
    }
</style>