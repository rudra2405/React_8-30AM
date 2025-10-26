import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function DeleteCart() {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    Swal.fire({
      title: "Do you want to Removed Cart ?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8001/cart/${id}`);
        Swal.fire("Cart successfully deleted", "", "success");
        navigate("/cart");
      } else if (result.isDenied) {
        // Swal.fire("Something went wrong while deleting", "", "info");
        navigate("/cart");
      }
    });
  });
  return <div></div>;
}
