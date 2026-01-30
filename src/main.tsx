import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./index.css";
import ScrollToTop from "./hooks/ScrollToTop";
import { ScrollToHash } from "./hooks/ScrollToHash";

import ReactGA from "react-ga4";
import { AnalyticsProvider } from "./hooks/AnalyticsProvider";

ReactGA.initialize("G-57JENFM8BM");

ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/BIS-website/">
      <AnalyticsProvider />
      <ScrollToHash />
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
