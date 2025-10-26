import React from "react";
import avtar from "./assets/Images/img_avatar2.png";

function Child({ children }) {
  return (
    <div className="card mt-5 mx-auto" style={{ width: "18rem" }}>
      {children}
      {/* <img
        src={props.image}
        alt={props.name}
        // width={props.size}
        // height={props.size}
        className="card-img-top img-fluid"
      />
      <div className="card-body p-3">
        <h1 className="">Children Component</h1>
        <p>This is a child component that can receive props.</p>
      </div> */}
    </div>
  );
}

export default function Parent() {
  return (
    <>
      <section>
        <Child>
          <img src={avtar} alt="Avatar" className="card-img-top img-fluid" />
          <div className="card-body p-3">
            <h1 className="">Children Component</h1>
            <p>This is a child component that can receive props.</p>
          </div>
        </Child>
      </section>
    </>
  );
}
