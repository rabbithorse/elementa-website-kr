import { defineNuxtConfig } from "nuxt/config";

// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true,
  },
  ssr: true,
  app: {
    head: {
      title: 'Elementa',
      meta: [
        { name: 'description', content: 'Elementa' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    }
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/sub.css',
    '~/assets/css/tailwind.css',
    '~/assets/css/fonts.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image',
  ],
  image: {
    // 이미지 모듈 설정
    quality: 80,
    format: ['webp', 'jpg', 'png'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  }
})