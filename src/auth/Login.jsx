import React from 'react';
import './Auth.css'; 

const Login = ({ toggleForm }) => {
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" required />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => toggleForm('login')}>Close</button>
    </div>
  );
};

export default Login;
