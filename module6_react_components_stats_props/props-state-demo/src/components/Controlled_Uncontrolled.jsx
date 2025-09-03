import React, { useState, useRef } from "react";

export default function Controlled_Uncontrolled() {
  const [name, setName] = useState("");
  const emailRef = useRef(null);

  const onChanngeTask = (e) => {
    setName(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(emailRef.current.value);
    emailRef.current.value = "";
    setName("");
  };

  return (
    <>
      <div className="w-50 mx-auto form-container p-3">
        <h1>Controlled and Uncontrolled Example Together</h1>
        <form onSubmit={onHandleSubmit} className="p-2">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            className="form-control mt-3"
            onChange={onChanngeTask}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control mt-3"
            ref={emailRef}
          />
          <input type="submit" className="btn btn-primary p-2 mt-3" />
        </form>
      </div>
    </>
  );
}
