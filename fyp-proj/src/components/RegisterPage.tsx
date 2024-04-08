import React from 'react';
import './RegisterPage.css'; 
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
   
  return (
    <div className="app">
      <main className="main-content">
        <form className="register-form">
          <h1>Register</h1>
          <label htmlFor="RegCOde">Enter Registration Code:</label>
          <input type="password" placeholder="Enter Registration Code" />
          <button onClick={() => navigate('/registerinfo')} type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default RegisterPage;
