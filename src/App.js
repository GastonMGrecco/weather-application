import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from '@screens/Authentication';
import Weather from '@screens/WeatherApp';
import './style.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LogIn/>} />
        <Route path='/weather-app' element={ <Weather/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
