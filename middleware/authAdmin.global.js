import { useAdminStore } from '~/store/adminStore'

export default defineNuxtRouteMiddleware((to, from) => {
    const adminStore = useAdminStore()
    adminStore.initializeStore()
  
    // Protège seulement les routes qui utilisent le layout 'admin'
    if (to.meta.layout === 'admin') {
      if (!adminStore.isAuthenticated || adminStore.role !== 'admin') {
        return navigateTo('/login')
      }
    }
  })
  