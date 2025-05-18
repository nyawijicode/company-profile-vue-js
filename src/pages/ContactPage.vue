<template>
  <div class="contact-page">
    <section class="page-header py-5 bg-light">
      <div class="container">
        <h1 class="fw-bold">Hubungi Kami</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Beranda</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Kontak</li>
          </ol>
        </nav>
      </div>
    </section>

    <section class="contact-info py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="fw-bold mb-4">Kontak Informasi</h2>
            <p class="mb-5">
              Jika Anda memiliki pertanyaan atau ingin berkonsultasi mengenai kebutuhan website dan aplikasi mobile untuk bisnis Anda, silakan hubungi kami melalui informasi kontak berikut:
            </p>

            <div class="contact-item d-flex mb-4">
              <div class="icon me-3">
                <i class="bi bi-whatsapp fs-4 text-primary"></i>
              </div>
              <div class="content">
                <h5 class="mb-1">WhatsApp</h5>
                <p class="mb-0">
                  <a href="https://wa.me/6281327623942" class="text-decoration-none">081327623942</a>
                </p>
              </div>
            </div>

            <div class="contact-item d-flex mb-4">
              <div class="icon me-3">
                <i class="bi bi-envelope fs-4 text-primary"></i>
              </div>
              <div class="content">
                <h5 class="mb-1">Email</h5>
                <p class="mb-0">
                  <a href="mailto:info@nyawiji.com" class="text-decoration-none">info@nyawiji.com</a>
                </p>
              </div>
            </div>

            <div class="contact-item d-flex mb-4">
              <div class="icon me-3">
                <i class="bi bi-globe fs-4 text-primary"></i>
              </div>
              <div class="content">
                <h5 class="mb-1">Website</h5>
                <p class="mb-0">
                  <a href="https://nyawiji.com" class="text-decoration-none">nyawiji.com</a>
                </p>
              </div>
            </div>

            <div class="social-media mt-4">
              <h5 class="mb-3">Ikuti Kami</h5>
              <a href="#" class="me-3 fs-4" aria-label="Facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="me-3 fs-4" aria-label="Instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="me-3 fs-4" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div class="col-lg-6">
            <h2 class="fw-bold mb-4">Kirim Pesan</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'ContactPage',
  components: {
    ContactForm
  }
}
</script>

<style scoped>
.contact-page {
  background-color: #f8f9fa;
}

.page-header {
  background-color: #f1f5f9;
}

.social-media a {
  color: #3498db;
  transition: all 0.3s ease;
}

.social-media a:hover {
  color: #2980b9;
}
</style>