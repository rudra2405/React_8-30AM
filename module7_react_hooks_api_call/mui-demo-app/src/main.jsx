import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import SelectApp from "./SelectApp.jsx";
import MuiValidationForm from "./FormApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <SelectApp></SelectApp>
    <MuiValidationForm />
  </StrictMode>
);
