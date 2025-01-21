import React, { useState, useEffect } from 'react';
import './HomePage.css';
import birthimage from "../Images/birthday.jpg"

function HomePage() {
  const [text, setText] = useState('');
  const [compliment, setCompliment] = useState('');
  const name = 'MOOHINI';
  const backgroundStyle = {
    background: `url(${birthimage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '100vh', // Make sure the background covers the entire screen height
  };
  const compliments = [
    'You are a shining star in this world, lighting up everything around you! 🌟',
    'You are a beautiful soul, inside and out. 🌻',
    'You inspire others to be better just by being yourself. ✨',
    'You have the most beautiful soul!',
    'Your strength and grace are unmatched. 🌸',
    'Your heart is as beautiful as your smile — both shine so brightly. 🌞'
  ];

  useEffect(() => {
    // Typing effect for the name (MOHINI)
    let index = 0;
    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + name[index]);
      index++;
      if (index === name.length-1) {
        clearInterval(typingInterval);
      }
    }, 300);

    // Compliment loop (every 5 seconds)
    let complimentIndex = 0;
    const complimentInterval = setInterval(() => {
      setCompliment(compliments[complimentIndex]);
      complimentIndex = (complimentIndex + 1) % compliments.length;
    }, 5000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(complimentInterval);
    };
  }, []);

  return (
    <div  className="homepage-container">
      <div className="magic-text">
        {text && text.split('').map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
      <p className="birthday-wish">Happy Birthday, {"MOHINI"}! 🎉🎂</p>
      {compliment && <p className="birthday-wish">{compliment}</p>}
      <a href="/surprise" className="magic-button">
        Open Your Surprise!
      </a>
    </div>
  );
}

export default HomePage;