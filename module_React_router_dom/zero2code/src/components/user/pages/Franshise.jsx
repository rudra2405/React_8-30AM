import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { MDBContainer, MDBRow, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Franshise() {
  return (
    <>
      <Header></Header>

      <section
        className="overflow-hidden"
        style={{
          backgroundImage:
            "url('https://statics.myclickfunnels.com/image/1747320/file/5227210c6e29dea1b9e1939a9fa56cc4.jpeg')",
          backgroundSize: "contain",
          backgroundAttachment: "scroll",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "200px",
        }}
      >
        <MDBContainer>
          <MDBRow className="d-none my-4 justify-content-lg-end d-lg-flex">
            <div className="col-md-3">
              <form
                id="Rudra"
                className="p-3 bg-danger rounded-1 d-flex flex-column justify-content-center"
              >
                <h4 className="text-white text-center">
                  Transform the youth with a Jetking Franchise in your City!!
                </h4>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-white mt-3 p-2 border-0 rounded-1"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-white mt-3 p-2 border-0 rounded-1"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-white mt-3 p-2 border-0 rounded-1"
                />
                <input
                  type="text"
                  placeholder="Prefered City"
                  className="bg-white mt-3 p-2 border-0 rounded-1"
                />
                <select
                  name=""
                  id=""
                  className="form-select bg-white mt-3 p-2 border-0  rounded-1"
                >
                  <option>Investment Capacity</option>
                  <option>UP to 50L</option>
                  <option>UP to 1Cr</option>
                  <option>UP to 3cr</option>
                </select>
                <div class="d-flex justify-content-center">
                  <button className="mt-3 btn btn-danger px-4 text-white border border-white border-3 fw-bold">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className="mt-5 p-5 bg-dark">
        <MDBRow>
          <div className="col-12 col-lg-7">
            <p className="text-white fs-1">
              A proven system to help you achieve your potential
            </p>

            <p className="fs-4 text-white">
              Since the past 34 years, Jetking has been paving the way for
              inclusive education that reaches every corner of our society. With
              a staggering yearly student passout count of 236.91 million and an
              unemployment rate of 18.31 million, The IT sector presents a vast
              landscape of opportunities, with an estimated 32.5 million jobs
              waiting to be filled.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/990078/file/e0c480e4f91131c998c0ded795f3e5fe.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </MDBRow>
      </section>
      <MDBRow className="d-lg-none my-4 d-flex">
        <div className="col-12">
          <form
            id="Rudra"
            className="p-5 bg-danger rounded-5 d-flex flex-column justify-content-center"
          >
            <h4 className="text-white text-center">
              Transform the youth with a Jetking Franchise in your City!!
            </h4>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white mt-3 p-2 border-0 rounded-1"
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-white mt-3 p-2 border-0 rounded-1"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-white mt-3 p-2 border-0 rounded-1"
            />
            <input
              type="text"
              placeholder="Prefered City"
              className="bg-white mt-3 p-2 border-0 rounded-1"
            />
            <select
              name=""
              id=""
              className="bg-white mt-3 p-2 border-0  rounded-1"
            >
              <option>Investment Capacity</option>
              <option>UP to 50L</option>
              <option>UP to 1Cr</option>
              <option>UP to 3cr</option>
            </select>
            <button className="mt-3 btn btn-danger text-white border border-white border-3 fw-bold">
              Submit
            </button>
          </form>
        </div>
      </MDBRow>

      {/* <MDBRow className="w-100 p-5 mt-5"></MDBRow> */}
      {/* </MDBContainer> */}
      <Footer></Footer>
    </>
  );
}
