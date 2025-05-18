<template>
  <div class="contact-form">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Nama</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="form.name"
          placeholder="Masukkan nama Anda"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email"
          placeholder="Masukkan email Anda"
          required
        />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Nomor Telepon</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          v-model="form.phone"
          placeholder="Masukkan nomor telepon Anda"
          required
        />
      </div>
      <div class="mb-3">
        <label for="service" class="form-label">Layanan yang Diminati</label>
        <select class="form-select" id="service" v-model="form.service" required>
          <option value="" disabled selected>Pilih layanan</option>
          <option value="website-company-profile">Website Company Profile</option>
          <option value="e-commerce">E-Commerce</option>
          <option value="pos">Sistem POS</option>
          <option value="attendance">Sistem Absensi</option>
          <option value="cooperative">Koperasi Simpan Pinjam</option>
          <option value="mobile-app">Aplikasi Mobile</option>
          <option value="other">Lainnya</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Pesan</label>
        <textarea
          class="form-control"
          id="message"
          v-model="form.message"
          rows="5"
          placeholder="Tuliskan pesan atau kebutuhan Anda"
          required
        ></textarea>
      </div>
      <div class="d-grid">
        <button type="submit" class="btn btn-primary btn-lg" :disabled="isSubmitting">
          {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
        </button>
      </div>
    </form>

    <div v-if="showSuccess" class="alert alert-success mt-4" role="alert">
      Terima kasih telah menghubungi kami! Kami akan segera menghubungi Anda kembali.
    </div>

    <div v-if="showError" class="alert alert-danger mt-4" role="alert">
      Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti atau hubungi kami melalui WhatsApp.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      },
      isSubmitting: false,
      showSuccess: false,
      showError: false
    }
  },
  methods: {
    submitForm() {
      this.isSubmitting = true
      this.showSuccess = false
      this.showError = false

      // Simulasi pengiriman form (ganti dengan API call yang sebenarnya)
      setTimeout(() => {
        this.isSubmitting = false
        this.showSuccess = true
        
        // Reset form setelah berhasil dikirim
        this.form = {
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        }
      }, 1500)
    }
  }
}
</script>

<style scoped>
.contact-form {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
</style>