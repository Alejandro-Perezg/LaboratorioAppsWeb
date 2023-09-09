import React from 'react';
import { createRoot } from 'react-dom/client';
const titulo = <h1>Mis Videojuegos</h1>;
const container = document.getElementById('root');
const root = createRoot(container);
//Utilizamos el JSX que devuelve el componente VideojuegosApp para injectar ese html
// en divRoot
root.render(titulo);