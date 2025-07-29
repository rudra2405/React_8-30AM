import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { MDBContainer, MDBRow, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Placements() {
  return (
    <>
      <Header></Header>

      <section className="mt-3 p-5">
        <MDBRow className="">
          <div className="col-md-6">
            <h1 className="fw-bold text-danger">
              Career Growth Begins With Right Placement.
            </h1>
            <p>
              Gain the upper hand through our extensive network of
              world-renowned industry and placement partners.
            </p>
            <Link
              to=""
              className="btn btn-danger border border-white border-2 fw-bold"
            >
              Enquire Now
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-5">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/440838/file/a7d0fbf31c543d36c8af6e6b5bfe0c03.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </MDBRow>
      </section>

      <section className="mt-5 p-5">
        <p className="fs-1 text-danger text-center">
          Brands that are our placement partners
        </p>
        <MDBRow className="d-flex justify-content-center">
          <div className="col-12 col-md-6">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/574888/file/7dc21817d342639842529e4af722b00b.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </MDBRow>
      </section>
      <section className="mt-5 p-5">
        <p className="fs-1 text-danger text-center">Career Growth</p>
        <p className="text-center fs-5 fw-bold">
          Take the next step in your professional journey, with courses designed
          to help you grow your career.
        </p>
        <MDBRow className="d-flex justify-content-center">
          <div className="col-12 col-md-6">
            <img
              src="https://statics.myclickfunnels.com/image/574944/file/0ff6cb4286e5db35efba109861ca58f8.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </MDBRow>
      </section>

      <Footer></Footer>
    </>
  );
}
