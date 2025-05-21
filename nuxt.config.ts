// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  dir: {
    public: 'public'
  },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/test-utils', '@nuxt/ui', '@nuxt/content', '@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // nitro: {
  //   devProxy: {
  //     '/server': {
  //       target: 'http://localhost:3001',
  //       changeOrigin: true,
  //       prependPath: false
  //     }
  //   }
  // },
  nitro: {
    routeRules: {
      '/api/': { 
        proxy: { 
          to: 'http://localhost:3001/api/' // make sure this is an ENV driven variable if production does not match
        }
      }
    }
  },
components: [
  { path: '~/components', pathPrefix: true },
  { path: '~/components/home', pathPrefix: false },
  { path: '~/components/PageRealisation', pathPrefix: false },
  { path: '~/components/PagePrestation', pathPrefix: false },
]
})