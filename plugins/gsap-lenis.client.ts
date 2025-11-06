// plugins/gsap-lenis.client.ts
import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
  // 플러그인 등록
  gsap.registerPlugin(ScrollTrigger)

  // Lenis 초기화
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })

  // Lenis RAF 루프 → ScrollTrigger와 동기화
  function raf(time: number) {
    lenis.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // 전역 주입 (컴포넌트에서 $gsap, $lenis로 접근)
  nuxtApp.provide('gsap', gsap)
  nuxtApp.provide('lenis', lenis)
})