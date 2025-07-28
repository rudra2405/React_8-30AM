import React from "react";
import { Container } from "react-bootstrap";
import slider1 from "../assets/Images/slider1.webp";
import slider2 from "../assets/Images/slider2.jpg";
import slider3 from "../assets/Images/slider3.webp";

export default function CarouselApp() {
  return (
    <>
      <Container>
        <div id="CarouselApp" className="carousel slide mt-5">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#CarouselApp"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#CarouselApp"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#CarouselApp"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slider1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slider3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#CarouselApp"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#CarouselApp"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Container>
    </>
  );
}
