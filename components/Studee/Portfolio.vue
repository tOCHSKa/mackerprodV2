  <template>
  <!-- Portfolio Section -->
    <section id="portfolio" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="title-font text-3xl md:text-4xl font-bold text-center mb-12 text-rose">Mes Albums</h2>

            <!-- Albums Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Album 1 -->
                <div class="album-card relative rounded-xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt="Portraits Intimes" class="w-full h-64 object-cover">
                    <div
                        class="album-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0">
                        <button onclick="openCarousel('portraits')"
                            class="rose-fonce hover:rose-sombre text-white px-6 py-2 rounded-full font-medium transition">Voir
                            l'album</button>
                    </div>
                    <div class="p-4 rose-pale">
                        <h3 class="title-font text-xl font-semibold">Portraits Intimes</h3>
                        <p class="text-sm">Une collection de regards et d'émotions capturés</p>
                    </div>
                </div>

                <!-- Album 2 -->
                <div class="album-card relative rounded-xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
                        alt="Noches Enchantées" class="w-full h-64 object-cover">
                    <div
                        class="album-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0">
                        <button onclick="openCarousel('noches')"
                            class="rose-fonce hover:rose-sombre text-white px-6 py-2 rounded-full font-medium transition">Voir
                            l'album</button>
                    </div>
                    <div class="p-4 rose-pale">
                        <h3 class="title-font text-xl font-semibold">Noches Enchantées</h3>
                        <p class="text-sm">Mariages et moments d'amour éternisés</p>
                    </div>
                </div>

                <!-- Album 3 -->
                <div class="album-card relative rounded-xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Horizons Oniriques" class="w-full h-64 object-cover">
                    <div
                        class="album-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0">
                        <button onclick="openCarousel('horizons')"
                            class="rose-fonce hover:rose-sombre text-white px-6 py-2 rounded-full font-medium transition">Voir
                            l'album</button>
                    </div>
                    <div class="p-4 rose-pale">
                        <h3 class="title-font text-xl font-semibold">Horizons Oniriques</h3>
                        <p class="text-sm">Paysages qui semblent sortis d'un rêve</p>
                    </div>
                </div>

                <!-- Album 4 -->
                <div class="album-card relative rounded-xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt="Instants Urbains" class="w-full h-64 object-cover">
                    <div
                        class="album-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0">
                        <button onclick="openCarousel('urbains')"
                            class="rose-fonce hover:rose-sombre text-white px-6 py-2 rounded-full font-medium transition">Voir
                            l'album</button>
                    </div>
                    <div class="p-4 rose-pale">
                        <h3 class="title-font text-xl font-semibold">Instants Urbains</h3>
                        <p class="text-sm">La ville et ses habitants sous un nouvel angle</p>
                    </div>
                </div>

                <!-- Album 5 -->
                <div class="album-card relative rounded-xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt="Silhouettes" class="w-full h-64 object-cover">
                    <div
                        class="album-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0">
                        <button onclick="openCarousel('silhouettes')"
                            class="rose-fonce hover:rose-sombre text-white px-6 py-2 rounded-full font-medium transition">Voir
                            l'album</button>
                    </div>
                    <div class="p-4 rose-pale">
                        <h3 class="title-font text-xl font-semibold">Silhouettes</h3>
                        <p class="text-sm">Formes et mouvements dans la lumière</p>
                    </div>
                </div>

                <!-- Album 6 -->
                <div class="album-card relative rounded-xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Nature Florale" class="w-full h-64 object-cover">
                    <div
                        class="album-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0">
                        <button onclick="openCarousel('florale')"
                            class="rose-fonce hover:rose-sombre text-white px-6 py-2 rounded-full font-medium transition">Voir
                            l'album</button>
                    </div>
                    <div class="p-4 rose-pale">
                        <h3 class="title-font text-xl font-semibold">Nature Florale</h3>
                        <p class="text-sm">La beauté éphémère des fleurs capturée</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </template>

        <!-- <script setup>
        // Fonctions pour le carrousel
        function openCarousel(album) {
            document.getElementById(`${album}-carousel`).classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            updateCounter(`${album}-inner`, `${album}-counter`);
        }

        function closeCarousel() {
            document.querySelectorAll('[id$="-carousel"]').forEach(el => el.classList.add('hidden'));
            document.body.style.overflow = '';
        }

        function prevSlide(carouselId) {
            const carousel = document.getElementById(carouselId);
            carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
            setTimeout(() => updateCounter(carouselId, carouselId.replace('-inner', '-counter')), 300);
        }

        function nextSlide(carouselId) {
            const carousel = document.getElementById(carouselId);
            carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
            setTimeout(() => updateCounter(carouselId, carouselId.replace('-inner', '-counter')), 300);
        }

        function updateCounter(carouselId, counterId) {
            const carousel = document.getElementById(carouselId);
            const scrollPos = carousel.scrollLeft;
            const itemWidth = carousel.scrollWidth / carousel.children.length;
            const currentItem = Math.round(scrollPos / itemWidth) + 1;
            document.getElementById(counterId).textContent = `${currentItem}/${carousel.children.length}`;
        }

        // Initialisation des carrousels
        document.addEventListener('DOMContentLoaded', () => {
            // Ajout d'événements pour les flèches du clavier
            document.addEventListener('keydown', (e) => {
                const openCarousel = document.querySelector('[id$="-carousel"]:not(.hidden)');
                if (!openCarousel) return;

                const carouselId = openCarousel.id.replace('-carousel', '-inner');

                if (e.key === 'ArrowLeft') {
                    prevSlide(carouselId);
                } else if (e.key === 'ArrowRight') {
                    nextSlide(carouselId);
                } else if (e.key === 'Escape') {
                    closeCarousel();
                }
            });

            // Ajout d'images supplémentaires aux carrousels (pour la démo)
            const albums = {
                'portraits': [
                    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                ],
                'noches': [
                    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                ],
                'horizons': [
                    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                    'https://images.unsplash.com/photo-1505142468610-359eebb67d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
                ]
            };

            for (const [album, images] of Object.entries(albums)) {
                const carousel = document.getElementById(`${album}-inner`);
                images.forEach(img => {
                    const div = document.createElement('div');
                    div.className = 'carousel-item flex-shrink-0 w-full max-w-4xl';
                    div.innerHTML = `<img src="${img}" class="w-full h-auto max-h-[70vh] object-contain" alt="${album}">`;
                    carousel.appendChild(div);
                });

                // Mise à jour des compteurs
                const counter = document.getElementById(`${album}-counter`);
                counter.textContent = `1/${carousel.children.length}`;
            }
        });
    </script> -->
