import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import ForecastField from './Components/ForecastField';

import ClearSky from './Images/Clear.jpg';
import CloudySky from './Images/Clouds.jpg';
import RainySky from './Images/Rain.jpg';
import Foggy from './Images/Fog.jpg';
import Sandy from './Images/Sand.jpg';
import Snow from './Images/Snow.jpg';


function App() {
  const key = '58a984c9f8c34ba15ef37e3e3faa9dea';
  let [city, setCity] = useState('London');

  const States = [{
    name: city,
    main: {
      feels_like: "loading...",
      temp_max: "loading...",
      temp_min: "loading..."
    },
    weather: [
      {
        main: "loading..."
      }
    ],
    sys: {
      sunrise: 'loading...',
      sunset: 'loading...'
    },
    coord: {
      lat: 'loading...',
      lon: 'loading...'
    }
  },
  {
    name: "No such city",
    main: {
      feels_like: "null",
      temp_max: "null",
      temp_min: "null"
    },
    weather: [
      {
        main: "Clear"
      }
    ],
    sys: {
        sunrise: 'null',
        sunset: 'null'
    },
    coord: {
      lat: 'loading...',
      lon: 'loading...'
    }
  }
 ]
 

  let [weatherData, setWeatherData] = useState(States[0]);
  let [backgroundStyle, setBackgroundStyle] = useState({backgroundImage: ``});


  useEffect(() => {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q= + ' + city +'&appid=' + key + '&units=metric';
      fetch(url)
        .then(response => {
          if(response.status === 404)return States[1];
          else return response.json()
        })
        .then(data =>{
          console.log(data);
          setWeatherData({...data});
        })
        .catch(err => console.log(err));
    }, [city]);

  useEffect(() => {
    switch(weatherData.weather[0].main){
      case 'Clear': setBackgroundStyle({backgroundImage: `url(${ClearSky}`});  break;
      case 'Clouds': setBackgroundStyle({backgroundImage: `url(${CloudySky}`}); break;
      case 'Rain': setBackgroundStyle({backgroundImage: `url(${RainySky}`}); break;
      case 'Fog': setBackgroundStyle({backgroundImage: `url(${Foggy}`}); break;
      case 'Sand': setBackgroundStyle({backgroundImage: `url(${Sandy}`}); break;
      case 'Snow': setBackgroundStyle({backgroundImage: `url(${Snow}`}); break;
      default: setBackgroundStyle(current => current);
    } 

  }, [weatherData]);

  return (
    <div style={backgroundStyle} className="background">
      <ForecastField api_data={weatherData} setCity={setCity}></ForecastField>
    </div>
  );
}

export default App;
