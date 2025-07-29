import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const office = [
  {
    name: "Corporate Office",
    location: "Mumbai",
    Address:
      "5th Floor, Amore Building, Junction of 2nd & 4th Road, Khar, Maharashtra, Mumbai - 400052",
    mobileNo: "07666830000",
    email: "​info@jetking.com",
  },
  {
    name: "Registered Office",
    location: "Mumbai",
    Address:
      "Office No. 503, 5th Floor, Amore Commercial Premises Co-Op Society Ltd. Mumbai – 400052",
    mobileNo: "07666830000",
    email: "​info@jetking.com",
  },
  {
    name: "Regional Office",
    location: "Delhi- Laxmi Nagar",
    Address:
      "Pragati Deep Building, 6th Floor, Plot no. 8, Laxmi Nagar Dist Centre, Delhi 110092",
    mobileNo: "011-4728888",
    email: "​​delro@jetking.com",
  },
  {
    name: "Regional Office",
    location: "Kolkata",
    Address:
      "1 A, Elgin Apartments, Ashutosh Mukherjee Road, Above ICICI Bank, Bhawanipore, Kolkata 700020",
    mobileNo: "033-40034601, 40034602, 40034603",
    email: "​​kol@jetking.com",
  },
];
export default function Contact() {
  return (
    <>
      <Header></Header>
      <MDBContainer className="my-5">
        <MDBRow className="gx-5">
          <div className="col-lg-6 col-12">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/322074/file/661ffd02a107a7074cd4485b4bfe8f3d.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <h1 className="text-danger fw-bold">ContactUs</h1>
            <p className="fs-5">
              Have a inquiry or some feedback for us? Fill out the form below to
              contact our team.
            </p>
            <form
              id="Rudra"
              className="p-3 ms-lg-3 border border-1 rounded shadow d-flex flex-column justify-content-center"
            >
              <label className="fw-bold">Name:</label>
              <input type="text" className="form-control" />
              <label className="fw-bold mt-2">Email:</label>
              <input type="text" className="form-control" />
              <label className="fw-bold mt-2">Phone:</label>
              <input type="text" className="form-control" />
              <label className="fw-bold mt-2">State:</label>
              <select className="form-select">
                <option>Select state</option>
                <option>Gujarat</option>
                <option>Maharashtra</option>
                <option>West Bengal</option>
                <option>Punjab</option>
                <option>Kerala</option>
              </select>
              <label className="fw-bold mt-2">Center:</label>
              <select className="form-select">
                <option>Select Center</option>
                <option>Gujarat</option>
                <option>Maharashtra</option>
                <option>West Bengal</option>
                <option>Punjab</option>
                <option>Kerala</option>
              </select>
              <button className="btn btn-danger mt-4">Submit</button>
            </form>
          </div>
        </MDBRow>
      </MDBContainer>
      <section className="my-5">
        <MDBContainer>
          <h5 className="text-center">Visit Us</h5>
          <h1 className="text-center fw-bold text-danger">
            Spread Across India
          </h1>

          <MDBRow className="mt-2 mt-lg-5 gx-5 gy-5">
            {office?.map((item, index) => {
              return (
                <div className="col-lg-6 col-12" key={index}>
                  <div
                    className="box shadow p-3"
                    style={{ maxHeight: "250px" }}
                  >
                    <h2 className="text-danger fs-5 fs-md-1">{item.name}</h2>
                    <h4>{item.location}</h4>
                    <p>{item.Address}</p>
                    <span className="d-flex align-baseline">
                      <i className="fa fa-phone"></i>
                      <p className="ms-2">{item.mobileNo}</p>
                    </span>
                    <span className="d-flex align-baseline">
                      <i class="fa-solid fa-envelopes-bulk"></i>
                      <p className="ms-2">{item.email}</p>
                    </span>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-md-6">
              <div className="box shadow p-4" style={{ maxHeight: "250px" }}>
                <h2 className="text-danger">Registered Office</h2>
                <h4>Mumbai</h4>
                <p>
                  Office No. 503, 5th Floor, Amore Commercial Premises Co-Op
                  Society Ltd, Mumbai – 400052
                </p>
                <span className="d-flex align-baseline">
                  <i className="fa fa-phone"></i>
                  <p className="ms-2">07666830000</p>
                </span>
                <span className="d-flex align-baseline">
                  <i class="fa-solid fa-envelopes-bulk"></i>
                  <p className="ms-2">info@jetking.com</p>
                </span>
              </div>
            </div> */}
            {/* <div className="col-md-6">
              <div className="box shadow p-4" style={{ maxHeight: "250px" }}>
                <h2 className="text-danger">Regional Office</h2>
                <h4>Delhi- Laxmi Nagar</h4>
                <p>
                  Pragati Deep Building, 6th Floor, Plot no. 8, Laxmi Nagar Dist
                  Centre, Delhi 110092
                </p>
                <span className="d-flex align-baseline">
                  <i className="fa fa-phone"></i>
                  <p className="ms-2">011-4728888</p>
                </span>
                <span className="d-flex align-baseline">
                  <i class="fa-solid fa-envelopes-bulk"></i>
                  <p className="ms-2">delro@jetking.com</p>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box shadow p-4" style={{ maxHeight: "250px" }}>
                <h2 className="text-danger">Regional Office</h2>
                <h4>Kolkata - Elign Road- Bhawanipore</h4>
                <p>
                  1 A, Elgin Apartments, Ashutosh Mukherjee Road, Above ICICI
                  Bank, Bhawanipore, Kolkata 700020
                </p>
                <span className="d-flex align-baseline">
                  <i className="fa fa-phone"></i>
                  <p className="ms-2">033-40034601, 40034602, 40034603</p>
                </span>
                <span className="d-flex align-baseline">
                  <i class="fa-solid fa-envelopes-bulk"></i>
                  <p className="ms-2">​kol@jetking.com</p>
                </span>
              </div>
            </div> */}
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer></Footer>
    </>
  );
}
