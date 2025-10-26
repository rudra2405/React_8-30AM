import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import AddTask from "./components/AddTask.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
// import DeleteTask from "./components/DeleteTask.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/add-task" element={<AddTask />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        {/* <Route path="/delete-task/:id" element={<DeleteTask />}></Route> */}
      </Routes>
    </Router>
  </StrictMode>
);
