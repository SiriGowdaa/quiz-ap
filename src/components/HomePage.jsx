import React from 'react';
import './homepage.scss';

const HomePage = ({startQuiz}) => {
  return (
    <div className="home-container">
      <h1>Quiz Quest</h1>
      <div className='bg'></div>
      <p>Join the Coding Adventure</p>
      <button className="start-button" onClick={startQuiz}>Lets Go</button>
    </div>
  );
}

export default HomePage;