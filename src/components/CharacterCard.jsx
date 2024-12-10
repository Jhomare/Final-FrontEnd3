import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FavoritesContext } from '../context/FavoritesContext'; 

function CharacterCard({ character }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, addToFavorites } = useContext(FavoritesContext); 

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite); 
    addToFavorites(character); 
    toast.success("Personaje añadido/eliminado de favoritos!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Estatus: {character.status}</p>
      <p>Especie: {character.species}</p>
      <button onClick={handleAddToFavorites}>
        {isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      </button>
      {isFavorite && <p>¡Agregado a favoritos!</p>}
      <Link to={`/character/${character.id}`}>Ver Detalles</Link>
      <ToastContainer />
    </div>
  );
}

export default CharacterCard;