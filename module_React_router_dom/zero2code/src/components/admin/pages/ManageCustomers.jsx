import React from "react";
import { MDBTableBody, MDBTable, MDBTableHead } from "mdb-react-ui-kit";

export default function ManageCustomers() {
  return (
    <>
      <h2 className="mt-5">Manage Customers</h2>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="row">1</th>
            <td>John Doe</td>
            <td>john@email.com</td>
            <td>123-456-7890</td>
            <td>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger ms-2">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jane Smith</td>
            <td>jane@gmail.com</td>
            <td>987-654-3210</td>
            <td>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger ms-2">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Rudra Hirdekar</td>
            <td>rudra@gmail.com</td>
            <td>+91-9099753775</td>
            <td>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger ms-2">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Jane Smith</td>
            <td>jane@gmail.com</td>
            <td>987-654-3210</td>
            <td>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger ms-2">Delete</button>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
