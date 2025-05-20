<template>
 <!-- Projects Filter -->
    <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button class="font-medium text-white cursor-pointer filter-btn px-6 py-2 rounded-full border border-gray-300 bg-[#941e28] hover:bg-black" active data-filter="all">Tous les projets</button>
                <button class="cursor-pointer filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-[#941e28]" data-filter="clip">Clips musicaux</button>
                <button class="cursor-pointer filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-[#941e28]" data-filter="wedding">Mariages</button>
                <button class="cursor-pointer filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-[#941e28]" data-filter="corporate">Corporate</button>
                <button class="cursor-pointer filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-[#941e28]" data-filter="ad">Publicités</button>
                <button class="cursor-pointer filter-btn px-6 py-2 rounded-full border border-gray-300 hover:bg-[#941e28]" data-filter="event">Événements</button>
            </div>

            <!-- Projects Grid -->
            <div id="all-projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Projet 1 - Clip -->
                <div class="project-card clip" data-category="clip">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="video-thumbnail relative h-64 overflow-hidden" style="background: url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') center/cover;">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">"Rêves Électriques" - DJ Kael</h3>
                                <span class="bg-accent text-white text-xs px-2 py-1 rounded">Clip musical</span>
                            </div>
                            <p class="text-gray-600 mb-4">Clip énergique tourné en boîte de nuit avec des effets lumineux synchronisés sur la musique électro.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">2023</span>
                                <button class="text-accent hover:underline view-details" data-project="1">Voir les détails</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 2 - Mariage -->
                <div class="project-card wedding" data-category="wedding">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="video-thumbnail relative h-64 overflow-hidden" style="background: url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80') center/cover;">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">Mariage - Sophie & Thomas</h3>
                                <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded">Mariage</span>
                            </div>
                            <p class="text-gray-600 mb-4">Film de mariage émouvant capturé au Château de Chambord, avec des moments intimes et naturels.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">2023</span>
                                <button class="text-accent hover:underline view-details" data-project="2">Voir les détails</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 3 - Corporate -->
                <div class="project-card corporate" data-category="corporate">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="video-thumbnail relative h-64 overflow-hidden" style="background: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') center/cover;">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">Innovatech Solutions</h3>
                                <span class="bg-green-500 text-white text-xs px-2 py-1 rounded">Corporate</span>
                            </div>
                            <p class="text-gray-600 mb-4">Vidéo institutionnelle présentant les innovations technologiques de cette entreprise leader.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">2023</span>
                                <button class="text-accent hover:underline view-details" data-project="3">Voir les détails</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 4 - Publicité -->
                <div class="project-card ad" data-category="ad">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="video-thumbnail relative h-64 overflow-hidden" style="background: url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') center/cover;">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">Campagne "L'Essentiel" - L'Oréal</h3>
                                <span class="bg-purple-500 text-white text-xs px-2 py-1 rounded">Publicité</span>
                            </div>
                            <p class="text-gray-600 mb-4">Spot publicitaire mettant en avant une nouvelle gamme de produits de beauté naturels.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">2022</span>
                                <button class="text-accent hover:underline view-details" data-project="4">Voir les détails</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 5 - Événement -->
                <div class="project-card event" data-category="event">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="video-thumbnail relative h-64 overflow-hidden" style="background: url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') center/cover;">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">Festival des Arts Numériques</h3>
                                <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded">Événement</span>
                            </div>
                            <p class="text-gray-600 mb-4">Couverture vidéo complète du festival avec interviews d'artistes et captation des installations.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">2022</span>
                                <button class="text-accent hover:underline view-details" data-project="5">Voir les détails</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projet 6 - Clip -->
                <div class="project-card clip" data-category="clip">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div class="video-thumbnail relative h-64 overflow-hidden" style="background: url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80') center/cover;">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-bold">"Loin d'ici" - Clara M.</h3>
                                <span class="bg-accent text-white text-xs px-2 py-1 rounded">Clip musical</span>
                            </div>
                            <p class="text-gray-600 mb-4">Clip intimiste tourné en extérieur avec une esthétique cinématographique pour cette chanson folk.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-sm text-accent font-medium">2022</span>
                                <button class="text-accent hover:underline view-details" data-project="6">Voir les détails</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <a href="index.html#contact" class="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full font-medium transition">Discuter d'un projet</a>
            </div>
        </div>
    </section>

</template>

<script setup>


</script>