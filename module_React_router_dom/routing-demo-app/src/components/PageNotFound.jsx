import React from "react";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <>
      <MDBContainer className="text-center">
        <h1 className="text-center my-5">404 - Page Not Found</h1>
        <p className="text-center">
          The page you are looking for does not exist. Please check the URL or
          return to the home page.
        </p>
        <Link to="/">
          <MDBBtn className="mt-3 btn btn-primary" href="/">
            Go to Home
          </MDBBtn>
        </Link>
      </MDBContainer>
    </>
  );
}
