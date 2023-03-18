// 挂载app过滤
// import apFilters from "@/app/js/filters.js"
// Object.keys(filters).forEach(key => {
// 	Vue.filter(key, filters[key])
// })

import appMixin from '@/app/js/mixin.js'
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp()
  app.mixin(appMixin)
  return {
    app
  }
}

