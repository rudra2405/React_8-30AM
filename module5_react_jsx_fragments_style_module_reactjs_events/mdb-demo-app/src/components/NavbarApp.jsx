import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

export default function NavbarApp() {
  return (
    <>
      <MDBNavbar className="navbar navbar-expand-lg bg-dark p-3 sticky-top top-0 d-flex justify-content-between align-items-center">
        <MDBNavbarBrand className="text-white fs-2">Rudra App</MDBNavbarBrand>

        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              Ourse Courses
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              Feedback
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              Our blogs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              Workshop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">
              Contact us
            </a>
          </li>
        </ul>
      </MDBNavbar>
    </>
  );
}
