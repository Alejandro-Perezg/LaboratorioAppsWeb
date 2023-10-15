import React, { useState } from 'react';
import { AgregaGenero } from './componenetes/AgregaGenero';
import { InfoVideojuegos } from './componenetes/InfoVideojuegos';
//import GameCollectionApp from './componenetes/GameCollectionApp';
export const VideojuegosApp = () => {
  const [generos, setGeneros] = useState(['action']);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Gamebook</h1>
          <p className="lead">¡Bienvenido a la página donde podrás consultar información de videojuegos!</p>
        </div>
      </div>
      {/* <GameCollectionApp /> */}
      
      <AgregaGenero setGeneros={setGeneros} />

      {/* Agregamos el componente GameCollectionApp para mostrar la colección de juegos */}
      

      <div className="card list-group list-group-numbered">
        {generos.map((genero) => {
          return <InfoVideojuegos key={genero} genero={genero} />;
        })}
      </div>
      
    </>
  );
};
