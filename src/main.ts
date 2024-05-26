import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

// Export a function for SSG
export const createApp = ViteSSG(
  App,
  { routes: router.getRoutes(), base: import.meta.env.BASE_URL },
  ({ app, router, isClient }) => {
    app.use(PrimeVue);
  }
);
