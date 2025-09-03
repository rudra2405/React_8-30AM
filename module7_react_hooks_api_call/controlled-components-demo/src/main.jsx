import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Controlled from "./Controlled.jsx";
import Uncontrolled from "./Uncontrolled.jsx";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Controlled></Controlled>
    <Uncontrolled></Uncontrolled>
  </StrictMode>
);
