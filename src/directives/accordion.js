export default {
  beforeMount(el) {
    el.style.overflow = 'hidden'
    if (!el.dataset.accordionPrepared) {
      el.style.height = '0px'
      el.style.opacity = '0'
      el.dataset.accordionPrepared = 'true'
    }
  },

  updated(el, binding) {
    const isOpen = binding.value

    if (isOpen) {
      // 열릴 때
      const scrollHeight = el.scrollHeight

      el.style.transition = 'height .3s ease, opacity .3s ease'
      el.style.height = scrollHeight + 'px'
      el.style.opacity = '1'

      setTimeout(() => {
        el.style.height = 'auto'
        el.style.transition = ''
      }, 300)
    } else {
      // 닫힐 때
      const height = el.scrollHeight

      el.style.height = height + 'px'
      el.style.opacity = '1'

      requestAnimationFrame(() => {
        el.style.transition = 'height .3s ease, opacity .3s ease'
        el.style.height = '0px'
        el.style.opacity = '0'
      })
    }
  }
}