import React from 'react';

import './LoginPage.css'; 

const LoginPage = () => {    
  return (
    <div className="app">
      <main className="main-content">
        <form className="login-form">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
