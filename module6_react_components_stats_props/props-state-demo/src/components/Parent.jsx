import React, { use, useState } from "react";
import Child from "./Child.jsx";

export default function Parent() {
  const [user, setUser] = useState({
    name: "Rudra",
    age: 24,
    // isActive: true,
  });

  const [active, setActive] = useState(false);

  const [task, setTask] = useState([
    "learn React",
    "build portfolio",
    "apply for jobs",
  ]);

  const Changeuser = () => {
    setUser({ ...user, name: "jay" });
  };

  // const ToggleActive = () => {
  //   setActive(!active);
  // };

  const addTask = () => {
    setTask([...task, `New task ${task.length + 1}`]);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <Child Task={task} User={user} Active={active}></Child>
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        Toggle
      </button>
      <button onClick={addTask}>Add Task</button>
      <button onClick={Changeuser}>Change User's Name</button>
    </div>
  );
}
