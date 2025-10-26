import react, { useState } from "react";
import Swal from "sweetalert2";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showpassword, setShowpassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name must contain only letters";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name must contain only letters";
    }

    if (!formData.Email) {
      newErrors.Email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      newErrors.Email = "Invalid email format";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 chars, include uppercase, lowercase, number, and special character";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      Swal.fire({
        icon: "success",
        title: "thank you",
        text: "Your form is submitted",
      });
      console.log(formData);
      setFormData({
        firstName: "",
        lastName: "",
        Email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({}); // 👈 clear error messages
    }
  };

  return (
    <>
      <div
        className="form-container p-5 bg-transparent rounded-4 d-flex flex-column justify-content-center border border-white mx-auto my-5"
        style={{ width: "500px" }}
      >
        <form className="d-flex flex-column gap-5" onSubmit={handleSubmit}>
          <h3 className="text-center text-white">Form Handling Demo</h3>
          <div className="form-group">
            <i className="bi bi-person-fill"></i>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter FirstName"
              className="form-control ps-5 bg-transparent fw-bold text-white"
            />
          </div>
          {errors.firstName && (
            <span className="text-danger fw-bold">{errors.firstName}</span>
          )}
          <div className="form-group">
            <i className="bi bi-person-fill"></i>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter lastName"
              className="form-control ps-5 bg-transparent fw-bold text-white"
            />
          </div>
          {errors.lastName && (
            <span className="text-danger fw-bold">{errors.lastName}</span>
          )}
          <div className="form-group">
            <i className="bi bi-envelope"></i>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="form-control ps-5 bg-transparent fw-bold text-white"
            />
          </div>
          {errors.Email && (
            <span className="text-danger fw-bold">{errors.Email}</span>
          )}
          <div className="form-group">
            <i className="bi bi-telephone-fill"></i>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="form-control ps-5 bg-transparent fw-bold text-white"
            />
          </div>
          {errors.phoneNumber && (
            <span className="text-danger fw-bold">{errors.phoneNumber}</span>
          )}
          <div className="form-group">
            <i
              className={
                showpassword ? `bi bi-eye-slash-fill` : `bi bi-eye-fill`
              }
              onClick={() => setShowpassword(!showpassword)}
            ></i>
            <input
              type={showpassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="form-control ps-5 bg-transparent fw-bold text-white"
            />
          </div>
          {errors.password && (
            <span className="text-danger fw-bold">{errors.password}</span>
          )}
          <div className="form-group">
            <i className="bi bi-eye-fill"></i>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter Confirm Password"
              className="form-control ps-5 bg-transparent fw-bold text-white"
            />
          </div>
          {errors.confirmPassword && (
            <span className="text-danger fw-bold">
              {errors.confirmPassword}
            </span>
          )}
          <input type="submit" value="submit" className="btn btn-danger p-2" />
        </form>
      </div>
    </>
  );
}

export default App;
