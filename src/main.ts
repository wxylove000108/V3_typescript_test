import { createApp } from 'vue'
import 'normalize.css'
import 'uno.css'
import './style/theme.css'

import Layout from '@/layout'

import router from '@/router/index'
import App from './App.vue'
const app = createApp(App)
app.use(router).use(Layout).mount('#app')
