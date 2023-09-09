import React, { useState } from 'react';
import PropTypes from 'prop-types';
const ListaVideojuegosApp = ({ nombre }) => {
    let juego1 = {nombre:"The Elder Scrolls V: Skyrim", desarrollador:"Bugthesda", fecha: "2011-11-11", imagen: "https://cdn1.epicgames.com/offer/c8738a4d1ead40368eab9688b3c7d737/EGS_SkyrimSpecialEdition_BethesdaGameStudios_S2_1200x1600-ae5d13f6510e81460fe80aa1ca19cf4c" }
    let juego2 = {nombre:"Quake 4", desarrollador:"ID Software", fecha: "2005-08-18", imagen: "https://m.media-amazon.com/images/I/51W0Y980N9L.__AC_SX300_SY300_QL70_ML2_.jpg" }
    let juego3 = {nombre:"Prince of Persia: The Warrior Within", desarrollador:"Ubisoft", fecha: "2004-11-30", imagen: "https://m.media-amazon.com/images/M/MV5BYTA0Yjg4NzAtOTdlMC00NDY2LThlMWMtNTNhYjA0NzhjY2RjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" }

    const titulo = "Lista de Videojuegos"
    const nombreConst = nombre;
    return (
        <>
            <h1>{titulo}</h1>
            <p>Bienvenidos a la Lista de videojuegos</p>
            <p>Hola {nombreConst}</p>

            <h2>Juego 1</h2>
            <p>Nombre: {juego1.nombre}</p>
            <p>Desarrollador: {juego1.desarrollador}</p>
            <p>Fecha de lanzamiento: {juego1.fecha}</p>
            <img src = {juego1.imagen}></img>

            <h2>Juego 2</h2>
            <p>Nombre: {juego2.nombre}</p>
            <p>Desarrollador: {juego2.desarrollador}</p>
            <p>Fecha de lanzamiento: {juego2.fecha}</p>
            <img src = {juego2.imagen}></img>

            <h2>Juego 3</h2>
            <p>Nombre: {juego3.nombre}</p>
            <p>Desarrollador: {juego3.desarrollador}</p>
            <p>Fecha de lanzamiento: {juego3.fecha}</p>
            <img src = {juego3.imagen}></img>
        </>
    );
}
//Indicamos las características de desarrollo de las props
ListaVideojuegosApp.propTypes = {
    nombre: PropTypes.string
}
ListaVideojuegosApp.defaultProps = {
    nombre: "Gamer"
}
export default ListaVideojuegosApp;