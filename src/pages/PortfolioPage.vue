<template>
  <div class="portfolio-page">
    <!-- Page Header -->
    <section class="page-header py-5 bg-light">
      <div class="container">
        <h1 class="fw-bold">Portofolio Kami</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Beranda</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Portofolio</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Portfolio Hero Section -->
    <section class="portfolio-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="display-5 fw-bold mb-3">Project Terbaik Kami</h2>
            <p class="lead mb-4">
              Temukan berbagai project yang telah kami kerjakan untuk klien dari berbagai industri dan kebutuhan bisnis.
            </p>
            <p class="mb-4">
              Portofolio kami mencakup website company profile, e-commerce, sistem POS, sistem absensi, koperasi simpan pinjam, dan aplikasi mobile dengan berbagai fitur dan kompleksitas.
            </p>
            <a href="#portfolio-grid" class="btn btn-primary btn-lg">
              Lihat Karya Kami
            </a>
          </div>
          <div class="col-lg-6">
            <img
              src="/images/portfolio-hero.jpg"
              alt="Portofolio Nyawiji Web Solutions"
              class="img-fluid rounded-3 shadow"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Filter & Grid Section -->
    <section id="portfolio-grid" class="portfolio-grid py-5 bg-light">
      <div class="container">
        <!-- Filter Buttons -->
        <div class="text-center mb-5">
          <div class="filter-buttons">
            <button 
              @click="setActiveFilter('all')" 
              :class="['btn', 'mx-1', 'mb-2', activeFilter === 'all' ? 'btn-primary' : 'btn-outline-primary']"
            >
              Semua
            </button>
            <button 
              @click="setActiveFilter('website')" 
              :class="['btn', 'mx-1', 'mb-2', activeFilter === 'website' ? 'btn-primary' : 'btn-outline-primary']"
            >
              Website
            </button>
            <button 
              @click="setActiveFilter('ecommerce')" 
              :class="['btn', 'mx-1', 'mb-2', activeFilter === 'ecommerce' ? 'btn-primary' : 'btn-outline-primary']"
            >
              E-Commerce
            </button>
            <button 
              @click="setActiveFilter('pos')" 
              :class="['btn', 'mx-1', 'mb-2', activeFilter === 'pos' ? 'btn-primary' : 'btn-outline-primary']"
            >
              Sistem POS
            </button>
            <button 
              @click="setActiveFilter('attendance')" 
              :class="['btn', 'mx-1', 'mb-2', activeFilter === 'attendance' ? 'btn-primary' : 'btn-outline-primary']"
            >
              Sistem Absensi
            </button>
            <button 
              @click="setActiveFilter('cooperative')" 
              :class="['btn', 'mx-1', 'mb-2', activeFilter === 'cooperative' ? 'btn-primary' : 'btn-outline-primary']"
            >
              Koperasi
            </button>
            <button 
              @click="setActiveFilter('mobile')" 
              :class="['btn', 'mx-1', 'mb-2', activeFilter === 'mobile' ? 'btn-primary' : 'btn-outline-primary']"
            >
              Aplikasi Mobile
            </button>
          </div>
        </div>

        <!-- Portfolio Items Grid -->
        <div class="row g-4">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id" 
            class="col-md-6 col-lg-4"
            @click="selectProject(project)"
          >
            <div class="card portfolio-item border-0 shadow h-100">
              <div class="portfolio-img-container">
                <img :src="project.image" class="card-img-top portfolio-img" :alt="project.title">
                <div class="portfolio-overlay">
                  <button class="btn btn-primary">Lihat Detail</button>
                </div>
              </div>
              <div class="card-body p-4">
                <span class="badge bg-primary mb-2">{{ project.category }}</span>
                <h3 class="card-title h5 fw-bold mb-2">{{ project.title }}</h3>
                <p class="card-text mb-0">{{ project.shortDesc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Portfolio Pagination -->
        <div class="d-flex justify-content-center mt-5">
          <nav aria-label="Portfolio pagination">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="featured-projects py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Project Unggulan</h2>
          <p class="lead">
            Beberapa project terbaik yang menunjukkan kemampuan dan kreativitas tim kami
          </p>
        </div>

        <!-- Featured Project 1 -->
        <div class="row featured-project mb-5 align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h3 class="fw-bold mb-3">E-Commerce PT Fashion Nusantara</h3>
            <p class="mb-3">
              Website e-commerce dengan lebih dari 2,000 produk fashion yang diintegrasikan dengan sistem inventory dan pembayaran online.
            </p>
            <div class="mb-4">
              <h5 class="fw-bold mb-2">Challenge:</h5>
              <p>
                PT Fashion Nusantara membutuhkan platform e-commerce yang dapat menangani katalog produk besar dengan variasi warna dan ukuran, serta sistem rekomendasi produk dan integrasi dengan berbagai metode pembayaran.
              </p>
            </div>
            <div class="mb-4">
              <h5 class="fw-bold mb-2">Solution:</h5>
              <p>
                Kami mengembangkan platform e-commerce custom dengan sistem manajemen produk yang komprehensif, fitur pencarian dan filter yang canggih, sistem rekomendasi berbasis AI, dan integrasi dengan berbagai gateway pembayaran.
              </p>
            </div>
            <div class="mb-4">
              <h5 class="fw-bold mb-2">Technologies Used:</h5>
              <div class="d-flex flex-wrap">
                <span class="badge bg-secondary me-2 mb-2">PHP</span>
                <span class="badge bg-secondary me-2 mb-2">Laravel</span>
                <span class="badge bg-secondary me-2 mb-2">Vue.js</span>
                <span class="badge bg-secondary me-2 mb-2">MySQL</span>
                <span class="badge bg-secondary me-2 mb-2">Redis</span>
                <span class="badge bg-secondary me-2 mb-2">AWS</span>
              </div>
            </div>
            <a href="#" class="btn btn-primary" @click.prevent="selectProject(projects[0])">Lihat Detail Project</a>
          </div>
          <div class="col-lg-6">
            <img
              src="/images/portfolio/featured1.jpg"
              alt="E-Commerce PT Fashion Nusantara"
              class="img-fluid rounded-3 shadow"
            />
          </div>
        </div>

        <!-- Featured Project 2 -->
        <div class="row featured-project mb-5 align-items-center flex-lg-row-reverse">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h3 class="fw-bold mb-3">Sistem Absensi PT Industri Jaya</h3>
            <p class="mb-3">
              Sistem absensi terintegrasi dengan pengenalan wajah dan sidik jari untuk 500+ karyawan di multiple lokasi.
            </p>
            <div class="mb-4">
              <h5 class="fw-bold mb-2">Challenge:</h5>
              <p>
                PT Industri Jaya memiliki banyak karyawan yang tersebar di beberapa lokasi dan membutuhkan sistem absensi yang dapat mengintegrasikan berbagai metode absensi dan terhubung dengan sistem HR dan penggajian.
              </p>
            </div>
            <div class="mb-4">
              <h5 class="fw-bold mb-2">Solution:</h5>
              <p>
                Kami mengembangkan sistem absensi yang mendukung multiple metode (sidik jari, pengenalan wajah, dan QR code), dilengkapi dengan dashboard admin yang komprehensif dan integrasi dengan sistem HR yang ada.
              </p>
            </div>
            <div class="mb-4">
              <h5 class="fw-bold mb-2">Technologies Used:</h5>
              <div class="d-flex flex-wrap">
                <span class="badge bg-secondary me-2 mb-2">Python</span>
                <span class="badge bg-secondary me-2 mb-2">Django</span>
                <span class="badge bg-secondary me-2 mb-2">React</span>
                <span class="badge bg-secondary me-2 mb-2">PostgreSQL</span>
                <span class="badge bg-secondary me-2 mb-2">OpenCV</span>
                <span class="badge bg-secondary me-2 mb-2">Docker</span>
              </div>
            </div>
            <a href="#" class="btn btn-primary" @click.prevent="selectProject(projects[3])">Lihat Detail Project</a>
          </div>
          <div class="col-lg-6">
            <img
              src="/images/portfolio/featured2.jpg"
              alt="Sistem Absensi PT Industri Jaya"
              class="img-fluid rounded-3 shadow"
            />
          </div>
        </div>

        <!-- Featured Project 3 -->
        <div class="row featured-project align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h3 class="fw-bold mb-3">Aplikasi Mobile Bank BPD</h3>
            <p class="mb-3">
              Aplikasi mobile banking dengan fitur transaksi, cek saldo, dan pembayaran tagihan untuk Bank Pembangunan Daerah.
            </p>
            <div class="mb-4">
              <h5 class="fw-bold mb-2">Challenge:</h5>
              <p>
                Bank BPD ingin mengembangkan aplikasi mobile banking yang aman, mudah digunakan, dan memiliki berbagai fitur yang dibutuhkan nasabah, dengan standar keamanan perbankan yang ketat.
              </p>
            </div>
            <div class="mb-4">
              <h5 class="fw-bold mb-2">Solution:</h5>
              <p>
                Kami mengembangkan aplikasi mobile banking dengan UI/UX yang intuitif, fitur lengkap (cek saldo, transfer, pembayaran tagihan, mutasi rekening), dan keamanan berlapis termasuk enkripsi end-to-end dan autentikasi biometrik.
              </p>
            </div>
            <div class="mb-4">
              <h5 class="fw-bold mb-2">Technologies Used:</h5>
              <div class="d-flex flex-wrap">
                <span class="badge bg-secondary me-2 mb-2">Flutter</span>
                <span class="badge bg-secondary me-2 mb-2">Dart</span>
                <span class="badge bg-secondary me-2 mb-2">Java (Backend)</span>
                <span class="badge bg-secondary me-2 mb-2">Spring Boot</span>
                <span class="badge bg-secondary me-2 mb-2">Oracle DB</span>
                <span class="badge bg-secondary me-2 mb-2">Firebase</span>
              </div>
            </div>
            <a href="#" class="btn btn-primary" @click.prevent="selectProject(projects[6])">Lihat Detail Project</a>
          </div>
          <div class="col-lg-6">
            <img
              src="/images/portfolio/featured3.jpg"
              alt="Aplikasi Mobile Bank BPD"
              class="img-fluid rounded-3 shadow"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Client Logos Section -->
    <section class="client-logos py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Klien Kami</h2>
          <p class="lead">
            Beberapa perusahaan dan organisasi yang telah mempercayakan project digital mereka kepada kami
          </p>
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center">
          <div class="col">
            <div class="client-logo p-4 bg-white shadow-sm rounded text-center">
              <img src="/images/clients/client1.png" alt="Client 1" class="img-fluid" />
            </div>
          </div>
          <div class="col">
            <div class="client-logo p-4 bg-white shadow-sm rounded text-center">
              <img src="/images/clients/client2.png" alt="Client 2" class="img-fluid" />
            </div>
          </div>
          <div class="col">
            <div class="client-logo p-4 bg-white shadow-sm rounded text-center">
              <img src="/images/clients/client3.png" alt="Client 3" class="img-fluid" />
            </div>
          </div>
          <div class="col">
            <div class="client-logo p-4 bg-white shadow-sm rounded text-center">
              <img src="/images/clients/client4.png" alt="Client 4" class="img-fluid" />
            </div>
          </div>
          <div class="col">
            <div class="client-logo p-4 bg-white shadow-sm rounded text-center">
              <img src="/images/clients/client5.png" alt="Client 5" class="img-fluid" />
            </div>
          </div>
          <div class="col">
            <div class="client-logo p-4 bg-white shadow-sm rounded text-center">
              <img src="/images/clients/client6.png" alt="Client 6" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-5">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-3 mb-4 mb-md-0">
            <div class="stat-item">
              <div class="display-4 fw-bold text-primary mb-2">
                <span ref="completedProjectCount">0</span>+
              </div>
              <h3 class="h5 fw-bold">Project Selesai</h3>
            </div>
          </div>
          <div class="col-md-3 mb-4 mb-md-0">
            <div class="stat-item">
              <div class="display-4 fw-bold text-primary mb-2">
                <span ref="satisfiedClientCount">0</span>%
              </div>
              <h3 class="h5 fw-bold">Klien Puas</h3>
            </div>
          </div>
          <div class="col-md-3 mb-4 mb-md-0">
            <div class="stat-item">
              <div class="display-4 fw-bold text-primary mb-2">
                <span ref="teamMemberCount">0</span>+
              </div>
              <h3 class="h5 fw-bold">Anggota Tim</h3>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stat-item">
              <div class="display-4 fw-bold text-primary mb-2">
                <span ref="yearsOfExperienceCount">0</span>+
              </div>
              <h3 class="h5 fw-bold">Tahun Pengalaman</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Testimoni Klien</h2>
          <p class="lead">
            Apa kata klien tentang project yang telah kami kerjakan
          </p>
        </div>

        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="testimonial-item text-center">
                    <img
                      src="/images/testimonials/client1.jpg"
                      alt="Santoso - PT Maju Bersama"
                      class="rounded-circle mb-4 testimonial-img"
                      width="100"
                      height="100"
                    />
                    <div class="mb-3">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <p class="testimonial-text mb-4">
                      "Nyawiji Web Solutions telah mengembangkan sistem absensi yang sangat membantu operasional perusahaan kami. Tim sangat profesional dan responsif terhadap feedback. Mereka menyelesaikan project tepat waktu dan hasilnya melebihi ekspektasi kami."
                    </p>
                    <h5 class="fw-bold mb-1">Santoso</h5>
                    <p class="text-muted mb-0">HRD Manager - PT Maju Bersama</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="testimonial-item text-center">
                    <img
                      src="/images/testimonials/client2.jpg"
                      alt="Siti - Koperasi Sejahtera"
                      class="rounded-circle mb-4 testimonial-img"
                      width="100"
                      height="100"
                    />
                    <div class="mb-3">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <p class="testimonial-text mb-4">
                      "Sistem koperasi simpan pinjam yang dikembangkan oleh Nyawiji sangat memudahkan administrasi kami. Fitur-fiturnya lengkap dan user-friendly. Tim Nyawiji juga memberikan pelatihan yang sangat membantu bagi staff kami. Sangat merekomendasikan jasa mereka!"
                    </p>
                    <h5 class="fw-bold mb-1">Siti</h5>
                    <p class="text-muted mb-0">Ketua - Koperasi Sejahtera</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="testimonial-item text-center">
                    <img
                      src="/images/testimonials/client3.jpg"
                      alt="Ahmad - PT Retail Indonesia"
                      class="rounded-circle mb-4 testimonial-img"
                      width="100"
                      height="100"
                    />
                    <div class="mb-3">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star text-warning"></i>
                    </div>
                    <p class="testimonial-text mb-4">
                      "E-commerce yang dibangun oleh Nyawiji Web Solutions telah meningkatkan penjualan online kami hingga 200% dalam 6 bulan. Proses pengembangan sangat transparan dan mereka selalu berusaha memahami kebutuhan bisnis kami. Kami sangat puas dengan hasilnya."
                    </p>
                    <h5 class="fw-bold mb-1">Ahmad</h5>
                    <p class="text-muted mb-0">Digital Marketing Manager - PT Retail Indonesia</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-primary rounded" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-primary rounded" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
              <div class="carousel-indicators position-relative mt-4">
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active bg-primary" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" class="bg-primary" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" class="bg-primary" aria-label="Slide 3"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true" ref="projectModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content" v-if="selectedProject">
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="projectModalLabel">{{ selectedProject.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img :src="selectedProject.image" :alt="selectedProject.title" class="img-fluid rounded mb-4">
            <span class="badge bg-primary mb-3">{{ selectedProject.category }}</span>
            <p class="mb-4">{{ selectedProject.description }}</p>
            
            <div class="row mb-4">
              <div class="col-md-6">
                <h5 class="fw-bold mb-3">Challenge:</h5>
                <p>{{ selectedProject.challenge }}</p>
              </div>
              <div class="col-md-6">
                <h5 class="fw-bold mb-3">Solution:</h5>
                <p>{{ selectedProject.solution }}</p>
              </div>
            </div>
            
            <h5 class="fw-bold mb-3">Technologies Used:</h5>
            <div class="d-flex flex-wrap mb-4">
              <span class="badge bg-secondary me-2 mb-2" v-for="tech in selectedProject.technologies" :key="tech">{{ tech }}</span>
            </div>
            
            <div class="project-result mb-4" v-if="selectedProject.results">
              <h5 class="fw-bold mb-3">Results:</h5>
              <ul class="list-unstyled">
                <li class="mb-2" v-for="(result, index) in selectedProject.results" :key="index">
                  <i class="bi bi-check-circle-fill text-success me-2"></i> {{ result }}
                </li>
              </ul>
            </div>
            
            <div class="testimonial p-4 bg-light rounded" v-if="selectedProject.testimonial">
              <div class="mb-3">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
              </div>
              <p class="fst-italic mb-3">{{ selectedProject.testimonial.text }}</p>
              <div class="d-flex align-items-center">
                <img :src="selectedProject.testimonial.image" alt="Client" class="rounded-circle me-3" width="50" height="50">
                <div>
                  <h6 class="fw-bold mb-0">{{ selectedProject.testimonial.name }}</h6>
                  <p class="text-muted mb-0">{{ selectedProject.testimonial.position }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <a :href="selectedProject.url" class="btn btn-primary" v-if="selectedProject.url" target="_blank">Visit Website</a>
          </div>
        </div>
      </div>
    </div>

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
  name: 'PortfolioPage',
  metaInfo: {
    title: 'Portofolio - Nyawiji Web Solutions',
    meta: [
      { name: 'description', content: 'Portofolio project website dan aplikasi mobile dari Nyawiji Web Solutions yang telah dikerjakan untuk BUMN dan perusahaan swasta.' },
      { name: 'keywords', content: 'portofolio web developer, portofolio aplikasi mobile, project website, pengembangan aplikasi, e-commerce, sistem absensi, pos system, karya web developer' }
    ]
  },
  data() {
    return {
      activeFilter: 'all',
      selectedProject: null,
      projectModal: null,
      projects: [
        {
          id: 1,
          title: 'E-Commerce PT Fashion Nusantara',
          category: 'E-Commerce',
          shortDesc: 'Platform e-commerce fashion dengan fitur lengkap dan integrasi pembayaran.',
          description: 'Website e-commerce dengan lebih dari 2,000 produk fashion yang diintegrasikan dengan sistem inventory dan pembayaran online.',
          challenge: 'PT Fashion Nusantara membutuhkan platform e-commerce yang dapat menangani katalog produk besar dengan variasi warna dan ukuran, serta sistem rekomendasi produk dan integrasi dengan berbagai metode pembayaran.',
          solution: 'Kami mengembangkan platform e-commerce custom dengan sistem manajemen produk yang komprehensif, fitur pencarian dan filter yang canggih, sistem rekomendasi berbasis AI, dan integrasi dengan berbagai gateway pembayaran.',
          image: '/images/portfolio/project1.jpg',
          technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Redis', 'AWS'],
          type: 'ecommerce',
          url: 'https://example.com/fashion',
          results: [
            'Peningkatan penjualan online sebesar 150% dalam 6 bulan',
            'Peningkatan rata-rata nilai order sebesar 25%',
            'Penurunan tingkat abandoned cart sebesar 35%'
          ],
          testimonial: {
            text: 'Nyawiji Web Solutions membantu kami membangun platform e-commerce yang sangat meningkatkan penjualan online kami. Fitur-fiturnya lengkap dan responsif terhadap kebutuhan bisnis kami.',
            name: 'Rina Wijaya',
            position: 'E-Commerce Manager - PT Fashion Nusantara',
            image: '/images/testimonials/client-fashion.jpg'
          }
        },
        {
          id: 2,
          title: 'Website Company Profile PT Konstruksi Jaya',
          category: 'Company Profile',
          shortDesc: 'Website responsive dengan design modern dan optimasi SEO.',
          description: 'Website company profile modern dan responsive untuk perusahaan konstruksi terkemuka, dengan portofolio project interaktif dan form kontak.',
          challenge: 'PT Konstruksi Jaya membutuhkan website yang dapat menampilkan portofolio project konstruksi mereka dengan visualisasi yang menarik dan informasi yang lengkap.',
          solution: 'Kami mengembangkan website dengan design modern, gallery project yang interaktif, animasi scroll, dan optimasi SEO yang baik untuk meningkatkan visibilitas online perusahaan.',
          image: '/images/portfolio/project2.jpg',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'jQuery'],
          type: 'website',
          url: 'https://example.com/konstruksi',
          results: [
            'Peningkatan traffic website sebesar 80%',
            'Peningkatan lead melalui form kontak sebesar 60%',
            'Peningkatan peringkat di mesin pencari untuk keyword utama'
          ],
          testimonial: {
            text: 'Website baru kami mendapatkan banyak pujian dari klien dan partner bisnis. Tampilan profesional dan fitur gallery project sangat membantu dalam mempresentasikan karya-karya kami.',
            name: 'Hendra Wijaya',
            position: 'Marketing Director - PT Konstruksi Jaya',
            image: '/images/testimonials/client-construction.jpg'
          }
        },
        {
          id: 3,
          title: 'Sistem POS Minimarket Chain',
          category: 'Sistem POS',
          shortDesc: 'Sistem kasir terintegrasi dengan inventory dan laporan penjualan.',
          description: 'Sistem Point of Sale (POS) terintegrasi untuk jaringan minimarket dengan 50+ cabang, dilengkapi dengan manajemen inventory dan laporan penjualan real-time.',
          challenge: 'Jaringan minimarket dengan banyak cabang membutuhkan sistem POS yang dapat digunakan secara offline maupun online, dengan sinkronisasi data antar cabang dan pusat.',
          solution: 'Kami mengembangkan sistem POS custom yang dapat beroperasi offline dan melakukan sinkronisasi ketika terhubung ke internet, dengan dashboard admin pusat untuk monitoring semua cabang.',
          image: '/images/portfolio/project3.jpg',
          technologies: ['C#', '.NET Core', 'SQL Server', 'Angular', 'Docker', 'Azure'],
          type: 'pos',
          url: null,
          results: [
            'Efisiensi waktu transaksi meningkat 40%',
            'Akurasi inventory mencapai 99.8%',
            'Pengurangan biaya operasional sebesar 25%'
          ],
          testimonial: {
            text: 'Sistem POS yang dikembangkan Nyawiji sangat membantu operasional toko kami. Fitur offline mode sangat berguna ketika koneksi internet tidak stabil di beberapa lokasi.',
            name: 'Doni Pratama',
            position: 'IT Manager - Minimarket Chain',
            image: '/images/testimonials/client-retail.jpg'
          }
        },
        {
          id: 4,
          title: 'Sistem Absensi PT Industri Jaya',
          category: 'Sistem Absensi',
          shortDesc: 'Sistem absensi dengan biometric dan integrasi dengan HR system.',
          description: 'Sistem absensi terintegrasi dengan pengenalan wajah dan sidik jari untuk 500+ karyawan di multiple lokasi.',
          challenge: 'PT Industri Jaya memiliki banyak karyawan yang tersebar di beberapa lokasi dan membutuhkan sistem absensi yang dapat mengintegrasikan berbagai metode absensi dan terhubung dengan sistem HR dan penggajian.',
          solution: 'Kami mengembangkan sistem absensi yang mendukung multiple metode (sidik jari, pengenalan wajah, dan QR code), dilengkapi dengan dashboard admin yang komprehensif dan integrasi dengan sistem HR yang ada.',
          image: '/images/portfolio/project4.jpg',
          technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'OpenCV', 'Docker'],
          type: 'attendance',
          url: null,
          results: [
            'Pengurangan waktu proses absensi hingga 70%',
            'Akurasi data kehadiran mencapai 99.9%',
            'Integrasi seamless dengan sistem penggajian'
          ],
          testimonial: {
            text: 'Sistem absensi yang dikembangkan sangat memudahkan departemen HR kami. Proses absensi menjadi lebih cepat dan akurat, serta integrasi dengan sistem penggajian sangat membantu.',
            name: 'Maya Sari',
            position: 'HR Manager - PT Industri Jaya',
            image: '/images/testimonials/client-industry.jpg'
          }
        },
        {
          id: 5,
          title: 'Website Koperasi Sejahtera',
          category: 'Koperasi',
          shortDesc: 'Website koperasi dengan sistem manajemen simpan pinjam online.',
          description: 'Website dan sistem manajemen koperasi simpan pinjam dengan fitur pendaftaran anggota, pengajuan pinjaman online, dan laporan keuangan.',
          challenge: 'Koperasi Sejahtera ingin mengdigitalisasi proses simpan pinjam mereka agar anggota dapat melakukan transaksi dan melihat status keanggotaan secara online.',
          solution: 'Kami mengembangkan website dan sistem manajemen koperasi yang memungkinkan anggota untuk melakukan pendaftaran, melihat saldo simpanan, mengajukan pinjaman, dan melakukan pembayaran secara online.',
          image: '/images/portfolio/project5.jpg',
          technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap', 'jQuery', 'Chart.js'],
          type: 'cooperative',
          url: 'https://example.com/koperasi',
          results: [
            'Peningkatan jumlah anggota sebesar 45% dalam 1 tahun',
            'Pengurangan biaya administrasi sebesar 30%',
            'Peningkatan efisiensi proses pinjaman hingga 60%'
          ],
          testimonial: {
            text: 'Sistem koperasi online yang dikembangkan Nyawiji sangat memudahkan kami dan anggota kami. Proses menjadi lebih transparan dan efisien.',
            name: 'Siti',
            position: 'Ketua - Koperasi Sejahtera',
            image: '/images/testimonials/client2.jpg'
          }
        },
        {
          id: 6,
          title: 'E-Commerce Toko Elektronik',
          category: 'E-Commerce',
          shortDesc: 'Website toko online elektronik dengan sistem pembayaran dan pengiriman.',
          description: 'Platform e-commerce untuk toko elektronik dengan fitur perbandingan produk, review, dan integrasi dengan jasa pengiriman dan pembayaran.',
          challenge: 'Toko elektronik membutuhkan platform online yang dapat menampilkan detail spesifikasi produk dengan baik, sistem perbandingan produk, dan review dari pembeli.',
          solution: 'Kami mengembangkan e-commerce dengan fitur perbandingan produk yang detail, sistem review dan rating, serta integrasi dengan berbagai metode pembayaran dan jasa pengiriman.',
          image: '/images/portfolio/project6.jpg',
          technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'Redis'],
          type: 'ecommerce',
          url: 'https://example.com/electronic',
          results: [
            'Peningkatan konversi penjualan sebesar 35%',
            'Penurunan tingkat retur produk sebesar 25%',
            'Peningkatan traffic organik sebesar 120%'
          ],
          testimonial: {
            text: 'Fitur perbandingan produk dan sistem review sangat membantu pengunjung dalam memilih produk elektronik. Penjualan kami meningkat signifikan sejak website ini diluncurkan.',
            name: 'Anton Wijaya',
            position: 'Owner - Toko Elektronik',
            image: '/images/testimonials/client-electronic.jpg'
          }
        },
        {
          id: 7,
          title: 'Aplikasi Mobile Bank BPD',
          category: 'Mobile App',
          shortDesc: 'Aplikasi mobile banking dengan fitur transaksi dan pembayaran tagihan.',
          description: 'Aplikasi mobile banking dengan fitur transaksi, cek saldo, dan pembayaran tagihan untuk Bank Pembangunan Daerah.',
          challenge: 'Bank BPD ingin mengembangkan aplikasi mobile banking yang aman, mudah digunakan, dan memiliki berbagai fitur yang dibutuhkan nasabah, dengan standar keamanan perbankan yang ketat.',
          solution: 'Kami mengembangkan aplikasi mobile banking dengan UI/UX yang intuitif, fitur lengkap (cek saldo, transfer, pembayaran tagihan, mutasi rekening), dan keamanan berlapis termasuk enkripsi end-to-end dan autentikasi biometrik.',
          image: '/images/portfolio/project7.jpg',
          technologies: ['Flutter', 'Dart', 'Java (Backend)', 'Spring Boot', 'Oracle DB', 'Firebase'],
          type: 'mobile',
          url: null,
          results: [
            'Peningkatan transaksi mobile sebesar 200% dalam 3 bulan',
            'Pengurangan traffic di kantor cabang sebesar 30%',
            'Rating 4.7/5 di Play Store dan App Store'
          ],
          testimonial: {
            text: 'Aplikasi mobile banking yang dikembangkan sangat user-friendly dan aman. Nasabah kami sangat puas dengan kemudahan melakukan transaksi perbankan melalui aplikasi ini.',
            name: 'Bambang Sugiarto',
            position: 'IT Director - Bank BPD',
            image: '/images/testimonials/client-bank.jpg'
          }
        },
        {
          id: 8,
          title: 'Aplikasi Delivery Makanan Lokal',
          category: 'Mobile App',
          shortDesc: 'Aplikasi pemesanan dan pengiriman makanan untuk restoran lokal.',
          description: 'Aplikasi mobile untuk pemesanan dan pengiriman makanan yang menjembatani restoran lokal dengan pelanggan di kota Semarang.',
          challenge: 'Para pengusaha kuliner lokal membutuhkan platform untuk menjangkau pelanggan secara online tanpa biaya komisi yang terlalu tinggi dari platform besar.',
          solution: 'Kami mengembangkan aplikasi mobile yang menghubungkan restoran lokal dengan pelanggan, dilengkapi dengan fitur pemesanan, pembayaran online, dan tracking pengiriman dengan biaya komisi yang lebih rendah.',
          image: '/images/portfolio/project8.jpg',
          technologies: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Google Maps API'],
          type: 'mobile',
          url: null,
          results: [
            'Onboarding 100+ restoran lokal dalam 2 bulan',
            'Pertumbuhan pengguna 50% MoM',
            'Peningkatan pendapatan restoran partner sebesar 40%'
          ],
          testimonial: {
            text: 'Aplikasi ini sangat membantu bisnis kuliner kami menjangkau pelanggan baru. Biaya komisi yang lebih rendah juga sangat menguntungkan para pengusaha kuliner kecil seperti kami.',
            name: 'Pangestu',
            position: 'Owner - Warung Semarang',
            image: '/images/testimonials/client-food.jpg'
          }
        },
        {
          id: 9,
          title: 'Website Sekolah Al-Hikam',
          category: 'Company Profile',
          shortDesc: 'Website sekolah dengan sistem informasi akademik terintegrasi.',
          description: 'Website sekolah dengan sistem informasi akademik terintegrasi, pendaftaran siswa baru online, dan learning management system.',
          challenge: 'Sekolah Al-Hikam membutuhkan website yang tidak hanya sebagai company profile tetapi juga dapat digunakan sebagai platform informasi akademik dan pembelajaran online.',
          solution: 'Kami mengembangkan website sekolah yang dilengkapi dengan sistem informasi akademik (nilai, absensi, jadwal), pendaftaran siswa baru online, dan learning management system untuk pembelajaran jarak jauh.',
          image: '/images/portfolio/project9.jpg',
          technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'WebRTC'],
          type: 'website',
          url: 'https://example.com/school',
          results: [
            'Peningkatan efisiensi administrasi sekolah sebesar 70%',
            'Pengurangan penggunaan kertas hingga 90%',
            'Peningkatan keterlibatan orang tua dalam memantau prestasi siswa'
          ],
          testimonial: {
            text: 'Website dan sistem informasi akademik yang dikembangkan sangat membantu proses administrasi dan pembelajaran di sekolah kami, terutama saat pandemi dengan pembelajaran jarak jauh.',
            name: 'Agus Setiawan',
            position: 'Kepala Sekolah - Al-Hikam',
            image: '/images/testimonials/client-school.jpg'
          }
        }
      ]
    };
  },
  mounted() {
    // Initialize Bootstrap Modal
    import('bootstrap/js/dist/modal').then(({ Modal }) => {
      this.projectModal = new Modal(document.getElementById('projectModal'));
    });
    
    // Animate stats counter
    this.animateCounter('completedProjectCount', 150);
    this.animateCounter('satisfiedClientCount', 98);
    this.animateCounter('teamMemberCount', 25);
    this.animateCounter('yearsOfExperienceCount', 6);
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'all') {
        return this.projects;
      }
      return this.projects.filter(project => project.type === this.activeFilter);
    }
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
    selectProject(project) {
      this.selectedProject = project;
      this.projectModal.show();
    },
    animateCounter(refName, target) {
      const element = this.$refs[refName];
      if (!element) return;
      
      let current = 0;
      const increment = Math.ceil(target / 50);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = current;
      }, 30);
    }
  }
}
</script>

<style scoped>
/* Portfolio Item Styling */
.portfolio-img-container {
  position: relative;
  overflow: hidden;
}

.portfolio-img {
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(52, 152, 219, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-item:hover .portfolio-img {
  transform: scale(1.05);
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

/* Featured Project Styling */
.featured-project {
  margin-bottom: 80px;
}

/* Client Logo Styling */
.client-logo {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.client-logo:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

/* Testimonial Styling */
.testimonial-img {
  object-fit: cover;
}

.testimonial-text {
  position: relative;
  font-style: italic;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 40px;
  height: 40px;
}

/* Stats Section Styling */
.stat-item {
  padding: 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

/* Modal Styling */
.modal-content {
  border: none;
  border-radius: 10px;
}

/* Responsive Adjustments */
@media (max-width: 767.98px) {
  .portfolio-img {
    height: 180px;
  }
}
</style>