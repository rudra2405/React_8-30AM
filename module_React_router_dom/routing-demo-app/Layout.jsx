import React from "react";
// import Home from "./src/components/Home";
import NavbarApp from "./src/components/Navbar";
import { Outlet } from "react-router-dom";
// import About from "./src/components/About";
// import PageNotFound from "./src/components/PageNotFound";

export default function Layout() {
  return (
    <>
      <NavbarApp></NavbarApp>
      <Outlet></Outlet>
    </>
  );
}
