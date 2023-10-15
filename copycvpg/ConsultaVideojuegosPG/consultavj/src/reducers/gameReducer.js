// gameReducer.js
const initialState = {
    collection: [],
  };
  
  export const ADD_GAME = 'ADD_GAME';
  export const REMOVE_GAME = 'REMOVE_GAME';
  
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_GAME:
        return {
          ...state,
          collection: [...state.collection, action.payload],
        };
      case REMOVE_GAME:
        return {
          ...state,
          collection: state.collection.filter((game) => game.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default gameReducer;
  