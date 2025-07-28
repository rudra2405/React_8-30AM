import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
// import NavbarApp from "./Navbar";

export default function Contact() {
  return (
    <>
      {/* <NavbarApp></NavbarApp> */}
      <MDBContainer>
        <h1 className="text-center my-5">Contact Us</h1>
        <p className="text-center">
          This is the contact page of our routing demo app. If you have any
          questions or feedback, feel free to reach out to us.
        </p>
        <p className="text-center">You can contact us via email at</p>
      </MDBContainer>
    </>
  );
}
