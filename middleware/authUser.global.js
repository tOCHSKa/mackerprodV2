import { useUtilisateurStore } from "~/store/utilisateurStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const utilisateurStore = useUtilisateurStore()
    utilisateurStore.initializeStore()

        // Protège seulement les routes qui utilisent le layout 'admin'
    if (to.meta.layout === 'user') {
      if (!utilisateurStore.isAuthenticated || utilisateurStore.role !== 'user') {
        return navigateTo('/login')
      }
    }
  })
  