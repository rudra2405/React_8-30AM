import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  return (
    <>
      <MDBContainer className="mt-5 p-5">
        <MDBRow className="g-5 d-flex justify-content-center align-items-center">
          <div className="col-md-6 p-5">
            <img
              src="https://as2.ftcdn.net/jpg/14/60/36/35/1000_F_1460363563_ye3169gNizE1YeLVeXGvmlDRH0dn7UMv.webp"
              alt="admin"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 shadow p-5">
            <p className="text-center">
              <FaUser className="fs-1 rounded-circle"></FaUser>
            </p>
            <form className="p-3">
              <div className="form-group mb-4">
                <input
                  type="text"
                  id="form1Example1"
                  className="form-control"
                  placeholder="Username"
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 p-1 fs-5"
              >
                Sign in
              </button>

              <Link to="" className="fs-5">
                Forgot password?
              </Link>
            </form>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
