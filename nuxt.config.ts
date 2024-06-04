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
  }
})