import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import router from "./router";

// Export a function for SSG
export const createApp = ViteSSG(
  App,
  { routes: router.getRoutes(), base: import.meta.env.BASE_URL },
  ({ app, router, isClient }) => {
    // Additional setup can be performed here
    // For example, you could add plugins or provide global components
  }
);
