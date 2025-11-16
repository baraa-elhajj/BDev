import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import "./i18n";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </ThemeProvider>
  </StrictMode>
);
