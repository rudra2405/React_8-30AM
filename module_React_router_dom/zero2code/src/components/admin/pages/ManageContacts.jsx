import React from "react";

export default function ManageContacts() {
  return (
    <>
      <div className="row mt-5 p-5 d-flex justify-content-center align-items-end">
        <div className="col-md-6 shadow p-5">
          <h2 className="text-center">Manage Contacts</h2>
          <form className="p-3">
            <div className="form-group mb-4">
              <input
                type="text"
                id="contactName"
                className="form-control"
                placeholder="Contact Name"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="email"
                id="contactEmail"
                className="form-control"
                placeholder="Contact Email"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 p-2 fs-5"
            >
              Manage Contact
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
