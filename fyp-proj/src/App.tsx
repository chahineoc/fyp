import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'; 
import HomePage from './components/HomePage';
import GuidePage from './components/GuidePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import RegisterInfo from './components/RegisterInfo'
import CreateApp from './components/CreateApp';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="header">
        <img src="/path-to-logo.png" alt="Logo" className="logo" />
        <nav className="navigation">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/guide')}>Guide</button>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
        </nav>
      </header>
      
      {/* //The application's routes are here: */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registerinfo" element={<RegisterInfo />} />
        <Route path="/createapp" element={< CreateApp/>} />

      </Routes>

    </div>
  );
}

export default App;
