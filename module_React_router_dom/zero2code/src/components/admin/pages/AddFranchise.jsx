import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function AddFranchise() {
  return (
    <>
      <MDBContainer className="mt-5 p-5">
        <MDBRow className="g-5 d-flex justify-content-center align-items-center">
          <div className="col-md-6 shadow p-5">
            <h2 className="mt-3 text-center">Add Franchise</h2>
            <form className="p-3">
              <div className="form-group mb-4">
                <input
                  type="text"
                  id="form1Example1"
                  className="form-control"
                  placeholder="Franchise Name"
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  id="form1Example2"
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 p-1 fs-5"
              >
                Add Franchise
              </button>
              <div className="text-center">
                <p>
                  <a href="/manage-franchises" className="fs-5">
                    View Franchises
                  </a>
                </p>
              </div>
            </form>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
