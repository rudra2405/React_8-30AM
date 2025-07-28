import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./assets/CSS/style.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layout from "./Layout";
// import NavbarToggler from "./components/NavbarToggler";
// import CardApp from "./components/CardApp";
// import AccordianApp from "./components/AccordianApp";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout></Layout>
  </StrictMode>
);
