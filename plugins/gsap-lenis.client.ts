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
    autoRaf: true,
    duration: 1.2,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    prevent: (node) => {
    // Swiper 관련 요소는 Lenis가 터치 이벤트 처리하지 않음
    return node.classList.contains('swiper') || 
           node.closest('.swiper') !== null ||
           node.classList.contains('swiper-wrapper') ||
           node.classList.contains('swiper-slide')
    }
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