export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const token = getHeader(event, 'authorization')
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
      })
    }
    try {
      const response = await $fetch('http://localhost:3001/api/album/add', {
        method: 'POST',
        body,
        headers: {
          Authorization: token || ''
        }
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
  