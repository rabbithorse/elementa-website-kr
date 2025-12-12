export default {
  beforeMount(el) {
    el.style.overflow = 'hidden';
    if (!el.dataset.accordionPrepared) {
      el.style.height = '0px';
      el.style.opacity = '0';
      el.style.transform = 'translateY(0)'; 
      el.dataset.accordionPrepared = 'true';
    }
  },

  updated(el, binding) {
    const isOpen = binding.value;

    if (isOpen) {
      const scrollHeight = el.scrollHeight;

      const rect = el.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const openUpward = spaceBelow < scrollHeight;

      if (openUpward) {
        el.style.transition = 'height .3s ease, opacity .3s ease, transform .3s ease';
        el.style.transform = `translateY(-${scrollHeight}px)`;
        el.style.height = scrollHeight + 'px';
        el.style.opacity = '1';

        // setTimeout(() => {
        //   el.style.height = 'auto';
        //   el.style.transform = 'translateY(0)';
        //   el.style.transition = '';
        // }, 300);
      } 
      else {
        el.style.transition = 'height .3s ease, opacity .3s ease';
        el.style.height = scrollHeight + 'px';
        el.style.opacity = '1';

        setTimeout(() => {
          el.style.height = 'auto';
          el.style.transition = '';
        }, 300);
      }
    } else {

      const height = el.scrollHeight;

      el.style.height = height + 'px';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';

      requestAnimationFrame(() => {
        el.style.transition = 'height .3s ease, opacity .3s ease, transform .3s ease';
        el.style.height = '0px';
        el.style.opacity = '0';
        el.style.transform = 'translateY(0)';
      });
    }
  }
}
