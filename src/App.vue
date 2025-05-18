<template>
  <router-view />
  <ScrollToTop />
</template>

<script>
import ScrollToTop from '@/components/ScrollToTop.vue'
export default {
  name: 'App',
  components: {
    ScrollToTop
  },
  mounted() {
    // Scroll to top on route change
    this.$router.afterEach(() => {
      window.scrollTo(0, 0);
    });
  }   
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>