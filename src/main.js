import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/css/main.scss'

// Google Analytics setup (ganti UA-XXXXXXXX-X dengan ID GA Anda)
import VueGtag from 'vue-gtag-next'

const app = createApp(App)

app.use(router)
app.use(VueGtag, {
  property: {
    id: 'G-XXXXXXXXXX', // Ganti dengan ID Google Analytics Anda
    params: {
      send_page_view: true
    }
  }
})

app.mount('#app')