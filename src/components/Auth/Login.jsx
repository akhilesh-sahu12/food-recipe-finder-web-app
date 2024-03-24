import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Auth/Login.css";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { userLogin, registeredUsers, userLoginDetails } = useAuth();
  const [logged, setLogged] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = registeredUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (user) {
      userLogin();
      setLogged(true);
      userLoginDetails(user);
      console.log("Logging in with:", user);

      // Show login success notification
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // Show login warning notification
      toast.warning("Login Credentials are incorrect!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  if (logged) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="Login">
      <ToastContainer />
      <h2>LoginForm</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default Login;
