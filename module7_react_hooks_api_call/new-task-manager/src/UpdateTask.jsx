import React, { useState, useEffect } from "react";
// import NavbarApp from "./NavbarApp";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaBars, FaClipboard } from "react-icons/fa";
import FlashMessage from "react-flash-message";

import axios from "axios";
// import Swal from "sweetalert2";

export default function UpdateTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(true);
  const [taskName, setTaskName] = useState("");
  const [details, setDetails] = useState("");
  const [Task, setTask] = useState([]);
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/tasks`);
        setTask(response.data);
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/tasks/${id}`);
        setDetails(response.data.details);
        setTaskName(response.data.taskName);
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    };

    fetchData();
  }, [id]);

  const showFlash = (msg) => {
    setFlash(msg);
    setTimeout(() => setFlash(null), 3000); // reset after 3 sec
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = { taskName, details };

    try {
      await axios.put(`http://localhost:5001/tasks/${id}`, newTask);
      showFlash({ type: "success", text: "Task updated succesfully" });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      showFlash({
        type: "error",
        text: "something is wrong please try again",
      });

      console.error("Error updating product:", error);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <>
      <nav className="grid grid-cols-2 bg-blue-500 p-4 text-white">
        <div className="w-full flex items-center">
          <Link to="/" className="bg-yellow-400 p-2">
            <FaBars></FaBars>
          </Link>
          <b className="ms-20 text-2xl">
            <FaClipboard className="inline-flex ms-2"></FaClipboard>Task Manager
            Demo
          </b>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="bg-amber-500 p-2 rounded-lg me-10 font-bold"
            onClick={() => setShowModal(true)}
          >
            AddTask
          </button>

          <button className="bg-amber-500 p-2 rounded-lg me-10 font-bold">
            {/* <div class="mx-auto  size-5 shrink-0 items-center justify-center rounded-full inline-flex bg-red-600 text-white sm:mx-0 sm:size-8">
                  0
                  
                </div> */}
            <span className="absolute top-1 end-45 translate-middle bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {Task.length}
              <span className="sr-only">unread messages</span>
            </span>
            Tasks
          </button>

          <Link
            to="/contact-us"
            className="bg-amber-500 p-2 rounded-lg me-10 font-bold"
          >
            Contact
          </Link>
        </div>
      </nav>
      {/* Modal here */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <div className="w-1/2 mx-auto mt-3">
              {flash && (
                <FlashMessage duration={3000}>
                  <p
                    className={`p-3 rounded text-center ${
                      flash.type === "success"
                        ? "bg-green-100 text-green-700 border border-green-400"
                        : "bg-red-100 text-red-700 border border-red-400"
                    }`}
                  >
                    {flash.text}
                  </p>
                </FlashMessage>
              )}
            </div>

            <form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-bold mb-4">Update Task</h1>
              <input
                type="text"
                placeholder="Enter Task Name"
                className="w-full p-2 rounded-lg shadow mb-3 border"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <textarea
                placeholder="Enter Details"
                className="w-full p-3 rounded-lg shadow mb-3 border"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/");
                  }} // ✅ close modal
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
