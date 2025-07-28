import React from "react";
import { MDBNavbar } from "mdb-react-ui-kit";
export default function Catagory() {
  return (
    <>
      <MDBNavbar className="w-100 p-2">
        <ul className="navbar-nav">
          <li className="nav-item mt-2">
            <a href="#">Laravel Course</a>
          </li>
          <li className="nav-item mt-2">
            <a href="#">React Course</a>
          </li>
          <li className="nav-item mt-2">
            <a href="#">Blockchain Course</a>
          </li>
          <li className="nav-item mt-2">
            <a href="#">Angular Course</a>
          </li>
          <li className="nav-item mt-2">
            <a href="#">Wordpress Course</a>
          </li>
        </ul>
      </MDBNavbar>
    </>
  );
}
