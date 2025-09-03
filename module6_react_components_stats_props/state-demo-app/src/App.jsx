import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState({
    id: 1,
    name: "Item 1",
    email: "rudra@gmail.com",
    phoneNo: "9106233393",
    address: "Rajkot",
  });

  const updateItems = () => {
    setItems({
      ...items,
      id: 2,
      name: "Item 2",
      email: "abc@gmail.com",
      phoneNo: "9087654321",
      address: "Ahmedabad",
    });
  };
  return (
    <>
      <div
        className="App p-5 mt-5 shadow rounded mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="text-center">State Demo App</h1>
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
          <h3>Item Details</h3>
          <p>ID: {items.id}</p>
          <p>Name: {items.name}</p>
          <p>Email: {items.email}</p>
          <p>Phone No: {items.phoneNo}</p>
          <p>Address: {items.address}</p>
          <button className="btn btn-primary" onClick={updateItems}>
            Update Items
          </button>
        </div>
      </div>
    </>
  );
}
