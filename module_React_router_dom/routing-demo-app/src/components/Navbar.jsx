import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function NavbarApp() {
  return (
    <>
      <MDBNavbar className="bg-primary navbar navbar-expand-lg p-3 d-flex justify-content-between align-items-center">
        <MDBNavbarBrand className="my-app text-white">Routing</MDBNavbarBrand>

        <ul className="navbar-nav d-flex gap-5 mb-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about-us">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
      </MDBNavbar>
    </>
  );
}
