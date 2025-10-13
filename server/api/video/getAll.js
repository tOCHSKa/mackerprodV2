export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  try {
    // Utilise la variable d'environnement API_BASE définie dans nuxt.config.ts
    const response = await $fetch(`${config.apiBase}/video/getAll`, {
      method: 'GET',
    })
    return response
  } catch (error) {
    console.error('Erreur côté API Nuxt:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la communication avec le serveur',
    })
  }
})
