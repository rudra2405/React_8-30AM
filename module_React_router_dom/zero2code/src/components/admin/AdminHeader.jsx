import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <>
      <MDBContainer fluid className="p-4 bg-dark border-bottom sticky-top">
        <MDBRow className="d-flex justify-content-center align-items-center flex-wrap">
          <div className="col-md-3">
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/104133/file/43830dde4f0f5af5e9592f3fe03738f2.png"
              className="img-fluid w-50"
            />
          </div>
          <div className="col-md-7">
            <form>
              <div className="input-group rounded-4">
                <input
                  type="text"
                  placeholder="search here"
                  className="form-control p-3"
                />
                <button
                  type="button"
                  className="btn btn-md btn-primary text-white "
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          {/* welcome admin account */}
          <div className="col-md-2 d-flex justify-content-end">
            <MDBDropdown className="">
              <MDBDropdownToggle
                tag="a"
                className="nav-link text-white fs-3"
                role="button"
              >
                <FaUser className="" />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <Link className="dropdown-item" to="/logout">
                    Logout
                  </Link>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
