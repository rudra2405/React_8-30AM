// import React from "react";
// import { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";

// export default function DeleteTask() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     Swal.fire({
//       title: "Do you want to delete this task?",
//       showDenyButton: true,
//       confirmButtonText: "Yes, delete it",
//       denyButtonText: `No`,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.delete(`http://localhost:3001/tasks/${id}`).then(() => {
//           Swal.fire("Deleted!", "Task has been deleted.", "success");
//           navigate("/");
//         });
//       } else if (result.isDenied) {
//         navigate("/");
//       }
//     });
//   }, [id, navigate]);

//   return null; // no UI, only confirmation
// }
