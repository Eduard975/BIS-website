import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./index.css";
import ScrollToTop from "./hooks/ScrollToTop";
import { ScrollToHash } from "./hooks/ScrollToHash";

import ReactGA from "react-ga4";
import { AnalyticsProvider } from "./hooks/AnalyticsProvider";
import { BASE_PATH } from "../basepath";
import { HelmetProvider } from "react-helmet-async";
import { MetaManager } from "./components/Universal/MetaManager";

ReactGA.initialize("G-57JENFM8BM");

ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={BASE_PATH}>
        <MetaManager />
        <AnalyticsProvider />
        <ScrollToHash />
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
