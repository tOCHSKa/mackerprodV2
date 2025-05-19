import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'


export const useUserStore = defineStore('user', {
    state: () => ({
        email: null,
        role: null,
        token: null,
        isAuthenticated: false
    }),

    actions: {
        initializeStore() {
            // Récupérer les données du localStorage au chargement
            const userData = localStorage.getItem('user')
            if (userData) {
                const parsed = JSON.parse(userData)
                this.setUser(parsed)
            }
        },

        setUser(userData) {
            const decoded = jwtDecode(userData.token)
            
            this.email = decoded.email
            this.role = decoded.role
            this.token = userData.token
            this.isAuthenticated = true
          
            localStorage.setItem('user', JSON.stringify({
              email: this.email,
              role: this.role,
              token: this.token
            }))
          },

        async login(credentials) {
            try {
                const response = await $fetch('/api/user/login', {
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
            
            // Nettoyer le localStorage
            localStorage.removeItem('user')
        }
    },

    getters: {
        // Getters utiles
        isAdmin: (state) => state.role === 'admin',
        userEmail: (state) => state.email,
        authToken: (state) => state.token
    }
})