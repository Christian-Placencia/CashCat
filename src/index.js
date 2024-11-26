import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // O cualquier archivo de estilo global si lo tienes
import App from './App'; // Asegúrate de que está importando correctamente tu App.js
import { BrowserRouter } from 'react-router-dom'; // Importamos el enrutador

// Renderizamos la aplicación envolviendo App con BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
