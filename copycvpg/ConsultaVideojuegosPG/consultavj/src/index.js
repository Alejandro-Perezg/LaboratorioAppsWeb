import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import { VideojuegosApp } from './VideojuegosApp';
import { MainAppRouter } from './routers/MainAppRouter';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<MainAppRouter />);