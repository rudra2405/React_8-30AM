import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./index.css";
import Layout from "../Layout";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
