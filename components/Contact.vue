<template>
    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-[#1a2026] text-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-[#941e20] text-center mb-4">CONTACTEZ-<span class="text-white">MOI</span></h2>
            <p class="text-center max-w-2xl mx-auto mb-12">Vous avez un projet vidéo ? Parlons-en ! Je suis à votre
                écoute pour concrétiser vos idées et créer un contenu qui vous ressemble.</p>

            <div class="flex flex-col lg:flex-row gap-12">
                <div class="lg:w-1/2">
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block mb-2">Votre nom</label>
                            <input type="text" id="name"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        </div>

                        <div>
                            <label for="email" class="block mb-2">Votre email</label>
                            <input type="email" id="email"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        </div>

                        <div>
                            <label for="service" class="block mb-2">Type de projet</label>
                            <select id="service"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                                <option value="">Sélectionnez une option</option>
                                <option value="clip">Clip musical</option>
                                <option value="mariage">Mariage/Événement</option>
                                <option value="pub">Publicité/Marque</option>
                                <option value="docu">Documentaire</option>
                                <option value="corporate">Vidéo corporate</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>

                        <div>
                            <label for="message" class="block mb-2">Votre message</label>
                            <textarea id="message" rows="5"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                        </div>

                        <button type="submit"
                            class="w-full bg-[#941e20] hover:bg-white text-white hover:text-[#941e20] font-bold px-6 py-4 rounded-lg transition cursor-pointer">Envoyer
                            le message</button>
                    </form>
                </div>

                <div class="lg:w-1/2">
                    <div class="bg-gray-800 p-8 rounded-lg h-full">
                        <h3 class="text-xl font-bold mb-6">COORDONNÉES</h3>

                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="text-accent mr-4 mt-1">
                                    <i class="fas fa-map-marker-alt text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-1">Adresse</h4>
                                    <p>637 GRANDE RUE VERTE<br>59400 CAMBRAI, France</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="text-accent mr-4 mt-1">
                                    <i class="fas fa-envelope text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-1">Email</h4>
                                    <p>contact@mackerprod.com</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="text-accent mr-4 mt-1">
                                    <i class="fas fa-phone-alt text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-1">Téléphone</h4>
                                    <p>+33 6 12 34 56 78</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="text-accent mr-4 mt-1">
                                    <i class="fas fa-clock text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold mb-1">Horaires</h4>
                                    <p>Sur rendez-vous</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <h4 class="font-bold mb-4">SUIVEZ-MOI</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="text-white hover:text-accent transition"><i
                                        class="fab fa-facebook text-2xl"></i></a>
                                <a href="#" class="text-white hover:text-accent transition"><i
                                        class="fab fa-youtube text-2xl"></i></a>
                                <a href="#" class="text-white hover:text-accent transition"><i
                                        class="fab fa-linkedin-in text-2xl"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style>
  
</style>