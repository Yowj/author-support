import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./hooks/CategoriesContext";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <CategoriesProvider>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} autoHideDuration={3000}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </CategoriesProvider>
);
