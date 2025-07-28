import React from "react";
import { Nav, NavbarBrand, Badge } from "react-bootstrap";
export default function NavbarToggler() {
  return (
    <>
      <Nav className="navbar navbar-expand-lg bg-dark p-3 sticky-top d-flex justify-content-between align-items-center">
        <NavbarBrand className="text-white">FlipKart</NavbarBrand>

        <ul className="navbar-nav d-flex gap-5 mb-0">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#CarouselApp">
              Carousel
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#CardApp">
              CardApp
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#AccordianApp">
              Accordian
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white d-flex align-items-center"
              href="#"
            >
              Cart
              {/* <i className="bu bi-cart-fill text-danger"></i> */}
              <Badge className="bg-danger text-white ms-1">0</Badge>
            </a>
          </li>
        </ul>
      </Nav>
    </>
  );
}
