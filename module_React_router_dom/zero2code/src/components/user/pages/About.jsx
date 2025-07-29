import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Header></Header>
      <MDBContainer>
        <MDBRow className="mt-5">
          <div className="col-md-12 text-center">
            <h1 className="text-danger fw-bold">
              A 79-Year-Old Legacy Moulding
            </h1>
            <h1 className="fw-bold">The Innovators Of The Future</h1>
            <p>
              India’s foremost computer networking institute committed to
              creating a better life for students, franchisees, recruiters, and
              investors.
            </p>
          </div>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <h1 className="text-center fw-bold text-danger mt-5 fs-1">
          Our Purpose & Values
        </h1>
        <MDBRow className="mt-5">
          <div className="col-md-4 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                src="https://images.clickfunnels.com/cdn-cgi/image/width=300,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/573209/file/a12487486aa25dd782091b09096f7769.png"
                alt="img"
                className="img-fluid w-25"
              />
            </div>
            <h4 className="text-center text-danger fw-bold">Our Vision</h4>
            <p className="text-center">
              To Provide Economic Independence To 10 Million People In India And
              Overseas.
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                src="https://images.clickfunnels.com/cdn-cgi/image/width=300,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/573208/file/4f93045f4ca66a167ab721fb62028156.png"
                alt=""
                className="img-fluid w-25"
              />
            </div>
            <h4 className="text-center text-danger fw-bold">Our Mission</h4>
            <p className="text-center">
              To Become A World-class Engine For Employment Generation Through
              An Efficient Partnership Network.
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                src="https://images.clickfunnels.com/cdn-cgi/image/width=300,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/573210/file/dde2b1a0735e354f413d63a45ce0c31f.png"
                alt=""
                className="img-fluid w-25"
              />
            </div>
            <h4 className="text-center text-danger fw-bold">Our Value</h4>
            <p className="text-center">
              Quality. Trust. Self-motivation. Innovation. Hands-On. Learning &
              Teaching. Equanimity.
            </p>
          </div>
        </MDBRow>
      </MDBContainer>

      <section className="mt-5 mb-5 p-2">
        <MDBContainer>
          <MDBRow className="mt-5">
            <div className="col-md-7 col-12 d-flex flex-column align-items-center align-items-lg-start">
              <h1 className="fs-1 fw-bold text-danger text-center text-md-start">
                Life at Jetking
              </h1>
              <p className="fs-4 text-center text-md-start">
                14 ways we teach you better with our 21st Century Learning
                Methodology
              </p>
              <div className="">
                <Link
                  to="/about"
                  className="btn btn-danger rounded-5 border border-white border-4 text-white fw-bold"
                >
                  Explore More
                </Link>
              </div>
            </div>
            <div className="col-md-5 col-12 mt-5 mt-md-0 d-flex justify-content-lg-end">
              <img
                src="https://statics.myclickfunnels.com/image/573489/file/ca346b243d7ce26ac1e4cae0b12034ec.svg"
                alt=""
                className="img-fluid w-75"
              />
            </div>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className="mt-5 p-4">
        <MDBRow className="p-4 shadow rounded-5  bg-white">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/130362/file/a3e896ea2308a29a8d7d461fb1a6082e.jpeg"
              alt=""
              className="img-fluid"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h1 className="text-danger fw-bold text-center text-md-start">
              Mr. Rudra Hirdekar
            </h1>
            <h5 className="text-center text-md-start">Chairman and Director</h5>
            <hr className="border-2 border-danger" />
            <p>
              Rudra Hidekar’s focus area is to grow and maintain Jetking’s vast
              franchising network. He leads all aspects of the Franchising and
              Government associations that span across education, skill
              development, IT and recruitment. He studied Commerce at Jai Hind
              College from the University of Mumbai.
            </p>
          </div>
        </MDBRow>
      </section>

      <section className="mt-5 p-4">
        <MDBRow className="p-4 shadow rounded-5  bg-white">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/vnBgwv/image/5597777/file/cd2a0486f616fb56d2151f7bb328fb9e.png"
              alt=""
              className="img-fluid"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h1 className="text-danger fw-bold text-center text-md-start">
              Mr. Charan Kumar
            </h1>
            <h5 className="text-center text-md-start">
              Managing Director and CEO
            </h5>
            <hr className="border-2 border-danger" />
            <p>
              Charan kumar is the CEO and Managing Director of Jetking Infotrain
              Limited, bringing over two decades of experience in education,
              technology, and business innovation. He has been a driving force
              behind Jetking’s global expansion—launching two of the company’s
              largest owned centers and opening more than a dozen international
              locations.
            </p>
            <p>
              Recognized by Business Week as one of the top entrepreneurs, Harsh
              played a pivotal role in revitalizing Jetking post-COVID,
              delivering an impressive 40% year-on-year growth. With a mission
              to empower the next generation, he has personally trained over one
              million students in employability, success, wellness, and personal
              development.
            </p>
          </div>
        </MDBRow>
      </section>

      <section className="mt-5 p-4">
        <MDBRow className="p-4 shadow rounded-5  bg-white">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/130363/file/fb54ca1856f26840b58089a428614bdf.jpeg"
              alt=""
              className="img-fluid"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h1 className="text-danger fw-bold text-center text-md-start">
              Mr. Siddarth Bharwani
            </h1>
            <h5 className="text-center text-md-start">
              Joint Managing Director and CFO
            </h5>
            <hr className="border-2 border-danger" />
            <p>
              Ambitious about taking his family business to new heights and
              continue to expand overseas, Siddarth Bharwani is a
              third-generation entrepreneur. He was previously responsible for
              rejigging Jetking’s brand image and is now leading the charge to
              triple the business turnover within the next few years. He
              completed his studies from Bond University, Australia and has 8
              years of experience in the field of Marketing & Brand Management.
              Siddarth is a true “Apple” devotee and a tech fanatic.
            </p>
          </div>
        </MDBRow>
      </section>

      <Footer></Footer>
    </>
  );
}
