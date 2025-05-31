export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const response = await $fetch('http://localhost:3001/api/message/add', {
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
    