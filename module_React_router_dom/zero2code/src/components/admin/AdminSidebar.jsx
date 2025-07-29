import React from "react";
import { Link } from "react-router-dom";
import {
  FaBlog,
  FaBook,
  FaCalendarCheck,
  FaCentercode,
  FaDashcube,
  FaEnvelope,
  FaFantasyFlightGames,
  FaStar,
  FaUser,
} from "react-icons/fa";

export default function AdminSidebar() {
  return (
    <>
      <ul className="navbar-nav fw-bold sidebar-links">
        <li className="nav-item mt-3">
          <Link to="/admin/dashboard" className="nav-link text-white">
            <FaDashcube />
            &nbsp;Dashboard
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link to="/admin/manage-customers" className="nav-link text-white">
            <FaUser />
            &nbsp;Manage Customers
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link to="/admin/add-centers" className="nav-link text-white">
            <FaCentercode />
            &nbsp;Add Centers
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link to="/admin/add-franchise" className="nav-link text-white">
            <FaFantasyFlightGames />
            &nbsp;Add Franchise
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link to="/admin/add-course" className="nav-link text-white">
            <FaBook />
            &nbsp;Add Courses
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link to="/admin/add-blogs" className="nav-link text-white">
            <FaBlog />
            &nbsp;Add Blogs
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link to="/admin/manage-reviews" className="nav-link text-white">
            <FaStar />
            &nbsp;Manage Reviews
          </Link>
        </li>
        <li className="nav-item mt-3">
          <Link to="/admin/manage-contacts" className="nav-link text-white">
            <FaEnvelope />
            &nbsp;Manage Contacts
          </Link>
        </li>
        {/* <li className="nav-item mb-3">
          <Link to="" className="nav-link text-white">
            <FaCalendarCheck />
            &nbsp;Logged in on :
          </Link>
        </li> */}
      </ul>
    </>
  );
}
