import React from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './SurprisePage.css';
function SurprisePage() {
  const navigate = useNavigate();

  return (
    <>
    {/* <div >
      <Confetti />
      <h1>🎉 You Are Amazing! 🌟</h1>
      <p>May this year bring you endless happiness and success. 🎁✨</p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '10px 20px',
          fontSize: '1.2rem',
          backgroundColor: '#ff6f61',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Go Back
      </button>
    </div> */}
    <div  className="video-container">
    <iframe
        width="1200"
        height="720"
   src="https://www.youtube.com/embed/2UIUk6QohVM?autoplay=1&mute=1&si=kBBbdOA0Mfa7CoTk"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe></div>
  
  

    </>
  );
}

export default SurprisePage;