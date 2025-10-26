import React, { useState } from "react";

function EmployeeCard(props) {
  return (
    <div className="employee-cards  mx-auto mt-5 gap-5 p-5 d-flex flex-wrap justify-content-center shadow bg-warning">
      {props.List.map((task, index) => {
        return (
          <div
            className="card p-2 bg-dark text-white"
            key={index}
            style={{ width: "33%" }}
          >
            <h2>{task.name}</h2>
            <p>{task.role}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function Employee() {
  const [list, setList] = useState([
    { name: "Rudra", role: "Developer" },
    { name: "Jay", role: "Designer" },
    { name: "Amit", role: "Manager" },
  ]);
  // const [name, setName] = useState("");
  // const [role, setRole] = useState("");

  const [data, setData] = useState({
    name: "",
    role: "",
  });

  const handleClick = () => {
    if (data.name.trim() === "" || data.role.trim() === "") {
      alert("Enter values first");
      return;
    }
    setList([...list, { name: data.name, role: data.role }]);
    setData({ name: "", role: "" });
  };

  const handleDelete = () => {
    if (confirm("are you sure to delete employee")) {
      setList(list.slice(0, list.length - 1));
    }
  };

  return (
    <>
      <div
        className="mt-5 bg-primary border border-2 border-dark shadow mx-auto d-flex flex-column justify-content-center p-5 bg-gray"
        style={{ width: "40%" }}
      >
        <h1 className="">Employee List</h1>
        <div className="form">
          <div className="mt-3">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              className="p-2 form-control border border-dark border-2"
              required
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              name="role"
              placeholder="Enter Role"
              value={data.role}
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              className="p-2 form-control border border-dark border-2"
              required
            />
          </div>
        </div>
        <button className="btn btn-danger mt-3" onClick={handleClick}>
          Add Employee
        </button>
        <EmployeeCard List={list}></EmployeeCard>

        <button className="btn btn-danger mt-3" onClick={handleDelete}>
          Delete Employee
        </button>
      </div>
    </>
  );
}
