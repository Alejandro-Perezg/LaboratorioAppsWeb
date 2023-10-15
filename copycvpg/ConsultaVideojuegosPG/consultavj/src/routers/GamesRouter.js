import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../componenetes/comunes/Navbar';
import GameCollectionApp from '../componenetes/GameCollectionApp';

import { VideojuegosApp } from '../VideojuegosApp';


export const GamesRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path="/mycollection" element={<GameCollectionApp />} />
                    <Route exact path="/videogames" element={<VideojuegosApp />} /> 
                    <Route
                        path="*"
                        element={<Navigate to="/mycollection" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}