import React from 'react';
import PropTypes from 'prop-types';

const GameCollectionItem = ({ game, onDelete }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <img src={game.background_image} className="card-img-top" alt={game.name} />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <p className="card-text">Rating Metacritic: {game.metacritic}</p>
        <p className="card-text">Rating: {game.rating}</p>
        <button onClick={onDelete} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    </div>
  );
};

GameCollectionItem.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    metacritic: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GameCollectionItem;
