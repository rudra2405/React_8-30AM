import React from "react";
import NavbarApp from "./components/NavbarApp";
import Header from "./components/Header";
import Catagory from "./components/Catagory";
import CatagoryData from "./components/CatagoryData";
import {
  MDBContainer,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBBtn,
  MDBRow,
} from "mdb-react-ui-kit";

export default function ContainerApp() {
  return (
    <>
      <NavbarApp></NavbarApp>
      <Header></Header>

      <MDBContainer fluid className="mx-auto bg-light p-3 shadow mt-5">
        <MDBRow>
          <div className="col-md-4">
            <MDBCard>
              <MDBCardHeader className="bg-info">
                <h3 className="text-white fs-5">Select Category</h3>
              </MDBCardHeader>
              <MDBCardBody className="p-3 text-dark">
                <Catagory></Catagory>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-md-8">
            <MDBCard>
              <MDBCardHeader className="bg-primary">
                <h3 className="text-white">50% off on selected Items</h3>
              </MDBCardHeader>
              <MDBCardBody className="p-3">
                <MDBRow className="g-4">
                  {CatagoryData
                    ? CatagoryData.map((items) => (
                        <div className="col-md-6">
                          <MDBCard className="shadow p-3 text-center d-flex flex-wrap align-items-center">
                            <img
                              src={items.photo}
                              className="img-fluid"
                              style={{ width: "200px", height: "200px" }}
                            />

                            <p className="fs-2">{items.name}</p>
                            <p className="fs-5">{items.Fee}</p>
                            <p className="fs-5">{items.duration}</p>

                            <MDBBtn className="btn btn-sm btn-danger text-white p-3">
                              Add to Cart
                            </MDBBtn>
                          </MDBCard>
                        </div>
                      ))
                    : null}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
