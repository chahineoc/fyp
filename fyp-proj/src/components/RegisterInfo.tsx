import React from 'react';
import './RegisterPage.css'; 
import { useNavigate } from 'react-router-dom';

const RegisterInfo = () => {
  const navigate = useNavigate();
   
  return (
    <div className="resgister">
      <main className="main-content">
        <form className="register-form">
          <h1>Register</h1>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Middle Name" />
          <input type="text" placeholder="Last Name" />
          <input type="number" placeholder="SSN" />
          <input type="number" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <input type="address" placeholder="Address" />
          <input type="text" placeholder="Extra Notes" />
          <button onClick={() => navigate('/')} type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default RegisterInfo;
