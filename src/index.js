import React from 'react';
import ReactDOM from 'react-dom';
import './styles/variables.css';
import './styles/reset.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Week from './pages/week'
import Workout from './pages/workout'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Week />} />
          <Route path='workout' element={<Workout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);
