import React, { useState, useEffect } from "react";
import NavbarApp from "./NavbarApp";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddTask() {
  const [users, setUser] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [addedDate, setAddedDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/Assign-to")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { taskName, assignTo, addedDate, status };

    axios
      .post("http://localhost:3001/tasks", newTask)
      .then(() => {
        alert("data added successfully");
        setTaskName("");
        setAddedDate("");
        setAssignTo("");
        setStatus("");
      })
      .catch((error) => console.log(error));

    navigate("/"); // 👈 immediately redirect to home
  };
  return (
    <>
      <NavbarApp></NavbarApp>
      <div className="w-300 shadow rounded-3xl mx-auto mt-10 p-6">
        <h1 className="text-center text-2xl font-bold mb-6">Add Task</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Task Name */}
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="p-2 border rounded"
            required
          />

          {/* Assign To */}
          <select
            className="p-2 border rounded"
            onChange={(e) => setAssignTo(e.target.value)}
            value={assignTo}
            required
          >
            <option value="">-- Assign To --</option>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              );
            })}
          </select>

          {/* Added Date */}
          <input
            type="date"
            className="p-2 border rounded"
            onChange={(e) => setAddedDate(e.target.value)}
            value={addedDate}
            required
          />

          {/* Status */}
          <select
            className="p-2 border rounded"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            required
          >
            <option value="">-- Select Status --</option>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Action */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}
