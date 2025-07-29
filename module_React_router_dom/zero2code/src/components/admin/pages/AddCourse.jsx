import React from "react";

export default function AddCourse() {
  return (
    <>
      <div className="row mt-5 p-5 d-flex justify-content-center align-items-center">
        <div className="col-md-6 shadow p-5">
          <h2 className="text-center">Add Course</h2>
          <form className="p-3">
            <div className="form-group mb-4">
              <input
                type="text"
                id="courseName"
                className="form-control"
                placeholder="Course Name"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                id="courseDescription"
                className="form-control"
                placeholder="Course Description"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 p-2 fs-5"
            >
              Add Course
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
