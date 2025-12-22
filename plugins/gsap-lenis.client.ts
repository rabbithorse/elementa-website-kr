// plugins/gsap-lenis.client.ts
import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const router = useRouter();

  router.afterEach(async () => {
    await nextTick();

    const { $lenis } = useNuxtApp();

    if (!$lenis) return;

    requestAnimationFrame(() => {
      $lenis.scrollTo(0, { immediate: true });
    });
  });

  ScrollTrigger.normalizeScroll({
    momentum: 0.08,
    allowNestedScroll: true,
    lockAxis: true,
  })

  // Lenis 초기화
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })

  function raf(time: number) {
    lenis.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  nuxtApp.provide('gsap', gsap)
  nuxtApp.provide('ScrollTrigger', ScrollTrigger)
  nuxtApp.provide('lenis', lenis)
})