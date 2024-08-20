import React from "react";
import "./registration.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  
  
  const [value, setValue] = useState({
    name: "",
    enrollmentId: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const [error, setError] = useState('');

  // let isToggle = false;
  // const handleToggle = (e) => {
  //   isToggle = true;
  //   console.log(isToggle);
  // }

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (e) => {
    setIsChecked(e.target.checked);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (value.password !== value.confirmPassword) {
  //     alert("Passwords do not match");
  //     return;
  //   }
  //   if (!isChecked) {
  //     alert("You must accept the terms and conditions");
  //     return;
  //   }
  //   // Using axios.post to submit the form data
  //   axios.post("http://localhost:8080/api/user/signup", value)
  //     .then((response) => {
  //       console.log("Form submitted successfully:", response.data);
  //       alert("Form submitted successfully");
  //       // Handle success (e.g., redirect to a different page or show a success message)
  //     })
  //     .catch((error) => {
  //       console.error("Error submitting the form:", error);
  //       // Handle error (e.g., show an error message)
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isChecked) {
      alert('You must accept the terms and conditions.');
      return;
    }

    if (value.password !== value.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/user/signup", {
        name: value.name,
        enrollmentId: value.enrollmentId,
        email: value.email,
        password: value.password,
      });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError('An error occurred during registration. Please try again.');
    }
  };

  

  return (
    <div className="body">
      <div className="wrapper1">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input_box">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={value.name}
              required
            />
          </div>

          <div className="input_box">
            <input
              type="text"
              name="enrollmentId"
              placeholder="Enter your enrollment id"
              onChange={handleChange}
              value={value.enrollmentId}
              required
            />
          </div>

          <div className="input_box">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={value.email}
              required
            />
          </div>

          <div className="input_box">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              onChange={handleChange}
              value={value.password}
              required
            />
          </div>

          <div className="input_box">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={handleChange}
              value={value.confirmPassword}
              required
            />
          </div>

          <div className="policy">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={isChecked}
            />
            <h3>I accept all terms & condition</h3>
          </div>

          <div className="input_box button">
            <button type="Submit">Register</button>
          </div>
          
          <div className="text">
            <h3>
              Already have an account? <Link to="/user/login">Login now</Link>{" "}
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
