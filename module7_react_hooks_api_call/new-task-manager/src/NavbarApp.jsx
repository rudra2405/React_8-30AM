import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaClipboard } from "react-icons/fa";
import FlashMessage from "react-flash-message";

export default function NavbarApp() {
  const navigate = useNavigate();
  const apiUrl = "http://localhost:5001/tasks";

  // const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [details, setDetails] = useState("");
  const [Task, setTask] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTask(response.data);
      } catch (error) {
        console.error("There was an error fetching the tasks!", error);
      }
    };

    fetchTasks();
  }, [Task]);

  const showFlash = (msg) => {
    setFlash(msg);
    setTimeout(() => setFlash(null), 3000); // reset after 3 sec
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { taskName, details };

    if (taskName.trim() === "" || details.trim() === "") {
      showFlash({ type: "error", text: "please fill all required fields" });
      return;
    }
    axios
      .post(apiUrl, newTask)
      .then(() => {
        setTaskName("");
        setDetails("");
        showFlash({ type: "success", text: "Task added succesfully" });
        setTimeout(() => {
          setShowModal(false);
          navigate("/");
        }, 3000);
        console.log("Task added successfully");
      })
      .catch((error) => {
        showFlash({
          type: "error",
          text: "something is wrong please try again",
        });

        console.error("There was an error adding the task!", error);
      });
  };
  return (
    <>
      <nav className="grid grid-cols-2 bg-black p-4 text-white">
        <div className="w-full flex items-center">
          <Link to="/" className="bg-gray-500 p-2">
            <FaBars></FaBars>
          </Link>
          <b className="ms-20 text-2xl">
            <FaClipboard className="inline-flex ms-2"></FaClipboard>Task Manager
            Demo
          </b>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="bg-gray-500 hover:bg-gray-600 p-2 rounded-lg me-10 font-bold"
            onClick={() => setShowModal(true)}
          >
            AddTask
          </button>

          <Link
            to="/"
            className="bg-gray-500  hover:bg-gray-600 p-2 rounded-lg me-10 font-bold"
          >
            Manage Task
          </Link>

          <button className="bg-gray-500  hover:bg-gray-600 p-2 rounded-lg me-10 font-bold">
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
            className="bg-gray-500  hover:bg-gray-600 p-2 rounded-lg me-10 font-bold"
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
              <h1 className="text-2xl font-bold mb-4">Add Task</h1>
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
                  onClick={() => setShowModal(false)} // ✅ close modal
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
