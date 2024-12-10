import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/characters'); 
  };

  return (
    <div className="home-banner">
      <h1>Bienvenido al Universo de Rick and Morty</h1>
      <p>Explora personajes y episodios de la serie</p>
      <button className="home-button" onClick={handleNavigate}>
        Descubre a los personajes
      </button>
    </div>
  );
};

export default Home;
