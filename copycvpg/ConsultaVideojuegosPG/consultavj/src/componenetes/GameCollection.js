import React from 'react';
import GameCollectionItem from './GameCollectionItem';

const GameCollection = ({ collection, onRemove }) => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between">
        {collection.map((game) => (
          <GameCollectionItem
            key={game.id}
            game={game}
            onDelete={() => onRemove(game)} 
          />
        ))}
      </div>
    </div>
  );
};

export default GameCollection;
