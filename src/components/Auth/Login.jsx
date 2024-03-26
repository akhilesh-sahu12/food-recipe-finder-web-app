import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // popup message for better user experience
import { useAuth } from "../../context/AuthContext"; // For user logged in update
import { UserContext } from "../../context/UserContext"; // set user name after login
import './Login.css' // css style for login page

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { userLogin, registeredUsers, userLoginDetails } = useAuth();
  const { setUser } = useContext(UserContext); // Access setUser function from UserContext

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
      userLoginDetails(user); // Set the current user after login
      setUser({username:user.username, history:[], favourite:[]}); // Set the user in the context after login
      console.log("Logging in with:", user); // debug purpose only

      // Show login success notification
      toast.success("Login successful!", { 
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => {
          // Navigate to the home page after 3000 milliseconds (3 seconds)
          let timeoutId = setTimeout(() => {
            navigate('/dashboard');
          }, 2000);
        },
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
