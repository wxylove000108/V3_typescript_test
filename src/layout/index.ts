import type { App } from 'vue'
import Headers from './headers/index.vue'
import Footers from './footers/index.vue'
import Mains from './mains/index.vue'

const layoutComponents = [Headers, Footers, Mains]
export default {
  install(app: App) {
    layoutComponents.forEach(comp => app.component(comp.name, comp))
  }
}
