import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <>
      <MDBFooter
        className="text-white text-center text-lg-start overflow-hidden"
        style={{ backgroundColor: "#2f2f2f" }}
      >
        <MDBRow className="d-flex justify-content-center g-5 mt-2 p-5">
          {/* Logo in separate column */}
          <MDBCol md="3" className="d-flex align-items-start">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/104133/file/43830dde4f0f5af5e9592f3fe03738f2.png"
              alt="Rudra Logo"
              className="img-fluid h-10 w-75"
            />
          </MDBCol>

          {/* Contact Info */}
          <MDBCol md="3" className="">
            <h6 className="text-uppercase fw-bold">Contact Us</h6>
            <p className="mb-1 mt-4">
              5th Floor, Amore Building,
              <br />
              Junction of 2nd & 4th Road, Khar,
              <br />
              Maharashtra, Mumbai - 400052, India
            </p>
            <p className="mb-1">info@jetking.com</p>
            <p>07666830000</p>

            <h6 className="text-uppercase fw-bold mt-5">Important Links</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <a href="/" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Investors
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Centres
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Enrollment Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Sitemap
                </a>
              </li>
            </ul>
          </MDBCol>

          {/* Important Links */}
          {/* <MDBCol md="2" className="mb-4 mb-md-0"></MDBCol> */}

          {/* Career & Certification */}
          <MDBCol md="3" className="">
            <h6 className="text-uppercase fw-bold">Career Courses</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <a href="#!" className="text-white">
                  Cloud Computing Engineer (AI)
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Cloud Computing Professional (AI)
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  BCA in Cloud & Cyber Security
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Masters in Gaming & Metaverse
                </a>
              </li>
            </ul>
            <h6 className="text-uppercase fw-bold mt-5">
              Certification Courses
            </h6>
            <ul className="list-unstyled mt-4">
              <li>
                <a href="#!" className="text-white">
                  Red Hat Professional
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Routing & Switching Admin
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Microsoft Server Tech
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Ethical Hacking
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  AWS Solution Specialist
                </a>
              </li>
            </ul>
          </MDBCol>

          {/* Remaining sections */}
          <MDBCol md="3">
            <h6 className="text-uppercase fw-bold">Short Courses</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <a href="#!" className="text-white">
                  Digital Marketing Training
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  PC Hardware Support
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Windows 10 OS
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Networking Essentials
                </a>
              </li>
            </ul>
            <h6 className="text-uppercase fw-bold mt-4">Jetking Connect</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <a href="#!" className="text-white">
                  Institutional Alliance
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Corporate Training
                </a>
              </li>
            </ul>
            <h6 className="text-uppercase fw-bold mt-4">Franchise</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <a href="#!" className="text-white">
                  India Franchise
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  International Franchise
                </a>
              </li>
            </ul>
            <h6 className="text-uppercase fw-bold mt-4">Help</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <a href="#!" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Student FAQs
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        {/* Social Media and Bottom Line */}
        <div className="text-center p-3 border-top border-light mt-4">
          <div className="mb-3">
            <a href="https://facebook.com" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-white me-4">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com" className="text-white me-4">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div style={{ fontSize: "14px" }}>
            © {new Date().getFullYear()} Rudra | All Rights Reserved
          </div>
        </div>
      </MDBFooter>
    </>
  );
}
