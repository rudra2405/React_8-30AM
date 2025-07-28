import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
// import NavbarApp from "./Navbar";

export default function About() {
  return (
    <>
      {/* <NavbarApp></NavbarApp> */}
      <MDBContainer>
        <h1 className="text-center my-5">About Us</h1>
        <p className="text-center">
          This is the about page of our routing demo app. Here you can find more
          information about the app and its features.
        </p>
        <p className="text-center">
          We aim to demonstrate how routing works in a React application using
          React Router DOM.
        </p>
      </MDBContainer>
    </>
  );
}
