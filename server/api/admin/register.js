export default defineEventHandler(async () => {
    const body = {
        email: 'admin2@example.com',
        password: 'Password123!',
        confirmedpassword: 'Password123!',
        role: 'admin'
      }
    try {
      // Note le "users" ici 👇
      const response = await $fetch('http://localhost:3001/api/admin/register', {
        method: 'POST',
        body
      })
      return response
    } catch (error) {
      console.error('Erreur côté API Nuxt:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erreur lors de la communication avec le backend'
      })
    }
  })
  