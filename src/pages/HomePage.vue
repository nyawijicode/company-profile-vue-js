<template>
  <div class="home-page">
    <HeroSection />
    <ServiceSection />
    <AboutSection />
    
    <section class="cta-section py-5 text-white" id="cta">
      <div class="container text-center py-5">
        <h2 class="fw-bold mb-4">Siap Untuk Memulai Project Anda?</h2>
        <p class="lead mb-4">
          Hubungi kami sekarang untuk konsultasi gratis mengenai kebutuhan website atau aplikasi mobile Anda.
        </p>
        <div class="d-flex justify-content-center">
          <a
            href="https://wa.me/6281327623942"
            class="btn btn-light btn-lg me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-whatsapp me-2"></i>WhatsApp
          </a>
          <router-link to="/kontak" class="btn btn-outline-light btn-lg">
            Kontak Kami
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import ServiceSection from '@/components/ServiceSection.vue'
import AboutSection from '@/components/AboutSection.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    ServiceSection,
    AboutSection
  }
}
</script>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
}
</style>