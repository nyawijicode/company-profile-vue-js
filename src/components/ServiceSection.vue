<template>
  <section class="service-section py-5" id="services">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="fw-bold">Layanan Kami</h2>
        <p class="lead">
          Menyediakan berbagai layanan pengembangan website dan aplikasi mobile untuk mendukung bisnis Anda
        </p>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-4" id="company-profile">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="icon-box mb-3">
                <i class="bi bi-building text-primary fs-1"></i>
              </div>
              <h3 class="h5 card-title fw-bold">Website Company Profile</h3>
              <p class="card-text">
                Website profesional yang menampilkan profil perusahaan, produk, layanan, dan informasi kontak dengan desain yang menarik dan responsif.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4" id="ecommerce">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="icon-box mb-3">
                <i class="bi bi-cart3 text-primary fs-1"></i>
              </div>
              <h3 class="h5 card-title fw-bold">E-Commerce</h3>
              <p class="card-text">
                Platform penjualan online lengkap dengan manajemen produk, keranjang belanja, pembayaran online, dan laporan penjualan.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4" id="pos">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="icon-box mb-3">
                <i class="bi bi-receipt text-primary fs-1"></i>
              </div>
              <h3 class="h5 card-title fw-bold">Sistem POS</h3>
              <p class="card-text">
                Sistem kasir yang terintegrasi dengan manajemen inventori, laporan penjualan, dan analisis bisnis untuk toko retail.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4" id="attendance">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="icon-box mb-3">
                <i class="bi bi-calendar-check text-primary fs-1"></i>
              </div>
              <h3 class="h5 card-title fw-bold">Sistem Absensi</h3>
              <p class="card-text">
                Sistem pencatatan kehadiran karyawan dengan berbagai metode seperti sidik jari, wajah, atau mobile check-in.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4" id="cooperative">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="icon-box mb-3">
                <i class="bi bi-piggy-bank text-primary fs-1"></i>
              </div>
              <h3 class="h5 card-title fw-bold">Koperasi Simpan Pinjam</h3>
              <p class="card-text">
                Sistem manajemen koperasi simpan pinjam dengan fitur pengelolaan anggota, simpanan, pinjaman, dan laporan keuangan.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4" id="mobile-app">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="icon-box mb-3">
                <i class="bi bi-phone text-primary fs-1"></i>
              </div>
              <h3 class="h5 card-title fw-bold">Aplikasi Mobile</h3>
              <p class="card-text">
                Pengembangan aplikasi mobile untuk Android dan iOS yang disesuaikan dengan kebutuhan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        <router-link to="/layanan" class="btn btn-primary">
          Lihat Semua Layanan
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceSection'
}
</script>

<style scoped>
.service-section {
  background-color: #f8f9fa;
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.icon-box {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(52, 152, 219, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>