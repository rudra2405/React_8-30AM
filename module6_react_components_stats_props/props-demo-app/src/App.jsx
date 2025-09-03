import React from "react";
import Card from "./Card.jsx";
import { Container, Nav, NavbarBrand, Badge } from "react-bootstrap";

function NavbarApp(props) {
  return (
    <>
      <Nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-between p-3">
        <Container>
          <NavbarBrand className="text-white" href="#">
            <img
              src={props.image}
              alt={props.name}
              className="img-fluid"
              width={props.size}
              height={props.size}
            />
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "brightness(0) invert(1)" }}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex gap-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">
                  {props.contact ? `${props.contact}` : " "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">
                  Cart
                  <Badge className="badge bg-danger text-white ms-1">0</Badge>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Nav>
    </>
  );
}

export default function App() {
  return (
    <>
      {/* <Profile> */}
      <NavbarApp
        name="flipkart"
        size="60px"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMFtV9zw_NIJOhqcq9Kjp3CV0Oi0AgviajQ&s"
        contact="ContactUs"
      ></NavbarApp>
      <Card
        items={[
          {
            title: "Card 1",
            text: "ome quick example text to build on the card title and make up the bulk of the card’s content",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs27fkNzjyS5yyA1teEFwd9CYPR5KY0pptkw&s",
            // size: "70%",
          },
          {
            title: "Card 2",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrv07l7Qh5wLKJOsfH2LT48omxudckQCI0ag&s",
          },
          {
            title: "Card 3",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyMzx1SrWytCI_Jen5yiflDYRGfqpLwpj_w&s",
          },
          {
            title: "Card 4",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrv07l7Qh5wLKJOsfH2LT48omxudckQCI0ag&s",
          },
        ]}
      />
      {/* </Profile> */}
    </>
  );
}
