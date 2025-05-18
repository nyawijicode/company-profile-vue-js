<template>
  <section class="hero-section">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-lg-6 text-lg-start text-center">
          <h1 class="display-4 fw-bold mb-4">
            Solusi Digital untuk <span class="text-primary">Bisnis Anda</span>
          </h1>
          <p class="lead mb-4">
            Nyawiji Web Solutions menyediakan jasa pembuatan Website Company Profile, E-Commerce, POS, Sistem Absensi, Koperasi Simpan Pinjam dan Pengembangan Website lainnya. Juga menerima jasa pembuatan Aplikasi Mobile.
          </p>
          <div class="d-flex justify-content-lg-start justify-content-center">
            <router-link to="/kontak" class="btn btn-primary btn-lg me-3">
              Hubungi Kami
            </router-link>
            <router-link to="/layanan" class="btn btn-outline-primary btn-lg">
              Layanan Kami
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <img
            src="/images/banner.jpg"
            alt="Nyawiji Web Solutions"
            class="img-fluid rounded-3 shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(247, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%);
}

h1 {
  font-size: calc(1.8rem + 1.5vw);
}

.lead {
  font-size: calc(1rem + 0.3vw);
}

@media (max-width: 991.98px) {
  .hero-section {
    padding: 4rem 0;
    min-height: 60vh;
  }
}
</style>