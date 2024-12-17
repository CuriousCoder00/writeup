import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "./components/ui/toaster.tsx";
import Header from "./components/header.tsx";
import { ThemeProvider } from "./hooks/use-theme.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute={["class", "data-theme"]}
      defaultTheme="dark"
      enableSystem={true}
      enableColorScheme={true}
      themes={["light", "dark"]}
    >
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
