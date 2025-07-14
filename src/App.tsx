import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles/index.css';

const App: React.FC = () => (
  <>
    <Navbar />
    <div className="container">
      <Hero />
    </div>
    <Footer />
  </>
);

export default App; 