<template>
   <section class="auth-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div class="auth-card bg-white rounded-lg overflow-hidden">

                <!-- Login Form -->
                <div id="login-form" class="p-8">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-gray-900">Content de vous revoir</h2>
                        <p class="mt-2 text-sm text-gray-600">Accédez à votre espace client MackerProd</p>
                    </div>
                    <form @submit.prevent="onSubmit" class="mt-8 space-y-6">
                        <div class="rounded-md space-y-4">
                            <div>
                                <label for="login-email" class="sr-only">Email</label>
                                <input id="login-email" name="email" type="email" autocomplete="email" required v-model="state.email"
                                    class="input-field appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                                    placeholder="Adresse email">
                            </div>
                            <div>
                                <label for="login-password" class="sr-only">Mot de passe</label>
                                <input id="login-password" name="password" type="password" autocomplete="current-password" v-model="state.password"
                                    required
                                    class="input-field appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                                    placeholder="Mot de passe">
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                    class="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded">
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                    Se souvenir de moi
                                </label>
                            </div>

                            <div class="text-sm">
                                <a href="#" class="font-medium text-accent hover:text-red-800">
                                    Mot de passe oublié?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                class="cursor-pointer group relative w-full flex justify-center py-3 px-4 border
                                border-transparent text-sm font-medium rounded-lg text-white bg-accent
                                hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition
                                hover:scale-105 duration-300 ease-in-out">
                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <i class="fas fa-sign-in-alt"></i>
                                </span>
                                Se connecter
                            </button>
                        </div>
                    </form>

                    <div class="mt-6">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 bg-white text-gray-500">
                                    Ou connectez-vous avec
                                </span>
                            </div>
                        </div>

                        <div class="mt-6 grid grid-cols-3 gap-3">
                            <div>
                                <a href="#"
                                    class="cursor-not-allowed social-btn w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <i class="fab fa-facebook-f text-blue-600"></i>
                                </a>
                            </div>

                            <div>
                                <a href="#"
                                    class="cursor-not-allowed  social-btn w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <i class="fab fa-google text-red-600"></i>
                                </a>
                            </div>

                            <div>
                                <a href="#"
                                    class="cursor-not-allowed social-btn w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <i class="fab fa-apple text-gray-900"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

    <script setup>
     import { reactive, ref } from 'vue'
 import { useUtilisateurStore } from '~/store/utilisateurStore'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const utilisateurStore = useUtilisateurStore()

  const errors = ref({
    email: '',
    password: ''
  })

  const state = reactive({
    email: '',
    password: '',
    remember: false
  })

  const onSubmit = async () => {
    console.log('coucou')
    // Reset error messages
    errors.value = { email: '', password: '' }

    // Validation basique
    if (!state.email) {
      errors.value.email = 'L\'email est requis'
      return
    }
    if (!state.password) {
      errors.value.password = 'Le mot de passe est requis'
      return
    }

    try {
      const success = await utilisateurStore.loginUtilisateur({
        email: state.email,
        password: state.password
      })

      if (success) {
        if(utilisateurStore.token){
          if(utilisateurStore.role === 'user'){
            router.push('/profil')
          }else{
            router.push('/loginuser')
          }
        } else {
          errors.value.email = 'Erreur lors de la connexion'
        }
      } else {
        errors.value.email = 'Identifiants incorrects'
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error)
      errors.value.email = 'Une erreur est survenue lors de la connexion'
    }
  }

    </script>
    <style scoped>
        .auth-bg {
            background: linear-gradient(rgba(26, 32, 38, 0.9), rgba(26, 32, 38, 0.9)), url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80');
            background-size: cover;
            background-position: center;
            min-height: 100vh;
        }

        .auth-card {
            transition: all 0.3s ease;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .auth-tab {
            transition: all 0.3s ease;
        }

        .auth-tab.active {
            background-color: #941E28;
            color: white;
        }

        .input-field {
            transition: all 0.3s ease;
        }

        .input-field:focus {
            border-color: #941E28;
            box-shadow: 0 0 0 3px rgba(148, 30, 40, 0.2);
        }

        .text-accent {
        color: #941E28;
         }
        .bg-accent {
        background-color: #941E28;
        }
</style>