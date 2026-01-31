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
                            <label for="nom_expediteur" class="block mb-2">Votre nom</label>
                            <input v-model="state.nom_expediteur" type="text" id="nom_expediteur"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        </div>
                        <div v-if="errors.nom_expediteur && isClicked" class="text-red-500 mt-2">
                            {{ errors.nom_expediteur }}
                        </div>
                        <div>
                            <label for="email_expediteur" class="block mb-2">Votre email</label>
                            <input v-model="state.email_expediteur" type="email" id="email_expediteur"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        </div>
                        <div v-if="errors.email_expediteur && isClicked" class="text-red-500 mt-2">
                            {{ errors.email_expediteur }}
                        </div>
                        <div>
                            <label for="entreprise" class="block mb-2">Votre entreprise</label>
                            <input v-model="state.entreprise" type="text" id="entreprise"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        </div>
                        <div v-if="errors.entreprise && isClicked" class="text-red-500 mt-2">
                            {{ errors.entreprise }}
                        </div>
                        <div>
                            <label for="phone" class="block mb-2">Votre téléphone</label>
                            <input v-model="state.numero_telephone" type="phone" id="phone"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        </div>
                        <div v-if="errors.numero_telephone && isClicked" class="text-red-500 mt-2">
                            {{ errors.numero_telephone }}
                        </div>
                        <div>
                            <label for="service" class="block mb-2">Type de projet</label>
                            <select v-model="state.service" id="service"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                                <option value="">Sélectionnez une option</option>
                                <option value="event">Événement</option>
                                <option value="mariage">Mariage</option>
                                <option value="immobilier">Immobilier</option>
                                <option value="corporate">Corporate</option>
                                <option value="interview">Interview</option>
                                <option value="publicité">Publicité</option>
                            </select>
                        </div>
                        <div v-if="errors.service && isClicked" class="text-red-500 mt-2">
                            {{ errors.service }}
                        </div>
                        <div>
                            <label for="message" class="block mb-2">Votre message</label>
                            <textarea v-model="state.message" id="message" rows="5"
                                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                        </div>
                        <div v-if="errors.message && isClicked" class="text-red-500 mt-2">
                            {{ errors.message }}
                        </div>
                        <div v-if="!isSuccess" class="text-red-500 mt-2">
                            <button @click.prevent="handleSubmit"
                                class="w-full bg-[#941E28] hover:bg-white text-white hover:text-[#941E28] font-bold px-6 py-4 rounded-lg
                                transition ease-in-out duration-300 cursor-pointer"
                               >Envoyer
                                le message</button>
                        </div>
                        <div v-else>
                               <button class="w-full bg-[#941E28] hover:bg-white text-white hover:text-[#941E28] font-bold px-6 py-4 rounded-lg
                                transition ease-in-out duration-300 cursor-not-allowed"
                               >Message envoyé avec succès !</button> 
                        </div>
                        <Toast :message="toastMessage" v-if="isSuccess" />
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
                                    <p>59400 CAMBRAI, France</p>
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
                                    <p>+33 07 49 43 73 69</p>
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
                                <NuxtLink to="https://www.youtube.com/@MackerPROD" target="_blank" rel="noopener noreferrer" class="text-white fa-xl hover:scale-125 transition-transform duration-300 ease-in-out">
                                    <i class="fab fa-youtube"></i>
                                </NuxtLink>
                                <NuxtLink to="https://www.linkedin.com/in/mickael-descheemacker-986463166/" target="_blank" rel="noopener noreferrer" class="text-white fa-xl hover:scale-125 transition-transform duration-300 ease-in-out">
                                    <i class="fab fa-linkedin-in"></i>
                                </NuxtLink>
                                <NuxtLink to="https://www.facebook.com/Mackerprod" target="_blank" rel="noopener noreferrer" class="text-white fa-xl hover:scale-125 transition-transform duration-300 ease-in-out">
                                    <i class="fab fa-facebook"></i>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'
const recaptcha = useReCaptcha()

const getInitialState = () => ({
  nom_expediteur: '',
  email_expediteur: '',
  numero_telephone: '',
  service: '',
  message: '',
  entreprise: '',
  date_envoi: new Date().toLocaleString(),
})

const getInitialErrors = () => ({
  nom_expediteur: '',
  email_expediteur: '',
  numero_telephone: '',
  service: '',
  message: '',
  entreprise: '',
})

const state = reactive(getInitialState())
const errors = ref(getInitialErrors())
const isSuccess = ref(false)
const isClicked = ref(false)

const validateForm = () => {
  errors.value = getInitialErrors()
  let isValid = true

  if (!state.nom_expediteur) {
    errors.value.nom_expediteur = 'Le nom est obligatoire'
    isValid = false
  }
  if (!state.email_expediteur) {
    errors.value.email_expediteur = 'L\'email est obligatoire'
    isValid = false
  }
  if (!state.numero_telephone) {
    errors.value.numero_telephone = 'Le numéro de téléphone est obligatoire'
    isValid = false
  }
  if (!state.entreprise) {
    errors.value.entreprise = 'L\'entreprise est obligatoire'
    isValid = false
  }
  if (!state.message) {
    errors.value.message = 'Le message est obligatoire'
    isValid = false
  }
  if (!state.service) {
    errors.value.service = 'Le service est obligatoire'
    isValid = false
  }

  return isValid
}
const toastMessage = ref('')
const handleSubmit = async () => {
  isClicked.value = true

  if (!validateForm()) return

  try {
    // ⭐ Récupération du token reCAPTCHA
    await recaptcha?.recaptchaLoaded()
    const token = await recaptcha.executeRecaptcha('contact_form')

    await $fetch('/api/message/add', {
      method: 'POST',
      body: { 
        ...state,
        recaptchaToken: token  // ⭐ On envoie le token au backend
      },
    })

    isSuccess.value = true
    Object.assign(state, getInitialState())
    toastMessage.value = 'Message envoyé avec succès !'

    setTimeout(() => {
      isSuccess.value = false
    }, 3000)

  } catch (error) {
    console.error('Erreur lors de l’envoi :', error)
    toastMessage.value = 'Erreur lors de l’envoi du message !'
  }
}


</script>

<style>
  
</style>