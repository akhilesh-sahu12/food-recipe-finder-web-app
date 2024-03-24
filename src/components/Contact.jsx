import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSuccessful, setIsSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessful(true);
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    let timeoutId;
    if (isSuccessful) {
      toast.success('Thank you for contacting us!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  
      // Navigate to the home page after 3000 milliseconds (3 seconds)
      timeoutId = setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  
    // Clear the timeout if the component unmounts before the timeout completes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isSuccessful, navigate]);

  return (
    <div className="contact-container">
      <h1 className="heading-contact">Contact Us</h1>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" style={{ margin: 'auto' }}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
