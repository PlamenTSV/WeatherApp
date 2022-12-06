import React from "react";
import { createContext, useState, useEffect } from "react";

import Clear from '../Images/Clear.jpg';
import Clouds from '../Images/Clouds.jpg';
import Rain from '../Images/Rain.jpg';
import Fog from '../Images/Fog.jpg';
import Sand from '../Images/Sand.jpg';
import Snow from '../Images/Snow.jpg';


const WeatherContext = createContext(null);

function WeatherApp({children}){
    const key = '58a984c9f8c34ba15ef37e3e3faa9dea';
    const [city, setCity] = useState('London');
    const url = 'https://api.openweathermap.org/data/2.5/weather?q= + ' + city +'&appid=' + key + '&units=metric';

    const loadingState = {
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
    }
    
    

    let [weatherData, setWeatherData] = useState(loadingState);
    let [backgroundStyle, setBackgroundStyle] = useState({backgroundImage: ``});

    async function fetchData(){
        try{
        const weatherJSON = await fetch(url);
        if(weatherJSON.status === 404){
            alert('No such city!');
            return;
        }
        const weather = await weatherJSON.json();
        setWeatherData({...weather});
        } catch(err){
        console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [city]);

    useEffect(() => {
        switch(weatherData.weather[0].main){
        case 'Clear': setBackgroundStyle({backgroundImage: `url(${Clear}`});  break;
        case 'Clouds': setBackgroundStyle({backgroundImage: `url(${Clouds}`}); break;
        case 'Rain': setBackgroundStyle({backgroundImage: `url(${Rain}`}); break;
        case 'Fog': setBackgroundStyle({backgroundImage: `url(${Fog}`}); break;
        case 'Sand': setBackgroundStyle({backgroundImage: `url(${Sand}`}); break;
        case 'Snow': setBackgroundStyle({backgroundImage: `url(${Snow}`}); break;
        default: setBackgroundStyle(current => current);
        } 

    }, [weatherData]);

    const value = {
        weather: [weatherData, setWeatherData],
        cityData: [city, setCity]
    }

    return(
        <WeatherContext.Provider value={value}>
            <div style={backgroundStyle} className="background">
                {children}
            </div>
        </WeatherContext.Provider>
    )
}

export {WeatherApp, WeatherContext};