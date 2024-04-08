// HomePage.tsx
import React from 'react';
import './HomePage.css'; // Make sure to link to your CSS file

const HomePage: React.FC = () => {
  return (
    <div className="home-page">

      <header className="hero-section">
        <h1>Lebanese Property Online Management</h1>
        <p>Register your new property online!</p>
        <button onClick={() => {}}>Start here</button>
      </header>

      <div className="process-section">
        <h2>Registration Process</h2>
        <div className="steps">
          <div className="step">
            <img src="/path-to-step1-image.png" alt="Step 1" />
            <p>Submit the required documents</p>
          </div>
          <div className="step">
            <img src="/path-to-step2-image.png" alt="Step 2" />
            <p>Continuously monitor and track the registration process in real-time</p>
          </div>
          <div className="step">
            <img src="/path-to-step3-image.png" alt="Step 3" />
            <p>Receive your proof of ownership documents delivered to your home</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
