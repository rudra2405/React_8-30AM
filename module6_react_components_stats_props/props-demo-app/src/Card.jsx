import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Card(props) {
  return (
    <>
      <section className="mt-5 p-5">
        <Row className="g-5">
          {props.items && props.items.length > 0
            ? props.items.map((item, index) => {
                return (
                  <div
                    className="col-sm-6 col-lg-3 d-flex justify-content-center"
                    key={index}
                  >
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={item.image}
                        className="card-img-top img-fluid"
                        alt={item.title}
                        // width={item.size}
                        // height={item.size}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.text}</p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            : "no data found"}
        </Row>
      </section>
    </>
  );
}
