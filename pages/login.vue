<template>
    <Navbar />
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Icon name="fa6-solid:rocket" class="text-red-700" />
            Espace Admin
          </h1>
          <p class="text-md italic text-gray-500">Connectez-vous à votre espace d'administration</p>
        </div>
  
        <form @submit.prevent="onSubmit" class="space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
            <div class="relative">
              <Icon name="fa6-solid:envelope" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="state.email"
                type="email"
                id="email"
                placeholder="votre@email.com"
                class="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>
          </div>
  
          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <div class="relative">
              <Icon name="fa6-solid:lock" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="state.password"
                type="password"
                id="password"
                placeholder="••••••••"
                class="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
            </div>
          </div>
  
          <!-- Remember + Forgot -->
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 text-gray-600">
              <input type="checkbox" v-model="state.remember" class="rounded text-black focus:ring-black" />
              Se souvenir de moi
            </label>
            <a href="#" class="text-red-700 hover:underline">Mot de passe oublié ?</a>
          </div>
  
          <!-- Submit -->
          <button
            type="submit"
            class="w-full cursor-pointer hover:bg-red-500 bg-black text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
          >
            <Icon name="fa6-solid:sign-in-alt" />
            Se connecter
          </button>
        </form>
  
        <div class="text-center mt-6 text-sm text-gray-600 bold italic">
          <p>
            Vous n'avez pas de compte ?
            <a href="#" class="text-red-600 hover:underline">Contactez l'administrateur</a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { reactive } from 'vue'
  import * as z from 'zod'
  
  /**
   * Zod schema for form validation.
   * Validates:
   * - A properly formatted email.
   * - A password with minimum 8 characters, including:
   *   - At least one uppercase letter,
   *   - At least one lowercase letter,
   *   - At least one number,
   *   - At least one special character.
   */
  const schema = z.object({
    email: z.string().email('Email invalide'),
    password: z
      .string()
      .min(8, 'Mot de passe trop court')
      .refine((val) => /[A-Z]/.test(val), {
        message: 'Le mot de passe doit contenir une majuscule'
      })
      .refine((val) => /[a-z]/.test(val), {
        message: 'Le mot de passe doit contenir une minuscule'
      })
      .refine((val) => /[0-9]/.test(val), {
        message: 'Le mot de passe doit contenir un chiffre'
      })
      .refine((val) => /[^A-Za-z0-9]/.test(val), {
        message: 'Le mot de passe doit contenir un caractère spécial'
      })
  })
  
  /**
   * Holds error messages for each form field.
   * Initially empty.
   * Updated only if validation fails.
   */
  const errors = ref({ email: '', password: '' })
  
  /**
   * Reactive state object for form input values.
   * Used for data binding in the template.
   */
  const state = reactive({
    email: '',
    password: '' 
  })
  
  /**
   * Handles form submission.
   * Validates input using the schema.
   * Updates error messages if validation fails.
   * Logs valid form data if validation passes.
   */
  function onSubmit() {
    const result = schema.safeParse(state)
    console.log(result)
  
    // Reset error messages
    errors.value = { email: '', password: '' }
  
    if (!result.success) {
      // Extract field-specific error messages
      const fieldErrors = result.error.flatten().fieldErrors
  
      errors.value.email = fieldErrors.email?.[0] || ''
      errors.value.password = fieldErrors.password?.[0] || ''
      return
    }
  
    console.log('Form submitted with:', result.data)
  }
  </script>