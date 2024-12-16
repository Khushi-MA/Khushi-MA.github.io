import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-info">
        <h1>Khushi M Appannavar</h1>
        <p>Hello! I'm Khushi. :) I'm a Computer Science student at KLE Technological University, Hubballi. <br /> (currently in 7th semester) <br />
I’m an eager learner working towards improving myself. I’m passionate about coding and I’m always looking for opportunities to learn new things. I’m a quick learner and
I’m keen to explore new ideas/hobbies.</p>
      </div>
      <div className="home-photo-wrapper">
        <img src="/iii.png" alt="Your Name" className="home-photo" />
      </div>
    </div>
  );
}

export default Home;