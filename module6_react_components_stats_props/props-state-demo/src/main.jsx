import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Employee from "./components/Employee";
// import Parent from "./components/Parent";
// import NavbarApp from "./components/NavbarApp";
// import Toggle from "./components/Toggle";
// import Checkbox from "./components/Checkbox";
// import Controlled_Uncontrolled from "./components/Controlled_Uncontrolled";
import "bootstrap/dist/css/bootstrap.min.css";

// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Employee></Employee>
    {/* <NavbarApp></NavbarApp>
    <Parent />
    <Toggle></Toggle>
    <Checkbox></Checkbox>
    <Controlled_Uncontrolled /> */}
  </StrictMode>
);
