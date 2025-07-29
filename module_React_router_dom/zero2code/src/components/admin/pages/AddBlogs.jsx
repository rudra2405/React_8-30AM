import React from "react";

export default function AddBlogs() {
  return (
    <>
      <div className="row mt-5 p-5 d-flex justify-content-center align-items-center">
        <div className="col-md-6 shadow p-5">
          <h2 className="text-center">Add Blog</h2>
          <form className="p-3">
            <div className="form-group mb-4">
              <input
                type="text"
                id="blogTitle"
                className="form-control"
                placeholder="Blog Title"
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                id="blogContent"
                className="form-control"
                placeholder="Blog Content"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 p-2 fs-5"
            >
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
