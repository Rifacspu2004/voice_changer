import React from "react";
import "../styles/global.css"; // Ensure the correct path for CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Circular Image Container */}
      <div className="circular-container">
        <img src="https://cdn.pixabay.com/photo/2023/10/03/10/49/anonymous-8291223_960_720.png" alt="RIFATH'S MIMICRY" />
      </div>

      {/* Welcome Content */}
      <div className="welcome-content">
        <h1 className="home-title">Welcome to RIFATH'S MIMICRY</h1>
        <p className="home-description">
          Experience AI-powered voice mimicry with the best technology. Choose a 
          popular figure's voice or mimic your own!
        </p>
        <button className="button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
