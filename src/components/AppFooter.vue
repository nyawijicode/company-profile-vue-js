<template>
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h5 class="mb-4">Nyawiji Web Solutions</h5>
          <p>
            Penyedia jasa pembuatan website dan aplikasi mobile profesional dengan tim berpengalaman yang telah dipercaya oleh BUMN dan perusahaan swasta.
          </p>
          <div class="social-icons mt-3">
            <a href="#" class="me-3" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="me-3" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="me-3" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h5 class="mb-4">Layanan Kami</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="/layanan#company-profile" class="text-white text-decoration-none">Website Company Profile</a>
            </li>
            <li class="mb-2">
              <a href="/layanan#ecommerce" class="text-white text-decoration-none">E-Commerce</a>
            </li>
            <li class="mb-2">
              <a href="/layanan#pos" class="text-white text-decoration-none">Sistem POS</a>
            </li>
            <li class="mb-2">
              <a href="/layanan#attendance" class="text-white text-decoration-none">Sistem Absensi</a>
            </li>
            <li class="mb-2">
              <a href="/layanan#cooperative" class="text-white text-decoration-none">Koperasi Simpan Pinjam</a>
            </li>
            <li class="mb-2">
              <a href="/layanan#mobile-app" class="text-white text-decoration-none">Aplikasi Mobile</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h5 class="mb-4">Hubungi Kami</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="bi bi-whatsapp me-2"></i>
              <a href="https://wa.me/6281327623942" class="text-white text-decoration-none">081327623942</a>
            </li>
            <li class="mb-2">
              <i class="bi bi-envelope me-2"></i>
              <a href="mailto:info@nyawiji.com" class="text-white text-decoration-none">info@nyawiji.com</a>
            </li>
            <li class="mb-2">
              <i class="bi bi-globe me-2"></i>
              <a href="https://nyawiji.com" class="text-white text-decoration-none">nyawiji.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-4" />
      <div class="text-center">
        <p class="mb-0">
          &copy; {{ new Date().getFullYear() }} Nyawiji Web Solutions. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  margin-top: auto;
}

.social-icons a {
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  color: #3498db;
}
</style>