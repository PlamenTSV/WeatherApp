import React from "react";
import './ForecastField.css';
import InputField from './InputField';

import SunIcon from '@mui/icons-material/Brightness5';
import MoonIcon from '@mui/icons-material/DarkMode';
import CoordsIcon from '@mui/icons-material/Language';

const ForecastField = ({api_data, setCity}) => {

    let minutes = `${new Date(api_data.sys.sunset * 1000).getMinutes()}`;
    if(minutes < 10)minutes = `0${new Date(api_data.sys.sunset * 1000).getMinutes()}`;

    return (
      
      <div className='forecast-field'>
        <InputField setCity={setCity}/>
        <img src={'http://openweathermap.org/img/wn/' + api_data.weather[0].icon + '@4x.png'} className='forecast-image' alt='Based on conditions'/>
        
       <h2 className="mainData">{api_data.name}</h2>
       <h1 className="mainData">{api_data.main.feels_like}°C</h1>
       <h2 className="mainData">{api_data.main.temp_max}°C / {api_data.main.temp_min}°C</h2>
       <h3 className="mainData">{api_data.weather[0].description}</h3>
       
       <div className="helpfulInfo">
        <h1 className="otherInfoHeader">Helpful Info</h1>

        <h3><SunIcon className="sunrise"/> Sunrise: {new Date(api_data.sys.sunrise * 1000).getHours()}:{new Date(api_data.sys.sunrise * 1000).getMinutes()}</h3>
        <h3><MoonIcon className="sunset"/> Sunset: {new Date(api_data.sys.sunset * 1000).getHours()}:{minutes}</h3>
        <h3><CoordsIcon className="coordinates"/> Latitude: {api_data.coord.lat} | Longitude: {api_data.coord.lon}</h3>
       </div>

      </div>
    )
}

export default ForecastField;