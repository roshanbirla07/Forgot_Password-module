import React, { useState } from "react";
import axios from "axios";
import "./forgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      console.log("Email:", email);
      const response = await axios.post(
        "http://localhost:5000/api/reset-password",
        { email }
      );

      console.log("Response:", response.data);

      if (response.data.success) {
        setMessage(`A reset link has been sent to ${email}`);
        setEmail("");
      } else {
        setMessage("Failed to send reset link. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
          required
        />
        <button type="submit" className="submit-button">
          Send Reset Link
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
