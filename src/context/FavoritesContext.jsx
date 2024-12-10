import React, { useState, createContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const addToFavorites = (character) => {
    if (!favorites.some(fav => fav.id === character.id)) {
      setFavorites([...favorites, character]);
    }
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      addToFavorites, 
      showFavorites, 
      toggleFavorites 
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;