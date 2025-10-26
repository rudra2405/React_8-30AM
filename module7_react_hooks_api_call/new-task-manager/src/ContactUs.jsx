import React, { useRef, useState } from "react";
import NavbarApp from "./NavbarApp";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Swal from "sweetalert2";
import FlashMessage from "react-flash-message";

// import { useNavigate } from "react-router-dom";
export default function ContactUs() {
  const api_url = "http://localhost:5001/contact-us";
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();
  const [flash, setFlash] = useState(null);
  // const [status, setStatus] = useState();

  // const navigate = useNavigate();

  const showFlash = (msg) => {
    setFlash(msg);
    setTimeout(() => setFlash(null), 3000); // reset after 3 sec
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name.current.value ||
      !email.current.value ||
      !phone.current.value ||
      !message.current.value
    ) {
      showFlash({ type: "error", text: "please fill all required fields" });
      return;
    }

    const newObj = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      message: message.current.value,
    };

    try {
      // console.log("Sending data:", newObj);

      // Send to backend and log the response
      const response = await axios.post(api_url, newObj);
      console.log("Server response:", response.data);
      showFlash({ type: "success", text: "Data sent succesfully" });
      // setStatus("success");

      // Swal.fire({
      //   icon: "success",
      //   title: "Success",
      //   text: "Your data has been sent successfully!",
      // });

      // Send via EmailJS
      const result = await emailjs.send(
        "service_qqqgr0j", // service ID
        "template_0e75xgq", // template ID
        newObj,
        "pBvD4LWsAuFSQghYK" // public key
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your email has been sent successfully!",
      });
      console.log("EmailJS result:", result);
    } catch (error) {
      // alert(
      //   "Something went wrong while sending data or email. Please try again."
      // );
      showFlash({ type: "error", text: "something is wrong please try again" });
      console.error("Error occurred:", error);
    }
    name.current.value = "";
    email.current.value = "";
    phone.current.value = "";
    message.current.value = "";

    // navigate("/");
  };

  return (
    <>
      <NavbarApp></NavbarApp>

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

      <section className="p-5 w-1/2 mx-auto mt-5 bg-white shadow-lg">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="font-bold text-3xl text-center">
            Enter Contact Details
          </h1>
          <div>
            <input
              type="text"
              name="name"
              ref={name}
              placeholder="Enter Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              ref={email}
              placeholder="Enter Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              ref={phone}
              placeholder="Enter Phone"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <textarea
              type="text"
              rows="3"
              name="message"
              placeholder="Enter message"
              ref={message}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
