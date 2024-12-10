import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import FavoritesPage from './FavoritesPage';

const Layout = ({ children }) => {
  const { favorites, showFavorites, toggleFavorites } = useContext(FavoritesContext);

  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/characters" className="nav-link">Personajes</Link>
        <Link to="/contact" className="nav-link">Contacto</Link>
        <button 
          onClick={toggleFavorites} 
          className={`favorites-button ${showFavorites ? 'active' : ''}`}
        >
          {showFavorites ? 'Ocultar Favoritos' : 'Mostrar Favoritos'}
        </button>
      </nav>

      {showFavorites && <FavoritesPage favorites={favorites} />}
      
      {children}
    </div>
  );
};

export default Layout;