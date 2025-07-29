import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
export default function AddCenters() {
  return (
    <>
      <MDBContainer className="mt-5 p-5">
        <MDBRow className="g-5 d-flex justify-content-center align-items-center">
          <div className="col-md-6 shadow p-5">
            <h2 className="text-center">Add Centers</h2>
            <form className="p-3">
              <div className="form-group mb-4">
                <input
                  type="text"
                  id="form1Example1"
                  className="form-control"
                  placeholder="Center Name"
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
                Add Center
              </button>
              <div className="text-center">
                <p>
                  <a href="/admin/add-centers" className="fs-5">
                    View Centers
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
