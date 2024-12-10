import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };
    fetchCharacter();
  }, [id]);

  if (!character) return <div>Cargando...</div>;

  return (
    <div className="character-detail">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Estado: {character.status}</p>
      <p>Género: {character.gender}</p>
      <p>Origen: {character.origin.name}</p>
      <p>Ubicación: {character.location.name}</p>
    </div>
  );
};

export default CharacterDetail;