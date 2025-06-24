<template>
   <!-- Section Preuves Sociales - Avis Clients -->
   <section id="avis" class="py-20 bg-gray-100">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-4">ILS M'ONT FAIT <span class="text-accent">CONFIANCE</span></h2>
            <p class="text-center max-w-2xl mx-auto mb-12">Leurs mots, leurs expériences, leurs satisfactions.</p>

            <!-- Bannière de logos clients -->
            <div class="mb-16 rounded-lg overflow-hidden">
                <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/4tech.svg" alt="4tech">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/dimmobilier.svg" alt="dim mobilier">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/foxhabitat.svg" alt="foxhabitat">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/liujo.svg" alt="liujo">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/steloi.svg" alt="steloi">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/4tech.svg" alt="4tech">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/dimmobilier.svg" alt="dim mobilier">
                        </div>                        
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/foxhabitat.svg" alt="foxhabitat">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/liujo.svg" alt="liujo">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/steloi.svg" alt="steloi">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/4tech.svg" alt="4tech">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/dimmobilier.svg" alt="dim mobilier">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/foxhabitat.svg" alt="foxhabitat">
                        </div>
                        <div class="slide">
                            <img src="https://tochska.github.io/assets-mackerprod/liujo.svg" alt="liujo">
                        </div>
                    </div>
                </div>
            </div>
            <SliderAvis />
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