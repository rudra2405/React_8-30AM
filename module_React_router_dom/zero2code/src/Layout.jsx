import React from "react";
import Header from "./components/user/Header";
import Content from "./components/user/Content";
import Footer from "./components/user/Footer";

// import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer />
    </>
  );
}
