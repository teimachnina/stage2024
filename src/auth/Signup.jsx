import React from 'react';
import './Auth.css'; 

const SignUp = ({ toggleForm }) => {
  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form>
        <label>Full Name:</label>
        <input type="text" required />
        <label>Email:</label>
        <input type="email" required />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={() => toggleForm('signup')}>Close</button>
    </div>
  );
};

export default SignUp;
