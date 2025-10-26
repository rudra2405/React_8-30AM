import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/CSS/style.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import AdminLayout from "./AdminLayout.jsx";
import AdminLogin from "./components/admin/AdminLogin.jsx";
import Dashboard from "./components/admin/pages/Dashboard.jsx";
import ManageCustomers from "./components/admin/pages/ManageCustomers.jsx";
import AddCenters from "./components/admin/pages/AddCenters.jsx";
import AddFranchise from "./components/admin/pages/AddFranchise.jsx";
import AddCourse from "./components/admin/pages/AddCourse.jsx";
import AddBlogs from "./components/admin/pages/AddBlogs.jsx";
import ManageContacts from "./components/admin/pages/ManageContacts.jsx";
import ManageReviews from "./components/admin/pages/ManageReviews.jsx";
import About from "./components/user/pages/About.jsx";
import OurCourses from "./components/user/pages/OurCourses.jsx";
import Centers from "./components/user/pages/Centers.jsx";
import Placements from "./components/user/pages/Placements.jsx";
import Franshise from "./components/user/pages/Franshise.jsx";
// import Blog from "./components/user/pages/Blog.jsx";
import Contact from "./components/user/pages/Contact.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* User panel Layout */}
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<OurCourses></OurCourses>} />
        <Route path="/centers" element={<Centers></Centers>} />
        <Route path="/placements" element={<Placements></Placements>} />
        <Route path="/franchise" element={<Franshise></Franshise>} />
        <Route path="/blog" element={<OurCourses></OurCourses>} />
        <Route path="/contact" element={<Contact></Contact>} />

        {/* Admin panel Layout */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-customers" element={<ManageCustomers />} />
          <Route path="add-centers" element={<AddCenters />} />
          <Route path="add-franchise" element={<AddFranchise />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="add-blogs" element={<AddBlogs />} />
          <Route path="manage-reviews" element={<ManageReviews />} />
          <Route path="manage-contacts" element={<ManageContacts />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
