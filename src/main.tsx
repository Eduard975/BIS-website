import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./index.css";
import ScrollToTop from "./hooks/ScrollToTop";
import { ScrollToHash } from "./hooks/ScrollToHash";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
