import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import { useCookie } from '#app'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    email: null,
    role: null,
    token: null,
    isAuthenticated: false
  }),

  actions: {
    initializeStore() {
      const tokenCookie = useCookie('token')
      const token = tokenCookie.value

      if (token) {
        this.setUser({ token })
      }
    },

    setUser(userData) {
      const decoded = jwtDecode(userData.token)

      this.email = decoded.email
      this.role = decoded.role
      this.token = userData.token
      this.isAuthenticated = true

      const tokenCookie = useCookie('token')
      tokenCookie.value = userData.token
    },

    async loginAdmin(credentials) {
      try {
        const response = await $fetch('/api/admin/login', {
          method: 'POST',
          body: credentials
        })

        this.setUser(response)
        return true
      } catch (error) {
        console.error('Erreur de connexion:', error)
        return false
      }
    },

    logout() {
      this.email = null
      this.role = null
      this.token = null
      this.isAuthenticated = false

      const tokenCookie = useCookie('token')
      tokenCookie.value = null
    }
  },

  getters: {
    isAdmin: (state) => state.role === 'admin',
    userEmail: (state) => state.email,
    authToken: (state) => state.token
  }
})
