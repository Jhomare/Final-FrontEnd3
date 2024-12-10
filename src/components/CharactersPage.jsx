import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import CharacterCard from './CharacterCard';
import { FavoritesContext } from '../context/FavoritesContext';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const { favorites, addToFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchCharacters();
  }, []);

  const memoizedCharacters = useMemo(() =>
    characters.map(character => (
      <CharacterCard
        key={character.id}
        character={character}
        onFavorite={addToFavorites}
        isFavorite={favorites.some(fav => fav.id === character.id)} 
      />
    )),
    [characters, addToFavorites, favorites] 
  );

  return (
    <div className="characters-container">
      <h1>Personajes de Rick and Morty</h1>
      <div className="character-grid">
        {memoizedCharacters}
      </div>
    </div>
  );
};

export default CharactersPage;