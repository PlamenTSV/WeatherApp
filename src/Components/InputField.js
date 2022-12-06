import React, { useContext } from "react";
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './InputField.css';
import { WeatherContext } from "../Context/WeatherContext";

const InputField = () => {
    const [input, setInput] = useState('');

    const {cityData} = useContext(WeatherContext);
    const setCity = cityData[1];
  
    return(
      <div className="input">
        <input className='text' type='text' onChange={event => setInput(event.target.value)}/>
        <button className='submit' onClick={() => {
          setCity(input)
        }
        }><SearchIcon/></button>
      </div>
    )
  }

export default InputField;