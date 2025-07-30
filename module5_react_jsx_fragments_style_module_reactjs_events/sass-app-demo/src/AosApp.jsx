import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const AosApp = () => {
  Aos.init();
  return (
    <>
      <section id="aos-app">
        <h1>AOS</h1>
        <p>Animate on Scroll Library</p>
        <p className="scroll">SCROLL DOWN</p>
        <p>
          <FaArrowDown
            className="arrow"
            onClick={() => {
              document
                .getElementById("aos-fade")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </p>
      </section>

      <section id="aos-fade">
        <div className="container">
          <hr />
          <h1>FADE</h1>
          <hr />

          <div className="box1 Box" data-aos="fade-up" data-aos-duration="500">
            fade-up
          </div>
          <div
            className="box2 Box"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            fade-down
          </div>
          <div
            className="box1 Box"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            fade-right
          </div>
          <div
            className="box2 Box"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            fade-left
          </div>
          <div
            className="box1 Box"
            data-aos="fade-up-right"
            data-aos-duration="500"
          >
            fade-up-right
          </div>
          <div
            className="box2 Box"
            data-aos="fade-up-left"
            data-aos-duration="500"
          >
            fade-up-left
          </div>
          <div
            className="box1 Box"
            data-aos="fade-down-right"
            data-aos-duration="500"
          >
            fade-down-right
          </div>
          <div
            className="box2 Box"
            data-aos="fade-down-left"
            data-aos-duration="500"
          >
            fade-down-left
          </div>
        </div>
      </section>

      <div class="clearfix"></div>

      <section id="aos-fade">
        <div className="container">
          <hr />
          <h1>FLIP</h1>
          <hr />

          <div
            className="box1 Box"
            data-aos="flip-left"
            data-aos-duration="500"
          >
            Flip Left
          </div>
          <div
            className="box2 Box"
            data-aos="flip-right"
            data-aos-duration="500"
          >
            Flip Right
          </div>
          <div className="box1 Box" data-aos="flip-up" data-aos-duration="500">
            Flip Up
          </div>
          <div
            className="box2 Box"
            data-aos="flip-down"
            data-aos-duration="500"
          >
            Flip Down
          </div>
        </div>
      </section>

      <div class="clearfix"></div>

      <section id="aos-fade">
        <div className="container">
          <hr />
          <h1>Zoom</h1>
          <hr />

          <div className="box1 Box" data-aos="zoom-in" data-aos-duration="2000">
            Zoom In
          </div>
          <div
            className="box2 Box"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            Zoom In Up
          </div>
          <div
            className="box1 Box"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            Zoom In Down
          </div>
          <div
            className="box2 Box"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            Zoom In Left
          </div>
          <div
            className="box1 Box"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
          >
            Zoom In Right
          </div>
          <div
            className="box2 Box"
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            Zoom Out
          </div>
          <div
            className="box1 Box"
            data-aos="zoom-out-up"
            data-aos-duration="2000"
          >
            Zoom Out Up
          </div>
          <div
            className="box2 Box"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            Zoom Out Down
          </div>
          <div
            className="box1 Box"
            data-aos="zoom-out-right"
            data-aos-duration="2000"
          >
            Zoom Out Right
          </div>
          <div
            className="box2 Box"
            data-aos="zoom-out-left"
            data-aos-duration="2000"
          >
            Zoom Out Left
          </div>
        </div>
      </section>
    </>
  );
};

export default AosApp;
