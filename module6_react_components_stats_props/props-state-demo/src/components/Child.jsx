import React from "react";

export default function Child(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <p>
        {props.User.name} - {props.User.age}
      </p>
      <p>Status: {props.Active ? "Active" : "Inactive"}</p>
      <h4>Tasks:</h4>
      <ul>
        {props.Task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
