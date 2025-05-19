export default defineEventHandler(async () => {
  try {
    const response = await $fetch('http://localhost:3001/api/users/', {
      method: 'GET'
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
