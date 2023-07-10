import ScizorImage from '../assets/images/megascizor.webp';
import React from 'react';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center">Bienvenido Maestro Pokemon</h1>
      <img height={300} src={ScizorImage} alt="Scizor" />
    </div>
  );
};

export default Home;