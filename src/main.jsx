import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Import the i18n configuration (this must come before any component that uses translations)
import "./i18n";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
