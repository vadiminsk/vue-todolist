import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./assets/main.css";
import router from "./router";
import store from "./store";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import components from "@/components/UI";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

Sentry.init({
  app,
  dsn:
    "https://0cd5f6a513e340d7969b170a1d407fee@o408625.ingest.sentry.io/6003131",
  maxBreadcrumbs: 50,
  debug: true,
  logErrors: true,
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: [
        "http://192.168.0.102:8080",
        "vadiminsk-todolist.netlify.app",
        /^\//,
      ],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.5,
});

app
  .use(store)
  .use(router)
  .mount("#app");
