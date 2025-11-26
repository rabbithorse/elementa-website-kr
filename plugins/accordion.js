import accordion from '~/src/directives/accordion.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('accordion', accordion)
})