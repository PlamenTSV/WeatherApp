import './App.css';
import React from 'react';
import ForecastField from './Components/ForecastField';

import { WeatherApp } from './Context/WeatherContext';

function App() {
  
  return (
    <WeatherApp>
      <ForecastField></ForecastField>
    </WeatherApp>
  );
}

export default App;
