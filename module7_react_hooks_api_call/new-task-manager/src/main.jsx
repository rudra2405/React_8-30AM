import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import ContactUs from "./ContactUs.jsx";
import DeleteTask from "./DeleteTask.jsx";
import UpdateTask from "./UpdateTask.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Layout></Layout>}></Route>
      <Route path="/contact-us" element={<ContactUs />}></Route>
      <Route
        path="/delete-task/:id"
        element={<DeleteTask></DeleteTask>}
      ></Route>
      <Route
        path="/update-task/:id"
        element={<UpdateTask></UpdateTask>}
      ></Route>
    </Routes>
  </Router>
  // </StrictMode>
);
