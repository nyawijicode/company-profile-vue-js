<template>
  <div class="services-page">
    <!-- Page Header -->
    <section class="page-header py-5 bg-light">
      <div class="container">
        <h1 class="fw-bold">Layanan Kami</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Beranda</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Layanan</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Services Hero Section -->
    <section class="services-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="display-5 fw-bold mb-3">Solusi Digital Terbaik untuk Bisnis Anda</h2>
            <p class="lead mb-4">
              Nyawiji Web Solutions menawarkan berbagai layanan pengembangan web dan aplikasi mobile yang dapat disesuaikan dengan kebutuhan spesifik bisnis Anda.
            </p>
            <p class="mb-4">
              Dengan tim yang berpengalaman dan terampil, kami berkomitmen untuk memberikan produk berkualitas tinggi yang membantu bisnis Anda berkembang di era digital.
            </p>
            <a href="#main-services" class="btn btn-primary btn-lg">
              Lihat Layanan Kami
            </a>
          </div>
          <div class="col-lg-6">
            <img
              src="/images/services-hero.jpg"
              alt="Layanan Nyawiji Web Solutions"
              class="img-fluid rounded-3 shadow"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Main Services Section -->
    <section id="main-services" class="main-services py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Layanan Utama Kami</h2>
          <p class="lead">
            Solusi digital profesional untuk berbagai kebutuhan bisnis Anda
          </p>
        </div>

        <!-- Website Company Profile -->
        <div id="company-profile" class="service-item card border-0 shadow-sm mb-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/images/services/company-profile.jpg"
                alt="Website Company Profile"
                class="img-fluid rounded-start h-100 object-fit-cover"
                style="object-fit: cover;"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-box bg-primary-subtle rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                    <i class="bi bi-building text-primary fs-4"></i>
                  </div>
                  <h3 class="card-title fw-bold mb-0">Website Company Profile</h3>
                </div>
                <p class="card-text mb-3">
                  Website profesional yang menampilkan profil perusahaan, produk, layanan, dan informasi kontak dengan desain yang menarik dan responsif.
                </p>
                <h5 class="fw-bold mb-2">Fitur Utama:</h5>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Desain responsif (mobile-friendly)
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Optimasi SEO untuk meningkatkan peringkat di mesin pencari
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Integrasi dengan Google Analytics
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        CMS untuk update konten dengan mudah
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Formulir kontak dengan anti-spam
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Integrasi media sosial
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="text-end">
                  <a href="#contact-section" class="btn btn-outline-primary">Konsultasi Gratis</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- E-Commerce -->
        <div id="ecommerce" class="service-item card border-0 shadow-sm mb-5">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-box bg-primary-subtle rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                    <i class="bi bi-cart3 text-primary fs-4"></i>
                  </div>
                  <h3 class="card-title fw-bold mb-0">E-Commerce</h3>
                </div>
                <p class="card-text mb-3">
                  Platform penjualan online lengkap dengan manajemen produk, keranjang belanja, pembayaran online, dan laporan penjualan.
                </p>
                <h5 class="fw-bold mb-2">Fitur Utama:</h5>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Katalog produk yang mudah dikelola
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Manajemen inventori dan stok
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Integrasi berbagai metode pembayaran
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Sistem keranjang belanja dan checkout
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Dashboard admin komprehensif
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Laporan penjualan dan analitik
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="text-end">
                  <a href="#contact-section" class="btn btn-outline-primary">Konsultasi Gratis</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="/images/services/ecommerce.jpg"
                alt="E-Commerce"
                class="img-fluid rounded-end h-100 object-fit-cover"
                style="object-fit: cover;"
              />
            </div>
          </div>
        </div>

        <!-- Sistem POS -->
        <div id="pos" class="service-item card border-0 shadow-sm mb-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/images/services/pos.jpg"
                alt="Sistem POS"
                class="img-fluid rounded-start h-100 object-fit-cover"
                style="object-fit: cover;"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-box bg-primary-subtle rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                    <i class="bi bi-receipt text-primary fs-4"></i>
                  </div>
                  <h3 class="card-title fw-bold mb-0">Sistem POS</h3>
                </div>
                <p class="card-text mb-3">
                  Sistem kasir yang terintegrasi dengan manajemen inventori, laporan penjualan, dan analisis bisnis untuk toko retail.
                </p>
                <h5 class="fw-bold mb-2">Fitur Utama:</h5>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Interface kasir yang user-friendly
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Sistem manajemen produk dan inventori
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Dukungan barcode scanner
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Manajemen diskon dan promosi
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Laporan penjualan dan keuangan
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Integrasi dengan printer struk
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="text-end">
                  <a href="#contact-section" class="btn btn-outline-primary">Konsultasi Gratis</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sistem Absensi -->
        <div id="attendance" class="service-item card border-0 shadow-sm mb-5">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-box bg-primary-subtle rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                    <i class="bi bi-calendar-check text-primary fs-4"></i>
                  </div>
                  <h3 class="card-title fw-bold mb-0">Sistem Absensi</h3>
                </div>
                <p class="card-text mb-3">
                  Sistem pencatatan kehadiran karyawan dengan berbagai metode seperti sidik jari, wajah, atau mobile check-in.
                </p>
                <h5 class="fw-bold mb-2">Fitur Utama:</h5>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Multiple metode absensi (sidik jari, wajah, QR code)
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Pengaturan jadwal dan shift karyawan
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Manajemen cuti dan izin
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Laporan kehadiran dan keterlambatan
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Integrasi dengan sistem payroll
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Notifikasi untuk karyawan dan manajer
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="text-end">
                  <a href="#contact-section" class="btn btn-outline-primary">Konsultasi Gratis</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="/images/services/attendance.jpg"
                alt="Sistem Absensi"
                class="img-fluid rounded-end h-100 object-fit-cover"
                style="object-fit: cover;"
              />
            </div>
          </div>
        </div>

        <!-- Koperasi Simpan Pinjam -->
        <div id="cooperative" class="service-item card border-0 shadow-sm mb-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/images/services/cooperative.jpg"
                alt="Koperasi Simpan Pinjam"
                class="img-fluid rounded-start h-100 object-fit-cover"
                style="object-fit: cover;"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-box bg-primary-subtle rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                    <i class="bi bi-piggy-bank text-primary fs-4"></i>
                  </div>
                  <h3 class="card-title fw-bold mb-0">Koperasi Simpan Pinjam</h3>
                </div>
                <p class="card-text mb-3">
                  Sistem manajemen koperasi simpan pinjam dengan fitur pengelolaan anggota, simpanan, pinjaman, dan laporan keuangan.
                </p>
                <h5 class="fw-bold mb-2">Fitur Utama:</h5>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Manajemen anggota koperasi
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Pencatatan simpanan (pokok, wajib, sukarela)
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Pencatatan dan pelacakan pinjaman
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Perhitungan bunga dan angsuran otomatis
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Laporan keuangan dan dividen
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Akses anggota melalui web atau aplikasi mobile
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="text-end">
                  <a href="#contact-section" class="btn btn-outline-primary">Konsultasi Gratis</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Aplikasi Mobile -->
        <div id="mobile-app" class="service-item card border-0 shadow-sm mb-5">
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-box bg-primary-subtle rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                    <i class="bi bi-phone text-primary fs-4"></i>
                  </div>
                  <h3 class="card-title fw-bold mb-0">Aplikasi Mobile</h3>
                </div>
                <p class="card-text mb-3">
                  Pengembangan aplikasi mobile untuk Android dan iOS yang disesuaikan dengan kebutuhan bisnis Anda.
                </p>
                <h5 class="fw-bold mb-2">Fitur Utama:</h5>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Pengembangan native dan cross-platform (Android & iOS)
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        UI/UX design yang menarik dan user-friendly
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Integrasi API dan layanan backend
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Fitur notifikasi push
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Integrasi pembayaran in-app
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-primary me-2"></i>
                        Publikasi di Google Play Store dan Apple App Store
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="text-end">
                  <a href="#contact-section" class="btn btn-outline-primary">Konsultasi Gratis</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="/images/services/mobile-app.jpg"
                alt="Aplikasi Mobile"
                class="img-fluid rounded-end h-100 object-fit-cover"
                style="object-fit: cover;"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process Section -->
    <section class="development-process py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Proses Pengembangan Kami</h2>
          <p class="lead">
            Pendekatan sistematis untuk memastikan hasil yang berkualitas dan tepat waktu
          </p>
        </div>

        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="process-timeline">
              <!-- Step 1 -->
              <div class="process-item">
                <div class="process-circle bg-primary text-white">1</div>
                <div class="process-content card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h4 class="fw-bold mb-3">Konsultasi & Analisis Kebutuhan</h4>
                    <p class="mb-0">
                      Kami melakukan konsultasi mendalam untuk memahami kebutuhan bisnis Anda dan menganalisis persyaratan teknis dan fungsional yang diperlukan.
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Step 2 -->
              <div class="process-item">
                <div class="process-circle bg-primary text-white">2</div>
                <div class="process-content card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h4 class="fw-bold mb-3">Perencanaan & Desain</h4>
                    <p class="mb-0">
                      Kami merancang solusi yang sesuai dengan kebutuhan Anda, membuat wireframe, prototype, dan menyusun rencana pengembangan yang terstruktur.
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Step 3 -->
              <div class="process-item">
                <div class="process-circle bg-primary text-white">3</div>
                <div class="process-content card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h4 class="fw-bold mb-3">Pengembangan</h4>
                    <p class="mb-0">
                      Tim pengembang kami mengimplementasikan desain, membangun fungsionalitas, dan menerapkan fitur-fitur yang telah disepakati.
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Step 4 -->
              <div class="process-item">
                <div class="process-circle bg-primary text-white">4</div>
                <div class="process-content card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h4 class="fw-bold mb-3">Pengujian</h4>
                    <p class="mb-0">
                      Kami melakukan pengujian menyeluruh untuk memastikan produk bebas dari bug, berfungsi sesuai kebutuhan, dan memiliki performa yang optimal.
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Step 5 -->
              <div class="process-item">
                <div class="process-circle bg-primary text-white">5</div>
                <div class="process-content card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h4 class="fw-bold mb-3">Deployment</h4>
                    <p class="mb-0">
                      Setelah pengujian selesai, kami melakukan deployment produk ke server produksi atau toko aplikasi dan memastikan semua berjalan lancar.
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Step 6 -->
              <div class="process-item">
                <div class="process-circle bg-primary text-white">6</div>
                <div class="process-content card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h4 class="fw-bold mb-3">Dukungan & Pemeliharaan</h4>
                    <p class="mb-0">
                      Kami menyediakan dukungan teknis pasca-peluncuran, melakukan pemeliharaan rutin, dan membantu Anda dengan pembaruan yang diperlukan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Packages Section -->
    <section class="pricing-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Paket Layanan</h2>
          <p class="lead">
            Pilihan paket dengan harga yang kompetitif sesuai kebutuhan bisnis Anda
          </p>
        </div>

        <div class="row g-4">
          <!-- Basic Package -->
          <div class="col-md-4">
            <div class="card border-0 shadow h-100 pricing-card">
              <div class="card-header bg-white border-0 pt-4 pb-0">
                <h3 class="fw-bold text-center mb-1">Paket Basic</h3>
                <p class="text-center text-muted mb-0">Untuk Bisnis Kecil</p>
              </div>
              <div class="card-body p-4">
                <div class="text-center my-4">
                  <span class="display-5 fw-bold">Rp5jt</span>
                  <span class="text-muted">/ project</span>
                </div>
                <ul class="list-unstyled mb-4">
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Website dengan max. 5 halaman</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Desain responsif</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Formulir kontak sederhana</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Optimasi SEO dasar</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Integrasi sosial media</span>
                  </li>
                  <li class="mb-3 d-flex text-muted">
                    <i class="bi bi-x-circle-fill text-secondary me-2 mt-1"></i>
                    <span>CMS untuk update konten</span>
                  </li>
                  <li class="mb-3 d-flex text-muted">
                    <i class="bi bi-x-circle-fill text-secondary me-2 mt-1"></i>
                    <span>Dukungan teknis 1 bulan</span>
                  </li>
                </ul>
                <div class="d-grid">
                  <a href="#contact-section" class="btn btn-outline-primary btn-lg">Pilih Paket</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Pro Package -->
          <div class="col-md-4">
            <div class="card border-0 shadow h-100 pricing-card pricing-popular">
              <div class="card-header bg-primary text-white border-0 pt-4 pb-0">
                <h3 class="fw-bold text-center mb-1">Paket Pro</h3>
                <p class="text-center text-white-50 mb-0">Untuk Bisnis Menengah</p>
                <div class="popular-badge">POPULER</div>
              </div>
              <div class="card-body p-4">
                <div class="text-center my-4">
                  <span class="display-5 fw-bold">Rp12jt</span>
                  <span class="text-muted">/ project</span>
                </div>
                <ul class="list-unstyled mb-4">
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Website dengan max. 15 halaman</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Desain premium responsif</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Formulir kontak lanjutan</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Optimasi SEO komprehensif</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Integrasi sosial media</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>CMS untuk update konten</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Dukungan teknis 3 bulan</span>
                  </li>
                </ul>
                <div class="d-grid">
                  <a href="#contact-section" class="btn btn-primary btn-lg">Pilih Paket</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Enterprise Package -->
          <div class="col-md-4">
            <div class="card border-0 shadow h-100 pricing-card">
              <div class="card-header bg-white border-0 pt-4 pb-0">
                <h3 class="fw-bold text-center mb-1">Paket Enterprise</h3>
                <p class="text-center text-muted mb-0">Untuk Perusahaan Besar</p>
              </div>
              <div class="card-body p-4">
                <div class="text-center my-4">
                  <span class="display-5 fw-bold">Hubungi</span>
                  <span class="text-muted">untuk harga</span>
                </div>
                <ul class="list-unstyled mb-4">
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Website dengan halaman tak terbatas</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Desain custom sesuai kebutuhan</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Formulir dan fitur khusus</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Optimasi SEO tingkat lanjut</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Integrasi sistem & API</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>CMS custom</span>
                  </li>
                  <li class="mb-3 d-flex">
                    <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                    <span>Dukungan teknis 12 bulan</span>
                  </li>
                </ul>
                <div class="d-grid">
                  <a href="#contact-section" class="btn btn-outline-primary btn-lg">Hubungi Kami</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <p class="mb-0">
            <i class="bi bi-info-circle me-2"></i>
            Untuk kebutuhan khusus atau paket custom, jangan ragu untuk menghubungi kami.
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Apa Kata Klien Kami</h2>
          <p class="lead">
            Testimoni dari klien yang telah menggunakan layanan Nyawiji Web Solutions
          </p>
        </div>

        <div class="row g-4">
          <!-- Testimonial 1 -->
          <div class="col-md-4">
            <div class="card border-0 shadow testimonial-card h-100">
              <div class="card-body p-4">
                <div class="d-flex mb-4">
                  <div class="flex-shrink-0">
                    <img
                      src="/images/testimonials/testimonial1.jpg"
                      alt="PT Maju Bersama"
                      class="rounded-circle testimonial-img"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div class="ms-3">
                    <h5 class="fw-bold mb-1">PT Maju Bersama</h5>
                    <p class="text-muted mb-0">Perusahaan Manufaktur</p>
                  </div>
                </div>
                <div class="mb-3">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p class="testimonial-text mb-0">
                  "Nyawiji Web Solutions membantu kami mengembangkan sistem absensi digital yang terintegrasi dengan sistem HR. Hasilnya sangat memuaskan dan tim sangat responsif terhadap kebutuhan kami."
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="col-md-4">
            <div class="card border-0 shadow testimonial-card h-100">
              <div class="card-body p-4">
                <div class="d-flex mb-4">
                  <div class="flex-shrink-0">
                    <img
                      src="/images/testimonials/testimonial2.jpg"
                      alt="Koperasi Sejahtera"
                      class="rounded-circle testimonial-img"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div class="ms-3">
                    <h5 class="fw-bold mb-1">Koperasi Sejahtera</h5>
                    <p class="text-muted mb-0">Koperasi Simpan Pinjam</p>
                  </div>
                </div>
                <div class="mb-3">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <p class="testimonial-text mb-0">
                  "Kami sangat puas dengan sistem koperasi simpan pinjam yang dikembangkan oleh Nyawiji. Fitur lengkap dan mudah digunakan oleh staff kami. Proses pengembangan juga sangat jelas dan sesuai timeline."
                </p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="col-md-4">
            <div class="card border-0 shadow testimonial-card h-100">
              <div class="card-body p-4">
                <div class="d-flex mb-4">
                  <div class="flex-shrink-0">
                    <img
                      src="/images/testimonials/testimonial3.jpg"
                      alt="PT Retail Indonesia"
                      class="rounded-circle testimonial-img"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div class="ms-3">
                    <h5 class="fw-bold mb-1">PT Retail Indonesia</h5>
                    <p class="text-muted mb-0">Perusahaan Retail</p>
                  </div>
                </div>
                <div class="mb-3">
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star-fill text-warning"></i>
                  <i class="bi bi-star text-warning"></i>
                </div>
                <p class="testimonial-text mb-0">
                  "Sistem POS yang dikembangkan sangat membantu operasional toko kami. Integrasi dengan inventory management berjalan lancar dan memudahkan proses bisnis. Tim support juga sangat responsive."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Pertanyaan Umum</h2>
          <p class="lead">
            Jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>

        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="accordion" id="faqAccordion">
              <!-- FAQ Item 1 -->
              <div class="accordion-item border-0 shadow-sm mb-3 rounded">
                <h3 class="accordion-header" id="faqHeading1">
                  <button class="accordion-button rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                    Berapa lama waktu yang dibutuhkan untuk menyelesaikan project?
                  </button>
                </h3>
                <div id="faqCollapse1" class="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Waktu pengerjaan project bervariasi tergantung pada kompleksitas dan ruang lingkup pekerjaan. Secara umum, website company profile sederhana dapat selesai dalam 2-4 minggu, sistem e-commerce dalam 1-3 bulan, dan aplikasi mobile dalam 2-4 bulan. Setelah konsultasi awal, kami akan memberikan estimasi waktu yang lebih akurat sesuai dengan kebutuhan spesifik Anda.
                  </div>
                </div>
              </div>

              <!-- FAQ Item 2 -->
              <div class="accordion-item border-0 shadow-sm mb-3 rounded">
                <h3 class="accordion-header" id="faqHeading2">
                  <button class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                    Apakah Nyawiji Web Solutions menyediakan layanan hosting?
                  </button>
                </h3>
                <div id="faqCollapse2" class="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Ya, kami menyediakan layanan hosting sebagai bagian dari paket pengembangan website atau sebagai layanan terpisah. Kami menawarkan berbagai opsi hosting yang dapat disesuaikan dengan kebutuhan dan budget Anda. Selain itu, kami juga membantu dalam proses migrasi jika Anda sudah memiliki website yang ingin dipindahkan ke hosting kami.
                  </div>
                </div>
              </div>

              <!-- FAQ Item 3 -->
              <div class="accordion-item border-0 shadow-sm mb-3 rounded">
                <h3 class="accordion-header" id="faqHeading3">
                  <button class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                    Bagaimana proses pembayaran untuk layanan Nyawiji Web Solutions?
                  </button>
                </h3>
                <div id="faqCollapse3" class="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Untuk sebagian besar project, kami menggunakan sistem pembayaran bertahap: 40% di awal sebagai uang muka, 30% setelah desain disetujui, dan 30% setelah project selesai dan sebelum diluncurkan. Untuk project dengan nilai lebih besar, kami dapat menyesuaikan skema pembayaran. Kami menerima pembayaran melalui transfer bank, dan untuk beberapa layanan berkelanjutan seperti hosting, dapat dibayarkan secara bulanan atau tahunan.
                  </div>
                </div>
              </div>

              <!-- FAQ Item 4 -->
              <div class="accordion-item border-0 shadow-sm mb-3 rounded">
                <h3 class="accordion-header" id="faqHeading4">
                  <button class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                    Apakah Nyawiji Web Solutions menyediakan layanan pemeliharaan setelah project selesai?
                  </button>
                </h3>
                <div id="faqCollapse4" class="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Ya, kami menyediakan layanan pemeliharaan dan dukungan pasca-peluncuran. Kami menawarkan berbagai paket dukungan mulai dari pemeliharaan dasar hingga dukungan penuh 24/7. Layanan ini mencakup pembaruan keamanan, backup rutin, perbaikan bug, dan pembaruan konten. Durasi dukungan gratis tergantung pada paket yang Anda pilih, dan setelah itu, Anda dapat memilih untuk melanjutkan dengan paket pemeliharaan bulanan atau tahunan.
                  </div>
                </div>
              </div>

              <!-- FAQ Item 5 -->
              <div class="accordion-item border-0 shadow-sm mb-3 rounded">
                <h3 class="accordion-header" id="faqHeading5">
                  <button class="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="false" aria-controls="faqCollapse5">
                    Teknologi apa yang digunakan oleh Nyawiji Web Solutions?
                  </button>
                </h3>
                <div id="faqCollapse5" class="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Kami menggunakan berbagai teknologi tergantung pada kebutuhan spesifik project. Untuk pengembangan website, kami menggunakan HTML5, CSS3, JavaScript, PHP, dan framework seperti Laravel, Vue.js, dan React. Untuk aplikasi mobile, kami mengembangkan dengan Flutter, React Native, dan native development (Kotlin untuk Android dan Swift untuk iOS). Kami juga berpengalaman dengan sistem manajemen konten seperti WordPress, database seperti MySQL dan MongoDB, serta layanan cloud seperti AWS dan Google Cloud Platform.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact-section" class="contact-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="fw-bold mb-4">Hubungi Kami</h2>
            <p class="mb-4">
              Tertarik dengan layanan kami? Jangan ragu untuk menghubungi kami melalui berbagai channel di bawah ini atau isi formulir untuk mendapatkan konsultasi gratis.
            </p>
            <div class="contact-info mb-4">
              <div class="d-flex mb-3">
                <div class="icon-box bg-primary-subtle rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                  <i class="bi bi-whatsapp text-primary"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-1">WhatsApp</h5>
                  <p class="mb-0">
                    <a href="https://wa.me/6281327623942" class="text-decoration-none">081327623942</a>
                  </p>
                </div>
              </div>
              <div class="d-flex mb-3">
                <div class="icon-box bg-primary-subtle rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                  <i class="bi bi-envelope text-primary"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-1">Email</h5>
                  <p class="mb-0">
                    <a href="mailto:info@nyawiji.com" class="text-decoration-none">info@nyawiji.com</a>
                  </p>
                </div>
              </div>
              <div class="d-flex mb-3">
                <div class="icon-box bg-primary-subtle rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                  <i class="bi bi-geo-alt text-primary"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-1">Alamat</h5>
                  <p class="mb-0">
                    Jl. Kebon Rejo Timur Raya Mranggen, D   emak, Jawa Tengah, Indonesia
                  </p>
                </div>
              </div>
            </div>
            <div class="social-media">
              <h5 class="fw-bold mb-3">Ikuti Kami</h5>
              <div class="d-flex">
                <a href="#" class="me-3 social-icon">
                  <div class="icon-box bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                    <i class="bi bi-facebook text-primary"></i>
                  </div>
                </a>
                <a href="#" class="me-3 social-icon">
                  <div class="icon-box bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                    <i class="bi bi-instagram text-primary"></i>
                  </div>
                </a>
                <a href="#" class="me-3 social-icon">
                  <div class="icon-box bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                    <i class="bi bi-linkedin text-primary"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card border-0 shadow">
              <div class="card-body p-4">
                <h3 class="fw-bold mb-4">Dapatkan Konsultasi Gratis</h3>
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="name" class="form-label">Nama</label>
                      <input type="text" class="form-control" id="name" placeholder="Masukkan nama Anda" required>
                    </div>
                    <div class="col-md-6">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" placeholder="Masukkan email Anda" required>
                    </div>
                    <div class="col-md-6">
                      <label for="phone" class="form-label">Telepon</label>
                      <input type="tel" class="form-control" id="phone" placeholder="Masukkan nomor telepon">
                    </div>
                    <div class="col-md-6">
                      <label for="service" class="form-label">Layanan yang Diminati</label>
                      <select class="form-select" id="service" required>
                        <option value="" selected disabled>Pilih layanan</option>
                        <option value="company-profile">Website Company Profile</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="pos">Sistem POS</option>
                        <option value="attendance">Sistem Absensi</option>
                        <option value="cooperative">Koperasi Simpan Pinjam</option>
                        <option value="mobile-app">Aplikasi Mobile</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label for="message" class="form-label">Pesan</label>
                      <textarea class="form-control" id="message" rows="4" placeholder="Jelaskan kebutuhan Anda secara detail"></textarea>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary w-100">Kirim Pesan</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5 text-white" style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);">
      <div class="container text-center py-4">
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
export default {
  name: 'ServicesPage',
  metaInfo: {
    title: 'Layanan Kami - Nyawiji Web Solutions',
    meta: [
      { name: 'description', content: 'Layanan pembuatan website company profile, e-commerce, POS, sistem absensi, koperasi simpan pinjam, dan aplikasi mobile oleh Nyawiji Web Solutions.' },
      { name: 'keywords', content: 'jasa website, e-commerce, sistem POS, sistem absensi, koperasi simpan pinjam, aplikasi mobile, pengembangan web, web developer semarang' }
    ]
  }
}
</script>

<style scoped>
/* Process Timeline Styling */
.process-timeline {
  position: relative;
  padding: 20px 0;
}

.process-item {
  display: flex;
  margin-bottom: 30px;
  position: relative;
}

.process-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  z-index: 1;
}

.process-content {
  flex-grow: 1;
  margin-left: 20px;
}

.process-item:not(:last-child):after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: #e9ecef;
  top: 50px;
  bottom: -30px;
  left: 24px;
}

/* Pricing Card Styling */
.pricing-card {
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-10px);
}

.pricing-popular {
  position: relative;
  overflow: visible;
}

.popular-badge {
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: #e74c3c;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 20px;
  z-index: 1;
}

/* Testimonial Card Styling */
.testimonial-card {
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-img {
  object-fit: cover;
}

.testimonial-text {
  position: relative;
  font-style: italic;
}

.testimonial-text:before {
  content: '"';
  font-size: 50px;
  color: #f1f5f9;
  position: absolute;
  top: -20px;
  left: -15px;
  z-index: -1;
}

/* Social Icon Styling */
.social-icon {
  transition: all 0.3s ease;
}

.social-icon:hover .icon-box {
  background-color: #3498db !important;
}

.social-icon:hover i {
  color: white !important;
}

/* Accordion Styling */
.accordion-button:not(.collapsed) {
  background-color: #ebf5ff;
  color: #3498db;
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: #e9ecef;
}

/* Responsive Adjustments */
@media (max-width: 991.98px) {
  .service-item .row {
    flex-direction: column;
  }
  
  .service-item .col-md-4 {
    order: -1;
  }
  
  .service-item .col-md-4 img {
    border-radius: 0.375rem 0.375rem 0 0 !important;
    height: 250px !important;
  }
}
</style>