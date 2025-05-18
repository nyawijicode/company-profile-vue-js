import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import PortfolioPage from '../pages/PortfolioPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
        meta: {
          title: 'Nyawiji Web Solutions - Jasa Pembuatan Website & Aplikasi Mobile Profesional',
          metaTags: [
            {
              name: 'description',
              content: 'Jasa pembuatan website profesional, e-commerce, POS, sistem absensi, dan aplikasi mobile. Dipercaya oleh BUMN dan perusahaan swasta.'
            },
            {
              property: 'og:title',
              content: 'Nyawiji Web Solutions - Jasa Pembuatan Website & Aplikasi Mobile Profesional'
            }
          ]
        }
      },
      {
        path: '/tentang-kami',
        name: 'about',
        component: AboutPage,
        meta: {
          title: 'Tentang Kami - Nyawiji Web Solutions',
          metaTags: [
            {
              name: 'description',
              content: 'Nyawiji Web Solutions adalah penyedia jasa pembuatan website dan aplikasi mobile profesional dengan tim berpengalaman yang telah dipercaya oleh BUMN dan perusahaan swasta.'
            }
          ]
        }
      },
      {
        path: '/layanan',
        name: 'services',
        component: ServicesPage,
        meta: {
          title: 'Layanan Kami - Nyawiji Web Solutions',
          metaTags: [
            {
              name: 'description',
              content: 'Layanan pembuatan website company profile, e-commerce, POS, sistem absensi, koperasi simpan pinjam, dan aplikasi mobile.'
            }
          ]
        }
      },
      {
        path: '/portofolio',
        name: 'portfolio',
        component: PortfolioPage,
        meta: {
          title: 'Portofolio - Nyawiji Web Solutions',
          metaTags: [
            {
              name: 'description',
              content: 'Portofolio project website dan aplikasi mobile dari Nyawiji Web Solutions yang telah dikerjakan untuk BUMN dan perusahaan swasta.'
            }
          ]
        }
      },
      {
        path: '/kontak',
        name: 'contact',
        component: ContactPage,
        meta: {
          title: 'Hubungi Kami - Nyawiji Web Solutions',
          metaTags: [
            {
              name: 'description',
              content: 'Hubungi Nyawiji Web Solutions untuk konsultasi dan pemesanan jasa pembuatan website dan aplikasi mobile.'
            }
          ]
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: 'Halaman Tidak Ditemukan - Nyawiji Web Solutions'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title based on route meta
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  }

  // Remove any stale meta tags
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).forEach(
    (el) => el.parentNode.removeChild(el)
  )

  // Add meta tags
  if (nearestWithMeta) {
    nearestWithMeta.meta.metaTags.forEach((tagDef) => {
      const tag = document.createElement('meta')
      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key])
      })
      tag.setAttribute('data-vue-router-controlled', '')
      document.head.appendChild(tag)
    })
  }

  next()
})

export default router