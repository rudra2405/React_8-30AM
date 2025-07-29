import React from "react";

export default function ManageReviews() {
  return (
    <>
      <div className="row mt-5 p-5 d-flex justify-content-center align-items-center">
        <div className="col-md-6 shadow p-5">
          <h2 className="text-center">Manage Reviews</h2>
          <form className="p-3">
            <div className="form-group mb-4">
              <input
                type="text"
                id="reviewTitle"
                className="form-control"
                placeholder="Review Title"
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                id="reviewContent"
                className="form-control"
                placeholder="Review Content"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 p-2 fs-5"
            >
              Manage Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
