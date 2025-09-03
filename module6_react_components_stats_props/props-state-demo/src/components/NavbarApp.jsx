import React from "react";

export default function NavbarApp() {
  return (
    <>
      <nav className="d-flex navbar-expand-lg justify-content-between bg-black p-2">
        <a href="#" className="text-white">
          Rudra
        </a>
        <ul className="navbar-nav d-flex">
          <li className="nav-item me-3">
            <a className="nav-link text-white">Home</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link  text-white">About</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link  text-white">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
