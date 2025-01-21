import React from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './SurprisePage.css';
function SurprisePage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
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
    </div>
  );
}

export default SurprisePage;