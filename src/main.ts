import { createSSRApp } from "vue";
import store from '@/ui/store'
import mixins from '@/ui/js/mixin.js'
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);
  app.mixin(mixins)
  app.use(store)
  return {
    app,
  };
}
