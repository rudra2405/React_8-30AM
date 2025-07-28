import React from "react";
import { MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";

export default function Header() {
  return (
    <>
      <MDBContainer fluid className="bg-light shadow p-5">
        <MDBRow>
          <div className="col-md-3">
            <b className="fs-4">Call Us :(+91)-9998003879</b>
          </div>

          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                placeholder="search any course to add in Cart"
                className="form-control p-4"
              />
              <MDBBtn className="btn btn-sm btn-dark text-white">
                <span className="fa fa-search"></span>
              </MDBBtn>
            </div>
          </div>

          <div className="col-md-3">
            <i className="fa fa-cart-shopping fs-3 mt-2"></i>
            <i className="fab fa-facebook ms-3 fs-3"></i>
            <i className="fab fa-instagram ms-3 fs-3"></i>
            <i className="fab fa-whatsapp ms-3 fs-3"></i>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
