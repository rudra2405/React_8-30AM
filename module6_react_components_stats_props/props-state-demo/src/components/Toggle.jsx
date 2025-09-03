import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const clickEvent = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <p>Switch : {isOn ? "ON" : "OFF"}</p>
      <button onClick={clickEvent}>Click({isOn ? "OFF" : "On"})</button>
    </>
  );
}
