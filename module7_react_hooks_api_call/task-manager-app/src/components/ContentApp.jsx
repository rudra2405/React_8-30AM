import React, { useState, useEffect } from "react";
import { FaTasks, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

export default function ContentApp() {
  const [Data, setData] = useState([]);

  //fetch data//
  useEffect(() => {
    axios
      .get("http://localhost:3001/tasks")
      .then((res) => setData(res.data))
      .then((err) => console.log(err));
  }, []);

  //using fetch api//
  // useEffect(() => {
  //   fetch("http://localhost:3001/tasks")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const handleDelete = (id) => {
    console.log(`deleted id`, id);
    axios
      .delete(`http://localhost:3001/tasks/${id}`)
      .then(() => setData(Data.filter((task) => task.id != id)))
      .catch((err) => console.log(err));
  };

  const handleEdit = (task) => {
    const updatedTask = {
      ...task,
      status: task.status === "Completed" ? "Not Completed" : "Completed",
    };
    axios
      .put(`http://localhost:3001/tasks/${task.id}`, updatedTask)
      .then((res) => {
        setData(Data.map((t) => (t.id === task.id ? res.data : t)));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="w-300 content-app bg-gray-300 shadow-lg rounded-lg p-15 mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4 flex justify-between align-center">
          Task manager app
          <button className="bg-red-500 text-white text-3xl  flex p-2 ">
            Total Task :{Data.length}
          </button>
        </h2>
        <hr className="w-150" />
        <table className="table-auto w-full overflow-x-auto mt-10">
          <tr className="text-left">
            <th>TaskName</th>
            <th>Assign to</th>
            <th>Added Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {Data.map((data, id) => {
            return (
              <tr key={id} className="text-left">
                <td>{data.taskName}</td>
                <td>{data.assignTo}</td>
                <td>{data.addedDate}</td>
                <td>{data.status}</td>
                <td>
                  <button
                    className="text-green-700 text-xl p-2 me-1"
                    onClick={() => handleEdit(data)}
                  >
                    <FaEdit />
                  </button>
                  |
                  <button
                    className="text-red-700 text-xl p-2 ms-1"
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
