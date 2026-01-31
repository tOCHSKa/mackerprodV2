import { defineNuxtPlugin } from '#app'
import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: '6Le5xBosAAAAAKSCKcaa0Rp_UNbls_6j0oSa88Bs',
    loaderOptions: {
      autoHideBadge: true
    }
  })
})
