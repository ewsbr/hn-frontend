export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:rendered', ctx => {
    ctx.ssrContext?.event.node.res.setHeader('cache-control', `max-age=180, private`)
  })
})