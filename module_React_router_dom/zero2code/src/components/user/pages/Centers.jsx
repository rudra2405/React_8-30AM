import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Centers() {
  return (
    <>
      <Header></Header>
      <section className="mt-5">
        <h1 className="text-center text-danger">Centre Locator</h1>
        <p className="text-center">Jetking has centres across the nation.</p>
      </section>

      <section className="mt-5 p-5">
        <MDBRow className="d-flex justify-content-center g-4">
          <div className="col-md-6 shadow p-5 text-center">
            <Link to="" className="text-danger text-decoration-none fs-3">
              <p>Jetking Allahabad Learning Centre</p>
            </Link>
            <p>
              4th Floor Vinayak Complex, 27/17, Elgin Road, Civil Lines,
              Allahabad, Uttar Pradesh -211001.
            </p>
            <p>
              Jetking Admissions Helpline: 07666830000 Phone: 0532-6545289 /
              09307022076
            </p>
          </div>
          <div className="col-md-6 shadow p-5 text-center">
            <Link to="" className="text-danger text-decoration-none fs-3">
              <p>Jetking Allahabad Learning Centre</p>
            </Link>
            <p>
              4th Floor Vinayak Complex, 27/17, Elgin Road, Civil Lines,
              Allahabad, Uttar Pradesh -211001.
            </p>
            <p>
              Jetking Admissions Helpline: 07666830000 Phone: 0532-6545289 /
              09307022076
            </p>
          </div>
          <div className="col-md-6 shadow p-5 text-center">
            <Link to="" className="text-danger text-decoration-none fs-3">
              <p>Jetking Allahabad Learning Centre</p>
            </Link>
            <p>
              4th Floor Vinayak Complex, 27/17, Elgin Road, Civil Lines,
              Allahabad, Uttar Pradesh -211001.
            </p>
            <p>
              Jetking Admissions Helpline: 07666830000 Phone: 0532-6545289 /
              09307022076
            </p>
          </div>
          <div className="col-md-6 shadow p-5 text-center">
            <Link to="" className="text-danger text-decoration-none fs-3">
              <p>Jetking Allahabad Learning Centre</p>
            </Link>
            <p>
              4th Floor Vinayak Complex, 27/17, Elgin Road, Civil Lines,
              Allahabad, Uttar Pradesh -211001.
            </p>
            <p>
              Jetking Admissions Helpline: 07666830000 Phone: 0532-6545289 /
              09307022076
            </p>
          </div>
          <div className="col-md-6 shadow p-5 text-center">
            <Link to="" className="text-danger text-decoration-none fs-3">
              <p>Jetking Allahabad Learning Centre</p>
            </Link>
            <p>
              4th Floor Vinayak Complex, 27/17, Elgin Road, Civil Lines,
              Allahabad, Uttar Pradesh -211001.
            </p>
            <p>
              Jetking Admissions Helpline: 07666830000 Phone: 0532-6545289 /
              09307022076
            </p>
          </div>
          <div className="col-md-6 shadow p-5 text-center">
            <Link to="" className="text-danger text-decoration-none fs-3">
              <p>Jetking Allahabad Learning Centre</p>
            </Link>
            <p>
              4th Floor Vinayak Complex, 27/17, Elgin Road, Civil Lines,
              Allahabad, Uttar Pradesh -211001.
            </p>
            <p>
              Jetking Admissions Helpline: 07666830000 Phone: 0532-6545289 /
              09307022076
            </p>
          </div>
        </MDBRow>
      </section>
      <Footer></Footer>
    </>
  );
}
