import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function DeleteTask() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteData = async () => {
      try {
        await axios.delete(`http://localhost:5001/tasks/${id}`);
        Swal.fire({
          title: "Good job!",
          text: "Your data successfully deleted!",
          icon: "success",
        });
        navigate("/");
      } catch (error) {
        console.error("Error deleting product:", error);
        navigate("/");
      }
    };

    deleteData();
  }, [id, navigate]);
}
