import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './resetPassword.css';  
const resetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that the passwords match
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    // Here you can call your API to reset the password
    // For now, we just show a success toast message
    toast.success('Password changed successfully!');

    // Clear the form
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handlePasswordChange}
            required
            className="input"
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handlePasswordChange}
            required
            className="input"
          />

          <button type="submit" className="button">Submit</button>
        </form>

        {message && <div className="alert">{message}</div>}
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default resetPassword;
