import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

export default function Home() {
  return (
    <>
      <MDBContainer>
        <h1 className="text-center my-5">Welcome to the Home Page</h1>
        <p className="text-center">
          This is the home page of our routing demo app. You can navigate to
          different pages using the links in the navbar.
        </p>
        <p className="text-center">
          Explore the app to see how routing works with React Router DOM.
        </p>
      </MDBContainer>
    </>
  );
}
