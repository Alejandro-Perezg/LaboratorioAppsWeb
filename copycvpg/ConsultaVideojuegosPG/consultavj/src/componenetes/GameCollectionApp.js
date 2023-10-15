import React, { useReducer, useEffect } from 'react';
import GameCollection from './GameCollection';
import GameCollectionAdd from './GameCollectionAdd';

const initialState = {
  collection: JSON.parse(localStorage.getItem('collection')) || [],
};

const collectionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_COLLECTION':
      const updatedCollection = [...state.collection, action.payload];
      localStorage.setItem('collection', JSON.stringify(updatedCollection));
      return { ...state, collection: updatedCollection };
    case 'REMOVE_FROM_COLLECTION':
      const filteredCollection = state.collection.filter(
        (game) => game.id !== action.payload.id
      );
      localStorage.setItem('collection', JSON.stringify(filteredCollection));
      return { ...state, collection: filteredCollection };
    default:
      return state;
  }
};

const GameCollectionApp = () => {
  const [state, dispatch] = useReducer(collectionReducer, initialState);

  const addToCollection = (game) => {
    dispatch({ type: 'ADD_TO_COLLECTION', payload: game });
  };

  const removeFromCollection = (game) => {
    dispatch({ type: 'REMOVE_FROM_COLLECTION', payload: game });
  };

  useEffect(() => {
    // Este efecto se ejecutará cuando el componente se monte o se actualice
    localStorage.setItem('collection', JSON.stringify(state.collection));
  }, [state.collection]);

  return (
    <div className="container mt-4">
      <h1>Mi Colección de Juegos</h1>
      <div className="row">
        <div className="col-md-8">
          <GameCollection collection={state.collection} onRemove={removeFromCollection} />
        </div>
        <div className="col-md-4">
          <GameCollectionAdd onAdd={addToCollection} />
        </div>
      </div>
    </div>
  );
};

export default GameCollectionApp;
