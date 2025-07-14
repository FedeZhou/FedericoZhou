import React from 'react';

const Hero: React.FC = () => (
  <section className="hero">
    <video className="background-video" autoPlay muted loop playsInline>
      <source src="/Mobius.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="hero-text">
      <h2 className="elegant-text" id="cycling-text">Keep moving</h2>
    </div>
  </section>
);

export default Hero; 