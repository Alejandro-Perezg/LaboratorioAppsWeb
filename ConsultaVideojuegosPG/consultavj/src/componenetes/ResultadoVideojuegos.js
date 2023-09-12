import React, { useEffect, useState } from 'react';
//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({ genero }) => {
    //Utilizamos useEffect para invocar la función getVideojuegos.
    useEffect(() => {
        getVideojuegos();
    }, []);
    //Creamos el estado del componente con useState
    const [infoJuegos, setInfoJuegos] = useState([]);
    //Invocamos el api de RAWG para obtener los videojuegos del género proporcionado en los parámetrs del
    // componente.
    const getVideojuegos = async () => {
        //URL del api de RAWG que validamos en postman. Le concatenamos el genero que recibimos como parámetro
        // en el componente.
        const url = 'https://api.rawg.io/api/games?key=388526bdf78349038115fd1273791108&genres=' + encodeURI(genero);
        //Utilizamos Fetch API para invocar la url.
        const respuesta = await fetch(url);
        //Recuperamos el JSON de la respuesta, el cual contiene la información de los videojuegos.
        const { results } = await respuesta.json();
        //Obtenemos solamente la información que vamos a necesitar del json de la respuesta.
        const juegos = results.map(juego => {
            return {
                id: juego.id,
                nombre: juego.name,
                imagen: juego.background_image,
                rating: juego.rating,
                metacritic: juego.metacritic
            }
        });
        console.log(juegos);
        //Invocamos el metodo setInfoJuegos que obtivimos con la desestructuración del hook useState
        setInfoJuegos(juegos);
    }
    return (
        <>
            <h3 className="card-title">{genero}</h3>
            {/*
Creamos la lista de juegos con la información que recuperamos de la invocación del api de RAWG,
utilizando la variable infoJuegos que obtuvimos en la desestructuración del hook useState.
*/}
            <ol className="flex-row list-group">
                {
                    //Desestructuramos el objeto para obtener el id y el nombre del juego.
                    infoJuegos.map(({ id, nombre}) => (
                        <li key={id} className="list-group-item">{nombre}</li>
                        
                    ))
                }
            </ol>
        </>
    )
}