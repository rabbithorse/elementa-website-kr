import { NuxtApp } from '#app'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'
import type { NuxtImageOptions } from '@nuxt/image'

declare module '#app' {
  interface NuxtApp {
    $gsap: typeof gsap
    $lenis: Lenis
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $gsap: typeof gsap
    $lenis: Lenis
  }
}

declare module 'nuxt/schema' {
  interface NuxtConfig {
    image?: NuxtImageOptions
  }
  interface NuxtOptions {
    image?: NuxtImageOptions
  }
}

export {}