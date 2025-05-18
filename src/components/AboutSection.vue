<template>
  <section class="about-section py-5" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <img
            src="/images/about.jpg"
            alt="Tentang Nyawiji Web Solutions"
            class="img-fluid rounded-3 shadow"
          />
        </div>
        <div class="col-lg-6">
          <h2 class="fw-bold mb-4">Tentang Nyawiji Web Solutions</h2>
          <p class="mb-4">
            Nyawiji Web Solutions adalah penyedia jasa pengembangan website dan aplikasi mobile profesional yang berfokus pada kebutuhan bisnis klien. Kami memiliki tim pengembang berpengalaman yang telah mengerjakan berbagai proyek untuk BUMN dan perusahaan swasta.
          </p>
          <p class="mb-4">
            Dengan pengalaman dan keahlian yang kami miliki, kami berkomitmen untuk memberikan solusi digital terbaik yang dapat membantu bisnis Anda berkembang di era digital.
          </p>
          <h5 class="fw-bold mb-3">Keunggulan Kami:</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="bi bi-check-circle-fill text-primary me-2"></i>
              Tim profesional berpengalaman
            </li>
            <li class="mb-2">
              <i class="bi bi-check-circle-fill text-primary me-2"></i>
              Menggunakan teknologi terkini
            </li>
            <li class="mb-2">
              <i class="bi bi-check-circle-fill text-primary me-2"></i>
              Hasil yang berkualitas dan tepat waktu
            </li>
            <li class="mb-2">
              <i class="bi bi-check-circle-fill text-primary me-2"></i>
              Dukungan teknis pasca pengembangan
            </li>
            <li class="mb-2">
              <i class="bi bi-check-circle-fill text-primary me-2"></i>
              Solusi yang disesuaikan dengan kebutuhan Anda
            </li>
          </ul>
          <router-link to="/tentang-kami" class="btn btn-primary mt-3">
            Pelajari Lebih Lanjut
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
  background-color: #ffffff;
}
</style>