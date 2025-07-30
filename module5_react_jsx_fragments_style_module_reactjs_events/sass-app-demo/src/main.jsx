import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import { App } from "./App.jsx";
// import "./style.scss";
import "./index.css";
import "animate.css";
import AosApp from "./AosApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AosApp></AosApp>
  </StrictMode>
);
