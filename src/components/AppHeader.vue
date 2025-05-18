<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="/images/logo.svg" alt="Nyawiji Web Solutions" height="40" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.name === 'home' }" to="/">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.name === 'about' }" to="/tentang-kami">Tentang Kami</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.name === 'services' }" to="/layanan">Layanan</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.name === 'portfolio' }" to="/portofolio">Portofolio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.name === 'contact' }" to="/kontak">Kontak</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.navbar {
  padding: 0.75rem 0;
}

.nav-link {
  font-weight: 500;
  color: #333;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #3498db;
}
</style>