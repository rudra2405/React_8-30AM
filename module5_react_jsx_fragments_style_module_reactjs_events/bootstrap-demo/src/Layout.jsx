import React from "react";
import NavbarToggler from "./components/NavbarToggler";
import CarouselApp from "./components/CarouselApp";
import CardApp from "./components/CardApp";
import AccordianApp from "./components/AccordianApp";
import FooterApp from "./components/FooterApp";

export default function Layout() {
  return (
    <>
      <NavbarToggler></NavbarToggler>
      <CarouselApp></CarouselApp>
      <CardApp></CardApp>
      <AccordianApp></AccordianApp>
      <FooterApp></FooterApp>
    </>
  );
}
