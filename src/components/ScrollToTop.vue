<template>
  <button 
    @click="scrollToTop" 
    class="scroll-to-top"
    :class="{ visible: isVisible }"
    title="Kembali ke atas"
  >
    <i class="bi bi-arrow-up"></i>
  </button>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.toggleVisibility);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.toggleVisibility);
  },
  methods: {
    toggleVisibility() {
      this.isVisible = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  background-color: var(--bs-primary);
  color: white;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
}

.scroll-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
</style>