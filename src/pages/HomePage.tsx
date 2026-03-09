import React from 'react';
import Hero from '../components/sections/Hero';
import TechStack from '../components/sections/TechStack';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <TechStack />
    </div>
  );
};

export default HomePage; 