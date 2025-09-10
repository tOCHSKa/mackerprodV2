export default defineEventHandler(async (event) => {
    const parts = await readMultipartFormData(event)
  
    let photo, titre, id_albums
  
    // Extraction des données du multipart
    for (const part of parts) {
      if (part.name === 'photo') {
        photo = part
      }
      if (part.name === 'titre') {
        titre = part.data.toString()
      }
      if (part.name === 'id_albums') {
        id_albums = parseInt(part.data.toString(), 10)
      }
    }
  
    const token = getHeader(event, 'authorization')
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
      })
    }
  
    // Création du FormData à envoyer vers le backend
    const backendForm = new FormData()
    backendForm.append('photo', new Blob([photo.data]), photo.filename)
    backendForm.append('titre', titre)
    backendForm.append('id_albums', id_albums)
  
    try {
      const response = await $fetch('http://localhost:3001/api/photo/create', {
        method: 'POST',
        body: backendForm,
        headers: {
          Authorization: token
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
  