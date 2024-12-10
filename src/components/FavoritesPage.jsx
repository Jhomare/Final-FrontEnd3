import React from 'react';

function FavoritesPage({ favorites }) {
  return (
    <div>
      <h2>Tus personajes favoritos:</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage;