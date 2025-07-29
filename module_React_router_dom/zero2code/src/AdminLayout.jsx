import React from "react";
import AdminHeader from "./components/admin/AdminHeader";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import AdminSidebar from "./components/admin/AdminSidebar";
import Footer from "./components/admin/Footer";
import { Outlet } from "react-router-dom";
export default function AdminLayout() {
  return (
    <>
      <AdminHeader></AdminHeader>
      <MDBContainer fluid className="">
        <MDBRow>
          <div className="col-md-2 bg-info shadow">
            <div
              className="position-sticky"
              style={{ top: "20%", height: "calc(100vh - 20%)" }}
            >
              <AdminSidebar />
            </div>
          </div>
          <div className="col-md-10">
            <Outlet></Outlet>
            <div className="Footer" style={{ marginTop: "calc(100vh - 100px" }}>
              <Footer></Footer>
            </div>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
