<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-header py-5 bg-light">
      <div class="container">
        <h1 class="fw-bold">Tentang Kami</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Beranda</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Tentang Kami</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Company Profile Section -->
    <section class="profile-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/images/about-company.jpg"
              alt="Nyawiji Web Solutions Team"
              class="img-fluid rounded-3 shadow"
            />
          </div>
          <div class="col-lg-6">
            <h2 class="fw-bold mb-4">Nyawiji Web Solutions</h2>
            <p class="lead mb-4">
              Penyedia Jasa Pengembangan Website dan Aplikasi Mobile Profesional
            </p>
            <p class="mb-4">
              Nyawiji Web Solutions didirikan pada tahun 2018 dengan visi untuk menjadi partner teknologi terpercaya bagi para pelaku bisnis di Indonesia. Nama "Nyawiji" berasal dari bahasa Jawa yang berarti "menyatu" atau "bersinergi", mencerminkan komitmen kami untuk bersinergi dengan klien dalam mengembangkan solusi digital yang tepat.
            </p>
            <p class="mb-4">
              Berlokasi di Semarang, Jawa Tengah, kami telah menangani berbagai proyek pengembangan website dan aplikasi mobile untuk BUMN dan perusahaan swasta terkemuka di Indonesia. Dengan tim yang berpengalaman dan terampil, kami berkomitmen untuk memberikan layanan berkualitas tinggi yang sesuai dengan kebutuhan spesifik setiap klien.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission Section -->
    <section class="vision-mission-section py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="card border-0 shadow h-100">
              <div class="card-body p-4">
                <h3 class="fw-bold mb-3 text-primary">Visi Kami</h3>
                <p class="mb-0">
                  Menjadi penyedia solusi digital terpercaya yang membantu bisnis di Indonesia untuk tumbuh dan berkembang melalui teknologi yang inovatif dan efisien.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card border-0 shadow h-100">
              <div class="card-body p-4">
                <h3 class="fw-bold mb-3 text-primary">Misi Kami</h3>
                <ul class="mb-0">
                  <li class="mb-2">Memberikan solusi digital yang sesuai dengan kebutuhan dan budget klien</li>
                  <li class="mb-2">Menggunakan teknologi terkini untuk menghasilkan produk yang berkualitas</li>
                  <li class="mb-2">Memastikan kepuasan klien melalui layanan yang responsif dan profesional</li>
                  <li class="mb-2">Terus berinovasi mengikuti perkembangan teknologi digital</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="core-values-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Nilai-Nilai Perusahaan</h2>
          <p class="lead">
            Prinsip yang menjadi landasan kami dalam memberikan layanan terbaik
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow h-100">
              <div class="card-body p-4 text-center">
                <div class="icon-box bg-primary-subtle rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                  <i class="bi bi-lightbulb text-primary fs-2"></i>
                </div>
                <h4 class="fw-bold mb-2">Inovasi</h4>
                <p class="mb-0">
                  Selalu berusaha menghadirkan solusi kreatif dan pemikiran baru dalam setiap proyek
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow h-100">
              <div class="card-body p-4 text-center">
                <div class="icon-box bg-primary-subtle rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                  <i class="bi bi-trophy text-primary fs-2"></i>
                </div>
                <h4 class="fw-bold mb-2">Kualitas</h4>
                <p class="mb-0">
                  Komitmen untuk menghasilkan produk dan layanan dengan standar tertinggi
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow h-100">
              <div class="card-body p-4 text-center">
                <div class="icon-box bg-primary-subtle rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                  <i class="bi bi-people text-primary fs-2"></i>
                </div>
                <h4 class="fw-bold mb-2">Kolaborasi</h4>
                <p class="mb-0">
                  Bekerja sama dengan klien untuk memahami kebutuhan mereka dan menciptakan solusi yang tepat
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow h-100">
              <div class="card-body p-4 text-center">
                <div class="icon-box bg-primary-subtle rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                  <i class="bi bi-clock-history text-primary fs-2"></i>
                </div>
                <h4 class="fw-bold mb-2">Ketepatan Waktu</h4>
                <p class="mb-0">
                  Menghargai waktu klien dengan menyelesaikan proyek sesuai jadwal yang disepakati
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company History Timeline -->
    <section class="history-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Perjalanan Kami</h2>
          <p class="lead">
            Melihat kembali perkembangan Nyawiji Web Solutions dari waktu ke waktu
          </p>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-badge bg-primary">
              <i class="bi bi-calendar-date text-white"></i>
            </div>
            <div class="timeline-panel card border-0 shadow">
              <div class="card-body">
                <h5 class="fw-bold">2018</h5>
                <p class="text-muted mb-2">Pendirian Perusahaan</p>
                <p>
                  Nyawiji Web Solutions didirikan oleh sekelompok developer muda yang bersemangat untuk memberikan solusi digital terbaik bagi bisnis di Indonesia.
                </p>
              </div>
            </div>
          </div>

          <div class="timeline-item timeline-inverted">
            <div class="timeline-badge bg-primary">
              <i class="bi bi-calendar-date text-white"></i>
            </div>
            <div class="timeline-panel card border-0 shadow">
              <div class="card-body">
                <h5 class="fw-bold">2019</h5>
                <p class="text-muted mb-2">Kerja Sama Pertama dengan BUMN</p>
                <p>
                  Berhasil menjalin kerja sama dengan BUMN pertama untuk pengembangan sistem absensi digital yang terintegrasi.
                </p>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-badge bg-primary">
              <i class="bi bi-calendar-date text-white"></i>
            </div>
            <div class="timeline-panel card border-0 shadow">
              <div class="card-body">
                <h5 class="fw-bold">2020</h5>
                <p class="text-muted mb-2">Ekspansi Layanan</p>
                <p>
                  Memperluas layanan dengan menambahkan pengembangan aplikasi mobile dan sistem POS untuk memenuhi kebutuhan klien yang beragam.
                </p>
              </div>
            </div>
          </div>

          <div class="timeline-item timeline-inverted">
            <div class="timeline-badge bg-primary">
              <i class="bi bi-calendar-date text-white"></i>
            </div>
            <div class="timeline-panel card border-0 shadow">
              <div class="card-body">
                <h5 class="fw-bold">2022</h5>
                <p class="text-muted mb-2">Pencapaian 100 Proyek</p>
                <p>
                  Mencapai tonggak penting dengan menyelesaikan 100 proyek untuk berbagai klien dari beragam industri.
                </p>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-badge bg-primary">
              <i class="bi bi-calendar-date text-white"></i>
            </div>
            <div class="timeline-panel card border-0 shadow">
              <div class="card-body">
                <h5 class="fw-bold">2024</h5>
                <p class="text-muted mb-2">Inovasi Teknologi Terbaru</p>
                <p>
                  Mengadopsi teknologi terbaru seperti AI dan blockchain untuk memberikan solusi yang lebih inovatif bagi klien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <section class="team-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Tim Inti Kami</h2>
          <p class="lead">
            Bertemu dengan para profesional di balik Nyawiji Web Solutions
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow h-100">
              <img src="/images/team/ceo.jpg" class="card-img-top" alt="CEO Nyawiji Web Solutions">
              <div class="card-body p-4 text-center">
                <h4 class="fw-bold mb-1">Agung Budi P</h4>
                <p class="text-muted mb-3">CEO & Lead Developer</p>
                <p class="mb-3">
                  Berpengalaman lebih dari 10 tahun dalam pengembangan web dan aplikasi enterprise.
                </p>
                <div class="social-icons">
                  <a href="#" class="text-secondary me-2"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="text-secondary me-2"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="text-secondary"><i class="bi bi-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow h-100">
              <img src="/images/team/cto.jpg" class="card-img-top" alt="CTO Nyawiji Web Solutions">
              <div class="card-body p-4 text-center">
                <h4 class="fw-bold mb-1">Setyaji Meylina P</h4>
                <p class="text-muted mb-3">CTO</p>
                <p class="mb-3">
                  Ahli arsitektur sistem dan teknologi cloud dengan pengalaman di beberapa perusahaan teknologi terkemuka.
                </p>
                <div class="social-icons">
                  <a href="#" class="text-secondary me-2"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="text-secondary me-2"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="text-secondary"><i class="bi bi-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow h-100">
              <img src="/images/team/design-lead.jpg" class="card-img-top" alt="Design Lead Nyawiji Web Solutions">
              <div class="card-body p-4 text-center">
                <h4 class="fw-bold mb-1">Ardiyansyah N</h4>
                <p class="text-muted mb-3">UI/UX Design Lead</p>
                <p class="mb-3">
                  Desainer UI/UX dengan keahlian dalam menciptakan pengalaman pengguna yang intuitif dan estetik.
                </p>
                <div class="social-icons">
                  <a href="#" class="text-secondary me-2"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="text-secondary me-2"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="text-secondary"><i class="bi bi-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow h-100">
              <img src="/images/team/mobile-lead.jpg" class="card-img-top" alt="Mobile Development Lead Nyawiji Web Solutions">
              <div class="card-body p-4 text-center">
                <h4 class="fw-bold mb-1">Edo Bagus P</h4>
                <p class="text-muted mb-3">Mobile Development Lead</p>
                <p class="mb-3">
                  Spesialis pengembangan aplikasi mobile Android dan iOS dengan fokus pada performa dan user experience.
                </p>
                <div class="social-icons">
                  <a href="#" class="text-secondary me-2"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="text-secondary me-2"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="text-secondary"><i class="bi bi-envelope"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-us-section py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="fw-bold mb-4">Mengapa Memilih Kami?</h2>
            <p class="mb-4">
              Kami memahami bahwa ada banyak pilihan ketika mencari partner untuk pengembangan website dan aplikasi mobile. Berikut adalah alasan mengapa klien memilih Nyawiji Web Solutions:
            </p>
            <div class="mb-4">
              <h5 class="fw-bold mb-3">Tim Profesional dan Berpengalaman</h5>
              <p>
                Tim kami terdiri dari profesional dengan pengalaman luas dalam pengembangan web dan aplikasi mobile. Kami memiliki keahlian dalam berbagai teknologi modern untuk memberikan solusi terbaik bagi bisnis Anda.
              </p>
            </div>
            <div class="mb-4">
              <h5 class="fw-bold mb-3">Solusi yang Disesuaikan</h5>
              <p>
                Setiap bisnis memiliki kebutuhan unik. Kami tidak menawarkan solusi one-size-fits-all, tetapi bekerja sama dengan Anda untuk menciptakan produk digital yang sesuai dengan kebutuhan spesifik dan anggaran Anda.
              </p>
            </div>
            <div>
              <h5 class="fw-bold mb-3">Dukungan Pasca-Peluncuran</h5>
              <p>
                Layanan kami tidak berhenti setelah peluncuran produk. Kami menyediakan dukungan teknis berkelanjutan untuk memastikan website atau aplikasi Anda berjalan lancar dan mendapatkan pembaruan yang diperlukan.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              src="/images/why-choose-us.jpg"
              alt="Keunggulan Nyawiji Web Solutions"
              class="img-fluid rounded-3 shadow"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Clients Section -->
    <section class="clients-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">Klien Kami</h2>
          <p class="lead">
            Beberapa perusahaan dan organisasi yang telah mempercayakan proyek digital mereka kepada kami
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
  name: 'AboutPage',
  metaInfo: {
    title: 'Tentang Kami - Nyawiji Web Solutions',
    meta: [
      { name: 'description', content: 'Nyawiji Web Solutions adalah penyedia jasa pembuatan website dan aplikasi mobile profesional dengan tim berpengalaman yang telah dipercaya oleh BUMN dan perusahaan swasta.' },
      { name: 'keywords', content: 'tentang nyawiji, web developer semarang, pengembang aplikasi, jasa website profesional, perusahaan teknologi, tim profesional, tentang kami' }
    ]
  }
}
</script>

<style scoped>
/* Timeline Styling */
.timeline {
  position: relative;
  padding: 1rem 0;
}

.timeline:before {
  content: '';
  position: absolute;
  height: 100%;
  width: 3px;
  background: #3498db;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
}

.timeline-badge {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-panel {
  width: calc(50% - 2rem);
  float: left;
  position: relative;
}

.timeline-inverted .timeline-panel {
  float: right;
}

.timeline-item:after {
  content: "";
  display: table;
  clear: both;
}

/* Team Section Styling */
.social-icons a {
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  color: #3498db !important;
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

/* Responsive Adjustments */
@media (max-width: 991.98px) {
  .timeline:before {
    left: 40px;
  }
  
  .timeline-badge {
    left: 40px;
  }
  
  .timeline-panel {
    width: calc(100% - 90px);
    float: right;
  }
  
  .timeline-inverted .timeline-panel {
    float: right;
  }
}
</style>