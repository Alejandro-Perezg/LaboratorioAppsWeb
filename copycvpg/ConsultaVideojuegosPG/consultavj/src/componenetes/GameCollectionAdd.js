import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GameCollectionAdd = ({ onAdd }) => {
  const [gameId, setGameId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gameInfo, setGameInfo] = useState(null);

  const handleInputChange = (e) => {
    setGameId(e.target.value);
  };

  const handleAddToCollection = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!gameId.trim()) {
        throw new Error('Por favor, ingresa un ID de videojuego.');
      }

      const url = `https://api.rawg.io/api/games/${gameId}?key=388526bdf78349038115fd1273791108`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('No se pudo obtener información del videojuego.');
      }

      const data = await response.json();

      onAdd(data);

      setGameInfo(data);

      setGameId('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Agregar a la Colección</h2>
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          value={gameId}
          onChange={handleInputChange}
          className="form-control"
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddToCollection}
          disabled={loading}
        >
          Agregar a la Colección
        </button>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}

      {gameInfo && (
        <div>
          <img
            src={gameInfo.background_image}
            alt={gameInfo.name}
            className="img-thumbnail thumbnail-image"
          />
          <p>Metacritic: {gameInfo.metacritic}</p>
          <p>Rating: {gameInfo.rating}</p>
        </div>
      )}
    </div>
  );
};

GameCollectionAdd.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default GameCollectionAdd;
