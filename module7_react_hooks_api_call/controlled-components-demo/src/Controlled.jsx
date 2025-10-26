import React, { useState } from "react";
// import { Form } from "react-bootstrap";

export default function Controlled() {
  const [data, setData] = useState({
    Name: "",
    Email: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    alert(`user name is ${data.Name} and email is ${data.Email}`);
    setData({ Name: "", Email: "" });
  };

  const onChangeEvent = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="form-container d-flex flex-column justify-content-center mx-auto w-50 shadow rounded p-5 mt-5">
        <h2>Controlled Component Demo By Form Submission</h2>
        <p>
          A controlled component is a component that renders form elements and
          controls them by keeping the form data in the component's state. The
          state is the single source of truth for the input elements.
        </p>
        <form className="d-flex flex-column gap-3" onSubmit={submitForm}>
          <div className="form-group">
            <input
              type="text"
              name="Name"
              value={data.Name}
              placeholder="Enter Name"
              className="form-control"
              onChange={onChangeEvent}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="Email"
              value={data.Email}
              placeholder="Enter Email"
              className="form-control"
              onChange={onChangeEvent}
            />
          </div>

          <input type="submit" value="submit" className="btn btn-danger mt-3" />
        </form>
      </div>
    </>
  );
}
