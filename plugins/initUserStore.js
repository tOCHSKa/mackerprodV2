import { useAdminStore } from '~/store/adminStore'
import { useUtilisateurStore } from '~/store/utilisateurStore'
export default defineNuxtPlugin(() => {
    const adminStore = useAdminStore()
    adminStore.initializeStore()
    const utilisateurStore = useUtilisateurStore()
    utilisateurStore.initializeStore()
  })