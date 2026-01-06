import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://65641caa8b451b40cd45e5edc4292596@o4510625153548288.ingest.us.sentry.io/4510663958724608",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);