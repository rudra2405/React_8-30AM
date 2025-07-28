import React from "react";

export default function FooterApp() {
  return (
    <>
      <footer className="bg-dark text-white pt-4 pb-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <p>Email: support@example.com</p>
              <p>Phone: +91-9876543210</p>
            </div>
          </div>
          <hr className="border-light" />
          <p className="text-center mb-0">
            &copy; 2025 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
