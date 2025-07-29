import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-danger text-white text-center py-3 mt-auto shadow-sm">
        <div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f bg-white border text-dark border-white p-2 rounded-2"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter bg-white border text-dark border-white p-2 rounded-2"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in bg-white border text-dark border-white p-2 rounded-2"></i>
          </a>
        </div>

        <small>
          © {new Date().getFullYear()} Zero2Code Admin Panel. All rights
          reserved.
        </small>
      </div>
    </>
  );
}
