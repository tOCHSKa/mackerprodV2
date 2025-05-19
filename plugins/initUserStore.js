import { useAdminStore } from '~/store/adminStore'
export default defineNuxtPlugin(() => {
    const adminStore = useAdminStore()
    adminStore.initializeStore()
  })