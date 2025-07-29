import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { MDBContainer, MDBRow, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "BCA In Cloud Computing & Cyber Security",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://statics.myclickfunnels.com/workspace/vnBgwv/image/4762174/file/76f4bcab2ddd9f40a37ece708ba42851.jpg",
  },
  {
    title: "BCA In Multimedia and Animation",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://statics.myclickfunnels.com/workspace/vnBgwv/image/13277201/file/95c1c7ce621c03f81e238e16d945023a.jpg",
  },
  {
    title: "BCA In Data Science with AI",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://statics.myclickfunnels.com/workspace/vnBgwv/image/13277211/file/e96ba514eb81bee519531137a82c6df1.jpg",
  },
  {
    title: "BBA in Business Analytics",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://statics.myclickfunnels.com/workspace/vnBgwv/image/4762174/file/76f4bcab2ddd9f40a37ece708ba42851.jpg",
  },
  {
    title: "BBA in Digital Marketing",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://statics.myclickfunnels.com/workspace/vnBgwv/image/13277201/file/95c1c7ce621c03f81e238e16d945023a.jpg",
  },
  {
    title: "BCom in Finance and Accounting",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "BCA in Game Development",
    duration: "36 Months",
    mode: "Offline/Hybrid",
    image:
      "https://statics.myclickfunnels.com/workspace/vnBgwv/image/13277201/file/95c1c7ce621c03f81e238e16d945023a.jpg",
  },
];

export default function OurCourses() {
  return (
    <>
      <Header></Header>
      <section className="mt-5">
        <h1 className="text-danger text-center fw-bold">Our Courses</h1>
        <p className="fw-bold text-center">
          Set the foundation for an excellent career with Jetking’s professional
          courses.
        </p>
        <MDBContainer fluid className="py-5">
          <MDBRow className="row d-flex justify-content-center g-3">
            {courses.map((course, index) => (
              <div className="col-12 col-md-3 mb-4 d-flex" key={index}>
                <MDBCard className="card p-3 rudra2 shadow w-100">
                  <img
                    src={course.image}
                    className="card-img-top"
                    alt={course.title}
                    style={{ height: 180, objectFit: "cover" }}
                  />
                  <MDBCardBody className="card-body d-flex flex-column">
                    <h6 className="text-danger fw-bold">{course.title}</h6>
                    <p className="mb-1 text-muted">
                      <i className="fa fa-clock me-2 text-danger" />
                      {course.duration}
                    </p>
                    <p className="mb-3 text-muted">
                      <i className="fa fa-book-open me-2 text-danger" />
                      {course.mode}
                    </p>
                    <hr className="border border-danger border-1" />
                    Explore More
                    <hr className="border border-danger border-1" />
                    <Link
                      to=""
                      className="btn btn-danger ms-4 border border-white border-4 mb-2 fw-bold p-2 w-75 shadow"
                    >
                      Enroll Now!
                    </Link>
                    <Link to="" className="btn btn-danger fw-bold">
                      Download Brochure
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer></Footer>
    </>
  );
}
