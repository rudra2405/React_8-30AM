import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ExportTask from "./ExportTask";

export default function Content() {
  const apiUrl = "http://localhost:5001/tasks";
  const [Task, setTask] = useState([]);

  const fileName = "content";

  const navigate = useNavigate();

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

  // const handleDelete = (id) => {
  //   axios.delete(`${apiUrl}/${id}`).then(() => {
  //     setTask(Task.filter((task) => task.id !== id));
  //   });
  // };
  return (
    <>
      <section className="w-1/2 p-5 mt-10 bg-white-200 shadow-lg mx-auto">
        <h1 className="text-3xl text-center font-bold flex">
          Task List <ExportTask fileName={fileName} apiData={Task}></ExportTask>
        </h1>
        <ul className="mt-5 border border-gray-950 ">
          {Task.map((task, index) => (
            <li
              key={task.id}
              className="border-b-1 border-gray-400 p-1 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <p>ID : {index + 1}</p>
                <p>TaskName : {task.taskName}</p>
                <p>TaskDetails: {task.details}</p>
              </div>
              <div className="flex">
                <button
                  className="text-red-500 text-2xl p-2"
                  onClick={() => {
                    if (window.confirm("are you sure want to delete data?")) {
                      navigate(`/delete-task/${task.id}`);
                    }
                  }}
                >
                  <FaTrash />
                </button>
                <button
                  className="text-green-500 text-2xl p-2"
                  onClick={() => {
                    navigate(`/update-task/${task.id}`);
                  }}
                >
                  <FaEdit></FaEdit>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
