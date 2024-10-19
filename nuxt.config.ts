// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', 'nuxt-time'],
  css: ['~/assets/css/main.css'],

  ui: {
    icons: ['mdi', 'heroicons'],
  },

  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },

  runtimeConfig: {
    public: {
      projectName: '',
      apiBase: '',
      basePath: ''
    }
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    }
  },

  compatibilityDate: '2024-07-15',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
})