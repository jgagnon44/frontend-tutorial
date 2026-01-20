import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// Import and init Sentry SDK
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://e7243723cd42e51c6b5b8184368a74d1@o4510625153548288.ingest.us.sentry.io/4510743194173440",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);