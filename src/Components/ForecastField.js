import React, { useContext } from "react";
import './ForecastField.css';
import InputField from './InputField';

import SunIcon from '@mui/icons-material/Brightness5';
import MoonIcon from '@mui/icons-material/DarkMode';
import CoordsIcon from '@mui/icons-material/Language';
import { WeatherContext } from "../Context/WeatherContext";

const ForecastField = () => {

    const {weather} = useContext(WeatherContext);
    const [weatherData] = weather;

    let minutes = `${new Date(weatherData.sys.sunset * 1000).getMinutes()}`;
    if(minutes < 10)minutes = `0${new Date(weatherData.sys.sunset * 1000).getMinutes()}`;

    return (
      
      <div className='forecast-field'>
        <InputField/>

        <div className="mainInfo">
          <img src={'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@4x.png'} className='forecast-image' alt='Based on conditions'/>
          <div className="data"> 
            <h1>{weatherData.name}</h1>
            <h1>{weatherData.main.feels_like}°C</h1>
            <h2>{weatherData.main.temp_max}°C / {weatherData.main.temp_min}°C</h2>
            <h2>{weatherData.weather[0].description}</h2>
          </div>
       </div>

       <div className="helpfulInfo">
        <h1 className="otherInfoHeader">Helpful Info</h1>

        <h3><SunIcon className="sunrise"/> Sunrise: {new Date(weatherData.sys.sunrise * 1000).getHours()}:{new Date(weatherData.sys.sunrise * 1000).getMinutes()}</h3>
        <h3><MoonIcon className="sunset"/> Sunset: {new Date(weatherData.sys.sunset * 1000).getHours()}:{minutes}</h3>
        <h3><CoordsIcon className="coordinates"/> Latitude: {weatherData.coord.lat} | Longitude: {weatherData.coord.lon}</h3>
       </div>

      </div>
    )
}

export default ForecastField;