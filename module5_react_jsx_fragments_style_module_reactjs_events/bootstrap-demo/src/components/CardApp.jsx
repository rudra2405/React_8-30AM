import React from "react";
import { Container, Card, CardBody } from "react-bootstrap";
import slider1 from "../assets/Images/slider1.webp";
import slider2 from "../assets/Images/slider2.jpg";
import slider3 from "../assets/Images/slider3.webp";

export default function CardApp() {
  return (
    <>
      <Container className="d-flex mt-5 justify-content-between">
        <Card id="CardApp" style={{ width: "18rem" }}>
          <img src={slider1} className="card-img-top" alt="..." />
          <CardBody className="">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <img src={slider1} className="card-img-top" alt="..." />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <img src={slider1} className="card-img-top" alt="..." />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
