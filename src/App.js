import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './style.module.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <div>Login</div>} />
        <Route path='/weather-app' element={ <div>Weather App</div>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
