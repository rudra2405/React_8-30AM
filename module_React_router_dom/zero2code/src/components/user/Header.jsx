import { React, useEffect } from "react";
import { Link } from "react-router-dom";
// import $ from "jquery";

// import logo from "../../assets/Images/img1.png"; // ✅ Correct image import

export default function Header() {
  useEffect(() => {
    setTimeout(() => {
      const menu = document.getElementById("navbarMenu");
      const icon = document.getElementById("toggleIcon");
      const logo = document.querySelector(".user-header img");

      if (!menu || !icon || !logo) return;

      menu.addEventListener("shown.bs.collapse", () => {
        console.log("Collapse opened");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
        logo.style.display = "none";
      });

      menu.addEventListener("hidden.bs.collapse", () => {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
        logo.style.display = "block";
      });
    }, 100);
  }, []);

  return (
    <>
      <section className="user-header bg-danger p-3 position-sticky top-0 z-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Logo */}
            <div className="col-6 col-md-2">
              <img
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/104133/file/43830dde4f0f5af5e9592f3fe03738f2.png"
                className="img-fluid w-md-50"
                alt="Logo"
              />
            </div>

            {/* Toggler (Only visible < lg) */}
            <div className="col-6 d-lg-none text-end">
              <button
                className="navbar-toggler text-white border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars fs-2" id="toggleIcon"></i>
              </button>
            </div>

            {/* Navbar Links + CTA */}
            <div className="col-12 col-lg-10">
              <div
                className="collapse navbar-collapse d-lg-flex align-items-center justify-content-between"
                id="navbarMenu"
              >
                {/* Nav */}
                <ul className="navbar-nav d-flex flex-lg-row text-start text-md-center">
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-white ms-3 fw-bold">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/about"
                      className="nav-link text-white ms-3 fw-bold"
                    >
                      About-us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/courses"
                      className="nav-link text-white ms-3 fw-bold"
                    >
                      Our Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/centers"
                      className="nav-link text-white ms-3 fw-bold"
                    >
                      Centers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/placements"
                      className="nav-link text-white ms-3 fw-bold"
                    >
                      Placements
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/franchise"
                      className="nav-link text-white ms-3 fw-bold"
                    >
                      Franchise
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/blog"
                      className="nav-link text-white ms-3 fw-bold"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link text-white ms-3 fw-bold"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                {/* Call Button */}
                <div className="text-center text-lg-end d-none d-lg-flex">
                  <Link to="#">
                    <button className="btn btn-light shadow pe-4 ps-4 fs-6 fw-bold border border-4 border-white rounded-6">
                      <i className="fa-solid fa-phone me-2"></i>98765432097
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
