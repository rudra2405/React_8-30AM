import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { FaPhone } from "react-icons/fa";

export default function Content() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 d-flex flex-column-reverse flex-md-row">
          <div className="col-md-6 mt-5 mt-md-0 text-center text-md-start d-flex justify-content-center flex-column">
            <h1>
              India’s only BCA with a job after first year +{" "}
              <span className="text-danger">Certifications Included</span>
            </h1>
            <h4>With over 79 years of legacy</h4>
            <div className="mt-4">
              <i className="fa-solid fa-circle-check me-2 text-danger"></i>
              ​Get a job after the first year
            </div>
            <div className="mt-4">
              <i className="fa-solid fa-circle-check me-2 text-danger"></i>
              Get a degree from top 100 university
            </div>
            <div className="mt-4">
              <i className="fa-solid fa-circle-check me-2 text-danger"></i>
              No entrance test required
            </div>
            <div className="mt-4">
              <i className="fa-solid fa-circle-check me-2 text-danger"></i>
              80% practical oriented degree program
            </div>
            <div className="mt-4">
              <i className="fa-solid fa-circle-check me-2 text-danger"></i>
              12,000+ Recruitment Partners
            </div>

            <Link to="" className="text-center text-md-start">
              <button className="btn btn-danger text-white mt-3 fw-bold">
                Enquire Now
              </button>
            </Link>
            <p className="fs-3 text-danger fw-bold text-center text-md-start">
              Call: 07666830000
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000,fit=scale-down,f=auto,q=100/https://statics.myclickfunnels.com/workspace/vnBgwv/image/13250020/file/178353fe8944bf7d99036a9acf44e325.png"
              className="img-fluid mt-3"
              alt="img"
            />
          </div>
        </div>
      </div>
      <section className="p-5 mt-5">
        <MDBContainer>
          <MDBRow>
            <div className="col-md-12 p-5 bg-light text-center">
              <h5 className="text-danger fs-3 fw-bold">Milestones Achieved</h5>
              <h6 className="mt-5">
                We ensure you learn the best, from the best through innovative
                methods and exceptional thought leadership. Learn from
                passionate instructors with expertise who believe in practical
                teaching methodologies. Explore our courses like cloud computing
                courses, cyber security courses, and many more IT training
                courses with 100% job placements below…
              </h6>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className="mt-5 rudra p-5 position-relative">
        <MDBRow className="bg-danger shadow p-4 rounded-6">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/439955/file/a0222cc7693560cff582eabee5b3dff4.webp"
              alt="logo"
              className="img-fluid position-absolute top-0 d-none d-lg-block"
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="col-md-8 text-center p-2  text-white">
            <h4>Clear All Your Doubts</h4>
            <h1>Speak to Our Career Counsellors</h1>
            <span className="fs-2">
              <FaPhone className="me-2"></FaPhone> 9107467787
            </span>
          </div>
        </MDBRow>
      </section>
    </>
  );
}
