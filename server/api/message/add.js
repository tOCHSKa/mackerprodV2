export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // Récupération du token envoyé depuis le front
    const recaptchaToken = body.recaptchaToken
    if (!recaptchaToken) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Token reCAPTCHA manquant'
        })
    }

    // Vérification reCAPTCHA (obligatoire)
    const secretKey = process.env.RECAPTCHA_SECRET_KEY

    try {
        const verification = await $fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            body: new URLSearchParams({
                secret: secretKey,
                response: recaptchaToken,
            })
        })

        // Analyse du score Google (0 → mauvais / 1 → excellent)
        if (!verification.success || verification.score < 0.5) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Échec reCAPTCHA'
            })
        }
    } catch (error) {
        console.error('Erreur reCAPTCHA:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Erreur interne reCAPTCHA'
        })
    }

    // Suppression du token avant proxy (inutile pour ton backend)
    delete body.recaptchaToken

    // Proxy vers ton backend Node
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
