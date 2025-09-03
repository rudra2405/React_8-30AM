import React, { useRef } from "react";

export default function Uncontrolled() {
  let nameRef = useRef();
  let emailRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    alert(
      `user name is ${nameRef.current.value} and email is ${emailRef.current.value}`
    );
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <>
      <div className="form-container d-flex flex-column justify-content-center mx-auto w-50 shadow rounded p-5 mt-5">
        <h2>UnControlled Component Demo By Form Submission</h2>
        <p>
          An uncontrolled component is a component that renders form elements
          and does not control them by keeping the form data in the component's
          state. The form data is handled by the DOM itself.
        </p>
        <form className="d-flex flex-column gap-3" onSubmit={submitForm}>
          <div className="form-group">
            <input
              type="text"
              ref={nameRef}
              placeholder="Enter Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter Email"
              className="form-control"
            />
          </div>

          <input type="submit" value="submit" className="btn btn-danger mt-3" />
        </form>
      </div>
    </>
  );
}
